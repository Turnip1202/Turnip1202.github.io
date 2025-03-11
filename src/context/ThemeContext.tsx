// src/context/ThemeContext.tsx
import type React from 'react';
import { createContext, useContext } from 'react';
import type { ThemeConfigType } from '../types';

interface ThemeContextType {
  theme: ThemeConfigType;
  setTheme: (theme: ThemeConfigType) => void;
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
  theme: ThemeConfigType;
  setTheme: (theme: ThemeConfigType) => void;
}

export const ThemeProvider = ({ children, theme, setTheme }: ThemeProviderProps) => (
  <ThemeContext.Provider value={{ theme, setTheme }}>
    {children}
  </ThemeContext.Provider>
);