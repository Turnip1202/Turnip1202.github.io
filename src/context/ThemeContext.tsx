// src/context/ThemeContext.tsx
import type React from 'react';
import { createContext, useContext } from 'react';
import type { ThemeConfig } from '../config/theme';

interface ThemeContextType {
  theme: ThemeConfig;
  setTheme: (theme: ThemeConfig) => void;
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
  theme: ThemeConfig;
  setTheme: (theme: ThemeConfig) => void;
}

export const ThemeProvider = ({ children, theme, setTheme }: ThemeProviderProps) => (
  <ThemeContext.Provider value={{ theme, setTheme }}>
    {children}
  </ThemeContext.Provider>
);