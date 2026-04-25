import { getAntdThemeConfig } from '@/styles/antd-theme';
import type { IThemeConfig, ThemeConfigType } from '@/types';
import { themeManager } from '@/utils';
import type { ThemeConfig } from 'antd';
import type React from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface ThemeContextValue {
  appTheme: ThemeConfigType;
  antdTheme: ThemeConfig;
  themeConfig: IThemeConfig;
  isDark: boolean;
  setAppTheme: (theme: ThemeConfigType) => void;
  toggleDarkMode: () => void;
  setDarkMode: (isDark: boolean) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const THEME_MODE_KEY = 'turnip-theme-mode';
const SAVED_LIGHT_THEME_KEY = 'turnip-saved-light-theme';

const DEFAULT_LIGHT_CSS_VARS = {
  '--primary-color': '#4a90e2',
  '--bg-color': 'rgba(255, 255, 255, 0.65)',
  '--text-color': '#2c3e50',
  '--color-primary': '#4a90e2',
  '--color-bg-container': 'rgba(255, 255, 255, 0.9)',
  '--color-text': '#2c3e50',
};

const DARK_CSS_VARS = {
  '--primary-color': '#667eea',
  '--bg-color': 'rgba(0, 0, 0, 0.6)',
  '--text-color': '#ffffff',
  '--color-primary': '#667eea',
  '--color-bg-container': 'rgba(0, 0, 0, 0.8)',
  '--color-text': '#ffffff',
};

const DARK_THEME: ThemeConfigType = {
  id: 'dark',
  name: '深色模式',
  backgroundImage: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
  blur: '10px',
  opacity: 0.95,
};

const applyCssVariables = (
  isDark: boolean,
  lightTheme?: ThemeConfigType | null,
) => {
  const root = document.documentElement;
  if (isDark) {
    Object.entries(DARK_CSS_VARS).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  } else {
    const cssVars = lightTheme?.colors
      ? {
          '--primary-color': `rgba(${lightTheme.colors.primary.r}, ${lightTheme.colors.primary.g}, ${lightTheme.colors.primary.b}, ${lightTheme.colors.primary.a})`,
          '--bg-color': `rgba(${lightTheme.colors.background.r}, ${lightTheme.colors.background.g}, ${lightTheme.colors.background.b}, ${lightTheme.colors.background.a})`,
          '--text-color': `rgba(${lightTheme.colors.text.r}, ${lightTheme.colors.text.g}, ${lightTheme.colors.text.b}, ${lightTheme.colors.text.a})`,
          '--color-primary': `rgba(${lightTheme.colors.primary.r}, ${lightTheme.colors.primary.g}, ${lightTheme.colors.primary.b}, ${lightTheme.colors.primary.a})`,
          '--color-bg-container': `rgba(${lightTheme.colors.background.r}, ${lightTheme.colors.background.g}, ${lightTheme.colors.background.b}, ${Math.min(lightTheme.colors.background.a + 0.25, 1)})`,
          '--color-text': `rgba(${lightTheme.colors.text.r}, ${lightTheme.colors.text.g}, ${lightTheme.colors.text.b}, ${lightTheme.colors.text.a})`,
        }
      : DEFAULT_LIGHT_CSS_VARS;
    Object.entries(cssVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeConfig] = useState<IThemeConfig>(() => themeManager.getConfig());

  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(THEME_MODE_KEY);
      return saved ? saved === 'dark' : false;
    } catch {
      return false;
    }
  });

  const [savedLightTheme, setSavedLightTheme] =
    useState<ThemeConfigType | null>(() => {
      try {
        const saved = localStorage.getItem(SAVED_LIGHT_THEME_KEY);
        return saved ? JSON.parse(saved) : null;
      } catch {
        return null;
      }
    });

  const [appTheme, setAppThemeState] = useState<ThemeConfigType>(() => {
    try {
      const savedMode = localStorage.getItem(THEME_MODE_KEY);
      if (savedMode === 'dark') {
        applyCssVariables(true);
        return DARK_THEME;
      }
      const saved = localStorage.getItem(SAVED_LIGHT_THEME_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        applyCssVariables(false, parsed);
        return parsed;
      }
    } catch {
      // ignore
    }
    applyCssVariables(false);
    return themeConfig.default;
  });

  useEffect(() => {
    if (isDark) {
      applyCssVariables(true);
      setAppThemeState(DARK_THEME);
      themeManager.setDefaultThemeSync(DARK_THEME);
    } else {
      const themeToRestore = savedLightTheme || themeConfig.default;
      applyCssVariables(false, themeToRestore);
      setAppThemeState(themeToRestore);
      themeManager.setDefaultThemeSync(themeToRestore);
    }
  }, [isDark]);

  useEffect(() => {
    try {
      localStorage.setItem(THEME_MODE_KEY, isDark ? 'dark' : 'light');
    } catch (error) {
      console.warn('Failed to save theme mode:', error);
    }
  }, [isDark]);

  useEffect(() => {
    try {
      localStorage.setItem('turnip-theme-active', JSON.stringify(appTheme));
    } catch (error) {
      console.warn('Failed to save app theme:', error);
    }
  }, [appTheme]);

  useEffect(() => {
    if (savedLightTheme) {
      try {
        localStorage.setItem(
          SAVED_LIGHT_THEME_KEY,
          JSON.stringify(savedLightTheme),
        );
      } catch (error) {
        console.warn('Failed to save light theme:', error);
      }
    }
  }, [savedLightTheme]);

  const antdTheme = useMemo<ThemeConfig>(() => {
    return getAntdThemeConfig(isDark);
  }, [isDark]);

  const setAppTheme = useCallback(
    (newTheme: ThemeConfigType) => {
      if (!isDark) {
        setSavedLightTheme(newTheme);
        setAppThemeState(newTheme);
        themeManager.setDefaultThemeSync(newTheme);
        applyCssVariables(false, newTheme);
      }
    },
    [isDark],
  );

  const toggleDarkMode = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  const setDarkMode = useCallback((dark: boolean) => {
    setIsDark(dark);
  }, []);

  const contextValue = useMemo<ThemeContextValue>(
    () => ({
      appTheme,
      antdTheme,
      themeConfig,
      isDark,
      setAppTheme,
      toggleDarkMode,
      setDarkMode,
    }),
    [
      appTheme,
      antdTheme,
      themeConfig,
      isDark,
      setAppTheme,
      toggleDarkMode,
      setDarkMode,
    ],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeContext };
