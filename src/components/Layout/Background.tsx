// src/components/Layout/Background.tsx
import styled from '@emotion/styled';
import type { ThemeConfig } from '../../config/theme';

interface BackgroundProps {
  theme: ThemeConfig;
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
    z-index: -2;
  }

  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, ${props => props.theme.opacity});
    backdrop-filter: blur(${props => props.theme.blur});
    -webkit-backdrop-filter: blur(${props => props.theme.blur});
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;