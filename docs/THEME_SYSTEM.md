# 主题系统功能文档

## 概述

本项目实现了一个完整的主题管理系统，支持多种预设主题、自定义颜色、暗黑模式切换以及多种存储方式。

## 核心功能

### 1. 主题管理

#### 1.1 预设主题

系统内置 7 种预设主题，每种主题都有独特的配色方案：

| 主题 ID | 名称 | 背景渐变 | 特点 |
|---------|------|----------|------|
| `light` | 浅色模式 | 薄荷绿→粉色 | 清新柔和，默认主题 |
| `dark` | 深色模式 | 深蓝渐变 | 护眼舒适 |
| `high-contrast` | 高对比度 | 深蓝黑+青色 | 无障碍设计 |
| `ocean` | 海洋蓝 | 青蓝渐变 | 清新自然 |
| `sunset` | 日落橙 | 橙红渐变 | 温暖浪漫 |
| `forest` | 森林绿 | 青绿渐变 | 清新自然 |
| `lavender` | 薰衣草 | 紫粉渐变 | 优雅浪漫 |

#### 1.2 主题配置结构

```typescript
interface ThemeConfigType {
  id: string;              // 主题唯一标识
  name: string;            // 主题名称
  backgroundImage: string; // 背景渐变或图片
  blur: string;            // 模糊程度
  opacity: number;         // 透明度 (0-1)
  colors?: ThemeColors;    // 可选的颜色配置
  isDark?: boolean;        // 是否为暗黑主题
}

interface ThemeColors {
  primary: RGBAColor;       // 主色调
  background: RGBAColor;    // 背景色
  text: RGBAColor;          // 文字颜色
  textSecondary: RGBAColor; // 次要文字颜色
  border: RGBAColor;        // 边框颜色
  accent: RGBAColor;        // 强调色
}

interface RGBAColor {
  r: number; // 红色通道 (0-255)
  g: number; // 绿色通道 (0-255)
  b: number; // 蓝色通道 (0-255)
  a: number; // 透明度 (0-1)
}
```

### 2. 暗黑模式

#### 2.1 功能特性

- **手动切换**：用户可以手动切换明暗模式
- **自动模式**：根据时间自动切换（18:00-06:00 为暗黑模式）
- **状态持久化**：模式状态保存在 localStorage 中
- **主题记忆**：切换回白天模式时恢复用户之前选择的主题

#### 2.2 CSS 变量

系统使用 CSS 变量实现主题切换：

```css
/* 白天模式 */
--primary-color: 主色调
--bg-color: 背景色
--text-color: 文字颜色
--color-primary: Ant Design 主色
--color-bg-container: 容器背景色
--color-text: 文字颜色

/* 暗黑模式 */
--primary-color: #667eea
--bg-color: rgba(0, 0, 0, 0.6)
--text-color: #ffffff
--color-primary: #667eea
--color-bg-container: rgba(0, 0, 0, 0.8)
--color-text: #ffffff
```

#### 2.3 使用方式

```tsx
import { useThemeContext } from '@/contexts';

function MyComponent() {
  const { isDark, toggleDarkMode, setDarkMode } = useThemeContext();
  
  return (
    <button onClick={toggleDarkMode}>
      {isDark ? '切换到白天模式' : '切换到暗黑模式'}
    </button>
  );
}
```

### 3. 存储系统

#### 3.1 存储类型

系统支持三种存储方式：

| 类型 | 说明 | 容量 | 特点 |
|------|------|------|------|
| `localStorage` | 同步存储 | ~5MB | 读取速度快，同步操作 |
| `indexedDB` | 异步存储 | ~50MB+ | 大容量，适合大量数据 |
| `auto` | 智能选择 | - | 根据数据大小自动选择 |

#### 3.2 存储架构

```
src/core/storage/
├── types.ts              # 存储接口定义
├── LocalStorageAdapter.ts # localStorage 适配器
├── IndexedDBAdapter.ts   # IndexedDB 适配器
├── SmartStorageManager.ts # 智能存储管理器
└── index.ts              # 导出
```

#### 3.3 SmartStorageManager

智能存储管理器根据用户偏好和数据大小自动选择最佳存储方式：

```typescript
const SMALL_DATA_THRESHOLD = 1024 * 100; // 100KB

// 自动选择逻辑：
// 1. 如果用户指定了存储类型，使用指定类型
// 2. 如果数据 > 100KB，使用 IndexedDB
// 3. 否则使用 localStorage
```

