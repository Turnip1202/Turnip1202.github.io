import { useThemeContext } from '@/contexts';
import { designTokens } from '@/styles/design-tokens';
import type { SearchEngine } from '@/types';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select, Space } from 'antd';
import type React from 'react';
import { useCallback, useState } from 'react';

interface SearchBarProps {
  searchEngines: SearchEngine[];
}

const { Search: AntSearch } = Input;

export const SearchBar: React.FC<SearchBarProps> = ({ searchEngines }) => {
  const { isDark } = useThemeContext();
  const [query, setQuery] = useState<string>('');
  const [selectedEngine, setSelectedEngine] = useState<string>(
    searchEngines[0]?.id || 'google',
  );

  const handleSearch = useCallback(() => {
    if (!query.trim()) return;

    const engine = searchEngines.find((e) => e.id === selectedEngine);
    if (engine) {
      window.open(engine.url + encodeURIComponent(query.trim()), '_blank');
    }
  }, [query, selectedEngine, searchEngines]);

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    },
    [handleSearch],
  );

  const engineOptions = searchEngines.map((engine) => ({
    value: engine.id,
    label: (
      <span>
        {engine.icon} {engine.name}
      </span>
    ),
  }));

  const containerStyle: React.CSSProperties = {
    margin: '2rem auto 3rem',
    maxWidth: '700px',
    width: '100%',
    animation: 'searchFadeIn 0.8s ease-out 0.3s both',
  };

  const searchContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '12px',
    width: '100%',
    alignItems: 'center',
    background: isDark
      ? designTokens.dark.background
      : designTokens.light.background,
    borderRadius: designTokens.borderRadius.xl,
    padding: '8px 12px',
    boxShadow: designTokens.shadows.md,
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
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
            .search-bar-container {
              flex-direction: column;
              gap: 12px;
            }
          }
        `}
      </style>
      <div style={searchContainerStyle} className="search-bar-container">
        <Select
          value={selectedEngine}
          onChange={setSelectedEngine}
          options={engineOptions}
          style={{ minWidth: 140 }}
          size="large"
          variant="borderless"
        />
        <Input
          placeholder="输入搜索内容..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          size="large"
          variant="borderless"
          style={{ flex: 1 }}
        />
        <Button
          type="primary"
          icon={<SearchOutlined />}
          size="large"
          onClick={handleSearch}
          style={{
            borderRadius: designTokens.borderRadius.lg,
            minWidth: '100px',
          }}
        >
          搜索
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
