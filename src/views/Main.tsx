//react
import type React from 'react';
//组件
import {
  SearchBar,
  LinkGrid,
  ThemeSelector,
  Clock,
} from '@/components';

//css
import {
  Header,
  Title,
  MainContent,
  Footer
} from "@/App.css.ts"





//本地存储工具
import {
  themeManager,
  linksManager,
  siteManager
} from "@/utils"
import type { ThemeConfigType } from "@/types";


interface IMainProps {
  cb: (theme: ThemeConfigType) => void;
}


const Main: React.FC<IMainProps> = ({ cb }) => {
  //主题
  const localThemeConfig = themeManager.getConfig();
  //链接
  const localCategories = linksManager.getAllCategories();
  const localSearchEngines = linksManager.getAllSearchEngines();
  //网站配置
  const localSiteConfig = siteManager.getConfig();
  const siteInfo = localSiteConfig;
  return (
    <>
      <Clock />
      <Header>
        <Title>{siteInfo.title}</Title>
      </Header>
      <MainContent>
        <SearchBar searchEngines={localSearchEngines} />
        <LinkGrid categories={localCategories} />
      </MainContent>
      <ThemeSelector themeConfig={localThemeConfig} onSelect={cb} />
      <Footer>
        {`${siteInfo.copyright.text}`}
      </Footer>
    </>
  );
};

export default Main;