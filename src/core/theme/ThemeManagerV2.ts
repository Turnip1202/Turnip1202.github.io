import type { ThemeConfigType, RGBAColor, ThemeColors } from '@/types';
import { EventEmitter, type ThemeEvents } from '../events/EventEmitter';
import type { StorageAdapter, StorageType } from '../storage/types';
import { SmartStorageManager } from '../storage/SmartStorageManager';

export type { RGBAColor, ThemeColors };

export interface EnhancedThemeConfig extends ThemeConfigType {
  customCSS?: string;
}

export interface ThemePreset {
  id: string;
  name: string;
  description?: string;
  config: EnhancedThemeConfig;
  isBuiltIn?: boolean;
  tags?: string[];
}

const BUILTIN_PRESETS: ThemePreset[] = [
  {
    id: 'light',
    name: '浅色模式',
    description: '清新明亮的浅色主题',
    isBuiltIn: true,
    tags: ['light', 'default'],
    config: {
      id: 'light',
      name: '浅色模式',
      backgroundImage: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      blur: '12px',
      opacity: 0.92,
      isDark: false,
      colors: {
        primary: { r: 64, g: 169, b: 169, a: 1 },
        background: { r: 255, g: 255, b: 255, a: 0.88 },
        text: { r: 45, g: 55, b: 72, a: 1 },
        textSecondary: { r: 113, g: 128, b: 150, a: 1 },
        border: { r: 64, g: 169, b: 169, a: 0.15 },
        accent: { r: 64, g: 169, b: 169, a: 0.12 },
      },
    },
  },
  {
    id: 'dark',
    name: '深色模式',
    description: '护眼舒适的深色主题',
    isBuiltIn: true,
    tags: ['dark', 'eye-comfort'],
    config: {
      id: 'dark',
      name: '深色模式',
      backgroundImage: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      blur: '10px',
      opacity: 0.95,
      isDark: true,
      colors: {
        primary: { r: 129, g: 140, b: 248, a: 1 },
        background: { r: 26, g: 26, b: 46, a: 0.85 },
        text: { r: 237, g: 242, b: 247, a: 1 },
        textSecondary: { r: 160, g: 174, b: 192, a: 1 },
        border: { r: 129, g: 140, b: 248, a: 0.2 },
        accent: { r: 129, g: 140, b: 248, a: 0.15 },
      },
    },
  },
  {
    id: 'high-contrast',
    name: '高对比度',
    description: '适合视力不佳用户的高对比度主题',
    isBuiltIn: true,
    tags: ['accessibility', 'high-contrast'],
    config: {
      id: 'high-contrast',
      name: '高对比度',
      backgroundImage: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)',
      blur: '5px',
      opacity: 1,
      isDark: true,
      colors: {
        primary: { r: 0, g: 255, b: 200, a: 1 },
        background: { r: 15, g: 15, b: 35, a: 1 },
        text: { r: 255, g: 255, b: 255, a: 1 },
        textSecondary: { r: 200, g: 200, b: 200, a: 1 },
        border: { r: 0, g: 255, b: 200, a: 0.6 },
        accent: { r: 0, g: 255, b: 200, a: 0.3 },
      },
    },
  },
  {
    id: 'ocean',
    name: '海洋蓝',
    description: '清新自然的海洋风格',
    isBuiltIn: true,
    tags: ['nature', 'blue'],
    config: {
      id: 'ocean',
      name: '海洋蓝',
      backgroundImage: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)',
      blur: '10px',
      opacity: 0.93,
      isDark: false,
      colors: {
        primary: { r: 33, g: 147, b: 176, a: 1 },
        background: { r: 240, g: 250, b: 255, a: 0.9 },
        text: { r: 20, g: 60, b: 90, a: 1 },
        textSecondary: { r: 60, g: 100, b: 130, a: 1 },
        border: { r: 33, g: 147, b: 176, a: 0.2 },
        accent: { r: 109, g: 213, b: 237, a: 0.25 },
      },
    },
  },
  {
    id: 'sunset',
    name: '日落橙',
    description: '温暖浪漫的日落风格',
    isBuiltIn: true,
    tags: ['warm', 'orange'],
    config: {
      id: 'sunset',
      name: '日落橙',
      backgroundImage: 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)',
      blur: '10px',
      opacity: 0.93,
      isDark: false,
      colors: {
        primary: { r: 255, g: 126, b: 95, a: 1 },
        background: { r: 255, g: 250, b: 245, a: 0.9 },
        text: { r: 80, g: 50, b: 40, a: 1 },
        textSecondary: { r: 140, g: 100, b: 80, a: 1 },
        border: { r: 255, g: 126, b: 95, a: 0.2 },
        accent: { r: 254, g: 180, b: 123, a: 0.25 },
      },
    },
  },
  {
    id: 'forest',
    name: '森林绿',
    description: '清新自然的森林风格',
    isBuiltIn: true,
    tags: ['nature', 'green'],
    config: {
      id: 'forest',
      name: '森林绿',
      backgroundImage: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
      blur: '10px',
      opacity: 0.93,
      isDark: false,
      colors: {
        primary: { r: 113, g: 178, b: 128, a: 1 },
        background: { r: 245, g: 252, b: 247, a: 0.9 },
        text: { r: 30, g: 60, b: 45, a: 1 },
        textSecondary: { r: 70, g: 110, b: 85, a: 1 },
        border: { r: 113, g: 178, b: 128, a: 0.2 },
        accent: { r: 113, g: 178, b: 128, a: 0.2 },
      },
    },
  },
  {
    id: 'lavender',
    name: '薰衣草',
    description: '优雅浪漫的紫色风格',
    isBuiltIn: true,
    tags: ['elegant', 'purple'],
    config: {
      id: 'lavender',
      name: '薰衣草',
      backgroundImage: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
      blur: '10px',
      opacity: 0.93,
      isDark: false,
      colors: {
        primary: { r: 161, g: 140, b: 209, a: 1 },
        background: { r: 252, g: 248, b: 255, a: 0.9 },
        text: { r: 60, g: 50, b: 80, a: 1 },
        textSecondary: { r: 100, g: 90, b: 120, a: 1 },
        border: { r: 161, g: 140, b: 209, a: 0.2 },
        accent: { r: 251, g: 194, b: 235, a: 0.25 },
      },
    },
  },
];

