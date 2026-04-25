import styled from '@emotion/styled';
// src/components/ThemeSelector.tsx
import { useCallback, useEffect, useMemo, useState } from 'react';
import type React from 'react';
import type { BackgroundProps, IThemeConfig, ThemeConfigType } from '../types';
import { themeManager } from '../utils';
const SelectorContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: rgba(255, 255, 255, 0.9);
  padding: 12px;
  border-radius: 16px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.15),
    0 2px 16px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  gap: 8px;
  min-width: auto;
  z-index: 1000;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    padding: 10px;
    border-radius: 14px;
  }
`;

const ToggleShowButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 80px;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(74, 144, 226, 0.3);
  z-index: 1001;
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 24px rgba(74, 144, 226, 0.4);
  }
  
  @media (max-width: 768px) {
    bottom: 20px;
    right: 80px;
    width: 44px;
    height: 44px;
    font-size: 18px;
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
`;

const ThemeButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-bottom: 4px;
`;

interface ThemeButtonPropsType extends BackgroundProps {
  isSelected: boolean;
}

const ThemeButton = styled.button<ThemeButtonPropsType>`
  padding: 8px;
  width: 44px;
  height: 44px;
  border: 2px solid ${(props) => (props.isSelected ? '#4a90e2' : 'transparent')};
  border-radius: 12px;
  background: ${(props) => (props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#333' : props.theme.backgroundImage)};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  /* 添加反光效果 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s;
  }
  
  &:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    border-color: ${(props) => (props.isSelected ? '#357abd' : 'rgba(74, 144, 226, 0.5)')};
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: scale(1.02);
  }
`;

interface ToggleButtonPropsType extends BackgroundProps {
  active: boolean;
}

const ToggleButton = styled.button<ToggleButtonPropsType>`
  padding: 10px;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 12px;
  background: ${(props) =>
    props.active
      ? 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)'
      : props.theme.id === 'custom' && props.theme.name === '暗黑主题'
        ? 'rgba(255, 255, 255, 0.1)'
        : 'rgba(0, 0, 0, 0.05)'};
  color: ${(props) => (props.active ? 'white' : props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#fff' : '#666')};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  box-shadow: ${(props) =>
    props.active
      ? '0 4px 12px rgba(74, 144, 226, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
      : '0 2px 8px rgba(0, 0, 0, 0.05)'};
  position: relative;
  overflow: hidden;
  
  /* 添加波纹效果 */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.3s, height 0.3s;
  }
  
  &:hover {
    background: ${(props) =>
      props.active
        ? 'linear-gradient(135deg, #357abd 0%, #2868a3 100())'
        : props.theme.id === 'custom' && props.theme.name === '暗黑主题'
          ? 'rgba(255, 255, 255, 0.15)'
          : 'rgba(0, 0, 0, 0.1)'};
    transform: scale(1.05);
    box-shadow: ${(props) =>
      props.active
        ? '0 6px 16px rgba(74, 144, 226, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
        : '0 4px 12px rgba(0, 0, 0, 0.1)'};
  }
  
  &:active::after {
    width: 40px;
    height: 40px;
  }
  
  & > span {
    display: inline-block;
    transform: translateY(-1px);
    z-index: 1;
  }
`;
const AutoToggleButton = styled(ToggleButton)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  onSelect: (theme: ThemeConfigType) => void;
  themeConfig: IThemeConfig;
}

export const ThemeSelector: React.FC<Props> = ({ themeConfig, onSelect }) => {
  themeConfig = themeManager.getConfig();
  // console.log("localThemeConfig", localThemeConfig)

  // 显示/隐藏状态
  const [isVisible, setIsVisible] = useState(() => {
    try {
      const saved = localStorage.getItem('turnip-theme-selector-visible');
      return saved ? saved === 'true' : true;
    } catch (error) {
      console.warn('Failed to load theme selector visibility:', error);
      return true;
    }
  });

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
      // 如果没有保存的主题，使用默认主题ID
      return saved || themeConfig.default.id;
    } catch (error) {
      console.warn('Failed to load theme preset:', error);
      return themeConfig.default.id;
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
      localStorage.setItem('turnip-theme-selector-visible', String(isVisible));
    } catch (error) {
      console.warn('Failed to save theme settings:', error);
    }
  }, [isDarkMode, isAutoMode, selectedTheme, isVisible]);

  // 检查当前选中的主题是否仍然存在，如果不存在则自动选择一个有效的主题
  useEffect(() => {
    const currentThemeExists =
      themeConfig.presets.some((theme) => theme.id === selectedTheme) ||
      selectedTheme === themeConfig.default.id;

    if (!currentThemeExists) {
      // 如果当前主题不存在，选择第一个可用的预设主题或默认主题
      const fallbackTheme =
        themeConfig.presets[0]?.id || themeConfig.default.id;
      setSelectedTheme(fallbackTheme);
    }
  }, [themeConfig, selectedTheme]);

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
    // 安全地获取基础主题，避免数组为空时的错误
    const baseTheme =
      themeConfig.presets.find((theme) => theme.id === selectedTheme) ||
      themeConfig.presets[0] ||
      themeConfig.default; // 如果预设为空，回退到默认主题

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
    return theme;
  }, [isDarkMode, selectedTheme, onSelect, themeConfig]);

  // 获取当前实际应用的主题
  const currentTheme = useMemo(() => {
    const baseTheme =
      themeConfig.presets.find((theme) => theme.id === selectedTheme) ||
      themeConfig.presets[0] ||
      themeConfig.default;

    return {
      id: 'custom',
      name: isDarkMode ? '暗黑主题' : '明亮主题',
      backgroundImage: isDarkMode
        ? 'linear-gradient(120deg, #2d3436 0%, #2d3436 100%)'
        : baseTheme.backgroundImage,
      blur: baseTheme.blur,
      opacity: isDarkMode ? 0.85 : baseTheme.opacity,
    };
  }, [isDarkMode, selectedTheme, themeConfig]);

  useEffect(() => {
    updateTheme();
  }, [isDarkMode, updateTheme]);

  return (
    <>
      {/* 显示/隐藏切换按钮 */}
      <ToggleShowButton
        onClick={() => {
          console.log('点击切换按钮，当前状态:', isVisible);
          setIsVisible(!isVisible);
        }}
        title={isVisible ? '隐藏主题选择器' : '显示主题选择器'}
      >
        {isVisible ? '🙈' : '🎨'}
      </ToggleShowButton>

      {/* 主题选择器 */}
      <SelectorContainer isVisible={isVisible}>
        {!isDarkMode && (
          <ThemeButtonsContainer>
            {themeConfig.presets.map((theme) => (
              <ThemeButton
                key={theme.id}
                theme={currentTheme}
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
            theme={currentTheme}
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
            theme={currentTheme}
            active={isAutoMode}
            onClick={() => setIsAutoMode(!isAutoMode)}
            title={isAutoMode ? '关闭自动切换' : '开启自动切换'}
          >
            🕒
          </AutoToggleButton>
        </ToggleContainer>
      </SelectorContainer>
    </>
  );
};