#### 3.4 存储管理器方法

```typescript
class SmartStorageManager {
  // 基础操作
  async get<T>(key: string): Promise<T | null>;
  async set<T>(key: string, value: T): Promise<void>;
  async remove(key: string): Promise<void>;
  async has(key: string): Promise<boolean>;
  async keys(): Promise<string[]>;
  
  // 清空操作
  async clear(): Promise<void>;              // 清空所有存储
  async clearLocalStorage(): Promise<void>;  // 只清空 localStorage
  async clearIndexedDB(): Promise<void>;     // 只清空 IndexedDB
  
  // 迁移操作
  async migrateToIndexedDB(key: string): Promise<boolean>;
  async migrateToLocalStorage(key: string): Promise<boolean>;
  
  // 统计信息
  async getStats(): Promise<{
    localStorageKeys: number;
    indexedDBKeys: number;
    totalKeys: number;
    localStorageSize: number;
    indexedDBSize: number;
  }>;
}
```

#### 3.5 数据管理器集成

所有数据管理器都已集成 SmartStorageManager：

| 管理器 | 存储键 | 说明 |
|--------|--------|------|
| `ThemeManager` | `turnip-theme-config` | 主题配置 |
| `ThemeManagerV2` | `turnip-theme-config-v2` | 增强版主题配置 |
| `SiteManager` | `turnip_site_config` | 网站配置 |
| `LinksManager` | `turnip_link_categories`, `turnip_search_engines` | 链接和搜索引擎 |
| `ConfigVersionManager` | `turnip_config_versions` | 配置版本历史 |

#### 3.6 存储偏好保留

清空 localStorage 时，系统会自动保留存储类型偏好：

```typescript
// 清空前保存偏好
const preservedStorageType = localStorage.getItem('app_storage_type');

// 执行清空
await storageManager.clearLocalStorage();

// 恢复偏好
if (preservedStorageType) {
  localStorage.setItem('app_storage_type', preservedStorageType);
}
```

### 4. ThemeManager

#### 4.1 核心方法

```typescript
class ThemeManager {
  // 获取配置
  getConfig(): IThemeConfig;
  getDefaultTheme(): ThemeConfigType;
  getPresets(): ThemeConfigType[];
  
  // 设置主题（异步）
  async setDefaultTheme(theme: ThemeConfigType): Promise<void>;
  async addPreset(theme: ThemeConfigType): Promise<void>;
  async deletePreset(themeId: string): Promise<void>;
  
  // 设置主题（同步，后台异步保存）
  setDefaultThemeSync(theme: ThemeConfigType): void;
  addPresetSync(theme: ThemeConfigType): void;
  deletePresetSync(themeId: string): void;
  
  // 查找主题
  findThemeById(themeId: string): ThemeConfigType | undefined;
  
  // 存储操作
  async clearStorage(): Promise<void>;
  async resetToDefault(defaultConfig: IThemeConfig): Promise<void>;
}
```

#### 4.2 存储键名

| 键名 | 说明 |
|------|------|
| `turnip-theme-config` | 主题配置 |
| `turnip-theme-mode` | 明暗模式状态 |
| `turnip-saved-light-theme` | 保存的白天主题 |
| `turnip-theme-active` | 当前活动主题 |
| `app_storage_type` | 存储类型偏好 |

### 5. ThemeContext

#### 5.1 提供的值

```typescript
interface ThemeContextValue {
  appTheme: ThemeConfigType;      // 当前应用主题
  antdTheme: ThemeConfig;          // Ant Design 主题配置
  themeConfig: IThemeConfig;       // 完整主题配置
  isDark: boolean;                 // 是否为暗黑模式
  setAppTheme: (theme: ThemeConfigType) => void; // 设置主题
  toggleDarkMode: () => void;      // 切换明暗模式
  setDarkMode: (isDark: boolean) => void; // 设置明暗模式
}
```

#### 5.2 使用示例

```tsx
import { useThemeContext } from '@/contexts';

function ThemeToggle() {
  const { isDark, toggleDarkMode } = useThemeContext();
  
  return (
    <Switch
      checked={isDark}
      onChange={toggleDarkMode}
      checkedChildren="🌙"
      unCheckedChildren="☀️"
    />
  );
}

function ThemePicker() {
  const { setAppTheme, themeConfig } = useThemeContext();
  
  const handleSelect = (theme: ThemeConfigType) => {
    setAppTheme(theme);
  };
  
  return (
    <div>
      {themeConfig.presets.map(preset => (
        <button key={preset.id} onClick={() => handleSelect(preset)}>
          {preset.name}
        </button>
      ))}
    </div>
  );
}
```

