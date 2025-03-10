// src/hooks/useTheme.ts
import { useState, useEffect } from 'react';
import type { ITheme } from '../types';

const THEME_KEY = 'turnip-theme-active';

interface IThemeConfig {
  default: ITheme;
}

export const useTheme = (config: IThemeConfig): readonly [ITheme, (theme: ITheme) => void] => {
  const [currentTheme, setCurrentTheme] = useState<ITheme>(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      return saved ? JSON.parse(saved) : config.default;
    } catch (error) {
      console.warn('Failed to parse saved theme:', error);
      return config.default;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, JSON.stringify(currentTheme));
    } catch (error) {
      console.warn('Failed to save theme:', error);
    }
  }, [currentTheme]);

  return [currentTheme, setCurrentTheme] as const;
};