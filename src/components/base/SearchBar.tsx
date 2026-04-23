import React, { useState, useCallback, useEffect } from 'react';
import { Input, Select, Button, Space, List, Popover, Typography, Divider, message } from 'antd';
import { SearchOutlined, ClockCircleOutlined, DeleteOutlined, ClearOutlined } from '@ant-design/icons';
import type { SearchEngine } from '@/types';
import { useThemeContext } from '@/contexts';
import { designTokens } from '@/styles/design-tokens';
import { searchHistoryManager } from '@/utils/search/searchHistoryManager';

interface SearchBarProps {
  searchEngines: SearchEngine[];
}

const { Search: AntSearch } = Input;

const { Text } = Typography;

export const SearchBar: React.FC<SearchBarProps> = ({ searchEngines }) => {
  const { isDark } = useThemeContext();
  const [query, setQuery] = useState<string>('');
  const [selectedEngine, setSelectedEngine] = useState<string>(searchEngines[0]?.id || 'google');
  const [historyVisible, setHistoryVisible] = useState<boolean>(false);
  const [searchHistory, setSearchHistory] = useState(searchHistoryManager.getRecentHistory());

  // 加载搜索历史
  useEffect(() => {
    setSearchHistory(searchHistoryManager.getRecentHistory());
  }, []);

  const handleSearch = useCallback(() => {
    if (!query.trim()) return;

    const engine = searchEngines.find(e => e.id === selectedEngine);
    if (engine) {
      // 添加搜索历史
      searchHistoryManager.addHistory(query.trim(), selectedEngine);
      // 更新历史记录
      setSearchHistory(searchHistoryManager.getRecentHistory());
      // 执行搜索
      window.open(engine.url + encodeURIComponent(query.trim()), '_blank');
    }
  }, [query, selectedEngine, searchEngines]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }, [handleSearch]);

  // 选择历史记录
  const handleSelectHistory = (item: any) => {
    setQuery(item.query);
    setSelectedEngine(item.engine);
    setHistoryVisible(false);
  };

  // 删除历史记录
  const handleDeleteHistory = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    searchHistoryManager.deleteHistory(id);
    setSearchHistory(searchHistoryManager.getRecentHistory());
  };

  // 清空历史记录
  const handleClearHistory = () => {
    searchHistoryManager.clearHistory();
    setSearchHistory([]);
    message.success('搜索历史已清空');
  };

  const engineOptions = searchEngines.map(engine => ({
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
    width: '90vw',
    animation: 'searchFadeIn 0.8s ease-out 0.3s both',
  };

  const searchContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '0.75rem',
    width: '100%',
    alignItems: 'center',
    background: isDark ? designTokens.dark.background : designTokens.light.background,
    borderRadius: designTokens.borderRadius.xl,
    padding: '0.5rem 0.75rem',
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
            .search-history-popover {
              width: 90vw !important;
              max-width: 300px !important;
            }
          }
          @media (max-width: 480px) {
            .search-history-popover {
              width: 95vw !important;
              max-width: 280px !important;
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
            <div className="search-history-popover" style={{ width: '100%', maxHeight: '300px', overflow: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <ClockCircleOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                  <Text strong>搜索历史</Text>
                </div>
                {searchHistory.length > 0 && (
                  <Button
                    type="text"
                    size="small"
                    icon={<ClearOutlined />}
                    onClick={handleClearHistory}
                  >
                    清空
                  </Button>
                )}
              </div>
              {searchHistory.length > 0 ? (
                <List
                  dataSource={searchHistory}
                  renderItem={(item) => (
                    <List.Item
                      key={item.id}
                      onClick={() => handleSelectHistory(item)}
                      style={{ cursor: 'pointer', padding: '8px' }}
                    >
                      <List.Item.Meta
                        title={
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text>{item.query}</Text>
                            <Text type="secondary" style={{ fontSize: '12px' }}>
                              {searchEngines.find(e => e.id === item.engine)?.name}
                            </Text>
                          </div>
                        }
                        description={
                          <Text type="secondary" style={{ fontSize: '12px' }}>
                            {new Date(item.timestamp).toLocaleString('zh-CN')}
                          </Text>
                        }
                      />
                      <DeleteOutlined 
                        style={{ fontSize: '14px', color: '#999' }} 
                        onClick={(e) => handleDeleteHistory(e, item.id)}
                      />
                    </List.Item>
                  )}
                />
              ) : (
                <div style={{ textAlign: 'center', padding: '20px', color: '#999' }}>
                  暂无搜索历史
                </div>
              )}
            </div>
          }
          trigger="click"
          open={historyVisible}
          onOpenChange={setHistoryVisible}
          placement="bottomLeft"
          style={{ width: '100%' }}
        >
          <Input
            placeholder="输入搜索内容..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            size="large"
            variant="borderless"
            style={{ flex: 1 }}
          />
        </Popover>
        <Button
          type="primary"
          icon={<SearchOutlined />}
          size="large"
          onClick={handleSearch}
          style={{
            borderRadius: designTokens.borderRadius.lg,
            minWidth: '6.25rem',
          }}
        >
          搜索
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
