import { useThemeContext } from '@/contexts';
import type {
  EnhancedThemeConfig,
  RGBAColor,
  ThemeColors,
} from '@/core/theme/ThemeManagerV2';
import { ThemeManagerV2 } from '@/core/theme/ThemeManagerV2';
import { EyeOutlined, SaveOutlined, UndoOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Slider,
  Space,
  Switch,
  message,
} from 'antd';
import type React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { RGBAColorPicker } from './RGBAColorPicker';

interface ThemeEditorProps {
  theme?: EnhancedThemeConfig;
  onSave?: (theme: EnhancedThemeConfig) => void;
  onPreview?: (theme: EnhancedThemeConfig) => void;
  onCancel?: () => void;
  mode?: 'create' | 'edit';
}

const defaultColors: ThemeColors = {
  primary: { r: 74, g: 144, b: 226, a: 1 },
  background: { r: 255, g: 255, b: 255, a: 0.9 },
  text: { r: 44, g: 62, b: 80, a: 1 },
  textSecondary: { r: 102, g: 102, b: 102, a: 1 },
  border: { r: 0, g: 0, b: 0, a: 0.1 },
  accent: { r: 74, g: 144, b: 226, a: 0.2 },
};

const createDefaultTheme = (): EnhancedThemeConfig => ({
  id: `custom_${Date.now()}`,
  name: '自定义主题',
  backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  blur: '10px',
  opacity: 0.95,
  isDark: false,
  colors: { ...defaultColors },
});

