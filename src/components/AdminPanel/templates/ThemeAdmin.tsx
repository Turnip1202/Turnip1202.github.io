import React, { useState, useEffect } from 'react';
import {
  Card,
  Form,
  Input,
  Button,
  Space,
  Table,
  Modal,
  ColorPicker,
  Slider,
  message,
  Divider,
  Typography,
  Row,
  Col,
  Switch,
  Popconfirm,
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

const { Title, Paragraph } = Typography;

const ThemeAdmin: React.FC = () => {
  const [form] = Form.useForm();
  const [presets, setPresets] = useState<ThemeConfigType[]>([]);
  const [defaultTheme, setDefaultTheme] = useState<ThemeConfigType | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingTheme, setEditingTheme] = useState<ThemeConfigType | null>(null);
  const [previewTheme, setPreviewTheme] = useState<ThemeConfigType | null>(null);

  useEffect(() => {
    loadThemes();
  }, []);

  const loadThemes = () => {
    const config = themeManager.getConfig();
    setPresets(config.presets);
    setDefaultTheme(config.default);
  };

  const showModal = (theme?: ThemeConfigType) => {
    setEditingTheme(theme || null);
    if (theme) {
      form.setFieldsValue({
        id: theme.id,
        name: theme.name,
        backgroundImage: theme.backgroundImage,
        blur: parseInt(theme.blur),
        opacity: Math.round(theme.opacity * 100),
      });
    } else {
      form.resetFields();
    }
    setIsModalVisible(true);
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const themeData: ThemeConfigType = {
        id: values.id,
        name: values.name,
        backgroundImage: values.backgroundImage,
        blur: `${values.blur}px`,
        opacity: values.opacity / 100,
      };

      if (editingTheme) {
        themeManager.updatePreset(themeData);
        message.success('主题更新成功！');
      } else {
        themeManager.addPreset(themeData);
        message.success('主题添加成功！');
      }
      
      loadThemes();
      setIsModalVisible(false);
      form.resetFields();
    } catch (error) {
      message.error('操作失败，请检查输入');
    }
  };

  const handleDelete = (themeId: string) => {
    // 安全检查：防止删除最后一个主题
    if (presets.length <= 1) {
      message.warning('不能删除最后一个主题，请先添加其他主题');
      return;
    }
    
    try {
      themeManager.deletePreset(themeId);
      message.success('主题删除成功！');
      loadThemes();
    } catch (error) {
      message.error('删除失败');
    }
  };

  const handleSetDefault = (theme: ThemeConfigType) => {
    themeManager.setDefaultTheme(theme);
    message.success('默认主题设置成功！');
    loadThemes();
  };

  const handlePreview = (theme: ThemeConfigType) => {
    setPreviewTheme(theme);
    // 这里可以触发全局主题预览
    message.info('主题预览功能开发中...');
  };

  const generateGradient = () => {
    const gradients = [
      'linear-gradient(120deg, #a8edea 0%, #fed6e3 100%)',
      'linear-gradient(120deg, #d299c2 0%, #fef9d7 100%)',
      'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)',
      'linear-gradient(120deg, #fdbb2d 0%, #22c1c3 100%)',
      'linear-gradient(120deg, #ff9a9e 0%, #fecfef 100%)',
      'linear-gradient(120deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(120deg, #4facfe 0%, #00f2fe 100%)',
    ];
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    form.setFieldValue('backgroundImage', randomGradient);
  };

  const restoreDefaultThemes = () => {
    // 恢复默认主题集
    const defaultThemes = [
      {
        id: 'purple',
        name: '渐变紫',
        backgroundImage: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)',
        blur: '10px',
        opacity: 0.95,
      },
      {
        id: 'morning',
        name: '晨光蓝',
        backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
        blur: '10px',
        opacity: 0.95,
      },
      {
        id: 'night',
        name: '夜空',
        backgroundImage: 'linear-gradient(to right, #243949 0%, #517fa4 100%)',
        blur: '10px',
        opacity: 0.92,
      },
    ];
    
    try {
      defaultThemes.forEach(theme => {
        // 检查主题是否已存在，避免重复添加
        if (!themeManager.findThemeById(theme.id)) {
          themeManager.addPreset(theme);
        }
      });
      loadThemes();
      message.success('默认主题恢复成功！');
    } catch (error) {
      message.error('默认主题恢复失败');
    }
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 100,
    },
    {
      title: '主题名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '背景预览',
      dataIndex: 'backgroundImage',
      key: 'backgroundImage',
      width: 120,
      render: (backgroundImage: string) => (
        <div
          style={{
            width: 60,
            height: 30,
            background: backgroundImage,
            borderRadius: 4,
            border: '1px solid #d9d9d9',
          }}
        />
      ),
    },
    {
      title: '模糊度',
      dataIndex: 'blur',
      key: 'blur',
      width: 80,
    },
    {
      title: '透明度',
      dataIndex: 'opacity',
      key: 'opacity',
      width: 80,
      render: (opacity: number) => `${Math.round(opacity * 100)}%`,
    },
    {
      title: '操作',
      key: 'action',
      width: 200,
      render: (_: any, record: ThemeConfigType) => (
        <Space size="small">
          <Button
            type="text"
            icon={<EyeOutlined />}
            onClick={() => handlePreview(record)}
            title="预览"
          />
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => showModal(record)}
            title="编辑"
          />
          <Button
            type="text"
            onClick={() => handleSetDefault(record)}
            title="设为默认"
          >
            默认
          </Button>
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

      {/* 当前默认主题 */}
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

      {/* 操作按钮 */}
      <div style={{ marginBottom: 16 }}>
        <Space>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => showModal()}
          >
            添加新主题
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

      {/* 主题列表 */}
      {presets.length === 0 ? (
        <Card style={{ textAlign: 'center', padding: '40px 20px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎨</div>
          <Title level={4}>暂无自定义主题</Title>
          <Paragraph style={{ color: '#666', marginBottom: '24px' }}>
            您还没有创建任何自定义主题，可以点击上方按钮添加新主题或恢复默认主题。
          </Paragraph>
          <Space>
            <Button type="primary" icon={<PlusOutlined />} onClick={() => showModal()}>
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

      {/* 添加/编辑主题模态框 */}
      <Modal
        title={editingTheme ? '编辑主题' : '添加新主题'}
        open={isModalVisible}
        onOk={handleSubmit}
        onCancel={() => {
          setIsModalVisible(false);
          form.resetFields();
        }}
        width={600}
        okText="保存"
        cancelText="取消"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="id"
            label="主题ID"
            rules={[
              { required: true, message: '请输入主题ID' },
              { pattern: /^[a-zA-Z0-9_-]+$/, message: 'ID只能包含字母、数字、下划线和连字符' }
            ]}
          >
            <Input placeholder="例如: my-theme" disabled={!!editingTheme} />
          </Form.Item>

          <Form.Item
            name="name"
            label="主题名称"
            rules={[{ required: true, message: '请输入主题名称' }]}
          >
            <Input placeholder="例如: 我的主题" />
          </Form.Item>

          <Form.Item
            name="backgroundImage"
            label="背景渐变"
            rules={[{ required: true, message: '请输入背景渐变CSS' }]}
          >
            <Input.TextArea
              placeholder="例如: linear-gradient(120deg, #f6d365 0%, #fda085 100%)"
              rows={3}
            />
          </Form.Item>

          <div style={{ marginBottom: 16 }}>
            <Button onClick={generateGradient} type="dashed" block>
              🎨 随机生成渐变
            </Button>
          </div>

          <Form.Item
            name="blur"
            label="模糊度 (px)"
            rules={[{ required: true, message: '请设置模糊度' }]}
          >
            <Slider min={0} max={20} marks={{ 0: '0px', 10: '10px', 20: '20px' }} />
          </Form.Item>

          <Form.Item
            name="opacity"
            label="透明度 (%)"
            rules={[{ required: true, message: '请设置透明度' }]}
          >
            <Slider min={10} max={100} marks={{ 10: '10%', 50: '50%', 100: '100%' }} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ThemeAdmin;