import { keyboardManager } from '@/utils/keyboard/keyboardManager';
import { KeyboardOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Divider, List, Modal, Typography } from 'antd';
import type React from 'react';
import { useEffect, useState } from 'react';

const { Title, Text, Paragraph } = Typography;

const KeyboardShortcuts: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [shortcuts, setShortcuts] = useState<
    Array<{ id: string; shortcut: any }>
  >([]);

  useEffect(() => {
    // 加载快捷键列表
    const allShortcuts = keyboardManager.getAllShortcuts();
    setShortcuts(
      Array.from(allShortcuts.entries()).map(([id, shortcut]) => ({
        id,
        shortcut,
      })),
    );
  }, []);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        icon={<KeyboardOutlined />}
        style={{
          position: 'fixed',
          top: '20px',
          right: '100px',
          zIndex: 1000,
        }}
        onClick={handleOpen}
      >
        快捷键
      </Button>

      <Modal
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <SettingOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
            <Title level={4} style={{ margin: 0 }}>
              快捷键设置
            </Title>
          </div>
        }
        open={visible}
        onCancel={handleClose}
        footer={[
          <Button key="close" type="primary" onClick={handleClose}>
            关闭
          </Button>,
        ]}
        width={500}
        centered
      >
        <Paragraph style={{ marginBottom: '24px' }}>
          以下是当前可用的快捷键，帮助您更高效地使用应用：
        </Paragraph>

        {shortcuts.length > 0 ? (
          <List
            dataSource={shortcuts}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Text strong>{item.shortcut.description}</Text>
                      <div
                        style={{
                          background: '#f0f0f0',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontFamily: 'monospace',
                        }}
                      >
                        {item.shortcut.keys.join(' + ')}
                      </div>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        ) : (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <Text type="secondary">暂无快捷键设置</Text>
          </div>
        )}

        <Divider />

        <div style={{ fontSize: '12px', color: '#666' }}>
          <p>注意：在输入框中时，快捷键不会触发。</p>
          <p>Mac 用户请使用 Command 键代替 Ctrl 键。</p>
        </div>
      </Modal>
    </>
  );
};

export default KeyboardShortcuts;