### 6. 组件

#### 6.1 ThemeSelectorEnhanced

增强版主题选择器，提供：
- 预设主题选择
- 自定义颜色编辑
- 明暗模式切换
- 自动模式（根据时间）

#### 6.2 ThemeEditor

主题编辑器，支持：
- 编辑主题名称
- 调整背景渐变
- 设置模糊和透明度
- 自定义颜色配置
- 预览和保存

#### 6.3 StorageSelector

存储选择器，提供：
- 存储类型选择（localStorage / IndexedDB / 智能选择）
- 存储统计信息（键数、数据量、使用率）
- 导出备份功能
- **选择性清空存储**（可选择清空 localStorage 或 IndexedDB 或两者）
- 清空前自动备份选项

#### 6.4 RGBAColorPicker

RGBA 颜色选择器，支持：
- 色相、饱和度、亮度调节
- 透明度调节
- 实时预览

## 数据流

```
用户操作
    ↓
React Context (状态管理)
    ↓
Manager (业务逻辑)
    ↓
saveSync() / saveToStorage()
    ↓
┌─────────────────┬────────────────────┐
│ localStorage    │ SmartStorageManager │
│ (同步，立即写入)  │ (异步，后台写入)     │
└─────────────────┴────────────────────┘
         ↓                    ↓
    快速响应            IndexedDB (如果用户选择)
```

## 最佳实践

### 1. 选择存储类型

- **小型应用**：使用 `localStorage`，简单快速
- **大型应用**：使用 `indexedDB`，容量更大
- **不确定**：使用 `auto`，自动选择

### 2. 主题切换

```typescript
// 推荐：使用 ThemeContext
const { setAppTheme, isDark, toggleDarkMode } = useThemeContext();

// 不推荐：直接操作 ThemeManager
// 因为不会触发 React 状态更新
```

### 3. 自定义主题

```typescript
const customTheme: ThemeConfigType = {
  id: 'my-custom-theme',
  name: '我的主题',
  backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  blur: '10px',
  opacity: 0.95,
  colors: {
    primary: { r: 102, g: 126, b: 234, a: 1 },
    background: { r: 255, g: 255, b: 255, a: 0.9 },
    text: { r: 44, g: 62, b: 80, a: 1 },
    textSecondary: { r: 102, g: 102, b: 102, a: 1 },
    border: { r: 102, g: 126, b: 234, a: 0.2 },
    accent: { r: 102, g: 126, b: 234, a: 0.2 },
  },
};

setAppTheme(customTheme);
```

### 4. 清空存储

```typescript
// 通过 StorageSelector 组件的界面操作：
// 1. 点击"清空存储"按钮
// 2. 选择要清空的存储类型（localStorage / IndexedDB）
// 3. 勾选是否自动导出备份
// 4. 确认清空

// 注意事项：
// - 清空 localStorage 会保留存储类型偏好
// - 清空后页面会自动刷新
// - 建议勾选自动备份选项
```

## 故障排除

### 主题不生效

1. 检查 CSS 变量是否正确应用
2. 检查 `ThemeContext` 是否正确包裹组件
3. 清除浏览器缓存和 localStorage

### 存储失败

1. 检查浏览器是否支持 IndexedDB
2. 检查存储配额是否已满
3. 尝试切换到 localStorage

### 暗黑模式切换异常

1. 检查 `isDark` 状态是否正确
2. 检查 CSS 变量是否更新
3. 检查 `savedLightTheme` 是否正确保存和恢复

### 清空存储后存储类型重置

- 这是旧版本的 bug，新版本已修复
- 清空 localStorage 时会自动保留 `app_storage_type` 偏好
- 如果仍有问题，请检查是否使用了最新版本的 `StorageSelector` 组件

## 更新日志

### v2.0.0 (当前版本)

- **存储系统重构**：所有管理器集成 SmartStorageManager
- **选择性清空**：支持选择清空 localStorage 或 IndexedDB
- **偏好保留**：清空 localStorage 时保留存储类型偏好
- **存储统计**：实时显示存储使用情况
- **自动备份**：清空前可自动导出备份
