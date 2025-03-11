// src/components/Layout/Background.tsx
import styled from '@emotion/styled';
import type { ThemeConfigType } from '@/types';

interface BackgroundProps {
  theme: ThemeConfigType;
}

export const Background = styled.div<BackgroundProps>`
  min-height: 100vh;
  position: relative;
  padding: 2rem;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.backgroundImage};
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    z-index: -2;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '0.1' : '0.3'});
    backdrop-filter: blur(${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '5px' : '8px'});
    -webkit-backdrop-filter: blur(${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '5px' : '8px'});
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;