import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import type { BackgroundProps } from '@/types';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

const LoadingContainer = styled.div<BackgroundProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme?.id === 'custom' && props.theme?.name === '暗黑主题' 
    ? 'rgba(0, 0, 0, 0.9)' 
    : 'rgba(255, 255, 255, 0.95)'};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} 0.5s ease-out;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Spinner = styled.div<BackgroundProps>`
  width: 60px;
  height: 60px;
  border: 4px solid ${props => props.theme?.id === 'custom' && props.theme?.name === '暗黑主题' 
    ? 'rgba(255, 255, 255, 0.1)' 
    : 'rgba(0, 0, 0, 0.1)'};
  border-top: 4px solid #4a90e2;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.div<BackgroundProps>`
  color: ${props => props.theme?.id === 'custom' && props.theme?.name === '暗黑主题' 
    ? '#ffffff' 
    : '#2c3e50'};
  font-size: 1.1rem;
  font-weight: 500;
  animation: ${pulse} 2s ease-in-out infinite;
  text-align: center;
  max-width: 300px;
`;

const LoadingIcon = styled.div`
  font-size: 3rem;
  animation: ${pulse} 1.5s ease-in-out infinite;
  margin-bottom: 1rem;
`;

interface LoadingSpinnerProps {
  theme?: any;
  text?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  theme, 
  text = '正在加载精彩内容...' 
}) => {
  return (
    <LoadingContainer theme={theme}>
      <SpinnerWrapper>
        <LoadingIcon>🚀</LoadingIcon>
        <Spinner theme={theme} />
        <LoadingText theme={theme}>{text}</LoadingText>
      </SpinnerWrapper>
    </LoadingContainer>
  );
};

export default LoadingSpinner;