export const ThemeEditor: React.FC<ThemeEditorProps> = ({
  theme: initialTheme,
  onSave,
  onPreview,
  onCancel,
  mode = 'create',
}) => {
  const { isDark, setDarkMode } = useThemeContext();
  const [editingTheme, setEditingTheme] = useState<EnhancedThemeConfig>(
    initialTheme || createDefaultTheme(),
  );
  const [hasChanges, setHasChanges] = useState(false);
  const [originalTheme, setOriginalTheme] =
    useState<EnhancedThemeConfig | null>(null);

  useEffect(() => {
    if (initialTheme) {
      setEditingTheme(initialTheme);
      setOriginalTheme(initialTheme);
    }
  }, [initialTheme]);

  const updateTheme = useCallback((updates: Partial<EnhancedThemeConfig>) => {
    setEditingTheme((prev) => ({ ...prev, ...updates }));
    setHasChanges(true);
  }, []);

  const updateColor = useCallback(
    (colorKey: keyof ThemeColors, color: RGBAColor) => {
      setEditingTheme((prev) => ({
        ...prev,
        colors: {
          ...(prev.colors || defaultColors),
          [colorKey]: color,
        },
      }));
      setHasChanges(true);
    },
    [],
  );

  const handlePreview = useCallback(() => {
    onPreview?.(editingTheme);
    message.info('预览已更新');
  }, [editingTheme, onPreview]);

  const handleSave = useCallback(() => {
    onSave?.(editingTheme);
    setHasChanges(false);
    setOriginalTheme(editingTheme);
    message.success('主题已保存');
  }, [editingTheme, onSave]);

  const handleReset = useCallback(() => {
    if (originalTheme) {
      setEditingTheme(originalTheme);
      setHasChanges(false);
      message.info('已恢复原始设置');
    }
  }, [originalTheme]);

  const handleDarkModeChange = useCallback(
    (checked: boolean) => {
      updateTheme({ isDark: checked });
      setDarkMode(checked);
    },
    [updateTheme, setDarkMode],
  );

  const previewStyle: React.CSSProperties = {
    width: '100%',
    height: 120,
    borderRadius: 12,
    background: editingTheme.backgroundImage,
    backgroundSize: '200% 200%',
    animation: 'gradient 8s ease infinite',
    backdropFilter: `blur(${editingTheme.blur})`,
    WebkitBackdropFilter: `blur(${editingTheme.blur})`,
    opacity: editingTheme.opacity,
    marginBottom: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: editingTheme.colors?.text
      ? ThemeManagerV2.rgbaToString(editingTheme.colors.text)
      : editingTheme.isDark
        ? '#ffffff'
        : '#2c3e50',
    fontSize: 18,
    fontWeight: 600,
    textShadow: editingTheme.isDark
      ? '0 2px 4px rgba(0,0,0,0.3)'
      : '0 2px 4px rgba(255,255,255,0.3)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  };

  return (
    <div className="theme-editor">
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <Card
        title={
          <Space>
            <span>{mode === 'create' ? '创建新主题' : '编辑主题'}</span>
          </Space>
        }
        extra={
          <Space>
            {hasChanges && (
              <Button icon={<UndoOutlined />} onClick={handleReset}>
                重置
              </Button>
            )}
            <Button icon={<EyeOutlined />} onClick={handlePreview}>
              预览
            </Button>
            <Button
              type="primary"
              icon={<SaveOutlined />}
              onClick={handleSave}
              disabled={!hasChanges && mode === 'create'}
            >
              保存
            </Button>
          </Space>
        }
      >
        <Space direction="vertical" style={{ width: '100%' }} size="large">
          <div style={previewStyle}>{editingTheme.name}</div>

          <Card size="small" title="基本信息">
            <Form layout="vertical">
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="主题名称">
                    <Input
                      value={editingTheme.name}
                      onChange={(e) => updateTheme({ name: e.target.value })}
                      placeholder="输入主题名称"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="主题ID">
                    <Input
                      value={editingTheme.id}
                      disabled={mode === 'edit'}
                      placeholder="自动生成"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item label="背景渐变">
                <Input
                  value={editingTheme.backgroundImage}
                  onChange={(e) =>
                    updateTheme({ backgroundImage: e.target.value })
                  }
                  placeholder="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                />
              </Form.Item>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="模糊程度">
                    <Slider
                      min={0}
                      max={30}
                      value={Number.parseInt(editingTheme.blur) || 0}
                      onChange={(v) => updateTheme({ blur: `${v}px` })}
                      marks={{ 0: '0px', 10: '10px', 20: '20px', 30: '30px' }}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="透明度">
                    <Slider
                      min={0.5}
                      max={1}
                      step={0.01}
                      value={editingTheme.opacity}
                      onChange={(v) => updateTheme({ opacity: v })}
                      marks={{ 0.5: '50%', 0.75: '75%', 1: '100%' }}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item label="暗黑模式">
                <Switch
                  checked={editingTheme.isDark || false}
                  onChange={handleDarkModeChange}
                  checkedChildren="暗黑"
                  unCheckedChildren="明亮"
                />
              </Form.Item>
            </Form>
          </Card>

          <Card size="small" title="颜色设置">
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <RGBAColorPicker
                  label="主色调"
                  value={editingTheme.colors?.primary || defaultColors.primary}
                  onChange={(color) => updateColor('primary', color)}
                />
              </Col>
              <Col span={12}>
                <RGBAColorPicker
                  label="背景色"
                  value={
                    editingTheme.colors?.background || defaultColors.background
                  }
                  onChange={(color) => updateColor('background', color)}
                />
              </Col>
              <Col span={12}>
                <RGBAColorPicker
                  label="文本颜色"
                  value={editingTheme.colors?.text || defaultColors.text}
                  onChange={(color) => updateColor('text', color)}
                />
              </Col>
              <Col span={12}>
                <RGBAColorPicker
                  label="次要文本"
                  value={
                    editingTheme.colors?.textSecondary ||
                    defaultColors.textSecondary
                  }
                  onChange={(color) => updateColor('textSecondary', color)}
                />
              </Col>
              <Col span={12}>
                <RGBAColorPicker
                  label="边框颜色"
                  value={editingTheme.colors?.border || defaultColors.border}
                  onChange={(color) => updateColor('border', color)}
                />
              </Col>
              <Col span={12}>
                <RGBAColorPicker
                  label="强调色"
                  value={editingTheme.colors?.accent || defaultColors.accent}
                  onChange={(color) => updateColor('accent', color)}
                />
              </Col>
            </Row>
          </Card>
        </Space>
      </Card>
    </div>
  );
};

export default ThemeEditor;
