import type {  IThemeConfig,ThemeConfigType } from '../../types';

export class ThemeManager {
  private static readonly STORAGE_KEY = 'turnip-theme-config';
  private config: IThemeConfig;

  constructor(initialConfig?: typeof import('../../config/theme').themeConfig) {
    this.config = this.loadFromStorage() || initialConfig || {
      default: {
        id: 'default',
        name: '默认主题',
        backgroundImage: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
        blur: '10px',
        opacity: 0.95,
      },
      presets: [],
    };
    this.saveToStorage();
  }

  // 获取完整配置
  public getConfig() {
    return this.config;
  }

  // 获取默认主题
  public getDefaultTheme(): ThemeConfigType {
    return this.config.default;
  }

  // 获取预设主题列表
  public getPresets(): ThemeConfigType[] {
    return this.config.presets;
  }

  // 设置默认主题
  public setDefaultTheme(theme: ThemeConfigType): void {
    this.config.default = theme;
    this.saveToStorage();
  }

  // 添加预设主题
  public addPreset(theme: ThemeConfigType): void {
    if (this.config.presets.some(t => t.id === theme.id)) {
      throw new Error(`Theme with id ${theme.id} already exists`);
    }
    this.config.presets.push(theme);
    this.saveToStorage();
  }

  // 更新预设主题
  public updatePreset(theme: ThemeConfigType): void {
    const index = this.config.presets.findIndex(t => t.id === theme.id);
    if (index === -1) {
      throw new Error(`Theme with id ${theme.id} not found`);
    }
    this.config.presets[index] = theme;
    this.saveToStorage();
  }

  // 删除预设主题
  public deletePreset(themeId: string): void {
    const index = this.config.presets.findIndex(t => t.id === themeId);
    if (index === -1) {
      throw new Error(`Theme with id ${themeId} not found`);
    }
    this.config.presets.splice(index, 1);
    this.saveToStorage();
  }

  // 根据ID查找主题（包括默认主题和预设主题）
  public findThemeById(themeId: string): ThemeConfigType | undefined {
    if (this.config.default.id === themeId) {
      return this.config.default;
    }
    return this.config.presets.find(t => t.id === themeId);
  }

  // 从 localStorage 加载配置
  private loadFromStorage() {
    try {
      const stored = localStorage.getItem(ThemeManager.STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Failed to load theme config from storage:', error);
      return null;
    }
  }

  // 保存配置到 localStorage
  private saveToStorage(): void {
    try {
      localStorage.setItem(ThemeManager.STORAGE_KEY, JSON.stringify(this.config));
    } catch (error) {
      console.error('Failed to save theme config to storage:', error);
    }
  }
}