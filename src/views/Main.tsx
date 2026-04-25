import type React from 'react';
import { useState, useEffect, useMemo } from "react";
import {
  SearchBarNew as SearchBar,
  LinkGridNew as LinkGrid,
  LoadingSpinnerNew as LoadingSpinner
} from '@/components';
import { ThemeSelectorEnhanced } from '@/components/theme';

import {
  Header,
  Title,
  MainContent,
  Footer
} from "@/styles/App.css.ts";

import {
  themeManager,
  linksManager,
  siteManager,
  getLocalStorageByKey
} from "@/utils";
import type { ThemeConfigType, LinkCategory } from "@/types";

import { Avatar, Space, Typography } from 'antd';
const { Text } = Typography;


interface IMainProps {
  cb: (theme: ThemeConfigType) => void;
}


const Main: React.FC<IMainProps> = ({ cb }) => {
  const localThemeConfig = themeManager.getConfig();
  const [localCategories, setLocalCategories] = useState(linksManager.getAllCategories());
  const localSearchEngines = linksManager.getAllSearchEngines();
  const [greeting, setGreeting] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useMemo(() => {
    const links = getLocalStorageByKey<LinkCategory[]>("turnip_link_categories")
    console.log("localCategories", links);
    setLocalCategories(links)
    setTimeout(() => setIsLoading(false), 100);
  }, [])

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 6) {
        setGreeting('🌙 夜深了，注意休息');
      } else if (hour < 11) {
        setGreeting('🌅 早上好，新的一天开始了');
      } else if (hour < 14) {
        setGreeting('☀️ 午安，享受美好时光');
      } else if (hour < 18) {
        setGreeting('🌤️ 下午好，继续加油');
      } else if (hour < 22) {
        setGreeting('🌆 晚上好，放松一下吧');
      } else {
        setGreeting('🌃 夜晚时光，愿你安好');
      }
    };
    
    updateGreeting();
    const timer = setInterval(updateGreeting, 60000);
    return () => clearInterval(timer);
  }, []);

  const localSiteConfig = siteManager.getConfig();
  const siteInfo = localSiteConfig;
  
  const totalLinks = localCategories.reduce((total, cat) => total + (cat.links?.length || 0), 0);
  
  if (isLoading) {
    return <LoadingSpinner text="正在初始化精彩内容..." />;
  }
  
  return (
    <>
      <Header>
        <div style={{ position: 'relative', width: '100%' }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Title>{siteInfo.title}</Title>
            <Space 
              orientation="vertical" 
              align="center" 
              style={{ 
                marginTop: '0.5rem',
                textAlign: 'center'
              }}
            >
              <Text 
                style={{ 
                  fontSize: '1rem',
                  opacity: 0.9,
                  color: 'var(--text-color, #2c3e50)'
                }}
              >
                {greeting}
              </Text>
              <Space size="large">
                <Space>
                  <Text 
                    style={{ 
                      fontSize: '0.875rem',
                      opacity: 0.7,
                      color: 'var(--text-color, #2c3e50)'
                    }}
                  >
                    📁 {localCategories.length} 个分类
                  </Text>
                </Space>
                <Space>
                  <Text 
                    style={{ 
                      fontSize: '0.875rem',
                      opacity: 0.7,
                      color: 'var(--text-color, #2c3e50)'
                    }}
                  >
                    🔗 {totalLinks} 个链接
                  </Text>
                </Space>
              </Space>
            </Space>
          </div>
        </div>
      </Header>
      <MainContent>
        <SearchBar searchEngines={localSearchEngines} />
        <LinkGrid categories={localCategories} />
      </MainContent>
      <ThemeSelectorEnhanced themeConfig={localThemeConfig} onSelect={cb} />
      <Footer>
        <Space orientation="vertical" align="center" style={{ width: '100%' }}>
          <Text style={{ 
            color: 'var(--text-color, #2c3e50)',
            opacity: 0.8
          }}>
            {siteInfo.copyright.text}
          </Text>
          {siteInfo.author && (
            <Text style={{ 
              fontSize: '12px',
              color: 'var(--text-color, #2c3e50)',
              opacity: 0.6
            }}>
              Made with ❤️ by {siteInfo.author}
            </Text>
          )}
        </Space>
      </Footer>
    </>
  );
};

export default Main;
