import { checkForUpdates, refreshApp } from '@/utils/version/versionChecker';
import { ReloadOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Popover, message } from 'antd';
import type React from 'react';
import { useEffect, useState } from 'react';

interface UpdateNotificationProps {
  checkInterval?: number; // 检查间隔（毫秒），默认300000ms（5分钟）
}

const UpdateNotification: React.FC<UpdateNotificationProps> = ({
  checkInterval = 300000,
}) => {
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
      @media (max-width: 768px) {
        .update-notification-btn {
          top: 5.625rem !important;
          right: 0.9375rem !important;
          font-size: 1.125rem !important;
        }
      }
      @media (max-width: 480px) {
        .update-notification-btn {
          top: 5rem !important;
          right: 0.625rem !important;
          font-size: 1rem !important;
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
          <Button
            type="primary"
            icon={<ReloadOutlined />}
            onClick={handleRefresh}
          >
            立即刷新
          </Button>
        </div>
      }
      title="应用更新"
      trigger="click"
    >
      <SyncOutlined
        className="update-notification-btn"
        style={{
          fontSize: '1.25rem',
          color: '#1890ff',
          cursor: 'pointer',
          position: 'fixed',
          top: '6.25rem',
          right: '1.25rem',
          zIndex: 1000,
          animation: 'pulse 2s infinite',
        }}
      />
    </Popover>
  );
};

export default UpdateNotification;
