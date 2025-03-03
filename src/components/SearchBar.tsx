import type React from 'react';
import { useState, type FormEvent } from 'react'
import styled from '@emotion/styled';
import type { SearchEngine } from '../types';
import { searchEngines } from '../config/links';

const SearchContainer = styled.div`
  margin: 2rem auto;
  max-width: 600px;
  width: 100%;
  padding: 0 15px;

  @media (max-width: 768px) {
    margin: 1rem auto;
  }
`;

const SearchForm = styled.form`
  display: flex;
  gap: 12px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 8px;
    flex-wrap: wrap;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 12px 20px;
  font-size: 16px;
  border: 2px solid ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#4a4a4a' : '#e1e1e1'};
  border-radius: 25px;
  outline: none;
  transition: all 0.3s;
  -webkit-appearance: none;
  appearance: none;
  background: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#2d3436' : 'white'};
  color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#ffffff' : '#333333'};

  &:focus {
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  }

  &::placeholder {
    color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#888888' : '#999999'};
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 16px;
    order: 1;
  }
`;

const EngineSelect = styled.select`
  padding: 0 0.5rem;
  border: 1px solid ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#4a4a4a' : '#e1e1e1'};
  border-radius: 25px;
  background: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#2d3436' : 'white'};
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.3s;
  -webkit-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'%3E%3Cpath fill='${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '%23ffffff' : '%23444444'}' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  padding-right: 30px;
  color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#ffffff' : '#333333'};

  &:hover {
    border-color: #4a90e2;
  }

  @media (max-width: 768px) {
    order: 2;
    flex: 1;
    min-width: 120px;
    padding: 10px 30px 10px 16px;
  }
`;

const SearchButton = styled.button`
  padding: 0 24px;
  border: none;
  border-radius: 25px;
  background: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#2c3e50' : '#3498db'};
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;

  &:hover {
    background: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#1a252f' : '#2980b9'};
  }

  @media (max-width: 768px) {
    order: 3;
    padding: 10px 20px;
    flex: 0 0 auto;
  }
`;

// SearchBar 组件的其余部分保持不变
const SearchBar: React.FC = () => {
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
        <SearchButton type="submit">搜索</SearchButton>
      </SearchForm>
    </SearchContainer>
  );
};

export default SearchBar;