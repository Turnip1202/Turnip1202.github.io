// src/hooks/useTheme.ts
import { useState, useEffect } from 'react';
import { themeConfig, type Theme } from '../config/theme';

const THEME_KEY = 'turnip-theme';

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(THEME_KEY);
    return saved ? JSON.parse(saved) : themeConfig.default;
  });

  useEffect(() => {
    localStorage.setItem(THEME_KEY, JSON.stringify(currentTheme));
  }, [currentTheme]);

  return [currentTheme, setCurrentTheme] as const;
};