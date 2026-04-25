import { ShowAdminButton } from '@/styles/App.css';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { EAdminPanelState } from '@types';
import Main from '@views/Main.tsx';
import { App as AntdApp, ConfigProvider } from 'antd';
import type React from 'react';
import { useState } from 'react';
import { AdminPanel, Background, MyModal, TodoListWidget } from './components';
import { ClockNew as Clock } from './components';
import { ThemeProvider, useThemeContext } from './contexts';

const AppContent: React.FC = () => {
  const [visibleAdmin, setVisibleAdmin] = useState(false);
  const [toConfig, setToConfig] = useState(EAdminPanelState.LINKS_ADMIN_PANEL);
  const [isShowAdmin, setIsShowAdmin] = useState(false);
  const [showTodo, setShowTodo] = useState(true);

  const { appTheme, antdTheme, setAppTheme, isDark } = useThemeContext();

  return (
    <ConfigProvider theme={antdTheme}>
      <AntdApp>
        <EmotionThemeProvider theme={appTheme}>
          <Background
            $isDark={isDark}
            backgroundImage={appTheme.backgroundImage}
          >
            <Clock />
            <div
              style={{
                position: 'fixed',
                top: '20px',
                right: '140px',
                zIndex: 9998,
              }}
            >
              <button
                onClick={() => setShowTodo(!showTodo)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  background: isDark
                    ? 'rgba(255,255,255,0.1)'
                    : 'rgba(255,255,255,0.8)',
                  color: isDark ? '#fff' : '#333',
                  backdropFilter: 'blur(10px)',
                  fontWeight: 500,
                }}
              >
                📝 待办清单
              </button>
            </div>
            <ShowAdminButton onClick={() => setIsShowAdmin(true)}>
              管理面板
            </ShowAdminButton>
            {visibleAdmin ? (
              <AdminPanel config={toConfig}></AdminPanel>
            ) : (
              <Main cb={setAppTheme}></Main>
            )}
            <MyModal
              setVisibleAdmin={setVisibleAdmin}
              visibleAdmin={visibleAdmin}
              setToConfig={setToConfig}
              setIsShowAdmin={setIsShowAdmin}
              isShowAdmin={isShowAdmin}
            ></MyModal>
            <TodoListWidget visible={showTodo} onVisibleChange={setShowTodo} />
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
