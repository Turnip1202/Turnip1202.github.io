import type React from 'react';
import { useState, type FormEvent } from 'react'
import styled from '@emotion/styled';
import type { SearchEngine } from '../types';
import { searchEngines } from '../config/links';

const SearchContainer = styled.div`
  margin: 2rem auto;
  max-width: 600px;
  width: 100%;
`;

const SearchForm = styled.form`
  display: flex;
  gap: 12px;
  width: 100%;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 12px 20px;
  font-size: 16px;
  border: 2px solid #e1e1e1;
  border-radius: 25px;
  outline: none;
  transition: all 0.3s;

  &:focus {
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  }
`;

const EngineSelect = styled.select`
  padding: 0 20px;
  border: 2px solid #e1e1e1;
  border-radius: 25px;
  background: white;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;

  &:hover {
    border-color: #4a90e2;
  }
`;

const SearchButton = styled.button`
  padding: 0 24px;
  border: none;
  border-radius: 25px;
  background: #4a90e2;
  color: white;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #357abd;
  }
`;

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