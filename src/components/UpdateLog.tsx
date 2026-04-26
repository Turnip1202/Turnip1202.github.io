import { DraggableWidget } from '@/components/common/DraggableWidget';
import { updateLogManager } from '@/utils/version/updateLogManager';
import { BellOutlined, CheckOutlined } from '@ant-design/icons';
import { Badge, Button, List, Modal, Popover, Typography } from 'antd';
import type React from 'react';
import { useEffect, useState } from 'react';

const { Title, Text, Paragraph } = Typography;

const UpdateLog: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [logs, setLogs] = useState(updateLogManager.getAllLogs());
  const [hasUnread, setHasUnread] = useState(updateLogManager.hasUnreadLogs());

  useEffect(() => {
    const loadLogs = async () => {
      await updateLogManager.fetchUpdateLogs();
      setLogs(updateLogManager.getAllLogs());
      setHasUnread(updateLogManager.hasUnreadLogs());
    };
    loadLogs();
  }, []);

  const handleOpen = () => {
    setVisible(true);
    const latestLog = updateLogManager.getLatestLog();
    if (latestLog) {
      updateLogManager.markAsRead(latestLog.version);
      setHasUnread(false);
    }
  };

  return (
    <>
      <DraggableWidget
        initialPosition={{ x: () => window.innerWidth - 50, y: 120 }}
        zIndex={1000}
        storageKey="turnip-widget-updatelog-v2"
        style={{ cursor: 'pointer' }}
      >
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
              style={{
                fontSize: '1.125rem',
                color: '#1890ff',
              }}
              onClick={handleOpen}
            />
          </Badge>
        </Popover>
      </DraggableWidget>

      <Modal
        title={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Title level={4} style={{ margin: 0 }}>
              📦 应用更新日志
            </Title>
            {hasUnread && <Badge status="error" text="有新更新" />}
          </div>
        }
        open={visible}
        onCancel={() => setVisible(false)}
        footer={[
          <Button key="close" type="primary" onClick={() => setVisible(false)}>
            关闭
          </Button>,
        ]}
        width={600}
        centered
        styles={{ body: { maxHeight: '60vh', overflowY: 'auto', paddingRight: '8px' } }}
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
                        <Paragraph style={{ marginBottom: '8px' }}>
                          {log.description}
                        </Paragraph>
                      )}
                      <ul style={{ margin: '0 0 0 16px', padding: 0 }}>
                        {log.changes.map((change, index) => (
                          <li key={index} style={{ marginBottom: '4px' }}>
                            <CheckOutlined
                              style={{ marginRight: '8px', color: '#52c41a' }}
                            />
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
