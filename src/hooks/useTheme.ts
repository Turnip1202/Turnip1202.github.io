// src/hooks/useTheme.ts
import { useState, useEffect } from 'react';
import { themeConfig, type Theme } from '../config/theme';

const THEME_KEY = 'turnip-theme';

export const useTheme = (): readonly [Theme, (theme: Theme) => void] => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      return saved ? JSON.parse(saved) : themeConfig.default;
    } catch (error) {
      console.warn('Failed to parse saved theme:', error);
      return themeConfig.default;
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