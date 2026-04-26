import { DraggableWidget } from '@/components/common/DraggableWidget';
import { useThemeContext } from '@/contexts';
import { designTokens } from '@/styles/design-tokens';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Card, Space, Typography } from 'antd';
import type React from 'react';
import { useEffect, useState } from 'react';

const { Text } = Typography;

interface ClockProps {
  initialPosition?: { x: number; y: number };
  onPositionChange?: (x: number, y: number) => void;
}

export const Clock: React.FC<ClockProps> = ({
  initialPosition = { x: () => window.innerWidth - 150, y: 16 },
  onPositionChange,
}) => {
  const { isDark } = useThemeContext();
  const [time, setTime] = useState(new Date());
  const [pos, setPos] = useState(() => ({
    x: typeof initialPosition.x === 'function' ? initialPosition.x() : initialPosition.x,
    y: typeof initialPosition.y === 'function' ? initialPosition.y() : initialPosition.y,
  }));

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
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
    background: isDark ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.9)',
    borderRadius: designTokens.borderRadius.md,
    boxShadow: designTokens.shadows.md,
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border: `1px solid ${
      isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.3)'
    }`,
    animation: 'clockFadeIn 0.8s ease-out 0.6s both',
    transition: 'all 0.3s ease',
  };

  return (
    <>
      <style>
        {`
          @keyframes clockFadeIn {
            from { opacity: 0; transform: translateY(-10px) translateX(10px); }
            to { opacity: 1; transform: translateY(0) translateX(0); }
          }
        `}
      </style>
      <DraggableWidget
        initialPosition={pos}
        onPositionChange={(x, y) => {
          setPos({ x, y });
          onPositionChange?.(x, y);
        }}
        zIndex={1000}
        storageKey="turnip-widget-clock"
      >
        <Card
          size="small"
          style={cardStyle}
          className="clock-card"
          styles={{ body: { padding: '0.75rem 1rem' } }}
          hoverable
        >
          <Space orientation="vertical" align="center" size={2}>
            <Space size={4}>
              <ClockCircleOutlined
                style={{
                  color: isDark ? '#ffffff' : '#2c3e50',
                  opacity: 0.8,
                }}
              />
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
                fontFamily:
                  '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
              }}
            >
              {currentTime}
            </Text>
          </Space>
        </Card>
      </DraggableWidget>
    </>
  );
};

export default Clock;
