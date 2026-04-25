import { useThemeContext } from '@/contexts';
import { SmartStorageManager } from '@/core/storage/SmartStorageManager';
import type { StorageType } from '@/core/storage/types';
import { configVersionManager } from '@/utils/version';
import {
  CloudOutlined,
  DatabaseOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  ExportOutlined,
  HddOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import {
  Alert,
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Modal,
  Progress,
  Radio,
  Row,
  Space,
  Statistic,
  Typography,
  message,
} from 'antd';
import type React from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';

const { Title, Text, Paragraph } = Typography;

const getStorageLabel = (type: StorageType): string => {
  switch (type) {
    case 'localStorage':
      return 'localStorage (同步存储)';
    case 'indexedDB':
      return 'IndexedDB (大容量存储)';
    case 'auto':
    default:
      return '智能选择';
  }
};

const formatSize = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

interface StorageSelectorProps {
  value?: StorageType;
  onChange?: (type: StorageType) => void;
  showStats?: boolean;
}

export const StorageSelector: React.FC<StorageSelectorProps> = ({
  value = 'auto',
  onChange,
  showStats = true,
}) => {
  const { isDark } = useThemeContext();
  const [storageType, setStorageType] = useState<StorageType>(() => {
    const saved = localStorage.getItem('app_storage_type');
    return (saved as StorageType) || value || 'auto';
  });
  const [stats, setStats] = useState<{
    localStorageKeys: number;
    indexedDBKeys: number;
    totalKeys: number;
    localStorageSize: number;
    indexedDBSize: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [clearModalVisible, setClearModalVisible] = useState(false);
  const [exportBeforeClear, setExportBeforeClear] = useState(true);
  const [clearTargets, setClearTargets] = useState<{
    localStorage: boolean;
    indexedDB: boolean;
  }>({ localStorage: true, indexedDB: true });

  const storageManager = useMemo(() => new SmartStorageManager(), []);

  const loadStats = useCallback(async () => {
    setLoading(true);
    try {
      const storageStats = await storageManager.getStats();
      setStats(storageStats);
    } catch (error) {
      console.error('Failed to load storage stats:', error);
    } finally {
      setLoading(false);
    }
  }, [storageManager]);

  useEffect(() => {
    if (showStats) {
      loadStats();
    }
  }, [showStats, loadStats]);

  const handleChange = useCallback(
    (type: StorageType) => {
      setStorageType(type);
      localStorage.setItem('app_storage_type', type);
      onChange?.(type);
      message.success(`存储方式已切换为: ${getStorageLabel(type)}`);
    },
    [onChange],
  );

  const handleExportBackup = useCallback(() => {
    const data = configVersionManager.exportVersions();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `turnip_backup_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    message.success('备份已导出');
  }, []);

  const handleClearConfirm = useCallback(async () => {
    if (!clearTargets.localStorage && !clearTargets.indexedDB) {
      message.warning('请至少选择一个存储类型进行清空');
      return;
    }

    if (exportBeforeClear) {
      handleExportBackup();
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    try {
      const preservedStorageType = localStorage.getItem('app_storage_type');

      const clearPromises: Promise<void>[] = [];

      if (clearTargets.localStorage) {
        clearPromises.push(storageManager.clearLocalStorage());
      }

      if (clearTargets.indexedDB) {
        clearPromises.push(storageManager.clearIndexedDB());
      }

      await Promise.all(clearPromises);

      if (preservedStorageType && clearTargets.localStorage) {
        localStorage.setItem('app_storage_type', preservedStorageType);
      }

      setClearModalVisible(false);

      const clearedTypes = [];
      if (clearTargets.localStorage) clearedTypes.push('localStorage');
      if (clearTargets.indexedDB) clearedTypes.push('IndexedDB');

      message.success(`${clearedTypes.join(' 和 ')}已清空，页面即将刷新`);

      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      message.error('清空存储失败');
    }
  }, [clearTargets, exportBeforeClear, handleExportBackup, storageManager]);

  const handleClearClick = useCallback(() => {
    setClearTargets({ localStorage: true, indexedDB: true });
    setClearModalVisible(true);
  }, []);

  const handleClearTargetChange = useCallback(
    (target: 'localStorage' | 'indexedDB', checked: boolean) => {
      setClearTargets((prev) => ({
        ...prev,
        [target]: checked,
      }));
    },
    [],
  );

  const cardStyle: React.CSSProperties = {
    background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.9)',
    borderRadius: 12,
  };

  const optionStyle = (selected: boolean): React.CSSProperties => ({
    padding: '16px 20px',
    borderRadius: 12,
    border: `2px solid ${selected ? '#1890ff' : isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
    background: selected
      ? isDark
        ? 'rgba(24, 144, 255, 0.2)'
        : 'rgba(24, 144, 255, 0.1)'
      : isDark
        ? 'rgba(255,255,255,0.05)'
        : 'rgba(255,255,255,0.5)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  });

  return (
    <>
      <Card
        title={
          <Space>
            <DatabaseOutlined />
            <span>数据存储设置</span>
          </Space>
        }
        extra={
          showStats && (
            <Button
              icon={<SyncOutlined />}
              onClick={loadStats}
              loading={loading}
            >
              刷新
            </Button>
          )
        }
        style={cardStyle}
      >
        <Space direction="vertical" style={{ width: '100%' }} size="large">
          <Paragraph type="secondary">
            选择数据持久化存储方式。不同存储方式有不同的容量限制和性能特点。
          </Paragraph>

          <Radio.Group
            value={storageType}
            onChange={(e) => handleChange(e.target.value)}
            style={{ width: '100%' }}
          >
            <Space direction="vertical" style={{ width: '100%' }} size="middle">
              <div
                style={optionStyle(storageType === 'auto')}
                onClick={() => handleChange('auto')}
              >
                <Radio value="auto">
                  <Space>
                    <CloudOutlined style={{ fontSize: 20, color: '#1890ff' }} />
                    <div>
                      <Text strong>智能选择</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        根据数据大小自动选择最佳存储方式（推荐）
                      </Text>
                    </div>
                  </Space>
                </Radio>
              </div>

              <div
                style={optionStyle(storageType === 'localStorage')}
                onClick={() => handleChange('localStorage')}
              >
                <Radio value="localStorage">
                  <Space>
                    <HddOutlined style={{ fontSize: 20, color: '#52c41a' }} />
                    <div>
                      <Text strong>localStorage</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        同步存储，读取速度快，容量约5MB
                      </Text>
                    </div>
                  </Space>
                </Radio>
              </div>

              <div
                style={optionStyle(storageType === 'indexedDB')}
                onClick={() => handleChange('indexedDB')}
              >
                <Radio value="indexedDB">
                  <Space>
                    <DatabaseOutlined
                      style={{ fontSize: 20, color: '#fa8c16' }}
                    />
                    <div>
                      <Text strong>IndexedDB</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        异步存储，大容量，适合存储大量数据
                      </Text>
                    </div>
                  </Space>
                </Radio>
              </div>
            </Space>
          </Radio.Group>

          {showStats && stats && (
            <>
              <Divider />
              <div>
                <Text strong>存储统计</Text>
                <Row gutter={16} style={{ marginTop: 12 }}>
                  <Col span={8}>
                    <Statistic
                      title="localStorage 键数"
                      value={stats.localStorageKeys}
                      suffix="项"
                    />
                  </Col>
                  <Col span={8}>
                    <Statistic
                      title="IndexedDB 键数"
                      value={stats.indexedDBKeys}
                      suffix="项"
                    />
                  </Col>
                  <Col span={8}>
                    <Statistic
                      title="总数据量"
                      value={formatSize(
                        stats.localStorageSize + stats.indexedDBSize,
                      )}
                    />
                  </Col>
                </Row>

                <Row gutter={16} style={{ marginTop: 16 }}>
                  <Col span={12}>
                    <Text type="secondary">localStorage 使用量</Text>
                    <Progress
                      percent={Math.min(
                        (stats.localStorageSize / (5 * 1024 * 1024)) * 100,
                        100,
                      )}
                      format={() => formatSize(stats.localStorageSize)}
                      size="small"
                    />
                  </Col>
                  <Col span={12}>
                    <Text type="secondary">IndexedDB 使用量</Text>
                    <Progress
                      percent={Math.min(
                        (stats.indexedDBSize / (50 * 1024 * 1024)) * 100,
                        100,
                      )}
                      format={() => formatSize(stats.indexedDBSize)}
                      size="small"
                      strokeColor="#fa8c16"
                    />
                  </Col>
                </Row>
              </div>

              <Divider />

              <Space wrap>
                <Button icon={<ExportOutlined />} onClick={handleExportBackup}>
                  导出备份
                </Button>
                <Button
                  danger
                  icon={<DeleteOutlined />}
                  onClick={handleClearClick}
                >
                  清空存储
                </Button>
              </Space>
            </>
          )}
        </Space>
      </Card>

      <Modal
        title={
          <Space>
            <ExclamationCircleOutlined style={{ color: '#ff4d4f' }} />
            <span>确认清空存储</span>
          </Space>
        }
        open={clearModalVisible}
        onOk={handleClearConfirm}
        onCancel={() => setClearModalVisible(false)}
        okText="确认清空"
        cancelText="取消"
        okButtonProps={{
          danger: true,
          disabled: !clearTargets.localStorage && !clearTargets.indexedDB,
        }}
        width={520}
      >
        <Alert
          message="警告：此操作不可逆转！"
          description="清空存储将删除选中的存储中的所有数据。网站将恢复到初始状态。"
          type="error"
          showIcon
          style={{ marginBottom: 16 }}
        />

        <div style={{ marginBottom: 16 }}>
          <Text strong>选择要清空的存储：</Text>
          <div
            style={{
              marginTop: 12,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <div
              style={{
                background: clearTargets.localStorage
                  ? 'rgba(82, 196, 26, 0.1)'
                  : 'transparent',
                border: `1px solid ${clearTargets.localStorage ? '#52c41a' : '#d9d9d9'}`,
                borderRadius: '6px',
                padding: '12px',
              }}
            >
              <Checkbox
                checked={clearTargets.localStorage}
                onChange={(e) =>
                  handleClearTargetChange('localStorage', e.target.checked)
                }
              >
                <Space>
                  <HddOutlined style={{ color: '#52c41a' }} />
                  <div>
                    <Text strong>localStorage</Text>
                    <br />
                    <Text type="secondary" style={{ fontSize: 12 }}>
                      {stats
                        ? `${stats.localStorageKeys} 项数据，${formatSize(stats.localStorageSize)}`
                        : '加载中...'}
                    </Text>
                  </div>
                </Space>
              </Checkbox>
            </div>

            <div
              style={{
                background: clearTargets.indexedDB
                  ? 'rgba(250, 140, 22, 0.1)'
                  : 'transparent',
                border: `1px solid ${clearTargets.indexedDB ? '#fa8c16' : '#d9d9d9'}`,
                borderRadius: '6px',
                padding: '12px',
              }}
            >
              <Checkbox
                checked={clearTargets.indexedDB}
                onChange={(e) =>
                  handleClearTargetChange('indexedDB', e.target.checked)
                }
              >
                <Space>
                  <DatabaseOutlined style={{ color: '#fa8c16' }} />
                  <div>
                    <Text strong>IndexedDB</Text>
                    <br />
                    <Text type="secondary" style={{ fontSize: 12 }}>
                      {stats
                        ? `${stats.indexedDBKeys} 项数据，${formatSize(stats.indexedDBSize)}`
                        : '加载中...'}
                    </Text>
                  </div>
                </Space>
              </Checkbox>
            </div>
          </div>
        </div>

        <div
          style={{
            background: '#f6ffed',
            border: '1px solid #b7eb8f',
            borderRadius: '6px',
            padding: '12px',
          }}
        >
          <Checkbox
            checked={exportBeforeClear}
            onChange={(e) => setExportBeforeClear(e.target.checked)}
          >
            <Text style={{ color: '#52c41a' }}>
              清空前自动导出备份（强烈建议勾选）
            </Text>
          </Checkbox>
        </div>
      </Modal>
    </>
  );
};

export default StorageSelector;
