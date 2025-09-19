import { useState, useEffect } from 'react';
import type React from 'react';
import styled from '@emotion/styled';
import type { BackgroundProps } from "@/types"


const ClockContainer = styled.div<BackgroundProps>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1rem;
  color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#ffffff' : '#2c3e50'};
  font-weight: 500;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  background: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.9)'};
  padding: 0.75rem 1rem;
  border-radius: 12px;
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 1000;
  transition: all 0.3s ease;
  
  /* 添加微妙的动画效果 */
  animation: clockFadeIn 0.8s ease-out 0.6s both;
  
  @keyframes clockFadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px) translateX(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0) translateX(0);
    }
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 8px 20px rgba(0, 0, 0, 0.15),
      0 2px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0.6rem 0.8rem;
    top: 0.75rem;
    right: 0.75rem;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.5rem 0.7rem;
    top: 0.5rem;
    right: 0.5rem;
    border-radius: 8px;
  }
`;

export const Clock: React.FC = () => {
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
      time: `${hours}:${minutes}:${seconds}`
    };
  };

  const { date, time: currentTime } = formatTime(time);

  return (
    <ClockContainer>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
        <div style={{ fontSize: '0.85em', opacity: 0.8 }}>{date}</div>
        <div style={{ fontSize: '1em', fontWeight: 600 }}>{currentTime}</div>
      </div>
    </ClockContainer>
  );
};
