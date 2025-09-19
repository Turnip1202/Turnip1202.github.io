import React, { useState, useEffect } from 'react';
import {
  Card,
  Table,
  Button,
  Space,
  Modal,
  Form,
  Input,
  Select,
  Tag,
  Typography,
  Row,
  Col,
  Statistic,
  Alert,
  Popconfirm,
  message,
  Descriptions,
  Timeline,
  Tooltip,
  Divider
} from 'antd';
import {
  SaveOutlined,
  HistoryOutlined,
  RollbackOutlined,
  DeleteOutlined,
  EyeOutlined,
  ExportOutlined,
  ImportOutlined,
  SyncOutlined,
  TagOutlined,
  ClockCircleOutlined,
  BranchesOutlined,
  UploadOutlined
} from '@ant-design/icons';
import type { ConfigVersion, VersionCreateOptions } from '@/types/version';
import { configVersionManager } from '@/utils/version';

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const VersionAdmin: React.FC = () => {
  const [versions, setVersions] = useState<ConfigVersion[]>([]);
  const [loading, setLoading] = useState(false);
  
  // 模态框状态
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [compareModalVisible, setCompareModalVisible] = useState(false);
  const [importModalVisible, setImportModalVisible] = useState(false);
  
  // 选中的版本
  const [selectedVersion, setSelectedVersion] = useState<ConfigVersion | null>(null);
  const [compareVersions, setCompareVersions] = useState<[string, string] | null>(null);
  
  // 表单
  const [createForm] = Form.useForm();
  const [importData, setImportData] = useState('');

  // 加载版本列表
  const loadVersions = () => {
    setLoading(true);
    try {
      const allVersions = configVersionManager.getAllVersions();
      setVersions(allVersions);
    } catch (error) {
      message.error('加载版本列表失败');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadVersions();
  }, []);

  // 创建新版本
  const handleCreateVersion = async () => {
    try {
      const values = await createForm.validateFields();
      const options: VersionCreateOptions = {
        name: values.name,
        description: values.description,
        tags: values.tags ? values.tags.split(',').map((tag: string) => tag.trim()) : []
      };
      
      configVersionManager.createVersion(options);
      message.success('版本创建成功！');
      setCreateModalVisible(false);
      createForm.resetFields();
      loadVersions();
    } catch (error) {
      console.error('创建版本失败:', error);
    }
  };

  // 恢复版本
  const handleRestoreVersion = (id: string) => {
    setLoading(true);
    try {
      const success = configVersionManager.restoreVersion(id);
      if (success) {
        message.success('版本恢复成功！页面将刷新以应用更改。');
        setTimeout(() => window.location.reload(), 1500);
      } else {
        message.error('版本恢复失败');
      }
    } catch (error) {
      message.error('恢复版本时发生错误');
    } finally {
      setLoading(false);
    }
  };

  // 删除版本
  const handleDeleteVersion = (id: string) => {
    const success = configVersionManager.deleteVersion(id);
    if (success) {
      message.success('版本删除成功');
      loadVersions();
    } else {
      message.error('版本删除失败');
    }
  };

  // 查看版本详情
  const handleViewDetails = (version: ConfigVersion) => {
    setSelectedVersion(version);
    setDetailModalVisible(true);
  };

  // 自动保存
  const handleAutoSave = () => {
    configVersionManager.autoSave();
    message.success('自动保存完成');
    loadVersions();
  };

  // 导出版本数据
  const handleExport = () => {
    const data = configVersionManager.exportVersions();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `config_versions_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    message.success('版本数据导出成功');
  };

  // 导入版本数据
  const handleImport = () => {
    if (!importData.trim()) {
      message.error('请输入导入数据');
      return;
    }
    
    const success = configVersionManager.importVersions(importData);
    if (success) {
      message.success('版本数据导入成功');
      setImportModalVisible(false);
      setImportData('');
      loadVersions();
    } else {
      message.error('导入失败，请检查数据格式');
    }
  };

  // 处理文件上传
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    if (!file.name.endsWith('.json')) {
      message.error('请选择 JSON 格式的文件');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      if (content) {
        setImportData(content);
        message.success('文件读取成功，请检查数据后点击导入');
      }
    };
    
    reader.onerror = () => {
      message.error('文件读取失败');
    };
    
    reader.readAsText(file);
    
    // 清空 input，允许重复选择同一文件
    event.target.value = '';
  };

  // 清理自动保存
  const handleCleanupAutoSaves = () => {
    const deletedCount = configVersionManager.cleanupAutoSaves(5);
    message.success(`清理了 ${deletedCount} 个旧的自动保存版本`);
    loadVersions();
  };

  // 表格列配置
  const columns = [
    {
      title: '版本名称',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: ConfigVersion) => (
        <Space>
          <Text strong={record.id === configVersionManager.getCurrentVersionId()}>
            {text}
          </Text>
          {record.id === configVersionManager.getCurrentVersionId() && (
            <Tag color="green">当前</Tag>
          )}
          {record.isAutoSaved && <Tag color="blue">自动</Tag>}
        </Space>
      ),
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
      render: (text: string) => text || '-',
    },
    {
      title: '标签',
      dataIndex: 'tags',
      key: 'tags',
      render: (tags: string[]) => (
        <>
          {tags?.map(tag => (
            <Tag key={tag} icon={<TagOutlined />}>{tag}</Tag>
          ))}
        </>
      ),
    },
    {
      title: '创建时间',
      dataIndex: 'timestamp',
      key: 'timestamp',
      render: (timestamp: number) => new Date(timestamp).toLocaleString('zh-CN'),
      sorter: (a: ConfigVersion, b: ConfigVersion) => a.timestamp - b.timestamp,
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: ConfigVersion) => (
        <Space size="small">
          <Tooltip title="查看详情">
            <Button
              type="text"
              icon={<EyeOutlined />}
              onClick={() => handleViewDetails(record)}
            />
          </Tooltip>
          <Tooltip title="恢复此版本">
            <Popconfirm
              title="确定恢复到此版本吗？"
              description="当前配置将被覆盖，建议先创建当前版本的备份。"
              onConfirm={() => handleRestoreVersion(record.id)}
              okText="确定"
              cancelText="取消"
            >
              <Button
                type="text"
                icon={<RollbackOutlined />}
                disabled={record.id === configVersionManager.getCurrentVersionId()}
              />
            </Popconfirm>
          </Tooltip>
          <Tooltip title="删除版本">
            <Popconfirm
              title="确定删除此版本吗？"
              onConfirm={() => handleDeleteVersion(record.id)}
              okText="确定"
              cancelText="取消"
            >
              <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
                disabled={record.id === configVersionManager.getCurrentVersionId()}
              />
            </Popconfirm>
          </Tooltip>
        </Space>
      ),
    },
  ];
  return (
    <div style={{ padding: 24 }}>
      <Title level={2}>
        <BranchesOutlined /> 配置版本管理
      </Title>
      <Paragraph>
        管理网站配置的不同版本，支持创建、恢复、比较和导入导出版本。
      </Paragraph>

      {/* 统计信息 */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col span={6}>
          <Card>
            <Statistic
              title="总版本数"
              value={versions.length}
              prefix={<HistoryOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="自动保存版本"
              value={versions.filter(v => v.isAutoSaved).length}
              prefix={<SyncOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="手动创建版本"
              value={versions.filter(v => !v.isAutoSaved).length}
              prefix={<SaveOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="当前版本"
              value={configVersionManager.getCurrentVersionId() ? '已设置' : '未设置'}
              prefix={<ClockCircleOutlined />}
            />
          </Card>
        </Col>
      </Row>

      {/* 操作按钮 */}
      <div style={{ marginBottom: 16 }}>
        <Space>
          <Button
            type="primary"
            icon={<SaveOutlined />}
            onClick={() => setCreateModalVisible(true)}
          >
            创建版本
          </Button>
          <Button
            icon={<SyncOutlined />}
            onClick={handleAutoSave}
          >
            立即自动保存
          </Button>
          <Button
            icon={<ExportOutlined />}
            onClick={handleExport}
          >
            导出版本
          </Button>
          <Button
            icon={<ImportOutlined />}
            onClick={() => setImportModalVisible(true)}
          >
            导入版本
          </Button>
          <Button
            icon={<DeleteOutlined />}
            onClick={handleCleanupAutoSaves}
          >
            清理自动保存
          </Button>
        </Space>
      </div>

      {/* 版本列表 */}
      <Card>
        <Table
          columns={columns}
          dataSource={versions}
          rowKey="id"
          loading={loading}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `共 ${total} 个版本`,
          }}
        />
      </Card>

      {/* 创建版本模态框 */}
      <Modal
        title={<Space><SaveOutlined />创建新版本</Space>}
        open={createModalVisible}
        onOk={handleCreateVersion}
        onCancel={() => {
          setCreateModalVisible(false);
          createForm.resetFields();
        }}
        width={600}
      >
        <Form form={createForm} layout="vertical">
          <Form.Item
            name="name"
            label="版本名称"
            rules={[{ required: true, message: '请输入版本名称' }]}
          >
            <Input placeholder="例如: 主页改版 v1.0" />
          </Form.Item>
          <Form.Item
            name="description"
            label="版本描述"
          >
            <TextArea
              rows={3}
              placeholder="描述此版本的主要变更内容..."
            />
          </Form.Item>
          <Form.Item
            name="tags"
            label="标签"
            help="多个标签用逗号分隔"
          >
            <Input placeholder="例如: 主页,样式,功能" />
          </Form.Item>
        </Form>
      </Modal>

      {/* 版本详情模态框 */}
      <Modal
        title={<Space><EyeOutlined />版本详情</Space>}
        open={detailModalVisible}
        onCancel={() => setDetailModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setDetailModalVisible(false)}>
            关闭
          </Button>
        ]}
        width={800}
      >
        {selectedVersion && (
          <div>
            <Descriptions column={2} bordered>
              <Descriptions.Item label="版本ID">
                {selectedVersion.id}
              </Descriptions.Item>
              <Descriptions.Item label="版本名称">
                {selectedVersion.name}
              </Descriptions.Item>
              <Descriptions.Item label="创建时间">
                {new Date(selectedVersion.timestamp).toLocaleString('zh-CN')}
              </Descriptions.Item>
              <Descriptions.Item label="版本类型">
                {selectedVersion.isAutoSaved ? '自动保存' : '手动创建'}
              </Descriptions.Item>
              <Descriptions.Item label="描述" span={2}>
                {selectedVersion.description || '无描述'}
              </Descriptions.Item>
              <Descriptions.Item label="标签" span={2}>
                {selectedVersion.tags?.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                )) || '无标签'}
              </Descriptions.Item>
            </Descriptions>
            
            <Divider>配置数据预览</Divider>
            <pre style={{ 
              background: '#f5f5f5', 
              padding: '12px', 
              borderRadius: '4px',
              fontSize: '12px',
              maxHeight: '300px',
              overflow: 'auto'
            }}>
              {JSON.stringify(selectedVersion.data, null, 2)}
            </pre>
          </div>
        )}
      </Modal>

      {/* 导入版本模态框 */}
      <Modal
        title={<Space><ImportOutlined />导入版本数据</Space>}
        open={importModalVisible}
        onOk={handleImport}
        onCancel={() => {
          setImportModalVisible(false);
          setImportData('');
        }}
        width={800}
      >
        <Alert
          message="导入说明"
          description="支持选择JSON文件或直接粘贴从导出功能生成的数据。导入将覆盖现有的版本数据，请谨慎操作。"
          type="warning"
          style={{ marginBottom: 16 }}
        />
        
        {/* 文件上传区域 */}
        <div style={{ marginBottom: 16 }}>
          <Text strong>选择文件：</Text>
          <div style={{ 
            marginTop: 8,
            padding: '16px',
            border: '2px dashed #d9d9d9',
            borderRadius: '6px',
            textAlign: 'center',
            background: '#fafafa'
          }}>
            <input
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              style={{ display: 'none' }}
              id="version-file-input"
            />
            <label htmlFor="version-file-input" style={{ cursor: 'pointer' }}>
              <div>
                <UploadOutlined style={{ fontSize: '24px', color: '#1890ff', marginBottom: '8px' }} />
                <div style={{ color: '#666' }}>点击选择 JSON 文件</div>
                <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>
                  支持从版本管理导出的 .json 文件
                </div>
              </div>
            </label>
          </div>
        </div>
        
        <Divider>或</Divider>
        
        {/* 手动输入区域 */}
        <div>
          <Text strong>直接粘贴 JSON 数据：</Text>
          <TextArea
            rows={12}
            value={importData}
            onChange={(e) => setImportData(e.target.value)}
            placeholder="请粘贴版本数据的 JSON 格式..."
            style={{ fontFamily: 'monospace', fontSize: '12px', marginTop: 8 }}
          />
        </div>
        
        {/* 数据预览 */}
        {importData && (
          <div style={{ marginTop: 16 }}>
            <Text strong>数据预览：</Text>
            <div style={{ 
              marginTop: 8,
              background: '#f5f5f5', 
              padding: '12px',
              borderRadius: '6px',
              maxHeight: '150px',
              overflow: 'auto'
            }}>
              <pre style={{ margin: 0, fontSize: '11px', color: '#666' }}>
                {(() => {
                  try {
                    const parsed = JSON.parse(importData);
                    const preview = {
                      版本数量: parsed.versions?.length || 0,
                      最大版本数: parsed.maxVersions || 'N/A',
                      当前版本: parsed.currentVersionId || '无',
                      示例版本: parsed.versions?.[0] ? {
                        名称: parsed.versions[0].name,
                        创建时间: new Date(parsed.versions[0].timestamp).toLocaleString('zh-CN'),
                        是否自动保存: parsed.versions[0].isAutoSaved || false
                      } : '无'
                    };
                    return JSON.stringify(preview, null, 2);
                  } catch {
                    return '无效的JSON格式';
                  }
                })()
                }
              </pre>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );

};

export default VersionAdmin;