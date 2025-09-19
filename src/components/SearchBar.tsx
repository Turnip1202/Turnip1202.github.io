import type React from 'react';
import { useState, type FormEvent } from 'react'
import styled from '@emotion/styled';
import type { SearchEngine,BackgroundProps } from '../types';

const SearchContainer = styled.div`
  margin: 2rem auto 3rem;
  max-width: 700px;
  width: 100%;
  
  /* 添加入场动画 */
  animation: searchFadeIn 0.8s ease-out 0.3s both;
  
  @keyframes searchFadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    margin: 1.5rem auto 2.5rem;
  }
`;

const SearchForm = styled.form`
  display: flex;
  gap: 12px;
  width: 100%;
  align-items: stretch;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const SearchInput = styled.input<BackgroundProps>`
  flex: 1;
  padding: 15px 24px;
  font-size: 16px;
  border: 2px solid ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 30px;
  outline: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-appearance: none;
  appearance: none;
  background: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.9)'};
  color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#ffffff' : '#333333'};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  min-width: 0; /* 防止flex子元素收缩问题 */

  &:focus {
    border-color: #4a90e2;
    background: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? 'rgba(255, 255, 255, 0.15)' : 'white'};
    box-shadow: 
      0 0 0 4px rgba(74, 144, 226, 0.15),
      0 8px 24px rgba(74, 144, 226, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  &::placeholder {
    color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.4)'};
  }

  @media (max-width: 768px) {
    padding: 14px 20px;
    font-size: 16px; /* 防止 iOS 缩放 */
    border-radius: 25px;
  }
  
  @media (max-width: 480px) {
    padding: 12px 18px;
    border-radius: 20px;
  }
`;

const SelectWrapper = styled.div<BackgroundProps>`
  position: relative;
  display: inline-block;
  min-width: 140px;
  color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#ffffff' : '#666666'};
  
  /* 箭头指示器 */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid currentColor;
    pointer-events: none;
    transition: all 0.2s ease;
    z-index: 1;
  }
  
  &:hover {
    color: #4a90e2;
  }
  
  @media (max-width: 768px) {
    min-width: 120px;
    
    &::after {
      right: 14px;
      border-left-width: 4px;
      border-right-width: 4px;
      border-top-width: 5px;
    }
  }
  
  @media (max-width: 480px) {
    min-width: 110px;
    
    &::after {
      right: 12px;
    }
  }
`;

const EngineSelect = styled.select<BackgroundProps>`
  width: 100%;
  padding: 15px 45px 15px 20px;
  border: 2px solid ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 30px;
  background-color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.9)'};
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#ffffff' : '#333333'};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);

  &:hover {
    border-color: #4a90e2;
    background-color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? 'rgba(255, 255, 255, 0.15)' : 'white'};
    transform: translateY(-1px);
  }

  &:focus {
    border-color: #4a90e2;
    background-color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? 'rgba(255, 255, 255, 0.15)' : 'white'};
    box-shadow: 
      0 0 0 4px rgba(74, 144, 226, 0.15),
      0 8px 24px rgba(74, 144, 226, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 14px 40px 14px 18px;
    font-size: 0.875rem;
    border-radius: 25px;
  }
  
  @media (max-width: 480px) {
    padding: 12px 36px 12px 16px;
    font-size: 0.8rem;
    border-radius: 20px;
  }
`;

const SearchButton = styled.button<BackgroundProps>`
  padding: 15px 32px;
  border: none;
  border-radius: 30px;
  background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  box-shadow: 
    0 4px 12px rgba(74, 144, 226, 0.3),
    0 2px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  min-width: 100px;
  
  /* 添加光泽效果 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover {
    background: linear-gradient(135deg, #357abd 0%, #2868a3 100%);
    transform: translateY(-2px);
    box-shadow: 
      0 8px 24px rgba(74, 144, 226, 0.4),
      0 4px 12px rgba(0, 0, 0, 0.15);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 0.9rem;
    border-radius: 25px;
    min-width: 90px;
  }
  
  @media (max-width: 480px) {
    padding: 12px 24px;
    font-size: 0.85rem;
    border-radius: 20px;
    min-width: 80px;
  }
`;

interface SearchBarProps {
  searchEngines: SearchEngine[];
}

// SearchBar 组件的其余部分保持不变
export const SearchBar: React.FC<SearchBarProps> = ({ searchEngines }) => {
  const [query, setQuery] = useState<string>('');
  const [engine, setEngine] = useState<string>(searchEngines[0].id);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const selectedEngine = searchEngines.find(e => e.id === engine);
    if (selectedEngine) {
      window.open(selectedEngine.url + encodeURIComponent(query), '_blank');
    }
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="输入搜索内容..."
        />
        <SelectWrapper>
          <EngineSelect
            value={engine}
            onChange={(e) => setEngine(e.target.value)}
          >
            {searchEngines.map((engine: SearchEngine) => (
              <option key={engine.id} value={engine.id}>
                {engine.icon} {engine.name}
              </option>
            ))}
          </EngineSelect>
        </SelectWrapper>
        <SearchButton type="submit">搜索</SearchButton>
      </SearchForm>
    </SearchContainer>
  );
};
