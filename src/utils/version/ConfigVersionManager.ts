import type { ConfigVersion, VersionManager, VersionCreateOptions, VersionCompareResult } from '@/types/version';
import { siteManager, themeManager, linksManager } from '../index';

export class ConfigVersionManager {
  private readonly STORAGE_KEY = 'turnip_config_versions';
  private readonly MAX_VERSIONS = 20;
  private versionData: VersionManager;

  constructor() {
    this.versionData = this.loadFromStorage();
  }

  private loadFromStorage(): VersionManager {
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

  private saveToStorage(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.versionData));
    } catch (error) {
      console.error('Failed to save version data:', error);
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

  /**
   * 创建新版本
   */
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
    
    // 限制版本数量
    if (this.versionData.versions.length > this.versionData.maxVersions) {
      this.versionData.versions = this.versionData.versions.slice(0, this.versionData.maxVersions);
    }

    this.versionData.currentVersionId = version.id;
    this.saveToStorage();
    
    return version;
  }

  /**
   * 获取所有版本
   */
  getAllVersions(): ConfigVersion[] {
    return [...this.versionData.versions];
  }

  /**
   * 获取指定版本
   */
  getVersion(id: string): ConfigVersion | null {
    return this.versionData.versions.find(v => v.id === id) || null;
  }

  /**
   * 删除版本
   */
  deleteVersion(id: string): boolean {
    const index = this.versionData.versions.findIndex(v => v.id === id);
    if (index === -1) return false;

    this.versionData.versions.splice(index, 1);
    
    // 如果删除的是当前版本，清除当前版本ID
    if (this.versionData.currentVersionId === id) {
      this.versionData.currentVersionId = undefined;
    }
    
    this.saveToStorage();
    return true;
  }

  /**
   * 恢复到指定版本
   */
  restoreVersion(id: string): boolean {
    const version = this.getVersion(id);
    if (!version) return false;

    try {
      // 恢复站点配置
      if (version.data.site) {
        // 使用 SiteManager 的具体方法恢复配置
        if (version.data.site.title) {
          siteManager.updateTitle(version.data.site.title);
        }
        if (version.data.site.copyright?.text) {
          siteManager.updateCopyright(version.data.site.copyright.text);
        }
        // 恢复其他配置项
        Object.keys(version.data.site).forEach(key => {
          if (key !== 'title' && key !== 'copyright') {
            siteManager.addConfigItem(key, version.data.site[key]);
          }
        });
      }

      // 恢复主题配置
      if (version.data.theme) {
        // 这里暂时跳过主题恢复，需要扩展 ThemeManager
        console.log('主题配置恢复功能待实现');
      }

      // 恢复链接配置
      if (version.data.links) {
        if (version.data.links.categories) {
          // 清空现有分类
          const currentCategories = linksManager.getAllCategories();
          currentCategories.forEach(cat => linksManager.deleteCategory(cat.id));
          
          // 恢复分类和链接
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
      this.saveToStorage();
      return true;
    } catch (error) {
      console.error('Failed to restore version:', error);
      return false;
    }
  }

  /**
   * 比较两个版本的差异
   */
  compareVersions(fromId: string, toId: string): VersionCompareResult | null {
    const fromVersion = this.getVersion(fromId);
    const toVersion = this.getVersion(toId);
    
    if (!fromVersion || !toVersion) return null;

    const changes: VersionCompareResult['changes'] = {};
    let changeCount = 0;

    // 比较站点配置
    const siteChanges = this.compareObjects(fromVersion.data.site, toVersion.data.site);
    if (siteChanges.length > 0) {
      changes.site = siteChanges;
      changeCount += siteChanges.length;
    }

    // 比较主题配置
    const themeChanges = this.compareObjects(fromVersion.data.theme, toVersion.data.theme);
    if (themeChanges.length > 0) {
      changes.theme = themeChanges;
      changeCount += themeChanges.length;
    }

    // 比较链接配置
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

  /**
   * 自动保存版本
   */
  autoSave(): ConfigVersion {
    return this.createVersion({
      name: `自动保存_${new Date().toLocaleString('zh-CN')}`,
      description: '系统自动保存的版本',
      isAutoSaved: true
    });
  }

  /**
   * 清理旧的自动保存版本
   */
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

  /**
   * 获取当前版本ID
   */
  getCurrentVersionId(): string | undefined {
    return this.versionData.currentVersionId;
  }

  /**
   * 导出版本数据
   */
  exportVersions(): string {
    return JSON.stringify(this.versionData, null, 2);
  }

  /**
   * 导入版本数据
   */
  importVersions(data: string): boolean {
    try {
      const imported = JSON.parse(data);
      if (imported.versions && Array.isArray(imported.versions)) {
        this.versionData = {
          versions: imported.versions,
          currentVersionId: imported.currentVersionId,
          maxVersions: imported.maxVersions || this.MAX_VERSIONS
        };
        this.saveToStorage();
        return true;
      }
    } catch (error) {
      console.error('Failed to import versions:', error);
    }
    return false;
  }
}

export const configVersionManager = new ConfigVersionManager();