//react
import type React from 'react';
import { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import Main from '@views/Main.tsx';
import { ShowAdminButton } from '@/styles/App.css';
//组件
import {
  AdminPanel, Background, Clock, MyModal
} from './components';
import { useTheme } from './hooks';
import { ConfigProvider, theme, } from 'antd';


//本地存储工具
import { themeManager } from "./utils"

import { EAdminPanelState } from '@types';



const App: React.FC = () => {
  const [visibleAdmin, setVisibleAdmin] = useState(false);
  let [toConfig, setToConfig] = useState(EAdminPanelState.LINKS_ADMIN_PANEL);
  const [isShowAdmin, setIsShowAdmin] = useState(false);

  //主题
  const localThemeConfig = themeManager.getConfig();

  const [currentTheme, setCurrentTheme] = useTheme(localThemeConfig);

  //重新渲染

  return (
    <ThemeProvider theme={currentTheme}>
      <Background theme={currentTheme}>
        <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
          <Clock />
          <ShowAdminButton onClick={() => setIsShowAdmin(true)}>管理面板</ShowAdminButton>
          {
            visibleAdmin ? <AdminPanel config={toConfig}></AdminPanel> : <Main cb={setCurrentTheme}></Main>
          }
          <MyModal setVisibleAdmin={setVisibleAdmin} visibleAdmin={visibleAdmin} setToConfig={setToConfig} setIsShowAdmin={setIsShowAdmin} isShowAdmin={isShowAdmin}></MyModal>
        </ConfigProvider>

      </Background>
    </ThemeProvider>

  );
};

export default App;