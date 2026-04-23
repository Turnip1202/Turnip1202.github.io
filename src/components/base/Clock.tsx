import React, { useState, useEffect } from 'react';
import { Card, Typography, Space } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { useThemeContext } from '@/contexts';
import { designTokens } from '@/styles/design-tokens';

const { Text } = Typography;

export const Clock: React.FC = () => {
  const { isDark } = useThemeContext();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return {
      date: `${year}-${month}-${day}`,
      time: `${hours}:${minutes}:${seconds}`,
    };
  };

  const { date, time: currentTime } = formatTime(time);

  const cardStyle: React.CSSProperties = {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: isDark 
      ? 'rgba(0, 0, 0, 0.6)' 
      : 'rgba(255, 255, 255, 0.9)',
    borderRadius: designTokens.borderRadius.md,
    boxShadow: designTokens.shadows.md,
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border: `1px solid ${isDark 
      ? 'rgba(255, 255, 255, 0.2)' 
      : 'rgba(255, 255, 255, 0.3)'}`,
    zIndex: 1000,
    animation: 'clockFadeIn 0.8s ease-out 0.6s both',
    transition: 'all 0.3s ease',
  };

  return (
    <>
      <style>
        {`
          @keyframes clockFadeIn {
            from {
              opacity: 0;
              transform: translateY(-0.625rem) translateX(0.625rem);
            }
            to {
              opacity: 1;
              transform: translateY(0) translateX(0);
            }
          }
          @media (max-width: 768px) {
            .clock-card {
              font-size: 0.875rem;
              padding: 0.6rem 0.8rem;
              top: 0.75rem;
              right: 0.75rem;
            }
          }
          @media (max-width: 480px) {
            .clock-card {
              font-size: 0.8rem;
              padding: 0.5rem 0.7rem;
              top: 0.5rem;
              right: 0.5rem;
            }
          }
        `}
      </style>
      <Card
        size="small"
        style={cardStyle}
        className="clock-card"
        styles={{
          body: { padding: '0.75rem 1rem' },
        }}
        hoverable
      >
        <Space orientation="vertical" align="center" size={2}>
          <Space size={4}>
            <ClockCircleOutlined style={{ 
              color: isDark ? '#ffffff' : '#2c3e50',
              opacity: 0.8,
            }} />
            <Text
              style={{
                color: isDark ? '#ffffff' : '#2c3e50',
                opacity: 0.8,
                fontSize: '0.85em',
              }}
            >
              {date}
            </Text>
          </Space>
          <Text
            strong
            style={{
              color: isDark ? '#ffffff' : '#2c3e50',
              fontSize: '1em',
              fontWeight: 600,
              fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
            }}
          >
            {currentTime}
          </Text>
        </Space>
      </Card>
    </>
  );
};

export default Clock;
