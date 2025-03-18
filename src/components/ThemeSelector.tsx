// src/components/ThemeSelector.tsx
import { useState, useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import type { IThemeConfig, ThemeConfigType,BackgroundProps } from "../types"
import { themeManager } from "../utils"

const SelectorContainer = styled.div<BackgroundProps>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.5)'};
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: auto;
  z-index: 1000;
`;

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 6px;
`;

const ThemeButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

interface ThemeButtonPropsType extends BackgroundProps{
  isSelected: boolean
}

const ThemeButton = styled.button<ThemeButtonPropsType>`
  padding: 6px;
  width: 40px;
  height: 40px;
  border: 2px solid ${props => props.isSelected ? '#4a90e2' : 'transparent'};
  border-radius: 4px;
  background: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#333' : props.theme.backgroundImage};
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
`;

interface ToggleButtonPropsType extends BackgroundProps{
  active: boolean
}

const ToggleButton = styled.button<ToggleButtonPropsType>`
  padding: 8px;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 4px;
  background: ${props => props.active ? '#4a90e2' : props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#333' : '#f0f0f0'};
  color: ${props => props.active ? 'white' : props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#fff' : '#666'};
  cursor: pointer;
  transition: all 0.2s;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  &:hover {
    background: ${props => props.active ? '#357abd' : props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#444' : '#e0e0e0'};
  }
  & > span {
    display: inline-block;
    transform: translateY(-1px);
  }
`;
const AutoToggleButton = styled(ToggleButton)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  onSelect: (theme: ThemeConfigType) => void;
  themeConfig: IThemeConfig
}

export const ThemeSelector: React.FC<Props> = ({ themeConfig, onSelect }) => {
  themeConfig = themeManager.getConfig();
  // console.log("localThemeConfig", localThemeConfig)


  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('turnip-theme-mode');
      return saved ? saved === 'dark' : false;
    } catch (error) {
      console.warn('Failed to load theme mode:', error);
      return false;
    }
  });

  const [selectedTheme, setSelectedTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('turnip-theme-preset');
      return saved || 'morning';
    } catch (error) {
      console.warn('Failed to load theme preset:', error);
      return 'morning';
    }
  });
  const [isAutoMode, setIsAutoMode] = useState(() => {
    try {
      const saved = localStorage.getItem('turnip-theme-auto');
      return saved ? saved === 'true' : false;
    } catch (error) {
      console.warn('Failed to load auto mode:', error);
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('turnip-theme-mode', isDarkMode ? 'dark' : 'light');
      localStorage.setItem('turnip-theme-auto', String(isAutoMode));
      localStorage.setItem('turnip-theme-preset', selectedTheme);
    } catch (error) {
      console.warn('Failed to save theme settings:', error);
    }
  }, [isDarkMode, isAutoMode, selectedTheme]);

  useEffect(() => {
    const checkTime = () => {
      if (!isAutoMode) return;

      const currentHour = new Date().getHours();
      const shouldBeDark = currentHour >= 18 || currentHour < 6;

      if (shouldBeDark !== isDarkMode) {
        setIsDarkMode(shouldBeDark);
      }
    };

    checkTime();
    const interval = setInterval(checkTime, 60000);

    return () => clearInterval(interval);
  }, [isAutoMode, isDarkMode]);

  const updateTheme = useCallback(() => {
    const baseTheme = themeConfig.presets.find(theme => theme.id === selectedTheme) || themeConfig.presets[0];
    const theme: ThemeConfigType = {
      id: 'custom',
      name: isDarkMode ? '暗黑主题' : '明亮主题',
      backgroundImage: isDarkMode
        ? 'linear-gradient(120deg, #2d3436 0%, #2d3436 100%)'
        : baseTheme.backgroundImage,
      blur: baseTheme.blur,
      opacity: isDarkMode ? 0.85 : baseTheme.opacity,
    };
    onSelect(theme);
  }, [isDarkMode, selectedTheme, onSelect]);

  useEffect(() => {
    updateTheme();
  }, [isDarkMode, updateTheme]);

  return (
    <SelectorContainer>
      {!isDarkMode && (
        <ThemeButtonsContainer>
          {themeConfig.presets.map(theme => (
            <ThemeButton
              key={theme.id}
              isSelected={selectedTheme === theme.id}
              onClick={() => setSelectedTheme(theme.id)}
              title={theme.name}
              style={{ background: theme.backgroundImage }}
            />
          ))}
        </ThemeButtonsContainer>
      )}
      <ToggleContainer>
        <ToggleButton
          active={isDarkMode}
          onClick={() => {
            setIsAutoMode(false);
            setIsDarkMode(!isDarkMode);
          }}
          title={isDarkMode ? '切换到明亮模式' : '切换到暗黑模式'}
        >
          {isDarkMode ? <span>🌙</span> : <span>☀️</span>}
        </ToggleButton>
        <AutoToggleButton
          active={isAutoMode}
          onClick={() => setIsAutoMode(!isAutoMode)}
          title={isAutoMode ? '关闭自动切换' : '开启自动切换'}
        >
          🕒
        </AutoToggleButton>
      </ToggleContainer>
    </SelectorContainer>
  );
};