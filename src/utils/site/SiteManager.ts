import { ISiteConfig } from '../../types';

export class SiteManager {
  private config: ISiteConfig;
  private readonly STORAGE_KEY = 'turnip_site_config';

  constructor(defaultConfig: ISiteConfig) {
    // 初始化时优先从 localStorage 获取数据
    const storedConfig = this.getFromStorage();
    this.config = storedConfig || { ...defaultConfig };

    // 如果没有存储的数据，保存默认值
    if (!storedConfig) {
      this.saveToStorage();
    }
    
    // 应用配置到DOM
    this.applyConfigToDOM();
  }

  // Storage 工具方法
  private getFromStorage(): ISiteConfig | null {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error(`读取本地存储出错: ${error}`);
      return null;
    }
  }

  // 应用配置到DOM
  private applyConfigToDOM(): void {
    // 更新标题
    if (this.config.title) {
      document.title = this.config.title;
    }
    
    // 更新favicon
    if (this.config.favicon) {
      this.updateFavicon(this.config.favicon as string);
    }
  }

  private saveToStorage(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.config));
    } catch (error) {
      console.error(`保存到本地存储出错: ${error}`);
    }
  }

  // 获取整个配置
  getConfig(): ISiteConfig {
    return { ...this.config };
  }

  // 更新标题
  updateTitle(title: string): void {
    this.config.title = title;
    this.saveToStorage();
    // 同时更新浏览器标签页标题
    document.title = title;
  }

  // 更新版权信息
  updateCopyright(text: string): void {
    this.config.copyright.text = text;
    this.saveToStorage();
  }

  // 添加新的配置项
  addConfigItem<T>(key: string, value: T): void {
    (this.config as any)[key] = value;
    this.saveToStorage();
    
    // 特殊处理某些配置项的DOM更新
    if (key === 'favicon' && value) {
      this.updateFavicon(value as string);
    }
  }

  // 更新网站图标
  updateFavicon(faviconUrl: string): void {
    if (!faviconUrl) return;
    
    // 移除现有的favicon链接
    const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
    existingFavicons.forEach(link => link.remove());
    
    // 创建新的favicon链接
    const link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.type = 'image/x-icon';
    link.href = faviconUrl;
    
    // 添加到head中
    document.head.appendChild(link);
    
    // 同时添加其他格式的图标链接以提高兼容性
    const iconLink = document.createElement('link');
    iconLink.rel = 'icon';
    iconLink.type = 'image/x-icon';
    iconLink.href = faviconUrl;
    document.head.appendChild(iconLink);
  }

  // 删除配置项
  deleteConfigItem(key: string): boolean {
    if (key === 'title' || key === 'copyright') {
      return false; // 防止删除必要的配置项
    }
    
    if (key in this.config) {
      delete (this.config as any)[key];
      this.saveToStorage();
      return true;
    }
    return false;
  }

  // 重置为默认配置
  resetToDefault(defaultConfig: ISiteConfig): void {
    this.config = { ...defaultConfig };
    this.saveToStorage();
  }

  // 清除存储
  clearStorage(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}