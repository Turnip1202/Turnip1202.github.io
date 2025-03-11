//react
import type React from 'react';
import { ThemeProvider } from '@emotion/react';
//组件
import {
  SearchBar,
  LinkGrid,
  Background,
  ThemeSelector,
  Clock
} from './components';

import { useTheme } from './hooks';

//css
import {
  Header,
  Title,
  MainContent,
  Footer
} from "./App.css.ts"




//本地存储工具
import {
  themeManager,
  linksManager,
  siteManager
} from "./utils"



const App: React.FC = () => {
  //主题
  const localThemeConfig = themeManager.getConfig();
  //链接
  const localCategories = linksManager.getAllCategories();
  const localSearchEngines = linksManager.getAllSearchEngines();
  //网站配置
  const localSiteConfig = siteManager.getConfig();
  const siteInfo = localSiteConfig;


  const [currentTheme, setCurrentTheme] = useTheme(localThemeConfig);


  return (
    <ThemeProvider theme={currentTheme}>
      <Background theme={currentTheme}>
        <Clock />
        <Header>
          <Title>{siteInfo.title}</Title>
        </Header>
        <MainContent>
          <SearchBar searchEngines={localSearchEngines} />
          <LinkGrid categories={localCategories} />
        </MainContent>
        <ThemeSelector themeConfig={localThemeConfig} onSelect={setCurrentTheme} />
        <Footer>
          {`${siteInfo.copyright.text}`}
        </Footer>
      </Background>
    </ThemeProvider>

  );
};

export default App;