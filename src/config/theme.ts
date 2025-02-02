// src/config/theme.ts
import type { ThemeConfig } from '../types/theme';

  
  export const themeConfig = {
    // 默认主题配置
    default: {
      id: 'default',
      name: '默认主题',
      backgroundImage: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
      blur: '10px',
      opacity: 0.95,
    },
    // 预设主题列表
    presets: [
      {
        id: 'purple',
        name: '渐变紫',
        backgroundImage: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)',
        blur: '10px',
        opacity: 0.95,
      },
      {
        id: 'morning',
        name: '晨光蓝',
        backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
        blur: '10px',
        opacity: 0.95,
      },
      {
        id: 'night',
        name: '夜空',
        backgroundImage: 'linear-gradient(to right, #243949 0%, #517fa4 100%)',
        blur: '10px',
        opacity: 0.92,
      },
    ] as ThemeConfig[],
  };
  export type Theme = typeof themeConfig.default;