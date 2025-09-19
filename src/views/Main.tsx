//react
import type React from 'react';
import { useState, useEffect, useMemo } from "react"
//组件
import {
  SearchBar,
  LinkGrid,
  ThemeSelector,
  Clock,
  LoadingSpinner
} from '@/components';

//css
import {
  Header,
  Title,
  MainContent,
  Footer
} from "@/styles/App.css.ts"

//本地存储工具
import {
  themeManager,
  linksManager,
  siteManager,
  getLocalStorageByKey
} from "@/utils"
import type { ThemeConfigType, LinkCategory } from "@/types";

//antd
import { Avatar, Space, Typography } from 'antd';
const { Text } = Typography;


interface IMainProps {
  cb: (theme: ThemeConfigType) => void;
}


const Main: React.FC<IMainProps> = ({ cb }) => {
  //主题
  const localThemeConfig = themeManager.getConfig();
  //链接
  const [localCategories, setLocalCategories] = useState(linksManager.getAllCategories());
  const localSearchEngines = linksManager.getAllSearchEngines();
  //当前时间问候语
  const [greeting, setGreeting] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useMemo(() => {
    const links = getLocalStorageByKey<LinkCategory[]>("turnip_link_categories")
    console.log("localCategories", links);
    setLocalCategories(links)
    // 模拟加载完成
    setTimeout(() => setIsLoading(false), 100);
  }, [])

  // 获取问候语
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
    const timer = setInterval(updateGreeting, 60000); // 每分钟更新一次
    return () => clearInterval(timer);
  }, []);

  //网站配置
  const localSiteConfig = siteManager.getConfig();
  const siteInfo = localSiteConfig;
  
  // 统计信息
  const totalLinks = localCategories.reduce((total, cat) => total + (cat.links?.length || 0), 0);
  
  // 如果正在加载，显示加载动画
  if (isLoading) {
    return <LoadingSpinner theme={localThemeConfig.default} text="正在初始化精彩内容..." />;
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
            {/* 问候语和统计信息 */}
            <Space 
              direction="vertical" 
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
                  color: localThemeConfig.default.id === 'custom' && localThemeConfig.default.name === '暗黑主题' ? '#ffffff' : '#2c3e50'
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
                      color: localThemeConfig.default.id === 'custom' && localThemeConfig.default.name === '暗黑主题' ? '#ffffff' : '#666'
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
                      color: localThemeConfig.default.id === 'custom' && localThemeConfig.default.name === '暗黑主题' ? '#ffffff' : '#666'
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
      <ThemeSelector themeConfig={localThemeConfig} onSelect={cb} />
      <Footer>
        <Space direction="vertical" align="center" style={{ width: '100%' }}>
          <Text style={{ 
            color: localThemeConfig.default.id === 'custom' && localThemeConfig.default.name === '暗黑主题' ? '#ffffff' : '#2c3e50',
            opacity: 0.8
          }}>
            {siteInfo.copyright.text}
          </Text>
          {siteInfo.author && (
            <Text style={{ 
              fontSize: '12px',
              color: localThemeConfig.default.id === 'custom' && localThemeConfig.default.name === '暗黑主题' ? '#ffffff' : '#666',
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