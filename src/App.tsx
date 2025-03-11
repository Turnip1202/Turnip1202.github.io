//react
import type React from 'react';
import { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import Main from '@views/Main.tsx';
import { ShowAdminButton } from './App.css';
//组件
import {
  AdminPanel, Background, Clock
} from './components';
import { useTheme } from './hooks';




//本地存储工具
import { themeManager } from "./utils"

import { EAdminPanelState } from '@types';



const App: React.FC = () => {
  const [visibleAdmin, setVisibleAdmin] = useState(false);
  let [isShow, setIsShow] = useState(EAdminPanelState.LINKS_ADMIN_PANEL);
  const showAdmin = () => {
    const al = `请输入要进入的面板:
      主题配置请输入：1
      网站配置请输入：2
      链接配置请输入：3
      `
    if (!visibleAdmin) {
      const show = prompt(al)
      if (show === null || show === "") return;
      console.log(show);
      switch (show) {
        case "1":
          setIsShow(EAdminPanelState.THEME_ADMIN_PANEL);
          break;
        case "2":
          setIsShow(EAdminPanelState.SITE_ADMIN_PANEL);
          break;
        case "3":
          setIsShow(EAdminPanelState.LINKS_ADMIN_PANEL);
          break;
        default:
          break;
      }
    }
    setVisibleAdmin(!visibleAdmin);
  }


  //主题
  const localThemeConfig = themeManager.getConfig();

  const [currentTheme, setCurrentTheme] = useTheme(localThemeConfig);

  return (
    <ThemeProvider theme={currentTheme}>
      <Background theme={currentTheme}>
        <Clock />
        <ShowAdminButton onClick={showAdmin}>管理面板</ShowAdminButton>
        {
          visibleAdmin ? <AdminPanel config={isShow}></AdminPanel> : <Main cb={setCurrentTheme}></Main>
        }
      </Background>
    </ThemeProvider>

  );
};

export default App;