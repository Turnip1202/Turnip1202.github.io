import { useThemeContext } from '@/contexts';
import { designTokens } from '@/styles/design-tokens';
import type { SearchEngine } from '@/types';
import { SearchOutlined, HistoryOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Input, Select, Space, List, Popover, Typography } from 'antd';
import type React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { searchHistoryManager } from '@/utils/search/searchHistoryManager';

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
  const [searchHistory, setSearchHistory] = useState<any[]>([]);
  const [showHistory, setShowHistory] = useState<boolean>(false);

  // 加载搜索历史
  useEffect(() => {
    const history = searchHistoryManager.getRecentHistory(5);
    setSearchHistory(history);
  }, []);

  const handleSearch = useCallback(() => {
    if (!query.trim()) return;

    const engine = searchEngines.find((e) => e.id === selectedEngine);
    if (engine) {
      // 添加搜索历史
      searchHistoryManager.addHistory(query.trim(), selectedEngine);
      // 更新历史记录
      const history = searchHistoryManager.getRecentHistory(5);
      setSearchHistory(history);
      // 打开搜索页面
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

  // 处理历史记录点击
  const handleHistoryClick = useCallback((item: any) => {
    setQuery(item.query);
    setSelectedEngine(item.engine);
    setShowHistory(false);
    // 自动搜索
    const engine = searchEngines.find((e) => e.id === item.engine);
    if (engine) {
      window.open(engine.url + encodeURIComponent(item.query), '_blank');
    }
  }, [searchEngines]);

  // 处理删除历史记录
  const handleDeleteHistory = useCallback((e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    searchHistoryManager.deleteHistory(id);
    const history = searchHistoryManager.getRecentHistory(5);
    setSearchHistory(history);
  }, []);

  // 处理清空历史记录
  const handleClearHistory = useCallback(() => {
    searchHistoryManager.clearHistory();
    setSearchHistory([]);
    setShowHistory(false);
  }, []);

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
        <Popover
          content={
            <div style={{ width: '300px', maxHeight: '200px', overflow: 'auto' }}>
              {searchHistory.length > 0 ? (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 8px 8px' }}>
                    <Typography.Text strong>搜索历史</Typography.Text>
                    <Button 
                      type="text" 
                      size="small" 
                      icon={<DeleteOutlined />} 
                      onClick={handleClearHistory}
                      style={{ color: isDark ? '#ccc' : '#666' }}
                    >
                      清空
                    </Button>
                  </div>
                  <List
                    dataSource={searchHistory}
                    renderItem={(item) => (
                      <List.Item
                        key={item.id}
                        onClick={() => handleHistoryClick(item)}
                        style={{ cursor: 'pointer', padding: '4px 8px' }}
                        actions={[
                          <Button
                            type="text"
                            size="small"
                            icon={<DeleteOutlined />}
                            onClick={(e) => handleDeleteHistory(e, item.id)}
                          />
                        ]}
                      >
                        <List.Item.Meta
                          title={
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <span>{item.query}</span>
                              <span style={{ fontSize: '12px', color: isDark ? '#999' : '#999' }}>
                                {searchEngines.find(e => e.id === item.engine)?.name}
                              </span>
                            </div>
                          }
                          description={
                            <span style={{ fontSize: '12px', color: isDark ? '#999' : '#999' }}>
                              {new Date(item.timestamp).toLocaleString()}
                            </span>
                          }
                        />
                      </List.Item>
                    )}
                  />
                </>
              ) : (
                <div style={{ padding: '16px', textAlign: 'center', color: isDark ? '#999' : '#999' }}>
                  暂无搜索历史
                </div>
              )}
            </div>
          }
          trigger="click"
          open={showHistory}
          onOpenChange={setShowHistory}
          placement="bottomLeft"
        >
          <Input
            placeholder="输入搜索内容..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            size="large"
            variant="borderless"
            style={{ flex: 1 }}
            prefix={
              <Space>
                <SearchOutlined style={{ color: isDark ? '#ccc' : '#666' }} />
                {searchHistory.length > 0 && (
                  <Button 
                    type="text" 
                    icon={<HistoryOutlined />} 
                    onClick={() => setShowHistory(true)}
                    style={{ color: isDark ? '#ccc' : '#666' }}
                  />
                )}
              </Space>
            }
          />
        </Popover>
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
