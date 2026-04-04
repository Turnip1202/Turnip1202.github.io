import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Card,
  Button,
  Space,
  Table,
  Modal,
  message,
  Typography,
  Row,
  Col,
  Popconfirm,
  Alert,
} from 'antd';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  BgColorsOutlined,
} from '@ant-design/icons';
import { themeManager } from '@/utils';
import type { ThemeConfigType } from '@/types';
import { ThemeEditor } from '@/components/theme';
import { getThemeManager, type EnhancedThemeConfig, type ThemePreset } from '@/core/theme/ThemeManagerV2';

const { Title, Paragraph } = Typography;

const ThemeAdmin: React.FC = () => {
  const [presets, setPresets] = useState<ThemePreset[]>([]);
  const [defaultTheme, setDefaultTheme] = useState<ThemeConfigType | null>(null);
  const [editorVisible, setEditorVisible] = useState(false);
  const [editingEnhancedTheme, setEditingEnhancedTheme] = useState<EnhancedThemeConfig | undefined>();
  const [editorMode, setEditorMode] = useState<'create' | 'edit'>('create');
  
  const themeManagerV2 = useMemo(() => getThemeManager(), []);

  useEffect(() => {
    loadThemes();
  }, []);

  const loadThemes = useCallback(() => {
    const allPresets = themeManagerV2.getAllPresets();
    setPresets(allPresets);
    
    const config = themeManager.getConfig();
    setDefaultTheme(config.default);
  }, [themeManagerV2]);

  const showEnhancedEditor = useCallback((theme?: EnhancedThemeConfig) => {
    setEditingEnhancedTheme(theme);
    setEditorMode(theme ? 'edit' : 'create');
    setEditorVisible(true);
  }, []);

  const handlePreviewEnhanced = useCallback((theme: EnhancedThemeConfig) => {
    themeManagerV2.setPreviewTheme(theme);
    message.info('主题预览已应用，刷新页面可恢复');
  }, [themeManagerV2]);

  const handleSaveEnhanced = useCallback(async (theme: EnhancedThemeConfig) => {
    try {
      if (editorMode === 'edit') {
        await themeManagerV2.updateCustomPreset({
          id: theme.id,
          name: theme.name,
          description: `自定义主题 - ${theme.name}`,
          config: theme,
        });
        message.success('主题更新成功！');
      } else {
        await themeManagerV2.addCustomPreset({
          id: theme.id,
          name: theme.name,
          description: `自定义主题 - ${theme.name}`,
          config: theme,
        });
        message.success('主题创建成功！');
      }
      loadThemes();
      setEditorVisible(false);
    } catch (error) {
      message.error('保存主题失败');
    }
  }, [themeManagerV2, editorMode, loadThemes]);

  const handleDelete = useCallback(async (presetId: string) => {
    try {
      await themeManagerV2.deleteCustomPreset(presetId);
      message.success('主题删除成功！');
      loadThemes();
    } catch (error) {
      if (error instanceof Error) {
        message.error(error.message);
      } else {
        message.error('删除失败');
      }
    }
  }, [themeManagerV2, loadThemes]);

  const handleSetDefault = useCallback((theme: ThemeConfigType) => {
    themeManager.setDefaultThemeSync(theme);
    message.success('默认主题设置成功！');
    loadThemes();
  }, [loadThemes]);

  const restoreDefaultThemes = useCallback(async () => {
    const defaultThemes: Omit<ThemePreset, 'isBuiltIn'>[] = [
      {
        id: 'purple',
        name: '渐变紫',
        description: '优雅的紫色渐变主题',
        config: {
          id: 'purple',
          name: '渐变紫',
          backgroundImage: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)',
          blur: '10px',
          opacity: 0.95,
          isDark: false,
        },
      },
      {
        id: 'morning',
        name: '晨光蓝',
        description: '清新的晨光蓝色主题',
        config: {
          id: 'morning',
          name: '晨光蓝',
          backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
          blur: '10px',
          opacity: 0.95,
          isDark: false,
        },
      },
      {
        id: 'night',
        name: '夜空',
        description: '深邃的夜空主题',
        config: {
          id: 'night',
          name: '夜空',
          backgroundImage: 'linear-gradient(to right, #243949 0%, #517fa4 100%)',
          blur: '10px',
          opacity: 0.92,
          isDark: true,
        },
      },
    ];
    
    try {
      for (const theme of defaultThemes) {
        const existing = themeManagerV2.getAllPresets().find(p => p.id === theme.id);
        if (!existing) {
          await themeManagerV2.addCustomPreset(theme);
        }
      }
      loadThemes();
      message.success('默认主题恢复成功！');
    } catch (error) {
      message.error('默认主题恢复失败');
    }
  }, [themeManagerV2, loadThemes]);

  const convertToEnhancedTheme = (preset: ThemePreset): EnhancedThemeConfig => {
    const theme = preset.config;
    return {
      ...theme,
      colors: theme.colors || {
        primary: { r: 74, g: 144, b: 226, a: 1 },
        background: { r: 255, g: 255, b: 255, a: 0.9 },
        text: { r: 44, g: 62, b: 80, a: 1 },
        textSecondary: { r: 102, g: 102, b: 102, a: 1 },
        border: { r: 0, g: 0, b: 0, a: 0.1 },
        accent: { r: 74, g: 144, b: 226, a: 0.2 },
      },
      isDark: theme.isDark ?? (theme.id === 'night' || theme.name?.includes('暗黑')),
    };
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: ['config', 'id'],
      key: 'id',
      width: 100,
    },
    {
      title: '主题名称',
      key: 'name',
      render: (_: any, record: ThemePreset) => (
        <Space>
          <span>{record.name}</span>
          {record.isBuiltIn && <span style={{ color: '#999', fontSize: 12 }}>(内置)</span>}
        </Space>
      ),
    },
    {
      title: '背景预览',
      key: 'backgroundImage',
      width: 120,
      render: (_: any, record: ThemePreset) => (
        <div
          style={{
            width: 60,
            height: 30,
            background: record.config.backgroundImage,
            borderRadius: 4,
            border: '1px solid #d9d9d9',
          }}
        />
      ),
    },
    {
      title: '模糊度',
      key: 'blur',
      width: 80,
      render: (_: any, record: ThemePreset) => record.config.blur,
    },
    {
      title: '透明度',
      key: 'opacity',
      width: 80,
      render: (_: any, record: ThemePreset) => `${Math.round(record.config.opacity * 100)}%`,
    },
    {
      title: '操作',
      key: 'action',
      width: 200,
      render: (_: any, record: ThemePreset) => (
        <Space size="small">
          <Button
            type="text"
            icon={<EyeOutlined />}
            onClick={() => handlePreviewEnhanced(record.config)}
            title="预览"
          />
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => showEnhancedEditor(convertToEnhancedTheme(record))}
            title="编辑"
          />
          <Button
            type="text"
            onClick={() => handleSetDefault(record.config)}
            title="设为默认"
          >
            默认
          </Button>
          {!record.isBuiltIn && (
            <Popconfirm
              title="确定删除这个主题吗？"
              onConfirm={() => handleDelete(record.id)}
              okText="确定"
              cancelText="取消"
            >
              <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
                title="删除"
              />
            </Popconfirm>
          )}
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Title level={2}>
        <BgColorsOutlined /> 主题管理面板
      </Title>
      <Paragraph>
        管理应用的主题配置，包括背景渐变、模糊效果和透明度设置。
      </Paragraph>

      {defaultTheme && (
        <Card title="当前默认主题" style={{ marginBottom: 16 }}>
          <Row gutter={16} align="middle">
            <Col span={4}>
              <div
                style={{
                  width: 80,
                  height: 40,
                  background: defaultTheme.backgroundImage,
                  borderRadius: 6,
                  border: '1px solid #d9d9d9',
                }}
              />
            </Col>
            <Col span={20}>
              <Title level={4} style={{ margin: 0 }}>
                {defaultTheme.name}
              </Title>
              <Paragraph style={{ margin: 0, color: '#666' }}>
                模糊度: {defaultTheme.blur} | 透明度: {Math.round(defaultTheme.opacity * 100)}%
              </Paragraph>
            </Col>
          </Row>
        </Card>
      )}

      <div style={{ marginBottom: 16 }}>
        <Space>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => showEnhancedEditor()}
          >
            创建主题
          </Button>
          {presets.length === 0 && (
            <Button
              type="dashed"
              onClick={restoreDefaultThemes}
            >
              恢复默认主题
            </Button>
          )}
        </Space>
      </div>

      {presets.length === 0 ? (
        <Card style={{ textAlign: 'center', padding: '40px 20px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎨</div>
          <Title level={4}>暂无自定义主题</Title>
          <Paragraph style={{ color: '#666', marginBottom: '24px' }}>
            您还没有创建任何自定义主题，可以点击上方按钮添加新主题或恢复默认主题。
          </Paragraph>
          <Space>
            <Button type="primary" icon={<PlusOutlined />} onClick={() => showEnhancedEditor()}>
              创建第一个主题
            </Button>
            <Button onClick={restoreDefaultThemes}>
              恢复默认主题
            </Button>
          </Space>
        </Card>
      ) : (
        <Table
          dataSource={presets}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 10 }}
          scroll={{ x: 800 }}
        />
      )}

      <Modal
        title={editorMode === 'edit' ? '编辑主题' : '创建主题'}
        open={editorVisible}
        onCancel={() => setEditorVisible(false)}
        footer={null}
        width={900}
        destroyOnHidden
      >
        <Alert
          message="主题编辑器"
          description="使用编辑器可以设置主题属性，包括背景渐变、RGBA 颜色、暗黑模式等。编辑完成后点击保存即可。"
          type="info"
          showIcon
          style={{ marginBottom: 16 }}
        />
        <ThemeEditor
          theme={editingEnhancedTheme}
          mode={editorMode}
          onSave={handleSaveEnhanced}
          onPreview={handlePreviewEnhanced}
          onCancel={() => setEditorVisible(false)}
        />
      </Modal>
    </div>
  );
};

export default ThemeAdmin;
