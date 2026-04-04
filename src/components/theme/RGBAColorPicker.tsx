import React, { useState, useCallback, useMemo } from 'react';
import { Card, Row, Col, Slider, InputNumber, Space, Typography, Button, Popover, Divider } from 'antd';
import { BgColorsOutlined, CheckOutlined, ReloadOutlined } from '@ant-design/icons';
import type { RGBAColor } from '@/core/theme/ThemeManagerV2';
import { ThemeManagerV2 } from '@/core/theme/ThemeManagerV2';
import { useThemeContext } from '@/contexts';

const { Text } = Typography;

interface RGBAColorPickerProps {
  value?: RGBAColor;
  onChange?: (color: RGBAColor) => void;
  label?: string;
  showHex?: boolean;
  showPresets?: boolean;
  presetColors?: string[];
}

const defaultColor: RGBAColor = { r: 74, g: 144, b: 226, a: 1 };

const defaultPresets = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
  '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
  '#F8B500', '#FF8C00', '#00CED1', '#9370DB', '#20B2AA',
];

export const RGBAColorPicker: React.FC<RGBAColorPickerProps> = ({
  value = defaultColor,
  onChange,
  label,
  showHex = true,
  showPresets = true,
  presetColors = defaultPresets,
}) => {
  const { isDark } = useThemeContext();

  const handleChannelChange = useCallback((channel: keyof RGBAColor, newValue: number) => {
    const updatedColor = { ...value, [channel]: newValue };
    onChange?.(updatedColor);
  }, [value, onChange]);

  const handleHexInput = useCallback((hex: string) => {
    const color = ThemeManagerV2.hexToRgba(hex, value.a);
    onChange?.(color);
  }, [value.a, onChange]);

  const handlePresetClick = useCallback((hex: string) => {
    const color = ThemeManagerV2.hexToRgba(hex, value.a);
    onChange?.(color);
  }, [value.a, onChange]);

  const handleReset = useCallback(() => {
    onChange?.(defaultColor);
  }, [onChange]);

  const colorPreviewStyle: React.CSSProperties = {
    width: '100%',
    height: 60,
    borderRadius: 12,
    background: ThemeManagerV2.rgbaToString(value),
    boxShadow: `0 4px 12px ${ThemeManagerV2.rgbaToString({ ...value, a: 0.3 })}`,
    transition: 'all 0.3s ease',
    marginBottom: 16,
  };

  const sliderStyle: React.CSSProperties = {
    width: '100%',
  };

  const hexValue = useMemo(() => ThemeManagerV2.rgbaToHex(value), [value]);

  const presetContent = (
    <div style={{ width: 220 }}>
      <div style={{ marginBottom: 8 }}>
        <Text type="secondary" style={{ fontSize: 12 }}>预设颜色</Text>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
        {presetColors.map((hex, index) => (
          <div
            key={index}
            onClick={() => handlePresetClick(hex)}
            style={{
              width: 32,
              height: 32,
              borderRadius: 6,
              background: hex,
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              border: hexValue.toUpperCase() === hex.toUpperCase() 
                ? '2px solid #1890ff' 
                : '1px solid rgba(0,0,0,0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <Card
      size="small"
      title={
        <Space>
          <BgColorsOutlined />
          <span>{label || '颜色选择器'}</span>
        </Space>
      }
      extra={
        <Space>
          {showPresets && (
            <Popover content={presetContent} trigger="click" placement="bottomRight">
              <Button size="small" icon={<BgColorsOutlined />}>
                预设
              </Button>
            </Popover>
          )}
          <Button size="small" icon={<ReloadOutlined />} onClick={handleReset}>
            重置
          </Button>
        </Space>
      }
      style={{
        background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.9)',
        borderRadius: 12,
      }}
    >
      <div style={colorPreviewStyle} />

      <Row gutter={[16, 12]}>
        <Col span={24}>
          <Space align="center" style={{ width: '100%' }}>
            <Text style={{ width: 20, color: '#ff4d4f' }}>R</Text>
            <Slider
              min={0}
              max={255}
              value={value.r}
              onChange={(v) => handleChannelChange('r', v)}
              style={{ flex: 1, ...sliderStyle }}
              trackStyle={{ background: '#ff4d4f' }}
              handleStyle={{ borderColor: '#ff4d4f' }}
            />
            <InputNumber
              min={0}
              max={255}
              value={value.r}
              onChange={(v) => handleChannelChange('r', v || 0)}
              style={{ width: 60 }}
              size="small"
            />
          </Space>
        </Col>

        <Col span={24}>
          <Space align="center" style={{ width: '100%' }}>
            <Text style={{ width: 20, color: '#52c41a' }}>G</Text>
            <Slider
              min={0}
              max={255}
              value={value.g}
              onChange={(v) => handleChannelChange('g', v)}
              style={{ flex: 1, ...sliderStyle }}
              trackStyle={{ background: '#52c41a' }}
              handleStyle={{ borderColor: '#52c41a' }}
            />
            <InputNumber
              min={0}
              max={255}
              value={value.g}
              onChange={(v) => handleChannelChange('g', v || 0)}
              style={{ width: 60 }}
              size="small"
            />
          </Space>
        </Col>

        <Col span={24}>
          <Space align="center" style={{ width: '100%' }}>
            <Text style={{ width: 20, color: '#1890ff' }}>B</Text>
            <Slider
              min={0}
              max={255}
              value={value.b}
              onChange={(v) => handleChannelChange('b', v)}
              style={{ flex: 1, ...sliderStyle }}
              trackStyle={{ background: '#1890ff' }}
              handleStyle={{ borderColor: '#1890ff' }}
            />
            <InputNumber
              min={0}
              max={255}
              value={value.b}
              onChange={(v) => handleChannelChange('b', v || 0)}
              style={{ width: 60 }}
              size="small"
            />
          </Space>
        </Col>

        <Col span={24}>
          <Space align="center" style={{ width: '100%' }}>
            <Text style={{ width: 20 }}>A</Text>
            <Slider
              min={0}
              max={1}
              step={0.01}
              value={value.a}
              onChange={(v) => handleChannelChange('a', v)}
              style={{ flex: 1, ...sliderStyle }}
            />
            <InputNumber
              min={0}
              max={1}
              step={0.01}
              value={value.a}
              onChange={(v) => handleChannelChange('a', v || 0)}
              style={{ width: 60 }}
              size="small"
            />
          </Space>
        </Col>
      </Row>

      {showHex && (
        <>
          <Divider style={{ margin: '12px 0' }} />
          <Space>
            <Text type="secondary">HEX:</Text>
            <Text code style={{ fontSize: 14 }}>{hexValue}</Text>
            <Text type="secondary" style={{ fontSize: 12 }}>
              ({ThemeManagerV2.rgbaToString(value)})
            </Text>
          </Space>
        </>
      )}
    </Card>
  );
};

export default RGBAColorPicker;