const STORAGE_KEY = 'turnip-theme-config-v2';
const STORAGE_TYPE_KEY = 'app_storage_type';

export class ThemeManagerV2 extends EventEmitter<ThemeEvents> {
  private storage: StorageAdapter;
  private currentTheme: EnhancedThemeConfig | null = null;
  private presets: Map<string, ThemePreset> = new Map();
  private customThemes: Map<string, ThemePreset> = new Map();
  private previewTheme: EnhancedThemeConfig | null = null;

  constructor(storage?: StorageAdapter) {
    super();
    if (storage) {
      this.storage = storage;
    } else {
      const preferredStorage = this.getPreferredStorageType();
      this.storage = new SmartStorageManager(preferredStorage);
    }
    this.initializePresets();
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

  private initializePresets(): void {
    BUILTIN_PRESETS.forEach(preset => {
      this.presets.set(preset.id, preset);
    });
  }

  async initialize(): Promise<void> {
    await this.loadFromStorage();
    
    // If no current theme, use the first preset
    if (!this.currentTheme) {
      const firstPreset = BUILTIN_PRESETS[0];
      this.currentTheme = { ...firstPreset.config };
    }
  }

  private async loadFromStorage(): Promise<void> {
    try {
      const stored = await this.storage.get<{
        currentTheme: EnhancedThemeConfig;
        customThemes: ThemePreset[];
      }>(STORAGE_KEY);

      if (stored) {
        if (stored.currentTheme) {
          this.currentTheme = stored.currentTheme;
        }
        if (stored.customThemes) {
          stored.customThemes.forEach(theme => {
            this.customThemes.set(theme.id, theme);
          });
        }
      }
    } catch (error) {
      console.error('[ThemeManagerV2] Failed to load from storage:', error);
    }
  }

  private async saveToStorage(): Promise<void> {
    try {
      await this.storage.set(STORAGE_KEY, {
        currentTheme: this.currentTheme,
        customThemes: Array.from(this.customThemes.values()),
      });
    } catch (error) {
      console.error('[ThemeManagerV2] Failed to save to storage:', error);
    }
  }

  // Get current theme
  getCurrentTheme(): EnhancedThemeConfig | null {
    return this.previewTheme || this.currentTheme;
  }

  // Get all presets (built-in + custom)
  getAllPresets(): ThemePreset[] {
    return [
      ...Array.from(this.presets.values()),
      ...Array.from(this.customThemes.values()),
    ];
  }

  // Get built-in presets only
  getBuiltInPresets(): ThemePreset[] {
    return Array.from(this.presets.values());
  }

  // Get custom presets only
  getCustomPresets(): ThemePreset[] {
    return Array.from(this.customThemes.values());
  }

  // Set theme
  async setTheme(theme: EnhancedThemeConfig): Promise<void> {
    const previousTheme = this.currentTheme;
    this.currentTheme = { ...theme };
    this.previewTheme = null;
    await this.saveToStorage();
    this.emit('theme:change', { theme: this.currentTheme, previousTheme });
  }

  // Set theme by preset ID
  async setThemeById(presetId: string): Promise<boolean> {
    const preset = this.presets.get(presetId) || this.customThemes.get(presetId);
    if (!preset) return false;

    await this.setTheme(preset.config);
    return true;
  }

  // Preview theme (temporary, not saved)
  setPreviewTheme(theme: EnhancedThemeConfig): void {
    this.previewTheme = { ...theme };
    this.emit('theme:preview', { theme: this.previewTheme });
  }

  // Cancel preview
  cancelPreview(): void {
    this.previewTheme = null;
    if (this.currentTheme) {
      this.emit('theme:change', { theme: this.currentTheme, previousTheme: null });
    }
  }

  // Apply preview (save it)
  async applyPreview(): Promise<void> {
    if (this.previewTheme) {
      await this.setTheme(this.previewTheme);
    }
  }

  // Add custom preset
  async addCustomPreset(preset: Omit<ThemePreset, 'isBuiltIn'>): Promise<void> {
    if (this.presets.has(preset.id)) {
      throw new Error(`Cannot override built-in preset: ${preset.id}`);
    }

    const fullPreset: ThemePreset = {
      ...preset,
      isBuiltIn: false,
    };

    this.customThemes.set(preset.id, fullPreset);
    await this.saveToStorage();
    this.emit('theme:preset:add', { preset: fullPreset });
  }

  // Update custom preset
  async updateCustomPreset(preset: ThemePreset): Promise<void> {
    if (this.presets.has(preset.id)) {
      throw new Error(`Cannot modify built-in preset: ${preset.id}`);
    }

    this.customThemes.set(preset.id, preset);
    await this.saveToStorage();
    this.emit('theme:preset:update', { preset });
  }

  // Delete custom preset
  async deleteCustomPreset(presetId: string): Promise<void> {
    if (this.presets.has(presetId)) {
      throw new Error(`Cannot delete built-in preset: ${presetId}`);
    }

    this.customThemes.delete(presetId);
    await this.saveToStorage();
    this.emit('theme:preset:delete', { presetId });
  }

  // RGBA color utilities
  static rgbaToString(color: RGBAColor): string {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
  }

  static stringToRgba(str: string): RGBAColor | null {
    const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    if (!match) return null;

    return {
      r: parseInt(match[1], 10),
      g: parseInt(match[2], 10),
      b: parseInt(match[3], 10),
      a: match[4] ? parseFloat(match[4]) : 1,
    };
  }

  static hexToRgba(hex: string, alpha: number = 1): RGBAColor {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) {
      return { r: 0, g: 0, b: 0, a: alpha };
    }

    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
      a: alpha,
    };
  }

  static rgbaToHex(color: RGBAColor): string {
    const toHex = (n: number) => n.toString(16).padStart(2, '0');
    return `#${toHex(color.r)}${toHex(color.g)}${toHex(color.b)}`;
  }

  // Update theme color
  async updateColor(colorKey: keyof ThemeColors, color: RGBAColor): Promise<void> {
    if (!this.currentTheme) return;

    if (!this.currentTheme.colors) {
      this.currentTheme.colors = this.getDefaultColors();
    }

    this.currentTheme.colors[colorKey] = color;
    await this.saveToStorage();
    this.emit('theme:change', { theme: this.currentTheme, previousTheme: null });
  }

  // Get default colors based on theme type
  private getDefaultColors(): ThemeColors {
    return {
      primary: { r: 74, g: 144, b: 226, a: 1 },
      background: { r: 255, g: 255, b: 255, a: 0.9 },
      text: { r: 44, g: 62, b: 80, a: 1 },
      textSecondary: { r: 102, g: 102, b: 102, a: 1 },
      border: { r: 0, g: 0, b: 0, a: 0.1 },
      accent: { r: 74, g: 144, b: 226, a: 0.2 },
    };
  }

  // Export theme
  exportTheme(theme?: EnhancedThemeConfig): string {
    const exportData = theme || this.currentTheme;
    return JSON.stringify(exportData, null, 2);
  }

  // Import theme
  async importTheme(jsonString: string): Promise<EnhancedThemeConfig | null> {
    try {
      const theme = JSON.parse(jsonString) as EnhancedThemeConfig;
      
      // Validate theme structure
      if (!theme.id || !theme.name || !theme.backgroundImage) {
        throw new Error('Invalid theme format');
      }

      return theme;
    } catch (error) {
      console.error('[ThemeManagerV2] Import failed:', error);
      return null;
    }
  }

  // Reset to default
  async reset(): Promise<void> {
    this.currentTheme = { ...BUILTIN_PRESETS[0].config };
    this.customThemes.clear();
    await this.saveToStorage();
    this.emit('theme:change', { theme: this.currentTheme, previousTheme: null });
  }
}

// Singleton instance
let themeManagerInstance: ThemeManagerV2 | null = null;

export function getThemeManager(): ThemeManagerV2 {
  if (!themeManagerInstance) {
    themeManagerInstance = new ThemeManagerV2();
  }
  return themeManagerInstance;
}
