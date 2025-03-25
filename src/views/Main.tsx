//react
import type React from 'react';
import { useState, useEffect, useMemo } from "react"
//组件
import {
  SearchBar,
  LinkGrid,
  ThemeSelector,
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


interface IMainProps {
  cb: (theme: ThemeConfigType) => void;
}


const Main: React.FC<IMainProps> = ({ cb }) => {
  //主题
  const localThemeConfig = themeManager.getConfig();
  //链接
  const [localCategories, setLocalCategories] = useState(linksManager.getAllCategories());
  const localSearchEngines = linksManager.getAllSearchEngines();
  useMemo(() => {
    const links = getLocalStorageByKey<LinkCategory[]>("turnip_link_categories")
    console.log("localCategories", links);
    setLocalCategories(links)
  }, [])

  //网站配置
  const localSiteConfig = siteManager.getConfig();
  const siteInfo = localSiteConfig;
  return (
    <>
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