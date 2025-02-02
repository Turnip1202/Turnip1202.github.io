// src/context/ThemeContext.tsx
import type React from 'react';
import { createContext, useContext } from 'react';
import type { ThemeConfig as Theme } from '../types/theme';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeProvider = ({ children, theme, setTheme }: ThemeProviderProps) => (
  <ThemeContext.Provider value={{ theme, setTheme }}>
    {children}
  </ThemeContext.Provider>
);