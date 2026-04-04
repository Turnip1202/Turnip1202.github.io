import type { IThemeConfig, ThemeConfigType } from '../../types';
import { SmartStorageManager } from '../../core/storage/SmartStorageManager';
import type { StorageType } from '../../core/storage/types';

const STORAGE_KEY = 'turnip-theme-config';
const STORAGE_TYPE_KEY = 'app_storage_type';

const DEFAULT_CONFIG: IThemeConfig = {
  default: {
    id: 'default',
    name: '默认主题',
    backgroundImage: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
    blur: '10px',
    opacity: 0.95,
  },
  presets: [],
};

export class ThemeManager {
  private config: IThemeConfig;
  private storage: SmartStorageManager;
  private initialized: boolean = false;
  private initPromise: Promise<void> | null = null;

  constructor(initialConfig?: typeof import('../../config/theme').themeConfig) {
    const preferredStorage = this.getPreferredStorageType();
    this.storage = new SmartStorageManager(preferredStorage);
    
    this.config = this.loadFromLocalStorage() || initialConfig || { ...DEFAULT_CONFIG };
    
    this.initPromise = this.initialize();
  }

  private getPreferredStorageType(): StorageType {
    try {
      const saved = localStorage.getItem(STORAGE_TYPE_KEY);
      if (saved === 'localStorage' || saved === 'indexedDB' || saved === 'auto') {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'auto';
  }

  private loadFromLocalStorage(): IThemeConfig | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Failed to load theme config from localStorage:', error);
      return null;
    }
  }

  async initialize(): Promise<void> {
    if (this.initialized) return;
    
    try {
      const stored = await this.storage.get<IThemeConfig>(STORAGE_KEY);
      if (stored) {
        this.config = stored;
        this.initialized = true;
      } else {
        await this.saveToStorage();
        this.initialized = true;
      }
    } catch (error) {
      console.error('Failed to initialize ThemeManager:', error);
      await this.saveToStorage();
      this.initialized = true;
    }
  }

  async waitForInit(): Promise<void> {
    if (this.initPromise) {
      await this.initPromise;
    }
  }

  getConfig(): IThemeConfig {
    return this.config;
  }

  getDefaultTheme(): ThemeConfigType {
    return this.config.default;
  }

  getPresets(): ThemeConfigType[] {
    return this.config.presets;
  }

  async setDefaultTheme(theme: ThemeConfigType): Promise<void> {
    this.config.default = theme;
    await this.saveToStorage();
  }

  setDefaultThemeSync(theme: ThemeConfigType): void {
    this.config.default = theme;
    this.saveToLocalStorage();
    this.saveToStorage().catch(console.error);
  }

  async addPreset(theme: ThemeConfigType): Promise<void> {
    if (this.config.presets.some(t => t.id === theme.id)) {
      throw new Error(`Theme with id ${theme.id} already exists`);
    }
    this.config.presets.push(theme);
    await this.saveToStorage();
  }

  addPresetSync(theme: ThemeConfigType): void {
    if (this.config.presets.some(t => t.id === theme.id)) {
      throw new Error(`Theme with id ${theme.id} already exists`);
    }
    this.config.presets.push(theme);
    this.saveToLocalStorage();
    this.saveToStorage().catch(console.error);
  }

  async updatePreset(theme: ThemeConfigType): Promise<void> {
    const index = this.config.presets.findIndex(t => t.id === theme.id);
    if (index === -1) {
      throw new Error(`Theme with id ${theme.id} not found`);
    }
    this.config.presets[index] = theme;
    await this.saveToStorage();
  }

  async deletePreset(themeId: string): Promise<void> {
    const index = this.config.presets.findIndex(t => t.id === themeId);
    if (index === -1) {
      throw new Error(`Theme with id ${themeId} not found`);
    }
    this.config.presets.splice(index, 1);
    await this.saveToStorage();
  }

  deletePresetSync(themeId: string): void {
    const index = this.config.presets.findIndex(t => t.id === themeId);
    if (index === -1) {
      throw new Error(`Theme with id ${themeId} not found`);
    }
    this.config.presets.splice(index, 1);
    this.saveToLocalStorage();
    this.saveToStorage().catch(console.error);
  }

  findThemeById(themeId: string): ThemeConfigType | undefined {
    if (this.config.default.id === themeId) {
      return this.config.default;
    }
    return this.config.presets.find(t => t.id === themeId);
  }

  private saveToLocalStorage(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.config));
    } catch (error) {
      console.error('Failed to save theme config to localStorage:', error);
    }
  }

  private async saveToStorage(): Promise<void> {
    this.saveToLocalStorage();
    
    try {
      await this.storage.set(STORAGE_KEY, this.config);
    } catch (error) {
      console.error('Failed to save theme config to storage:', error);
    }
  }

  async clearStorage(): Promise<void> {
    localStorage.removeItem(STORAGE_KEY);
    await this.storage.remove(STORAGE_KEY);
  }

  clearStorageSync(): void {
    localStorage.removeItem(STORAGE_KEY);
    this.storage.remove(STORAGE_KEY).catch(console.error);
  }

  async resetToDefault(defaultConfig: IThemeConfig): Promise<void> {
    this.config = { ...defaultConfig };
    await this.saveToStorage();
  }

  resetToDefaultSync(defaultConfig: IThemeConfig): void {
    this.config = { ...defaultConfig };
    this.saveToLocalStorage();
    this.saveToStorage().catch(console.error);
  }
}
