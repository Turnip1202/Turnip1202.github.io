import React, { useState, useEffect } from 'react';
import {
  Card,
  Form,
  Input,
  Button,
  Space,
  message,
  Divider,
  Typography,
  Row,
  Col,
  Switch,
  Upload,
  Image,
  Alert,
  Statistic,
  Modal,
} from 'antd';
import {
  SaveOutlined,
  ReloadOutlined,
  SettingOutlined,
  ClearOutlined,
  UploadOutlined,
  GlobalOutlined,
  RedoOutlined,
  ExclamationCircleOutlined,
  DownloadOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import { siteManager, themeManager, linksManager } from '@/utils';
import { themeConfig } from '@/config/theme';
import { siteConfig as defaultSiteConfig } from '@/config/site';
import { linkCategories, searchEngines } from '@/config/links';
import type { ISiteConfig } from '@/types';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const SiteAdmin: React.FC = () => {
  const [form] = Form.useForm();
  const [siteConfig, setSiteConfig] = useState<ISiteConfig | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [resetModalVisible, setResetModalVisible] = useState(false);
  const [importModalVisible, setImportModalVisible] = useState(false);
  const [previewModalVisible, setPreviewModalVisible] = useState(false);
  const [backupBeforeReset, setBackupBeforeReset] = useState(true);
  const [importData, setImportData] = useState<string>('');
  const [importType, setImportType] = useState<'config' | 'full'>('config');

  useEffect(() => {
    loadSiteConfig();
  }, []);

  const loadSiteConfig = () => {
    const config = siteManager.getConfig();
    console.log('loadSiteConfig - 获取到的配置:', config); // 调试信息
    setSiteConfig(config);
    
    const formValues = {
      title: config.title,
      copyright: config.copyright.text,
      description: config.description || '',
      keywords: config.keywords || '',
      author: config.author || '',
      favicon: config.favicon || '',
    };
    
    console.log('loadSiteConfig - 设置表单值:', formValues); // 调试信息
    form.setFieldsValue(formValues);
    
    // 验证表单值是否正确设置
    setTimeout(() => {
      const actualFavicon = form.getFieldValue('favicon');
      console.log('loadSiteConfig - 设置后实际的favicon值:', actualFavicon);
    }, 50);
    
    // 初始化favicon预览
    setTimeout(() => {
      const favicon = config.favicon as string;
      if (favicon) {
        const previewEl = document.getElementById('favicon-preview');
        if (previewEl) {
          const img = document.createElement('img');
          img.onload = () => {
            previewEl.style.backgroundImage = `url(${favicon})`;
            previewEl.style.backgroundColor = 'transparent';
          };
          img.onerror = () => {
            previewEl.style.backgroundImage = 'none';
            previewEl.style.backgroundColor = '#ff4d4f';
          };
          img.src = favicon;
        }
      }
    }, 100);
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      console.log('handleSave - 获取到的表单值:', values);
      
      // 额外检查单个favicon字段值
      const faviconValue = form.getFieldValue('favicon');
      console.log('handleSave - 单独获取favicon字段:', faviconValue);
      console.log('handleSave - favicon类型:', typeof faviconValue);
      console.log('handleSave - favicon长度:', faviconValue ? faviconValue.length : 'undefined');
      
      // 更新标题
      siteManager.updateTitle(values.title);
      
      // 更新版权信息
      siteManager.updateCopyright(values.copyright);

      // 添加其他配置项
      if (values.description) {
        siteManager.addConfigItem('description', values.description);
      }
      if (values.keywords) {
        siteManager.addConfigItem('keywords', values.keywords);
      }
      if (values.author) {
        siteManager.addConfigItem('author', values.author);
      }
      if (values.favicon && values.favicon.trim()) {
        console.log('handleSave - 保存favicon:', values.favicon);
        siteManager.addConfigItem('favicon', values.favicon);
        (siteManager as any).updateFavicon(values.favicon);
      } else {
        console.log('handleSave - favicon为空，删除配置');
        siteManager.deleteConfigItem('favicon');
      }

      message.success('网站配置保存成功！');
      setHasChanges(false);
      loadSiteConfig();
    } catch (error) {
      message.error('保存失败，请检查输入');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    loadSiteConfig();
    setHasChanges(false);
    message.info('配置已重置');
  };

  const handleFormChange = () => {
    setHasChanges(true);
  };

  const clearLocalStorage = () => {
    siteManager.clearStorage();
    message.success('本地存储已清除');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const exportConfig = () => {
    const config = siteManager.getConfig();
    const dataStr = JSON.stringify(config, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'turnip-site-config.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    message.success('配置已导出');
  };

  const exportFullBackup = () => {
    const fullBackup = {
      site: siteManager.getConfig(),
      theme: themeManager.getConfig(),
      links: {
        categories: linksManager.getAllCategories(),
        searchEngines: linksManager.getAllSearchEngines(),
      },
      timestamp: new Date().toISOString(),
      version: '1.0.0',
    };
    
    const dataStr = JSON.stringify(fullBackup, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `turnip-full-backup-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    message.success('完整备份已导出');
  };

  const handleResetWebsite = async () => {
    try {
      setLoading(true);
      
      // 如果需要备份，先导出完整备份
      if (backupBeforeReset) {
        exportFullBackup();
        // 等待一下让用户看到备份成功的消息
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      // 重置所有数据
      siteManager.resetToDefault(defaultSiteConfig);
      themeManager.resetToDefault(themeConfig);
      linksManager.resetToDefault(linkCategories, searchEngines);
      
      message.success('网站重置成功！页面将2秒后刷新');
      
      // 延迟刷新页面
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      
    } catch (error) {
      message.error('重置失败，请重试');
    } finally {
      setLoading(false);
      setResetModalVisible(false);
    }
  };

  const handleImportData = async () => {
    if (!importData.trim()) {
      message.error('请先输入要导入的数据');
      return;
    }

    try {
      setLoading(true);
      const parsedData = JSON.parse(importData);
      
      if (importType === 'config') {
        // 导入网站配置
        if (!parsedData.title || !parsedData.copyright) {
          message.error('无效的网站配置格式');
          return;
        }
        
        siteManager.resetToDefault(parsedData);
        message.success('网站配置导入成功！');
        
      } else if (importType === 'full') {
        // 导入完整备份
        if (!parsedData.site || !parsedData.theme || !parsedData.links) {
          message.error('无效的完整备份格式');
          return;
        }
        
        // 逐个恢复各模块数据
        siteManager.resetToDefault(parsedData.site);
        themeManager.resetToDefault(parsedData.theme);
        linksManager.resetToDefault(
          parsedData.links.categories || [],
          parsedData.links.searchEngines || []
        );
        
        message.success('完整备份导入成功！');
      }
      
      // 重新加载配置
      loadSiteConfig();
      setImportModalVisible(false);
      setImportData('');
      
      // 延迟刷新页面以确保所有数据同步
      setTimeout(() => {
        window.location.reload();
      }, 1500);
      
    } catch (error) {
      console.error('导入失败:', error);
      message.error('数据格式错误，请检查导入的JSON格式是否正确');
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    if (file.type !== 'application/json' && !file.name.endsWith('.json')) {
      message.error('请选择JSON格式的文件');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setImportData(content);
      
      // 自动识别导入类型
      try {
        const parsed = JSON.parse(content);
        if (parsed.site && parsed.theme && parsed.links) {
          setImportType('full');
          message.info('检测到完整备份文件');
        } else if (parsed.title && parsed.copyright) {
          setImportType('config');
          message.info('检测到网站配置文件');
        }
      } catch {
        // 忽略解析错误，用户可以手动选择类型
      }
    };
    
    reader.readAsText(file);
  };

  const generateFullPreview = () => {
    const fullConfig = {
      // 网站基本信息
      site: {
        title: siteManager.getConfig().title,
        copyright: siteManager.getConfig().copyright.text,
        description: siteManager.getConfig().description || '未设置',
        keywords: siteManager.getConfig().keywords || '未设置',
        author: siteManager.getConfig().author || '未设置',
        favicon: siteManager.getConfig().favicon || '未设置',
      },
      // 主题配置
      theme: {
        default: themeManager.getDefaultTheme(),
        presets: themeManager.getPresets(),
        totalThemes: themeManager.getPresets().length + 1, // +1 for default
      },
      // 链接数据
      links: {
        categories: linksManager.getAllCategories(),
        totalCategories: linksManager.getAllCategories().length,
        totalLinks: linksManager.getAllCategories().reduce((total, cat) => total + (cat.links?.length || 0), 0),
        searchEngines: linksManager.getAllSearchEngines(),
        totalSearchEngines: linksManager.getAllSearchEngines().length,
      },
      // 系统信息
      system: {
        storageSize: getStorageSize(),
        lastModified: new Date().toISOString(),
        version: '1.0.0',
      }
    };
    
    return fullConfig;
  };

  const getStorageSize = () => {
    let totalSize = 0;
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key) && key.startsWith('turnip')) {
        totalSize += localStorage[key].length;
      }
    }
    return (totalSize / 1024).toFixed(2); // KB
  };

  return (
    <div style={{ padding: 24 }}>
      <Title level={2}>
        <SettingOutlined /> 网站配置面板
      </Title>
      <Paragraph>
        管理网站的基本信息、SEO配置和系统设置。
      </Paragraph>

      {/* 系统状态 */}
      <Card title="系统状态" style={{ marginBottom: 16 }}>
        <Row gutter={16}>
          <Col span={6}>
            <Statistic
              title="本地存储使用"
              value={getStorageSize()}
              suffix="KB"
              valueStyle={{ color: '#1890ff' }}
            />
          </Col>
          <Col span={6}>
            <Statistic
              title="主题数量"
              value={JSON.parse(localStorage.getItem('turnip-theme-config') || '{"presets":[]}').presets.length}
              valueStyle={{ color: '#52c41a' }}
            />
          </Col>
          <Col span={6}>
            <Statistic
              title="链接分类"
              value={JSON.parse(localStorage.getItem('turnip_link_categories') || '[]').length}
              valueStyle={{ color: '#722ed1' }}
            />
          </Col>
          <Col span={6}>
            <Statistic
              title="配置版本"
              value="1.0.0"
              valueStyle={{ color: '#eb2f96' }}
            />
          </Col>
        </Row>
      </Card>

      {/* 基本配置 */}
      <Card title="基本信息" style={{ marginBottom: 16 }}>
        <Form
          form={form}
          layout="vertical"
          onValuesChange={handleFormChange}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="title"
                label="网站标题"
                rules={[{ required: true, message: '请输入网站标题' }]}
              >
                <Input 
                  placeholder="例如: Turnip起始页"
                  prefix={<GlobalOutlined />}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="author"
                label="作者"
              >
                <Input placeholder="例如: Turnip1202" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="description"
            label="网站描述"
          >
            <TextArea
              rows={3}
              placeholder="网站的简短描述，用于SEO优化"
            />
          </Form.Item>

          <Form.Item
            name="keywords"
            label="关键词"
          >
            <Input placeholder="多个关键词用逗号分隔，例如: 起始页,导航,工具" />
          </Form.Item>

          <Form.Item
            name="copyright"
            label="版权信息"
            rules={[{ required: true, message: '请输入版权信息' }]}
          >
            <Input placeholder="例如: © 2024 Turnip1202. All rights reserved." />
          </Form.Item>

<Space.Compact
  block // 使 Compact 占满父容器宽度
  style={{
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
  }}
>
  <div
    style={{
      display: 'flex',
      width: '100%',
      alignItems: 'center',
    }}
  >
    <Form.Item
      name="favicon"
      label="网站图标URL"
      style={{
        flex: 1,
        marginBottom: 0, // 避免 Form.Item 默认 margin 影响垂直对齐
      }}
    >
      <Input
        placeholder="例如: /favicon.ico"
        onChange={(e) => {
          const value = e.target.value;
          handleFormChange(); // 标记表单变化

          // 可选：setFieldValue 不是必须的，Form 会自动管理
          // form.setFieldValue('favicon', value); // Ant Design v5+ 自动同步

          // 实时预览逻辑
          if (value && value.trim()) {
            setTimeout(() => {
                const img = document.createElement('img');
              img.onload = () => {
                const previewEl = document.getElementById('favicon-preview');
                if (previewEl) {
                  previewEl.style.backgroundImage = `url(${value})`;
                  previewEl.style.backgroundColor = 'transparent';
                }
              };
              img.onerror = () => {
                const previewEl = document.getElementById('favicon-preview');
                if (previewEl) {
                  previewEl.style.backgroundImage = 'none';
                  previewEl.style.backgroundColor = '#ff4d4f';
                }
              };
              img.src = value;
            }, 500);
          } else {
            const previewEl = document.getElementById('favicon-preview');
            if (previewEl) {
              previewEl.style.backgroundImage = 'none';
              previewEl.style.backgroundColor = '#f0f0f0';
            }
          }
        }}
      />
    </Form.Item>

    {/* 预览图标 */}
    <div
      id="favicon-preview"
      style={{
        width: '32px',
        height: '32px',
        border: '1px solid #d9d9d9',
        borderLeft: 'none',
        borderRadius: '0 6px 6px 0',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        marginTop: '30px',
        color: '#666',
        marginLeft: '-1px', // 与 input 边框衔接
      }}
      title="图标预览"
    >
      🌐
    </div>
  </div>

  {/* 提示文字 */}
  <div
    style={{
      fontSize: '12px',
      color: '#666',
      marginTop: '4px',
      paddingLeft: '12px', // 与 label 对齐
    }}
  >
    支持 .ico、.png、.svg 等格式，建议尺寸 16×16 或 32×32 像素
  </div>
</Space.Compact>
        </Form>

        {hasChanges && (
          <Alert
            message="您有未保存的更改"
            description="请记得保存您的配置更改"
            type="warning"
            showIcon
            style={{ marginBottom: 16 }}
          />
        )}

        <Space>
          <Button
            type="primary"
            icon={<SaveOutlined />}
            loading={loading}
            onClick={handleSave}
            disabled={!hasChanges}
          >
            保存配置
          </Button>
          <Button
            icon={<ReloadOutlined />}
            onClick={handleReset}
            disabled={!hasChanges}
          >
            重置
          </Button>
        </Space>
      </Card>

      {/* 高级设置 */}
      <Card title="高级设置" style={{ marginBottom: 16 }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Alert
            message="危险操作"
            description="以下操作可能会影响应用的正常使用，请谨慎操作"
            type="error"
            showIcon
          />
          
          {/* 备份与导入导出 */}
          <div>
            <Title level={5} style={{ marginBottom: 8 }}>💾 数据管理</Title>
            <Space wrap>
              <Button
                icon={<DownloadOutlined />}
                onClick={exportConfig}
              >
                导出网站配置
              </Button>
              
              <Button
                type="primary"
                icon={<DownloadOutlined />}
                onClick={exportFullBackup}
              >
                导出完整备份
              </Button>
              
              <Button
                type="dashed"
                icon={<UploadOutlined />}
                onClick={() => setImportModalVisible(true)}
              >
                导入数据
              </Button>
              
              <Button
                type="default"
                icon={<EyeOutlined />}
                onClick={() => setPreviewModalVisible(true)}
              >
                配置预览
              </Button>
            </Space>
          </div>
          
          {/* 数据清理 */}
          <div>
            <Title level={5} style={{ marginBottom: 8 }}>🗑️ 数据清理</Title>
            <Space wrap>
              <Button
                danger
                icon={<ClearOutlined />}
                onClick={clearLocalStorage}
              >
                清除所有数据
              </Button>
              
              <Button
                danger
                type="primary"
                icon={<RedoOutlined />}
                onClick={() => setResetModalVisible(true)}
              >
                重置网站
              </Button>
            </Space>
          </div>
        </Space>
      </Card>

      {/* 当前配置预览 */}
      {siteConfig && (
        <Card title="当前配置预览">
          <div style={{ background: '#f5f5f5', padding: 16, borderRadius: 6 }}>
            <pre style={{ margin: 0, fontSize: 12 }}>
              {JSON.stringify(siteConfig, null, 2)}
            </pre>
          </div>
        </Card>
      )}

      {/* 重置网站确认模态框 */}
      <Modal
        title={
          <Space>
            <ExclamationCircleOutlined style={{ color: '#ff4d4f' }} />
            <span>重置网站</span>
          </Space>
        }
        open={resetModalVisible}
        onOk={handleResetWebsite}
        onCancel={() => setResetModalVisible(false)}
        okText="确认重置"
        cancelText="取消"
        okButtonProps={{ danger: true, loading }}
        width={600}
        centered
      >
        <div style={{ padding: '20px 0' }}>
          <Alert
            message="警告：此操作不可逆转！"
            description="这将会清除所有当前数据并重置为默认配置"
            type="error"
            showIcon
            style={{ marginBottom: 20 }}
          />
          
          <div style={{ marginBottom: 16 }}>
            <Text strong>重置将影响的数据：</Text>
            <ul style={{ marginTop: 8, paddingLeft: 20 }}>
              <li>🌐 网站配置（标题、版权、SEO信息等）</li>
              <li>🎨 主题设置（自定义主题将被清除）</li>
              <li>🔗 链接数据（所有分类和链接）</li>
              <li>🔍 搜索引擎配置</li>
            </ul>
          </div>
          
          <div style={{ marginBottom: 16 }}>
            <Text strong>重置后将恢复为：</Text>
            <ul style={{ marginTop: 8, paddingLeft: 20 }}>
              <li>✅ 默认网站标题和信息</li>
              <li>✅ 默认主题集合（渐变紫、晨光蓝、夜空）</li>
              <li>✅ 默认链接分类和示例链接</li>
              <li>✅ 默认搜索引擎（百度、谷歌、必应）</li>
            </ul>
          </div>
          
          <div style={{ 
            background: '#f6ffed', 
            border: '1px solid #b7eb8f', 
            borderRadius: '6px', 
            padding: '12px' 
          }}>
            <Space>
              <input 
                type="checkbox" 
                checked={backupBeforeReset}
                onChange={(e) => setBackupBeforeReset(e.target.checked)}
                id="backup-checkbox"
              />
              <label htmlFor="backup-checkbox" style={{ cursor: 'pointer' }}>
                <Text style={{ color: '#52c41a' }}>
                  在重置前自动导出完整备份（建议勾选）
                </Text>
              </label>
            </Space>
          </div>
        </div>
      </Modal>

      {/* 导入数据模态框 */}
      <Modal
        title={
          <Space>
            <UploadOutlined style={{ color: '#1890ff' }} />
            <span>导入数据</span>
          </Space>
        }
        open={importModalVisible}
        onOk={handleImportData}
        onCancel={() => {
          setImportModalVisible(false);
          setImportData('');
        }}
        okText="开始导入"
        cancelText="取消"
        okButtonProps={{ loading }}
        width={700}
        centered
      >
        <div style={{ padding: '20px 0' }}>
          <Alert
            message="数据导入说明"
            description="支持导入之前导出的网站配置或完整备份文件，导入后将覆盖对应的配置项"
            type="info"
            showIcon
            style={{ marginBottom: 20 }}
          />
          
          {/* 导入类型选择 */}
          <div style={{ marginBottom: 16 }}>
            <Text strong>导入类型：</Text>
            <div style={{ marginTop: 8 }}>
              <Space>
                <Button
                  type={importType === 'config' ? 'primary' : 'default'}
                  onClick={() => setImportType('config')}
                  size="small"
                >
                  🌐 网站配置
                </Button>
                <Button
                  type={importType === 'full' ? 'primary' : 'default'}
                  onClick={() => setImportType('full')}
                  size="small"
                >
                  📋 完整备份
                </Button>
              </Space>
            </div>
          </div>
          
          {/* 文件上传 */}
          <div style={{ marginBottom: 16 }}>
            <Text strong>选择文件：</Text>
            <div style={{ marginTop: 8 }}>
              <input
                type="file"
                accept=".json"
                onChange={handleFileUpload}
                style={{
                  padding: '8px',
                  border: '1px solid #d9d9d9',
                  borderRadius: '6px',
                  width: '100%'
                }}
              />
            </div>
          </div>
          
          {/* 手动输入 */}
          <div style={{ marginBottom: 16 }}>
            <Text strong>或手动粘贴JSON数据：</Text>
            <div style={{ marginTop: 8 }}>
              <Input.TextArea
                value={importData}
                onChange={(e) => setImportData(e.target.value)}
                placeholder={
                  importType === 'config' 
                    ? '粘贴网站配置的JSON数据...'
                    : '粘贴完整备份的JSON数据...'
                }
                rows={8}
                style={{ fontFamily: 'monospace', fontSize: '12px' }}
              />
            </div>
          </div>
          
          {/* 导入预览 */}
          {importData && (
            <div>
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
                      return JSON.stringify(parsed, null, 2).substring(0, 500) + 
                        (JSON.stringify(parsed).length > 500 ? '...' : '');
                    } catch {
                      return '无效的JSON格式';
                    }
                  })()}
                </pre>
              </div>
            </div>
          )}
        </div>
      </Modal>

      {/* 配置预览模态框 */}
      <Modal
        title={
          <Space>
            <EyeOutlined style={{ color: '#52c41a' }} />
            <span>当前网站配置预览</span>
          </Space>
        }
        open={previewModalVisible}
        onCancel={() => setPreviewModalVisible(false)}
        footer={[
          <Button key="export" onClick={() => {
            const config = generateFullPreview();
            const dataStr = JSON.stringify(config, null, 2);
            const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', `turnip-config-preview-${new Date().toISOString().split('T')[0]}.json`);
            linkElement.click();
            message.success('配置预览已导出');
          }}>
            导出预览
          </Button>,
          <Button key="close" type="primary" onClick={() => setPreviewModalVisible(false)}>
            关闭
          </Button>
        ]}
        width={900}
        centered
        style={{ top: 20 }}
      >
        {(() => {
          const fullConfig = generateFullPreview();
          return (
            <div style={{ maxHeight: '70vh', overflow: 'auto' }}>
              {/* 网站基本信息 */}
              <Card size="small" title="🌐 网站基本信息" style={{ marginBottom: 16 }}>
                <Row gutter={[16, 8]}>
                  <Col span={12}>
                    <Text strong>网站标题：</Text>
                    <div style={{ marginTop: 4, padding: '4px 8px', background: '#f5f5f5', borderRadius: '4px' }}>
                      {fullConfig.site.title}
                    </div>
                  </Col>
                  <Col span={12}>
                    <Text strong>作者：</Text>
                    <div style={{ marginTop: 4, padding: '4px 8px', background: '#f5f5f5', borderRadius: '4px' }}>
                      {fullConfig.site.author}
                    </div>
                  </Col>
                  <Col span={24}>
                    <Text strong>版权信息：</Text>
                    <div style={{ marginTop: 4, padding: '4px 8px', background: '#f5f5f5', borderRadius: '4px' }}>
                      {fullConfig.site.copyright}
                    </div>
                  </Col>
                  <Col span={24}>
                    <Text strong>网站描述：</Text>
                    <div style={{ marginTop: 4, padding: '4px 8px', background: '#f5f5f5', borderRadius: '4px' }}>
                      {fullConfig.site.description}
                    </div>
                  </Col>
                  <Col span={12}>
                    <Text strong>关键词：</Text>
                    <div style={{ marginTop: 4, padding: '4px 8px', background: '#f5f5f5', borderRadius: '4px' }}>
                      {fullConfig.site.keywords}
                    </div>
                  </Col>
                  <Col span={12}>
                    <Text strong>网站图标：</Text>
                    <div style={{ marginTop: 4, padding: '4px 8px', background: '#f5f5f5', borderRadius: '4px' }}>
                      {fullConfig.site.favicon}
                    </div>
                  </Col>
                </Row>
              </Card>

              {/* 主题配置 */}
              <Card size="small" title="🎨 主题配置" style={{ marginBottom: 16 }}>
                <Row gutter={[16, 8]}>
                  <Col span={24}>
                    <div style={{ marginBottom: 12 }}>
                      <Text strong>当前默认主题：</Text>
                      <div style={{ 
                        marginTop: 8,
                        padding: '12px',
                        border: '1px solid #d9d9d9',
                        borderRadius: '8px',
                        background: '#fafafa'
                      }}>
                        <Row align="middle" gutter={16}>
                          <Col span={4}>
                            <div style={{
                              width: 60,
                              height: 30,
                              background: fullConfig.theme.default.backgroundImage,
                              borderRadius: '4px',
                              border: '1px solid #d9d9d9'
                            }} />
                          </Col>
                          <Col span={20}>
                            <div>
                              <Text strong>{fullConfig.theme.default.name}</Text>
                              <br />
                              <Text type="secondary" style={{ fontSize: '12px' }}>
                                模糊度: {fullConfig.theme.default.blur} | 透明度: {Math.round(fullConfig.theme.default.opacity * 100)}%
                              </Text>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col span={24}>
                    <Text strong>预设主题 ({fullConfig.theme.presets.length} 个)：</Text>
                    <div style={{ marginTop: 8 }}>
                      {fullConfig.theme.presets.length > 0 ? (
                        <Row gutter={[8, 8]}>
                          {fullConfig.theme.presets.map((theme, index) => (
                            <Col key={theme.id} span={8}>
                              <div style={{
                                padding: '8px',
                                border: '1px solid #d9d9d9',
                                borderRadius: '6px',
                                background: '#fafafa'
                              }}>
                                <div style={{
                                  width: '100%',
                                  height: 20,
                                  background: theme.backgroundImage,
                                  borderRadius: '3px',
                                  marginBottom: '4px'
                                }} />
                                <Text style={{ fontSize: '12px' }}>{theme.name}</Text>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      ) : (
                        <div style={{ padding: '20px', textAlign: 'center', color: '#999' }}>
                          暂无预设主题
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>
              </Card>

              {/* 链接数据 */}
              <Card size="small" title="🔗 链接数据" style={{ marginBottom: 16 }}>
                <Row gutter={[16, 8]} style={{ marginBottom: 16 }}>
                  <Col span={8}>
                    <Statistic
                      title="分类数量"
                      value={fullConfig.links.totalCategories}
                      valueStyle={{ color: '#1890ff', fontSize: '18px' }}
                    />
                  </Col>
                  <Col span={8}>
                    <Statistic
                      title="链接数量"
                      value={fullConfig.links.totalLinks}
                      valueStyle={{ color: '#52c41a', fontSize: '18px' }}
                    />
                  </Col>
                  <Col span={8}>
                    <Statistic
                      title="搜索引擎"
                      value={fullConfig.links.totalSearchEngines}
                      valueStyle={{ color: '#fa8c16', fontSize: '18px' }}
                    />
                  </Col>
                </Row>
                
                {fullConfig.links.categories.length > 0 && (
                  <div>
                    <Text strong>分类详情：</Text>
                    <div style={{ marginTop: 8, maxHeight: 200, overflow: 'auto' }}>
                      {fullConfig.links.categories.map((category) => (
                        <div key={category.id} style={{
                          marginBottom: '8px',
                          padding: '8px',
                          border: '1px solid #f0f0f0',
                          borderRadius: '4px',
                          background: '#fafafa'
                        }}>
                          <Row justify="space-between" align="middle">
                            <Col>
                              <Text strong>{category.name}</Text>
                            </Col>
                            <Col>
                              <Text type="secondary">{category.links?.length || 0} 个链接</Text>
                            </Col>
                          </Row>
                          {category.links && category.links.length > 0 && (
                            <div style={{ marginTop: 4, fontSize: '12px', color: '#666' }}>
                              {category.links.slice(0, 3).map(link => link.icon + ' ' + (link.name || '未命名')).join(', ')}
                              {category.links.length > 3 && '...'}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>

              {/* 系统信息 */}
              <Card size="small" title="⚙️ 系统信息">
                <Row gutter={[16, 8]}>
                  <Col span={8}>
                    <Text strong>存储大小：</Text>
                    <div style={{ marginTop: 4 }}>
                      <Text>{fullConfig.system.storageSize} KB</Text>
                    </div>
                  </Col>
                  <Col span={8}>
                    <Text strong>版本信息：</Text>
                    <div style={{ marginTop: 4 }}>
                      <Text>{fullConfig.system.version}</Text>
                    </div>
                  </Col>
                  <Col span={8}>
                    <Text strong>生成时间：</Text>
                    <div style={{ marginTop: 4 }}>
                      <Text style={{ fontSize: '12px' }}>
                        {new Date(fullConfig.system.lastModified).toLocaleString('zh-CN')}
                      </Text>
                    </div>
                  </Col>
                </Row>
              </Card>
            </div>
          );
        })()}
      </Modal>
    </div>
  );
};

export default SiteAdmin;