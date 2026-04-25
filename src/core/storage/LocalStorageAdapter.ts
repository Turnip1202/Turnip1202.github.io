import type { StorageAdapter, StorageConfig } from './types';

export class LocalStorageAdapter implements StorageAdapter {
  readonly name = 'localStorage';
  private prefix: string;

  constructor(config: StorageConfig = {}) {
    this.prefix = config.prefix || 'app_';
  }

  get isAvailable(): boolean {
    try {
      const testKey = '__storage_test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch {
      return false;
    }
  }

  private getFullKey(key: string): string {
    return `${this.prefix}${key}`;
  }

  async get<T>(key: string): Promise<T | null> {
    try {
      const fullKey = this.getFullKey(key);
      const value = localStorage.getItem(fullKey);
      if (value === null) return null;
      return JSON.parse(value) as T;
    } catch (error) {
      console.error(`[LocalStorageAdapter] Failed to get key "${key}":`, error);
      return null;
    }
  }

  async set<T>(key: string, value: T): Promise<void> {
    try {
      const fullKey = this.getFullKey(key);
      localStorage.setItem(fullKey, JSON.stringify(value));
    } catch (error) {
      console.error(`[LocalStorageAdapter] Failed to set key "${key}":`, error);
      throw error;
    }
  }

  async remove(key: string): Promise<void> {
    try {
      const fullKey = this.getFullKey(key);
      localStorage.removeItem(fullKey);
    } catch (error) {
      console.error(
        `[LocalStorageAdapter] Failed to remove key "${key}":`,
        error,
      );
      throw error;
    }
  }

  async clear(): Promise<void> {
    try {
      const keysToRemove: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(this.prefix)) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach((key) => localStorage.removeItem(key));
    } catch (error) {
      console.error('[LocalStorageAdapter] Failed to clear:', error);
      throw error;
    }
  }

  async keys(): Promise<string[]> {
    const keys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(this.prefix)) {
        keys.push(key.slice(this.prefix.length));
      }
    }
    return keys;
  }

  async has(key: string): Promise<boolean> {
    const fullKey = this.getFullKey(key);
    return localStorage.getItem(fullKey) !== null;
  }

  async getSize(key: string): Promise<number> {
    const fullKey = this.getFullKey(key);
    const value = localStorage.getItem(fullKey);
    return value ? new Blob([value]).size : 0;
  }
}
