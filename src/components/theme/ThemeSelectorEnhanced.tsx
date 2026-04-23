import React, { useState, useCallback, useEffect, useMemo } from 'react';
import {
  FloatButton, Tooltip, Dropdown, Button, Space, Typography,
  Row, Col, Divider, message, Popover
} from 'antd';
import type { MenuProps } from 'antd';
import {
  SunOutlined, MoonOutlined, ClockCircleOutlined, EyeOutlined,
  EyeInvisibleOutlined, BgColorsOutlined, EditOutlined,
  CheckOutlined
} from '@ant-design/icons';
import { useThemeContext } from '@/contexts';
import type { ThemeConfigType } from '@/types';
import { getThemeManager } from '@/core/theme/ThemeManagerV2';
import { RGBAColorPicker } from './RGBAColorPicker';
import { designTokens } from '@/styles/design-tokens';

const { Text, Title } = Typography;

const rgbaToString = (rgba: { r: number; g: number; b: number; a: number }): string => {
  return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
};

interface ThemeSelectorEnhancedProps {
  themeConfig: {
    default: ThemeConfigType;
    presets: ThemeConfigType[];
  };
  onSelect: (theme: ThemeConfigType) => void;
}

export const ThemeSelectorEnhanced: React.FC<ThemeSelectorEnhancedProps> = ({
  themeConfig,
  onSelect,
}) => {
  const { isDark, toggleDarkMode, setDarkMode, appTheme, themeMode, setThemeMode } = useThemeContext();
  const themeManager = useMemo(() => getThemeManager(), []);

  const [isVisible, setIsVisible] = useState(true);
  const [selectedPreset, setSelectedPreset] = useState<string>(appTheme.id);
  const [customColors, setCustomColors] = useState({
    primary: { r: 74, g: 144, b: 226, a: 1 },
    background: { r: 255, g: 255, b: 255, a: 0.9 },
    text: { r: 44, g: 62, b: 80, a: 1 },
  });

  const handleThemeSelect = useCallback(async (themeId: string) => {
    const allPresets = [...themeManager.getBuiltInPresets(), ...themeManager.getCustomPresets()];
    const preset = allPresets.find(p => p.id === themeId);
    
    if (preset) {
      setSelectedPreset(themeId);
      await themeManager.setTheme(preset.config);
      onSelect(preset.config);
    } else {
      const fallbackTheme = themeConfig.presets.find(t => t.id === themeId) || themeConfig.default;
      setSelectedPreset(themeId);
      onSelect(fallbackTheme);
    }
  }, [themeConfig, onSelect, themeManager]);

  const handleDarkModeToggle = useCallback(() => {
    setThemeMode(prev => prev === 'dark' ? 'light' : 'dark');
  }, [setThemeMode]);

  const handleSystemModeToggle = useCallback(() => {
    setThemeMode('system');
  }, [setThemeMode]);

  const presetItems = useMemo(() => {
    const builtInPresets = themeManager.getBuiltInPresets();
    const customPresets = themeManager.getCustomPresets();

    const items: MenuProps['items'] = [
      {
        type: 'group',
        label: '预设主题',
        children: builtInPresets.map((preset) => ({
          key: preset.id,
          label: (
            <Space>
              <div
                style={{
                  width: 24,
                  height: 24,
                  background: preset.config.backgroundImage,
                  borderRadius: 4,
                  border: selectedPreset === preset.id 
                    ? `2px solid ${designTokens.colors.primary}`
                    : '1px solid #d9d9d9',
                }}
              />
              <span>{preset.name}</span>
              {selectedPreset === preset.id && <CheckOutlined style={{ color: designTokens.colors.primary }} />}
            </Space>
          ),
          onClick: () => handleThemeSelect(preset.id),
        })),
      },
    ];

    if (customPresets.length > 0) {
      items.push({
        type: 'divider',
      });
      items.push({
        type: 'group',
        label: '自定义主题',
        children: customPresets.map((preset) => ({
          key: preset.id,
          label: (
            <Space>
              <div
                style={{
                  width: 24,
                  height: 24,
                  background: preset.config.backgroundImage,
                  borderRadius: 4,
                }}
              />
              <span>{preset.name}</span>
            </Space>
          ),
          onClick: () => handleThemeSelect(preset.id),
        })),
      });
    }

    return items;
  }, [themeManager, selectedPreset, handleThemeSelect]);

  const handleApplyColors = useCallback(() => {
    if (isDark) {
      message.warning('请先切换到白天模式再应用自定义颜色');
      return;
    }
    
    const root = document.documentElement;
    
    root.style.setProperty('--primary-color', rgbaToString(customColors.primary));
    root.style.setProperty('--bg-color', rgbaToString(customColors.background));
    root.style.setProperty('--text-color', rgbaToString(customColors.text));
    root.style.setProperty('--color-primary', rgbaToString(customColors.primary));
    root.style.setProperty('--color-bg-container', rgbaToString(customColors.background));
    root.style.setProperty('--color-text', rgbaToString(customColors.text));
    
    const primaryHex = rgbaToString(customColors.primary);
    const bgHex = rgbaToString(customColors.background);
    const backgroundImage = `linear-gradient(135deg, ${primaryHex} 0%, ${bgHex} 100%)`;
    
    const customTheme: ThemeConfigType = {
      ...appTheme,
      id: `custom_color_${Date.now()}`,
      name: '自定义颜色主题',
      backgroundImage,
    };
    
    onSelect(customTheme);
    message.success('自定义颜色已应用');
  }, [customColors, appTheme, onSelect, isDark]);

  const colorPickerContent = (
    <div style={{ width: 320, padding: 8 }}>
      <Title level={5} style={{ marginBottom: 12 }}>自定义颜色</Title>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <RGBAColorPicker
            label="主色调"
            value={customColors.primary}
            onChange={(color) => {
              setCustomColors(prev => ({ ...prev, primary: color }));
            }}
            showPresets={false}
          />
        </Col>
      </Row>
      <Divider style={{ margin: '12px 0' }} />
      <Space>
        <Button size="small" onClick={() => setCustomColors({
          primary: { r: 74, g: 144, b: 226, a: 1 },
          background: { r: 255, g: 255, b: 255, a: 0.9 },
          text: { r: 44, g: 62, b: 80, a: 1 },
        })}>
          重置
        </Button>
        <Button type="primary" size="small" onClick={handleApplyColors}>
          应用
        </Button>
      </Space>
    </div>
  );

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
            menu={{ items: presetItems }}
            placement="topRight"
            trigger={['click']}
          >
            <FloatButton
              icon={<BgColorsOutlined />}
              tooltip="选择主题"
            />
          </Dropdown>
        )}

        <Popover content={colorPickerContent} trigger="click" placement="topRight">
          <FloatButton
            icon={<EditOutlined />}
            tooltip="自定义颜色"
          />
        </Popover>

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
          tooltip={themeMode === 'system' ? '关闭跟随系统' : '跟随系统'}
          onClick={handleSystemModeToggle}
          style={{
            background: themeMode === 'system' 
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

export default ThemeSelectorEnhanced;
