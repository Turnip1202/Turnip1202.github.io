// src/components/ThemeSelector.tsx
import type React from 'react';
import styled from '@emotion/styled';
import { themeConfig, type ThemeConfig } from '../config/theme';

const SelectorContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.9);
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
`;

const ThemeButton = styled.button<{ bgImage: string }>`
  width: 30px;
  height: 30px;
  margin: 4px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${props => props.bgImage};
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

interface Props {
  onSelect: (theme: ThemeConfig) => void;
}

export const ThemeSelector: React.FC<Props> = ({ onSelect }) => (
  <SelectorContainer>
    {themeConfig.presets.map(theme => (
      <ThemeButton
        key={theme.id}
        bgImage={theme.backgroundImage}
        onClick={() => onSelect(theme)}
        title={theme.name}
      />
    ))}
  </SelectorContainer>
);