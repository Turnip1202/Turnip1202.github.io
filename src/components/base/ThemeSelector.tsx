import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { FloatButton, Tooltip, Dropdown, Button, Space, Switch, Typography } from 'antd';
import type { MenuProps } from 'antd';
import {
  SunOutlined,
  MoonOutlined,
  ClockCircleOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  BgColorsOutlined,
} from '@ant-design/icons';
import { useThemeContext } from '@/contexts';
import type { ThemeConfigType } from '@/types';
import { designTokens } from '@/styles/design-tokens';

const { Text } = Typography;

interface ThemeSelectorProps {
  themeConfig: {
    default: ThemeConfigType;
    presets: ThemeConfigType[];
  };
  onSelect: (theme: ThemeConfigType) => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ themeConfig, onSelect }) => {
  const { isDark, toggleDarkMode, setDarkMode, appTheme } = useThemeContext();
  
  const [isVisible, setIsVisible] = useState(() => {
    try {
      const saved = localStorage.getItem('turnip-theme-selector-visible');
      return saved ? saved === 'true' : true;
    } catch {
      return true;
    }
  });

  const [isAutoMode, setIsAutoMode] = useState(() => {
    try {
      const saved = localStorage.getItem('turnip-theme-auto');
      return saved ? saved === 'true' : false;
    } catch {
      return false;
    }
  });

  const [selectedPreset, setSelectedPreset] = useState<string>(() => {
    try {
      return localStorage.getItem('turnip-theme-preset') || themeConfig.default.id;
    } catch {
      return themeConfig.default.id;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('turnip-theme-selector-visible', String(isVisible));
      localStorage.setItem('turnip-theme-auto', String(isAutoMode));
      localStorage.setItem('turnip-theme-preset', selectedPreset);
    } catch (error) {
      console.warn('Failed to save theme settings:', error);
    }
  }, [isVisible, isAutoMode, selectedPreset]);

  useEffect(() => {
    const checkTime = () => {
      if (!isAutoMode) return;

      const currentHour = new Date().getHours();
      const shouldBeDark = currentHour >= 18 || currentHour < 6;

      if (shouldBeDark !== isDark) {
        setDarkMode(shouldBeDark);
      }
    };

    checkTime();
    const interval = setInterval(checkTime, 60000);

    return () => clearInterval(interval);
  }, [isAutoMode, isDark, setDarkMode]);

  const handleThemeSelect = useCallback((themeId: string) => {
    const theme = themeConfig.presets.find(t => t.id === themeId) || themeConfig.default;
    setSelectedPreset(themeId);
    onSelect(theme);
  }, [themeConfig, onSelect]);

  const handleDarkModeToggle = useCallback(() => {
    setIsAutoMode(false);
    toggleDarkMode();
  }, [toggleDarkMode]);

  const handleAutoModeToggle = useCallback((checked: boolean) => {
    setIsAutoMode(checked);
    if (checked) {
      const currentHour = new Date().getHours();
      setDarkMode(currentHour >= 18 || currentHour < 6);
    }
  }, [setDarkMode]);

  const themeMenuItems: MenuProps['items'] = useMemo(() => {
    return themeConfig.presets.map((theme) => ({
      key: theme.id,
      label: (
        <Space>
          <div
            style={{
              width: 24,
              height: 24,
              background: theme.backgroundImage,
              borderRadius: 4,
              border: selectedPreset === theme.id 
                ? `2px solid ${designTokens.colors.primary}`
                : '1px solid #d9d9d9',
            }}
          />
          <Text>{theme.name}</Text>
        </Space>
      ),
      onClick: () => handleThemeSelect(theme.id),
    }));
  }, [themeConfig.presets, selectedPreset, handleThemeSelect]);

  return (
    <>
      <style>
        {`
          .theme-float-button .ant-float-btn-body {
            background: ${isDark 
              ? 'rgba(255, 255, 255, 0.1)' 
              : 'rgba(255, 255, 255, 0.9)'};
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid ${isDark 
              ? 'rgba(255, 255, 255, 0.2)' 
              : 'rgba(255, 255, 255, 0.3)'};
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          }
          .theme-float-button .ant-float-btn-body:hover {
            background: ${isDark 
              ? 'rgba(255, 255, 255, 0.15)' 
              : 'rgba(255, 255, 255, 0.95)'};
          }
        `}
      </style>

      <FloatButton.Group
        shape="circle"
        style={{
          right: 24,
          bottom: 24,
          display: isVisible ? 'flex' : 'none',
        }}
        className="theme-float-button"
        icon={<BgColorsOutlined />}
        tooltip="主题设置"
      >
        {!isDark && (
          <Dropdown
            menu={{ items: themeMenuItems }}
            placement="topRight"
            trigger={['click']}
          >
            <FloatButton
              icon={<BgColorsOutlined />}
              tooltip="选择主题"
            />
          </Dropdown>
        )}

        <FloatButton
          icon={isDark ? <MoonOutlined /> : <SunOutlined />}
          tooltip={isDark ? '切换到明亮模式' : '切换到暗黑模式'}
          onClick={handleDarkModeToggle}
          style={{
            background: isDark 
              ? `linear-gradient(135deg, ${designTokens.colors.primary} 0%, ${designTokens.colors.primaryHover} 100%)`
              : undefined,
          }}
        />

        <FloatButton
          icon={<ClockCircleOutlined />}
          tooltip={isAutoMode ? '关闭自动切换' : '开启自动切换'}
          onClick={() => handleAutoModeToggle(!isAutoMode)}
          style={{
            background: isAutoMode 
              ? `linear-gradient(135deg, ${designTokens.colors.primary} 0%, ${designTokens.colors.primaryHover} 100%)`
              : undefined,
          }}
        />
      </FloatButton.Group>

      <Tooltip title={isVisible ? '隐藏主题选择器' : '显示主题选择器'}>
        <FloatButton
          icon={isVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
          onClick={() => setIsVisible(!isVisible)}
          style={{
            right: 80,
            bottom: 24,
          }}
        />
      </Tooltip>
    </>
  );
};

export default ThemeSelector;
