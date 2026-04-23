import React, { useState, useEffect } from 'react';
import { Button, message, Popover } from 'antd';
import { ReloadOutlined, SyncOutlined } from '@ant-design/icons';
import { checkForUpdates, refreshApp } from '@/utils/version/versionChecker';

interface UpdateNotificationProps {
  checkInterval?: number; // 检查间隔（毫秒），默认300000ms（5分钟）
}

const UpdateNotification: React.FC<UpdateNotificationProps> = ({ checkInterval = 300000 }) => {
  const [hasUpdate, setHasUpdate] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  // 检查更新
  const checkUpdate = async () => {
    if (isChecking) return;

    setIsChecking(true);
    try {
      const updateAvailable = await checkForUpdates();
      if (updateAvailable) {
        setHasUpdate(true);
        message.info('发现新版本，点击右上角图标刷新');
      }
    } catch (error) {
      console.warn('Update check failed:', error);
    } finally {
      setIsChecking(false);
    }
  };

  // 初始化时检查一次
  useEffect(() => {
    checkUpdate();

    // 设置定期检查
    const interval = setInterval(checkUpdate, checkInterval);
    return () => clearInterval(interval);
  }, [checkInterval]);

  // 处理刷新
  const handleRefresh = () => {
    refreshApp();
  };

  // 注入样式
  useEffect(() => {
    if (!hasUpdate) return;

    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
        100% {
          transform: scale(1);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [hasUpdate]);

  if (!hasUpdate) {
    return null;
  }

  return (
    <Popover
      content={
        <div style={{ textAlign: 'center', padding: '8px' }}>
          <p style={{ marginBottom: '8px' }}>发现新版本</p>
          <Button type="primary" icon={<ReloadOutlined />} onClick={handleRefresh}>
            立即刷新
          </Button>
        </div>
      }
      title="应用更新"
      trigger="click"
    >
      <SyncOutlined 
          style={{ 
            fontSize: '20px', 
            color: '#1890ff',
            cursor: 'pointer',
            position: 'fixed',
            top: '100px',
            right: '20px',
            zIndex: 1000,
            animation: 'pulse 2s infinite'
          }} 
        />
    </Popover>
  );
};

export default UpdateNotification;
