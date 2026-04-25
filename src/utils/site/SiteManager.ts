import { SmartStorageManager } from '../../core/storage/SmartStorageManager';
import type { StorageType } from '../../core/storage/types';
import type { ISiteConfig } from '../../types';

const STORAGE_TYPE_KEY = 'app_storage_type';

export class SiteManager {
  private config: ISiteConfig;
  private readonly STORAGE_KEY = 'turnip_site_config';
  private storage: SmartStorageManager;
  private initialized = false;
  private initPromise: Promise<void> | null = null;

  constructor(defaultConfig: ISiteConfig) {
    const preferredStorage = this.getPreferredStorageType();
    this.storage = new SmartStorageManager(preferredStorage);

    const storedConfig = this.getFromLocalStorage();
    this.config = storedConfig || { ...defaultConfig };

    if (!storedConfig) {
      this.saveToLocalStorage();
    }

    this.applyConfigToDOM();

    this.initPromise = this.initialize();
  }

  private getPreferredStorageType(): StorageType {
    try {
      const saved = localStorage.getItem(STORAGE_TYPE_KEY);
      if (
        saved === 'localStorage' ||
        saved === 'indexedDB' ||
        saved === 'auto'
      ) {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'auto';
  }

  private getFromLocalStorage(): ISiteConfig | null {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error(`读取本地存储出错: ${error}`);
      return null;
    }
  }

  private applyConfigToDOM(): void {
    if (this.config.title) {
      document.title = this.config.title;
    }

    if (this.config.favicon) {
      this.updateFavicon(this.config.favicon as string);
    }
  }

  async initialize(): Promise<void> {
    if (this.initialized) return;

    try {
      const stored = await this.storage.get<ISiteConfig>(this.STORAGE_KEY);
      if (stored) {
        this.config = stored;
        this.initialized = true;
        this.applyConfigToDOM();
      } else {
        await this.saveToStorage();
        this.initialized = true;
      }
    } catch (error) {
      console.error('Failed to initialize SiteManager:', error);
      await this.saveToStorage();
      this.initialized = true;
    }
  }

  async waitForInit(): Promise<void> {
    if (this.initPromise) {
      await this.initPromise;
    }
  }

  private saveToLocalStorage(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.config));
    } catch (error) {
      console.error(`保存到本地存储出错: ${error}`);
    }
  }

  private async saveToStorage(): Promise<void> {
    this.saveToLocalStorage();

    try {
      await this.storage.set(this.STORAGE_KEY, this.config);
    } catch (error) {
      console.error('Failed to save site config to storage:', error);
    }
  }

  private saveSync(): void {
    this.saveToLocalStorage();
    this.saveToStorage().catch(console.error);
  }

  getConfig(): ISiteConfig {
    return { ...this.config };
  }

  updateTitle(title: string): void {
    this.config.title = title;
    this.saveSync();
    document.title = title;
  }

  updateCopyright(text: string): void {
    this.config.copyright.text = text;
    this.saveSync();
  }

  addConfigItem<T>(key: string, value: T): void {
    (this.config as any)[key] = value;
    this.saveSync();

    if (key === 'favicon' && value) {
      this.updateFavicon(value as string);
    }
  }

  updateFavicon(faviconUrl: string): void {
    if (!faviconUrl) return;

    const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
    existingFavicons.forEach((link) => link.remove());

    const link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.type = 'image/x-icon';
    link.href = faviconUrl;
    document.head.appendChild(link);

    const iconLink = document.createElement('link');
    iconLink.rel = 'icon';
    iconLink.type = 'image/x-icon';
    iconLink.href = faviconUrl;
    document.head.appendChild(iconLink);
  }

  deleteConfigItem(key: string): boolean {
    if (key === 'title' || key === 'copyright') {
      return false;
    }

    if (key in this.config) {
      delete (this.config as any)[key];
      this.saveSync();
      return true;
    }
    return false;
  }

  resetToDefault(defaultConfig: ISiteConfig): void {
    this.config = { ...defaultConfig };
    this.saveSync();
  }

  async clearStorage(): Promise<void> {
    localStorage.removeItem(this.STORAGE_KEY);
    await this.storage.remove(this.STORAGE_KEY);
  }
}
