import type { ConfigVersion, VersionManager, VersionCreateOptions, VersionCompareResult } from '@/types/version';
import { siteManager, themeManager, linksManager } from '../index';
import { SmartStorageManager } from '../../core/storage/SmartStorageManager';
import type { StorageType } from '../../core/storage/types';

const STORAGE_TYPE_KEY = 'app_storage_type';

export class ConfigVersionManager {
  private readonly STORAGE_KEY = 'turnip_config_versions';
  private readonly MAX_VERSIONS = 20;
  private versionData: VersionManager;
  private storage: SmartStorageManager;
  private initialized: boolean = false;
  private initPromise: Promise<void> | null = null;

  constructor() {
    const preferredStorage = this.getPreferredStorageType();
    this.storage = new SmartStorageManager(preferredStorage);
    
    this.versionData = this.loadFromLocalStorage();
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

  private loadFromLocalStorage(): VersionManager {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return {
          versions: parsed.versions || [],
          currentVersionId: parsed.currentVersionId,
          maxVersions: parsed.maxVersions || this.MAX_VERSIONS
        };
      }
    } catch (error) {
      console.warn('Failed to load version data:', error);
    }
    
    return {
      versions: [],
      maxVersions: this.MAX_VERSIONS
    };
  }

  private saveToLocalStorage(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.versionData));
    } catch (error) {
      console.error('Failed to save version data:', error);
    }
  }

  private async saveToStorage(): Promise<void> {
    this.saveToLocalStorage();
    
    try {
      await this.storage.set(this.STORAGE_KEY, this.versionData);
    } catch (error) {
      console.error('Failed to save version data to storage:', error);
    }
  }

  private saveSync(): void {
    this.saveToLocalStorage();
    this.saveToStorage().catch(console.error);
  }

  async initialize(): Promise<void> {
    if (this.initialized) return;
    
    try {
      const stored = await this.storage.get<VersionManager>(this.STORAGE_KEY);
      if (stored) {
        this.versionData = stored;
        this.initialized = true;
      } else {
        await this.saveToStorage();
        this.initialized = true;
      }
    } catch (error) {
      console.error('Failed to initialize ConfigVersionManager:', error);
      await this.saveToStorage();
      this.initialized = true;
    }
  }

  async waitForInit(): Promise<void> {
    if (this.initPromise) {
      await this.initPromise;
    }
  }

  private generateId(): string {
    return `v_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private getCurrentConfigData() {
    return {
      site: siteManager.getConfig(),
      theme: {
        default: themeManager.getDefaultTheme(),
        presets: themeManager.getPresets()
      },
      links: {
        categories: linksManager.getAllCategories(),
        searchEngines: linksManager.getAllSearchEngines()
      }
    };
  }

  createVersion(options: VersionCreateOptions): ConfigVersion {
    const version: ConfigVersion = {
      id: this.generateId(),
      name: options.name,
      description: options.description,
      timestamp: Date.now(),
      data: this.getCurrentConfigData(),
      tags: options.tags || [],
      isAutoSaved: options.isAutoSaved || false
    };

    this.versionData.versions.unshift(version);
    
    if (this.versionData.versions.length > this.versionData.maxVersions) {
      this.versionData.versions = this.versionData.versions.slice(0, this.versionData.maxVersions);
    }

    this.versionData.currentVersionId = version.id;
    this.saveSync();
    
    return version;
  }

  getAllVersions(): ConfigVersion[] {
    return [...this.versionData.versions];
  }

  getVersion(id: string): ConfigVersion | null {
    return this.versionData.versions.find(v => v.id === id) || null;
  }

  deleteVersion(id: string): boolean {
    const index = this.versionData.versions.findIndex(v => v.id === id);
    if (index === -1) return false;

    this.versionData.versions.splice(index, 1);
    
    if (this.versionData.currentVersionId === id) {
      this.versionData.currentVersionId = undefined;
    }
    
    this.saveSync();
    return true;
  }

  restoreVersion(id: string): boolean {
    const version = this.getVersion(id);
    if (!version) return false;

    try {
      if (version.data.site) {
        if (version.data.site.title) {
          siteManager.updateTitle(version.data.site.title);
        }
        if (version.data.site.copyright?.text) {
          siteManager.updateCopyright(version.data.site.copyright.text);
        }
        Object.keys(version.data.site).forEach(key => {
          if (key !== 'title' && key !== 'copyright') {
            siteManager.addConfigItem(key, version.data.site[key]);
          }
        });
      }

      if (version.data.theme) {
        console.log('主题配置恢复功能待实现');
      }

      if (version.data.links) {
        if (version.data.links.categories) {
          const currentCategories = linksManager.getAllCategories();
          currentCategories.forEach(cat => linksManager.deleteCategory(cat.id));
          
          version.data.links.categories.forEach((category: any) => {
            const newCat = linksManager.addCategory(category.name);
            if (category.links) {
              category.links.forEach((link: any) => {
                linksManager.addLink(newCat.id, link.name, link.url, link.icon);
              });
            }
          });
        }
      }

      this.versionData.currentVersionId = id;
      this.saveSync();
      return true;
    } catch (error) {
      console.error('Failed to restore version:', error);
      return false;
    }
  }

  compareVersions(fromId: string, toId: string): VersionCompareResult | null {
    const fromVersion = this.getVersion(fromId);
    const toVersion = this.getVersion(toId);
    
    if (!fromVersion || !toVersion) return null;

    const changes: VersionCompareResult['changes'] = {};
    let changeCount = 0;

    const siteChanges = this.compareObjects(fromVersion.data.site, toVersion.data.site);
    if (siteChanges.length > 0) {
      changes.site = siteChanges;
      changeCount += siteChanges.length;
    }

    const themeChanges = this.compareObjects(fromVersion.data.theme, toVersion.data.theme);
    if (themeChanges.length > 0) {
      changes.theme = themeChanges;
      changeCount += themeChanges.length;
    }

    const linksChanges = this.compareObjects(fromVersion.data.links, toVersion.data.links);
    if (linksChanges.length > 0) {
      changes.links = linksChanges;
      changeCount += linksChanges.length;
    }

    return {
      changes,
      summary: `共发现 ${changeCount} 处变更`
    };
  }

  private compareObjects(obj1: any, obj2: any, prefix = ''): string[] {
    const changes: string[] = [];
    const keys = new Set([...Object.keys(obj1 || {}), ...Object.keys(obj2 || {})]);

    keys.forEach(key => {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      const val1 = obj1?.[key];
      const val2 = obj2?.[key];

      if (typeof val1 === 'object' && typeof val2 === 'object' && val1 && val2) {
        changes.push(...this.compareObjects(val1, val2, fullKey));
      } else if (JSON.stringify(val1) !== JSON.stringify(val2)) {
        changes.push(`${fullKey}: ${JSON.stringify(val1)} → ${JSON.stringify(val2)}`);
      }
    });

    return changes;
  }

  autoSave(): ConfigVersion {
    return this.createVersion({
      name: `自动保存_${new Date().toLocaleString('zh-CN')}`,
      description: '系统自动保存的版本',
      isAutoSaved: true
    });
  }

  cleanupAutoSaves(keepCount = 5): number {
    const autoSaves = this.versionData.versions.filter(v => v.isAutoSaved);
    const toDelete = autoSaves.slice(keepCount);
    
    let deletedCount = 0;
    toDelete.forEach(version => {
      if (this.deleteVersion(version.id)) {
        deletedCount++;
      }
    });

    return deletedCount;
  }

  getCurrentVersionId(): string | undefined {
    return this.versionData.currentVersionId;
  }

  exportVersions(): string {
    return JSON.stringify(this.versionData, null, 2);
  }

  importVersions(data: string): boolean {
    try {
      const imported = JSON.parse(data);
      if (imported.versions && Array.isArray(imported.versions)) {
        this.versionData = {
          versions: imported.versions,
          currentVersionId: imported.currentVersionId,
          maxVersions: imported.maxVersions || this.MAX_VERSIONS
        };
        this.saveSync();
        return true;
      }
    } catch (error) {
      console.error('Failed to import versions:', error);
    }
    return false;
  }

  async clearStorage(): Promise<void> {
    localStorage.removeItem(this.STORAGE_KEY);
    await this.storage.remove(this.STORAGE_KEY);
  }
}

export const configVersionManager = new ConfigVersionManager();
