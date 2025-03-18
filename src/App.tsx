//react
import type React from 'react';
import { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import Main from '@views/Main.tsx';
import { ShowAdminButton } from '@/styles/App.css';
//组件
import {
  AdminPanel, Background, Clock
} from './components';
import { useTheme } from './hooks';
import { ConfigProvider, theme } from 'antd';


//配置
import { al } from "./config"

//本地存储工具
import { themeManager, proxyFn } from "./utils"

import { EAdminPanelState } from '@types';



const App: React.FC = () => {
  const [visibleAdmin, setVisibleAdmin] = useState(false);
  let [isShow, setIsShow] = useState(EAdminPanelState.LINKS_ADMIN_PANEL);
  const showAdmin = proxyFn(visibleAdmin, al, setIsShow, setVisibleAdmin)

  //主题
  const localThemeConfig = themeManager.getConfig();

  const [currentTheme, setCurrentTheme] = useTheme(localThemeConfig);

  return (
    <ThemeProvider theme={currentTheme}>
      <Background theme={currentTheme}>
        <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
          <Clock />
          <ShowAdminButton onClick={showAdmin}>管理面板</ShowAdminButton>
          {
            visibleAdmin ? <AdminPanel config={isShow}></AdminPanel> : <Main cb={setCurrentTheme}></Main>
          }
        </ConfigProvider>

      </Background>
    </ThemeProvider>

  );
};

export default App;