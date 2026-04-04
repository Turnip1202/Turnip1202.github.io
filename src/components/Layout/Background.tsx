import styled from '@emotion/styled';
import { designTokens } from '@/styles/design-tokens';

interface BackgroundProps {
  $isDark?: boolean;
  backgroundImage?: string;
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
    background: ${props => props.backgroundImage || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
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
    background: ${props => props.$isDark 
      ? 'rgba(0, 0, 0, 0.3)' 
      : 'rgba(255, 255, 255, 0.3)'};
    backdrop-filter: blur(${props => props.$isDark ? '5px' : '8px'});
    -webkit-backdrop-filter: blur(${props => props.$isDark ? '5px' : '8px'});
    z-index: -1;
    transition: background ${designTokens.transitions.normal};
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;