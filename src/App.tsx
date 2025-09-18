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
import { ConfigProvider, theme, App as AntdApp } from 'antd';


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

  // 根据当前主题动态配置 Ant Design 主题
  const antdTheme = {
    algorithm: currentTheme.id === 'custom' && currentTheme.name === '暗黑主题' 
      ? theme.darkAlgorithm 
      : theme.defaultAlgorithm,
    token: {
      colorPrimary: '#4a90e2',
      borderRadius: 8,
      colorBgContainer: currentTheme.id === 'custom' && currentTheme.name === '暗黑主题' 
        ? 'rgba(0, 0, 0, 0.6)' 
        : 'rgba(255, 255, 255, 0.8)',
    },
    components: {
      Modal: {
        contentBg: currentTheme.id === 'custom' && currentTheme.name === '暗黑主题' 
          ? 'rgba(0, 0, 0, 0.8)' 
          : 'rgba(255, 255, 255, 0.95)',
      },
      Button: {
        borderRadius: 6,
      },
      Input: {
        borderRadius: 6,
      },
    },
  };

  return (
    <ConfigProvider theme={antdTheme}>
      <AntdApp>
        <ThemeProvider theme={currentTheme}>
          <Background theme={currentTheme}>
            <Clock />
            <ShowAdminButton onClick={() => setIsShowAdmin(true)}>管理面板</ShowAdminButton>
            {
              visibleAdmin ? <AdminPanel config={toConfig}></AdminPanel> : <Main cb={setCurrentTheme}></Main>
            }
            <MyModal setVisibleAdmin={setVisibleAdmin} visibleAdmin={visibleAdmin} setToConfig={setToConfig} setIsShowAdmin={setIsShowAdmin} isShowAdmin={isShowAdmin}></MyModal>
          </Background>
        </ThemeProvider>
      </AntdApp>
    </ConfigProvider>
  );
};

export default App;