import React, { useState, useEffect } from 'react';
import { Modal, List, Typography, Button, Badge, Popover } from 'antd';
import { BellOutlined, CheckOutlined } from '@ant-design/icons';
import { updateLogManager } from '@/utils/version/updateLogManager';

const { Title, Text, Paragraph } = Typography;

const UpdateLog: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [logs, setLogs] = useState(updateLogManager.getAllLogs());
  const [hasUnread, setHasUnread] = useState(updateLogManager.hasUnreadLogs());

  useEffect(() => {
    // 加载更新日志
    const loadLogs = async () => {
      await updateLogManager.fetchUpdateLogs();
      setLogs(updateLogManager.getAllLogs());
      setHasUnread(updateLogManager.hasUnreadLogs());
    };
    
    loadLogs();
  }, []);

  const handleOpen = () => {
    setVisible(true);
    // 标记为已读
    const latestLog = updateLogManager.getLatestLog();
    if (latestLog) {
      updateLogManager.markAsRead(latestLog.version);
      setHasUnread(false);
    }
  };

  const handleClose = () => {
    setVisible(false);
  };

  // 注入响应式样式
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 768px) {
        .update-log-btn {
          top: 5.625rem !important;
          right: 3.125rem !important;
          font-size: 1rem !important;
        }
      }
      @media (max-width: 480px) {
        .update-log-btn {
          top: 5rem !important;
          right: 2.5rem !important;
          font-size: 0.875rem !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <Popover
        content={
          <div style={{ padding: '8px' }}>
            <Text strong>更新日志</Text>
            <div style={{ marginTop: '8px' }}>
              {hasUnread ? (
                <Text type="danger">有新的更新</Text>
              ) : (
                <Text>当前已是最新版本</Text>
              )}
            </div>
          </div>
        }
        title="更新日志"
        trigger="click"
      >
        <Badge dot={hasUnread} offset={[0, -5]}>
          <BellOutlined 
            className="update-log-btn"
            style={{ 
              fontSize: '1.125rem', 
              color: '#1890ff',
              cursor: 'pointer',
              position: 'fixed',
              top: '6.25rem',
              right: '3.75rem',
              zIndex: 1000
            }} 
            onClick={handleOpen}
          />
        </Badge>
      </Popover>

      <Modal
        title={
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Title level={4} style={{ margin: 0 }}>📦 应用更新日志</Title>
            {hasUnread && (
              <Badge status="error" text="有新更新" />
            )}
          </div>
        }
        open={visible}
        onCancel={handleClose}
        footer={[
          <Button key="close" type="primary" onClick={handleClose}>
            关闭
          </Button>
        ]}
        width={600}
        centered
      >
        {logs.length > 0 ? (
          <List
            dataSource={logs}
            renderItem={(log) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Text strong>{log.version}</Text>
                      <Text type="secondary" style={{ marginLeft: '16px' }}>
                        {log.date}
                      </Text>
                    </div>
                  }
                  description={
                    <div>
                      {log.description && (
                        <Paragraph style={{ marginBottom: '8px' }}>{log.description}</Paragraph>
                      )}
                      <ul style={{ margin: '0 0 0 16px', padding: 0 }}>
                        {log.changes.map((change, index) => (
                          <li key={index} style={{ marginBottom: '4px' }}>
                            <CheckOutlined style={{ marginRight: '8px', color: '#52c41a' }} />
                            {change}
                          </li>
                        ))}
                      </ul>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        ) : (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <Text type="secondary">暂无更新日志</Text>
          </div>
        )}
      </Modal>
    </>
  );
};

export default UpdateLog;
