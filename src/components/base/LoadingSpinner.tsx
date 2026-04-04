import React from 'react';
import { Spin, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useThemeContext } from '@/contexts';
import { designTokens } from '@/styles/design-tokens';

const { Text } = Typography;

interface LoadingSpinnerProps {
  text?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  text = '正在加载精彩内容...' 
}) => {
  const { isDark } = useThemeContext();

  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: isDark 
      ? 'rgba(0, 0, 0, 0.9)' 
      : 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    animation: 'fadeIn 0.5s ease-out',
  };

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  };

  const iconStyle: React.CSSProperties = {
    fontSize: '3rem',
    animation: 'pulse 1.5s ease-in-out infinite',
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.8;
            }
          }
        `}
      </style>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <span style={iconStyle}>🚀</span>
          <Spin
            indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
            size="large"
          />
          <Text
            style={{
              color: isDark ? '#ffffff' : '#2c3e50',
              fontSize: '1.1rem',
              fontWeight: 500,
              textAlign: 'center',
              maxWidth: '300px',
            }}
          >
            {text}
          </Text>
        </div>
      </div>
    </>
  );
};

export default LoadingSpinner;
