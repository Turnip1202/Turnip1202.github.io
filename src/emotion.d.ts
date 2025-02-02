// src/emotion.d.ts
import '@emotion/react';
import type { Theme as MyTheme } from './types/theme';  // 导入你的主题类型

declare module '@emotion/react' {
  export interface Theme extends MyTheme {}  // 扩展 emotion 的 Theme 接口
}