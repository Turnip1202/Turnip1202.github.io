import { type ConfigEvents, EventEmitter } from '../events/EventEmitter';
import { SmartStorageManager } from '../storage/SmartStorageManager';
import type { StorageAdapter } from '../storage/types';

export interface ConfigItem<T = any> {
  key: string;
  value: T;
  defaultValue: T;
  category: string;
  description?: string;
  validator?: (value: T) => boolean;
  required?: boolean;
  version?: string;
}

export interface ConfigCategory {
  name: string;
  description?: string;
  items: string[];
}

export interface ConfigSchema {
  version: string;
  categories: Record<string, ConfigCategory>;
  items: Record<string, Omit<ConfigItem, 'value'>>;
}

export class ConfigManager extends EventEmitter<ConfigEvents> {
  private storage: StorageAdapter;
  private config: Map<string, ConfigItem> = new Map();
  private categories: Map<string, ConfigCategory> = new Map();
  private schema: ConfigSchema | null = null;
  private cache: Map<string, any> = new Map();
  private version = '1.0.0';
  private storageKey: string;

  constructor(storageKey = 'app_config', storage?: StorageAdapter) {
    super();
    this.storageKey = storageKey;
    this.storage = storage || new SmartStorageManager();
  }

  async initialize(schema?: ConfigSchema): Promise<void> {
    if (schema) {
      this.schema = schema;
      this.version = schema.version;

      // Register categories
      Object.entries(schema.categories).forEach(([key, category]) => {
        this.categories.set(key, category);
      });

      // Register items with defaults
      Object.entries(schema.items).forEach(([key, item]) => {
        this.config.set(key, {
          ...item,
          key,
          value: item.defaultValue,
        });
      });
    }

    // Load from storage
    await this.load();
  }

  private async load(): Promise<void> {
    try {
      const stored = await this.storage.get<Record<string, any>>(
        this.storageKey,
      );
      if (stored) {
        Object.entries(stored).forEach(([key, value]) => {
          const item = this.config.get(key);
          if (item) {
            // Validate stored value
            if (item.validator && !item.validator(value)) {
              console.warn(
                `[ConfigManager] Invalid stored value for "${key}", using default`,
              );
              return;
            }
            item.value = value;
            this.cache.set(key, value);
          }
        });
        this.emit('config:load', { config: stored });
      }
    } catch (error) {
      console.error('[ConfigManager] Failed to load config:', error);
    }
  }

  private async save(): Promise<void> {
    try {
      const config: Record<string, any> = {};
      this.config.forEach((item, key) => {
        config[key] = item.value;
      });
      await this.storage.set(this.storageKey, config);
      this.emit('config:save', { config });
    } catch (error) {
      console.error('[ConfigManager] Failed to save config:', error);
    }
  }

  // Register a new config item
  register<T>(item: Omit<ConfigItem<T>, 'value'> & { value?: T }): void {
    const fullItem: ConfigItem<T> = {
      ...item,
      value: item.value ?? item.defaultValue,
    };

    // Add to category
    const category = this.categories.get(item.category);
    if (category && !category.items.includes(item.key)) {
      category.items.push(item.key);
    }

    this.config.set(item.key, fullItem);
    this.cache.set(item.key, fullItem.value);
  }

  // Get config value
  get<T>(key: string): T | undefined {
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    const item = this.config.get(key);
    return item?.value as T;
  }

  // Get with default fallback
  getWithDefault<T>(key: string, defaultValue: T): T {
    const value = this.get<T>(key);
    return value !== undefined ? value : defaultValue;
  }

  // Set config value
  async set<T>(key: string, value: T): Promise<boolean> {
    const item = this.config.get(key);
    if (!item) {
      console.warn(`[ConfigManager] Unknown config key: ${key}`);
      return false;
    }

    // Validate
    if (item.validator && !item.validator(value)) {
      console.warn(`[ConfigManager] Validation failed for "${key}"`);
      return false;
    }

    const oldValue = item.value;
    item.value = value;
    this.cache.set(key, value);

    await this.save();
    this.emit('config:change', { key, value, oldValue });

    return true;
  }

  // Batch set
  async setMany(items: Record<string, any>): Promise<void> {
    const changes: Array<{ key: string; value: any; oldValue: any }> = [];

    for (const [key, value] of Object.entries(items)) {
      const item = this.config.get(key);
      if (item && (!item.validator || item.validator(value))) {
        const oldValue = item.value;
        item.value = value;
        this.cache.set(key, value);
        changes.push({ key, value, oldValue });
      }
    }

    await this.save();
    changes.forEach((change) => {
      this.emit('config:change', change);
    });
  }

  // Reset to default
  async reset(key: string): Promise<void> {
    const item = this.config.get(key);
    if (item) {
      const oldValue = item.value;
      item.value = item.defaultValue;
      this.cache.set(key, item.defaultValue);
      await this.save();
      this.emit('config:change', { key, value: item.defaultValue, oldValue });
    }
  }

  // Reset all
  async resetAll(): Promise<void> {
    this.config.forEach((item, key) => {
      item.value = item.defaultValue;
      this.cache.set(key, item.defaultValue);
    });
    await this.save();
    this.emit('config:reset', { config: this.getAll() });
  }

  // Get all config
  getAll(): Record<string, any> {
    const result: Record<string, any> = {};
    this.config.forEach((item, key) => {
      result[key] = item.value;
    });
    return result;
  }

  // Get category items
  getCategory(categoryName: string): Record<string, any> {
    const category = this.categories.get(categoryName);
    if (!category) return {};

    const result: Record<string, any> = {};
    category.items.forEach((key) => {
      const item = this.config.get(key);
      if (item) {
        result[key] = item.value;
      }
    });
    return result;
  }

  // Export config
  async export(): Promise<string> {
    const config = this.getAll();
    const exportData = {
      version: this.version,
      exportedAt: new Date().toISOString(),
      config,
    };
    this.emit('config:export', { config });
    return JSON.stringify(exportData, null, 2);
  }

  // Import config
  async import(jsonString: string): Promise<boolean> {
    try {
      const data = JSON.parse(jsonString);

      if (!data.config || typeof data.config !== 'object') {
        throw new Error('Invalid config format');
      }

      // Version migration if needed
      if (data.version && data.version !== this.version) {
        console.log(
          `[ConfigManager] Migrating from version ${data.version} to ${this.version}`,
        );
      }

      await this.setMany(data.config);
      this.emit('config:import', { config: data.config });
      return true;
    } catch (error) {
      console.error('[ConfigManager] Import failed:', error);
      return false;
    }
  }

  // Watch for changes
  watch<T>(key: string, callback: (value: T, oldValue: T) => void): () => void {
    return this.on('config:change', (data) => {
      if (data.key === key) {
        callback(data.value, data.oldValue);
      }
    });
  }

  // Get config metadata
  getSchema(): ConfigSchema | null {
    return this.schema;
  }

  getItem(key: string): ConfigItem | undefined {
    return this.config.get(key);
  }

  getCategories(): Map<string, ConfigCategory> {
    return new Map(this.categories);
  }
}

// Singleton instance
let configManagerInstance: ConfigManager | null = null;

export function getConfigManager(): ConfigManager {
  if (!configManagerInstance) {
    configManagerInstance = new ConfigManager();
  }
  return configManagerInstance;
}
