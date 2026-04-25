import type React from 'react';
import { useState } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import Main from '@views/Main.tsx';
import { ShowAdminButton } from '@/styles/App.css';
import {
  AdminPanel, Background, MyModal
} from './components';
import { ClockNew as Clock } from './components';
import { ThemeProvider, useThemeContext } from './contexts';
import { ConfigProvider, App as AntdApp } from 'antd';
import { EAdminPanelState } from '@types';

const AppContent: React.FC = () => {
  const [visibleAdmin, setVisibleAdmin] = useState(false);
  const [toConfig, setToConfig] = useState(EAdminPanelState.LINKS_ADMIN_PANEL);
  const [isShowAdmin, setIsShowAdmin] = useState(false);

  const { appTheme, antdTheme, setAppTheme, isDark } = useThemeContext();

  return (
    <ConfigProvider theme={antdTheme}>
      <AntdApp>
        <EmotionThemeProvider theme={appTheme}>
          <Background $isDark={isDark} backgroundImage={appTheme.backgroundImage}>
            <Clock />
            <ShowAdminButton onClick={() => setIsShowAdmin(true)}>管理面板</ShowAdminButton>
            {
              visibleAdmin ? <AdminPanel config={toConfig}></AdminPanel> : <Main cb={setAppTheme}></Main>
            }
            <MyModal setVisibleAdmin={setVisibleAdmin} visibleAdmin={visibleAdmin} setToConfig={setToConfig} setIsShowAdmin={setIsShowAdmin} isShowAdmin={isShowAdmin}></MyModal>
          </Background>
        </EmotionThemeProvider>
      </AntdApp>
    </ConfigProvider>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;