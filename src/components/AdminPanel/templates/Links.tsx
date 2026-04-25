import {
  ClearOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  FolderOutlined,
  GlobalOutlined,
  LinkOutlined,
  PlusOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Button,
  Card,
  Col,
  Descriptions,
  Divider,
  Form,
  Input,
  List,
  Modal,
  Popconfirm,
  Row,
  Select,
  Space,
  Table,
  Tooltip,
  Typography,
  message,
} from 'antd';
import type React from 'react';
import { useEffect, useState } from 'react';

import type { Link, LinkCategory } from '@/types';
import { linksManager } from '@/utils';
import { commonIcons } from './config';

const { Title, Paragraph, Text } = Typography;

// 图标选择器组件
const IconSelector: React.FC<{
  value?: string;
  onChange?: (value: string) => void;
}> = ({ value, onChange }) => {
  const [customIcon, setCustomIcon] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handleIconSelect = (icon: string) => {
    onChange?.(icon);
    setShowCustomInput(false);
  };

  const handleCustomIconAdd = () => {
    if (customIcon.trim()) {
      onChange?.(customIcon.trim());
      setCustomIcon('');
      setShowCustomInput(false);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <Text strong>常用图标：</Text>
      </div>
      <div style={{ marginBottom: 12 }}>
        {commonIcons.map((icon) => (
          <Button
            key={icon}
            type={value === icon ? 'primary' : 'default'}
            size="small"
            style={{ margin: '2px', minWidth: '36px' }}
            onClick={() => handleIconSelect(icon)}
          >
            {icon}
          </Button>
        ))}
      </div>
      <div>
        {!showCustomInput ? (
          <Button
            type="dashed"
            size="small"
            icon={<PlusOutlined />}
            onClick={() => setShowCustomInput(true)}
          >
            自定义图标
          </Button>
        ) : (
          <Space.Compact style={{ width: '100%' }}>
            <Input
              size="small"
              placeholder="输入自定义图标"
              value={customIcon}
              onChange={(e) => setCustomIcon(e.target.value)}
              onPressEnter={handleCustomIconAdd}
            />
            <Button size="small" type="primary" onClick={handleCustomIconAdd}>
              确定
            </Button>
            <Button size="small" onClick={() => setShowCustomInput(false)}>
              取消
            </Button>
          </Space.Compact>
        )}
      </div>
      {value && (
        <div style={{ marginTop: 8 }}>
          <Text type="secondary">当前选中：</Text>
          <span style={{ fontSize: '18px', marginLeft: '8px' }}>{value}</span>
        </div>
      )}
    </div>
  );
};

interface CategoryFormData {
  id: number;
  name: string;
}

interface LinkFormData {
  categoryId: number;
  name: string;
  url: string;
  icon: string;
}

const Links: React.FC = () => {
  // 状态管理
  const [categories, setCategories] = useState<LinkCategory[]>([]);
  const [loading, setLoading] = useState(false);

  // 模态框状态
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [linkModalVisible, setLinkModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);

  // 编辑状态
  const [editingCategory, setEditingCategory] = useState<LinkCategory | null>(
    null,
  );
  const [editingLink, setEditingLink] = useState<Link | null>(null);
  const [viewingLink, setViewingLink] = useState<Link | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null,
  );
  const [categoryLocked, setCategoryLocked] = useState(false);

  // 表单实例
  const [categoryForm] = Form.useForm<CategoryFormData>();
  const [linkForm] = Form.useForm<LinkFormData>();

  // 初始化数据
  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      setLoading(true);
      const data = linksManager.getAllCategories();
      setCategories(data);
    } catch (error) {
      message.error('加载分类数据失败');
    } finally {
      setLoading(false);
    }
  };

  // 分类管理方法
  const showCategoryModal = (category?: LinkCategory) => {
    setEditingCategory(category || null);
    categoryForm.resetFields();
    if (category) {
      categoryForm.setFieldsValue(category);
    }
    setCategoryModalVisible(true);
  };

  const handleCategorySubmit = async () => {
    try {
      const values = await categoryForm.validateFields();

      if (editingCategory) {
        // 更新分类
        linksManager.updateCategory(editingCategory.id, values.name);
        message.success('分类更新成功！');
      } else {
        // 添加分类
        linksManager.addCategory(values.name);
        message.success('分类添加成功！');
      }

      await loadCategories();
      setCategoryModalVisible(false);
    } catch (error) {
      message.error('操作失败，请重试');
    }
  };

  const handleDeleteCategory = async (id: number) => {
    try {
      linksManager.deleteCategory(id);
      await loadCategories();
      message.success('分类删除成功！');
    } catch (error) {
      message.error('删除失败，请重试');
    }
  };

  // 链接管理方法
  const showLinkModal = (
    link?: Link,
    categoryId?: number,
    lockCategory = false,
  ) => {
    setEditingLink(link || null);
    setSelectedCategoryId(categoryId || null);
    linkForm.resetFields();

    if (link && categoryId) {
      linkForm.setFieldsValue({ ...link, categoryId });
    } else if (categoryId) {
      linkForm.setFieldsValue({ categoryId });
    }

    // 设置分类选择是否锁定
    setCategoryLocked(lockCategory);
    setLinkModalVisible(true);
  };

  const showLinkDetailModal = (link: Link) => {
    setViewingLink(link);
    setDetailModalVisible(true);
  };

  const handleLinkSubmit = async () => {
    try {
      const values = await linkForm.validateFields();

      if (editingLink && selectedCategoryId) {
        // 更新链接
        linksManager.updateLink(selectedCategoryId, editingLink.id, {
          name: values.name,
          url: values.url,
          icon: values.icon,
        });
        message.success('链接更新成功！');
      } else {
        // 添加链接
        linksManager.addLink(
          values.categoryId,
          values.name,
          values.url,
          values.icon,
        );
        message.success('链接添加成功！');
      }

      await loadCategories();
      setLinkModalVisible(false);
    } catch (error) {
      message.error('操作失败，请重试');
    }
  };

  const handleDeleteLink = async (categoryId: number, linkId: number) => {
    try {
      linksManager.deleteLink(categoryId, linkId);
      await loadCategories();
      message.success('链接删除成功！');
    } catch (error) {
      message.error('删除失败，请重试');
    }
  };

  const handleClearAll = async () => {
    try {
      await linksManager.clearStorage();
      await loadCategories();
      message.success('所有数据清空成功！');
    } catch (error) {
      message.error('清空失败，请重试');
    }
  };

  // 表格列配置
  const categoryColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
      sorter: (a: LinkCategory, b: LinkCategory) => a.id - b.id,
    },
    {
      title: '分类名称',
      dataIndex: 'name',
      key: 'name',
      width: 80,
      render: (name: string) => (
        <Space>
          <FolderOutlined />
          <strong>{name}</strong>
        </Space>
      ),
    },
    {
      title: '链接数量',
      dataIndex: 'links',
      key: 'linkCount',
      width: 100,
      render: (links: Link[]) => (
        <span style={{ color: '#1890ff', fontWeight: 'bold' }}>
          {links?.length || 0} 个
        </span>
      ),
    },
    {
      title: '链接列表',
      dataIndex: 'links',
      key: 'links',
      width: 300,
      render: (links: Link[], record: LinkCategory) => (
        <div style={{ maxHeight: 120, overflow: 'auto' }}>
          {links && links.length > 0 ? (
            <List
              size="small"
              dataSource={links}
              renderItem={(link: Link) => (
                <List.Item
                  style={{
                    padding: '4px 0',
                    borderBottom: '1px solid #f0f0f0',
                  }}
                  actions={[
                    <Button
                      key="view"
                      type="text"
                      size="small"
                      icon={<EyeOutlined />}
                      onClick={() => showLinkDetailModal(link)}
                      title="查看详情"
                    />,
                    <Button
                      key="edit"
                      type="text"
                      size="small"
                      icon={<EditOutlined />}
                      onClick={() => showLinkModal(link, record.id, true)}
                      title="编辑链接"
                    />,
                    <Popconfirm
                      key="delete"
                      title="确定删除这个链接吗？"
                      onConfirm={() => handleDeleteLink(record.id, link.id)}
                      okText="确定"
                      cancelText="取消"
                    >
                      <Button
                        type="text"
                        size="small"
                        danger
                        icon={<DeleteOutlined />}
                        title="删除链接"
                      />
                    </Popconfirm>,
                  ]}
                >
                  <List.Item.Meta
                    title={
                      <Space size="small">
                        <span>{link.icon}</span>
                        <span>{link.name || '未命名'}</span>
                      </Space>
                    }
                    description={
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '12px', color: '#666' }}
                      >
                        {link.url.length > 30
                          ? `${link.url.substring(0, 30)}...`
                          : link.url}
                      </a>
                    }
                  />
                </List.Item>
              )}
            />
          ) : (
            <div
              style={{ textAlign: 'center', color: '#999', padding: '20px 0' }}
            >
              暂无链接
            </div>
          )}
        </div>
      ),
    },
    {
      title: '操作',
      key: 'action',
      width: 200,
      render: (_: any, record: LinkCategory) => (
        <Space size="small">
          <Button
            type="text"
            icon={<PlusOutlined />}
            onClick={() => showLinkModal(undefined, record.id, true)}
            title="添加链接"
          >
            添加
          </Button>
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => showCategoryModal(record)}
            title="编辑分类"
          >
            编辑
          </Button>
          <Popconfirm
            title="确定删除这个分类及其所有链接吗？"
            onConfirm={() => handleDeleteCategory(record.id)}
            okText="确定"
            cancelText="取消"
          >
            <Button
              type="text"
              danger
              icon={<DeleteOutlined />}
              title="删除分类"
            >
              删除
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Title level={2}>
        <LinkOutlined /> 链接管理面板
      </Title>
      <Paragraph>
        管理您的链接分类和链接内容，支持添加、编辑、删除等操作。
      </Paragraph>

      {/* 统计信息卡片 */}
      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col span={8}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
                {categories.length}
              </Title>
              <Paragraph style={{ margin: 0, color: '#666' }}>
                分类总数
              </Paragraph>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <Title level={3} style={{ margin: 0, color: '#52c41a' }}>
                {categories.reduce(
                  (total, cat) => total + (cat.links?.length || 0),
                  0,
                )}
              </Title>
              <Paragraph style={{ margin: 0, color: '#666' }}>
                链接总数
              </Paragraph>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <Title level={3} style={{ margin: 0, color: '#fa8c16' }}>
                {
                  categories.filter((cat) => cat.links && cat.links.length > 0)
                    .length
                }
              </Title>
              <Paragraph style={{ margin: 0, color: '#666' }}>
                活跃分类
              </Paragraph>
            </div>
          </Card>
        </Col>
      </Row>

      {/* 操作按钮 */}
      <div style={{ marginBottom: 16 }}>
        <Space>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => showCategoryModal()}
          >
            添加分类
          </Button>
          <Button
            type="default"
            icon={<LinkOutlined />}
            onClick={() => showLinkModal(undefined, undefined, false)}
            disabled={categories.length === 0}
          >
            添加链接
          </Button>
          <Button
            icon={<ReloadOutlined />}
            onClick={loadCategories}
            loading={loading}
          >
            刷新数据
          </Button>
          <Popconfirm
            title="确定清空所有数据吗？此操作不可恢复！"
            onConfirm={handleClearAll}
            okText="确定"
            cancelText="取消"
          >
            <Button danger icon={<ClearOutlined />}>
              清空数据
            </Button>
          </Popconfirm>
        </Space>
      </div>

      {/* 数据表格 */}
      {categories.length === 0 ? (
        <Card style={{ textAlign: 'center', padding: '40px 20px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>📁</div>
          <Title level={4}>暂无分类数据</Title>
          <Paragraph style={{ color: '#666', marginBottom: '24px' }}>
            您还没有创建任何链接分类，点击上方按钮开始添加吧！
          </Paragraph>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => showCategoryModal()}
          >
            创建第一个分类
          </Button>
        </Card>
      ) : (
        <Table
          dataSource={categories}
          columns={categoryColumns}
          rowKey="id"
          loading={loading}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `第 ${range[0]}-${range[1]} 条，共 ${total} 条`,
          }}
          scroll={{ x: 800 }}
        />
      )}

      {/* 分类编辑模态框 */}
      <Modal
        title={`${editingCategory ? '编辑' : '添加'}分类`}
        open={categoryModalVisible}
        onOk={handleCategorySubmit}
        onCancel={() => setCategoryModalVisible(false)}
        destroyOnClose
      >
        <Form form={categoryForm} layout="vertical">
          <Form.Item
            name="name"
            label="分类名称"
            rules={[
              { required: true, message: '请输入分类名称！' },
              { min: 1, max: 20, message: '分类名称长度应在1-20个字符之间！' },
            ]}
          >
            <Input placeholder="请输入分类名称" />
          </Form.Item>
        </Form>
      </Modal>

      {/* 链接编辑模态框 */}
      <Modal
        title={
          <Space>
            <LinkOutlined style={{ color: '#1890ff' }} />
            <span style={{ fontSize: '16px', fontWeight: '600' }}>
              {editingLink ? '编辑链接' : '添加链接'}
            </span>
          </Space>
        }
        open={linkModalVisible}
        onOk={handleLinkSubmit}
        onCancel={() => setLinkModalVisible(false)}
        destroyOnClose
        width={800}
        okText={editingLink ? '更新链接' : '添加链接'}
        cancelText="取消"
        styles={{ body: { padding: '24px' } }}
      >
        {categoryLocked && (
          <div
            style={{
              background: 'linear-gradient(90deg, #f6ffed 0%, #f0f9f0 100%)',
              border: '1px solid #b7eb8f',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '24px',
            }}
          >
            <Space>
              <span
                style={{
                  color: '#52c41a',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              >
                ✓
              </span>
              <div>
                <Text style={{ color: '#389e0d', fontWeight: '600' }}>
                  已自动选中分类
                </Text>
                <br />
                <Text style={{ color: '#52c41a', fontSize: '12px' }}>
                  若需更改分类，请从上方“添加链接”按钮进入
                </Text>
              </div>
            </Space>
          </div>
        )}

        <Form form={linkForm} layout="vertical">
          {/* 分类选择区域 */}
          <Card
            size="small"
            title={
              <Space>
                <FolderOutlined style={{ color: '#1890ff' }} />
                <span>所属分类</span>
              </Space>
            }
            style={{ marginBottom: 20 }}
            styles={{ header: { background: '#fafafa' } }}
          >
            <Form.Item
              name="categoryId"
              rules={[{ required: true, message: '请选择分类！' }]}
            >
              <Select
                placeholder="请选择一个分类"
                disabled={categoryLocked}
                size="large"
                options={categories.map((cat) => ({
                  value: cat.id,
                  label: (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '4px 0',
                      }}
                    >
                      <Space>
                        <FolderOutlined style={{ color: '#1890ff' }} />
                        <span style={{ fontWeight: '500' }}>{cat.name}</span>
                      </Space>
                      <span
                        style={{
                          color: '#999',
                          fontSize: '12px',
                          fontStyle: 'italic',
                        }}
                      >
                        {cat.links?.length || 0} 个链接
                      </span>
                    </div>
                  ),
                }))}
              />
            </Form.Item>
          </Card>

          {/* 基本信息区域 */}
          <Card
            size="small"
            title={
              <Space>
                <LinkOutlined style={{ color: '#52c41a' }} />
                <span>基本信息</span>
              </Space>
            }
            style={{ marginBottom: 20 }}
            styles={{ header: { background: '#fafafa' } }}
          >
            <Row gutter={16}>
              <Col span={16}>
                <Form.Item
                  name="name"
                  label="链接名称"
                  rules={[{ max: 30, message: '链接名称不能超过30个字符！' }]}
                >
                  <Input
                    placeholder="请输入链接名称（可选）"
                    size="large"
                    prefix={
                      <span style={{ color: '#666', fontSize: '14px' }}>
                        📝
                      </span>
                    }
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="icon"
                  label="链接图标"
                  rules={[
                    { required: true, message: '请选择图标！' },
                    { max: 10, message: '图标不能超过10个字符！' },
                  ]}
                >
                  <IconSelector />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="url"
              label="链接地址"
              rules={[
                { required: true, message: '请输入链接地址！' },
                { type: 'url', message: '请输入有效的URL地址！' },
              ]}
            >
              <Input
                placeholder="https://example.com"
                size="large"
                prefix={<GlobalOutlined style={{ color: '#1890ff' }} />}
                suffix={
                  <Tooltip title="测试链接">
                    <Button
                      type="text"
                      size="small"
                      icon={<EyeOutlined />}
                      onClick={() => {
                        const url = linkForm.getFieldValue('url');
                        if (url) {
                          try {
                            window.open(url, '_blank');
                            message.success('链接已在新窗口中打开');
                          } catch (error) {
                            message.error('无法打开链接，请检查URL格式');
                          }
                        } else {
                          message.warning('请先输入链接地址');
                        }
                      }}
                      style={{ color: '#52c41a' }}
                    />
                  </Tooltip>
                }
              />
            </Form.Item>
          </Card>

          {/* 预览区域 */}
          <Card
            size="small"
            title={
              <Space>
                <EyeOutlined style={{ color: '#fa8c16' }} />
                <span>预览效果</span>
              </Space>
            }
            style={{ background: '#fafafa' }}
            styles={{ header: { background: '#f0f0f0' } }}
          >
            <div
              style={{
                padding: '20px',
                border: '2px dashed #d9d9d9',
                borderRadius: '12px',
                textAlign: 'center',
                background: 'white',
                transition: 'all 0.3s ease',
              }}
            >
              <Form.Item dependencies={['icon', 'name', 'url']} noStyle>
                {({ getFieldValue }) => {
                  const icon = getFieldValue('icon');
                  const name = getFieldValue('name');
                  const url = getFieldValue('url');

                  return (
                    <div>
                      <div
                        style={{
                          fontSize: '48px',
                          marginBottom: '12px',
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                        }}
                      >
                        {icon || '🔗'}
                      </div>
                      <div
                        style={{
                          fontSize: '16px',
                          fontWeight: '600',
                          color: '#333',
                          marginBottom: '8px',
                          minHeight: '20px',
                        }}
                      >
                        {name || '未命名链接'}
                      </div>
                      <div
                        style={{
                          fontSize: '12px',
                          color: '#999',
                          wordBreak: 'break-all',
                          lineHeight: '1.5',
                          maxHeight: '40px',
                          overflow: 'hidden',
                        }}
                      >
                        {url
                          ? url.length > 50
                            ? `${url.substring(0, 50)}...`
                            : url
                          : 'https://example.com'}
                      </div>
                    </div>
                  );
                }}
              </Form.Item>
            </div>
            <div style={{ textAlign: 'center', marginTop: '12px' }}>
              <Text type="secondary" style={{ fontSize: '12px' }}>
                ✨ 这是链接在主页面中的显示效果预览
              </Text>
            </div>
          </Card>
        </Form>
      </Modal>

      {/* 链接详情查看模态框 */}
      <Modal
        title={
          <Space>
            <EyeOutlined />
            链接详情
          </Space>
        }
        open={detailModalVisible}
        onCancel={() => setDetailModalVisible(false)}
        footer={[
          <Button
            key="edit"
            type="primary"
            onClick={() => {
              if (viewingLink) {
                const category = categories.find((cat) =>
                  cat.links?.some((link) => link.id === viewingLink.id),
                );
                setDetailModalVisible(false);
                showLinkModal(viewingLink, category?.id, true);
              }
            }}
          >
            编辑链接
          </Button>,
          <Button key="close" onClick={() => setDetailModalVisible(false)}>
            关闭
          </Button>,
        ]}
        width={600}
      >
        {viewingLink && (
          <div>
            <Descriptions column={1} bordered>
              <Descriptions.Item label="链接ID">
                {viewingLink.id}
              </Descriptions.Item>
              <Descriptions.Item label="图标">
                <Avatar
                  shape="square"
                  size={40}
                  style={{ backgroundColor: '#f0f0f0' }}
                >
                  <span style={{ fontSize: '20px' }}>{viewingLink.icon}</span>
                </Avatar>
              </Descriptions.Item>
              <Descriptions.Item label="名称">
                {viewingLink.name || (
                  <span style={{ color: '#999' }}>未命名</span>
                )}
              </Descriptions.Item>
              <Descriptions.Item label="链接地址">
                <div>
                  <div style={{ marginBottom: 8 }}>
                    <a
                      href={viewingLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ wordBreak: 'break-all' }}
                    >
                      {viewingLink.url}
                    </a>
                  </div>
                  <Space>
                    <Button
                      size="small"
                      icon={<GlobalOutlined />}
                      onClick={() => window.open(viewingLink.url, '_blank')}
                    >
                      打开链接
                    </Button>
                    <Button
                      size="small"
                      onClick={() => {
                        navigator.clipboard.writeText(viewingLink.url);
                        message.success('链接地址已复制到剪贴板');
                      }}
                    >
                      复制链接
                    </Button>
                  </Space>
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="所属分类">
                {(() => {
                  const category = categories.find((cat) =>
                    cat.links?.some((link) => link.id === viewingLink.id),
                  );
                  return category ? (
                    <Space>
                      <FolderOutlined />
                      {category.name}
                    </Space>
                  ) : (
                    '未知分类'
                  );
                })()}
              </Descriptions.Item>
            </Descriptions>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Links;
