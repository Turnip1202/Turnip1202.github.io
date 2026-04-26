import { ShowAdminButton } from '@/styles/App.css';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { EAdminPanelState } from '@types';
import Main from '@views/Main.tsx';
import { App as AntdApp, ConfigProvider } from 'antd';
import type React from 'react';
import { useState } from 'react';
import { AdminPanel, Background, MyModal, TodoListWidget } from './components';
import { ClockNew as Clock } from './components';
import { DraggableWidget } from './components/common/DraggableWidget';
import { ThemeProvider, useThemeContext } from './contexts';
import UpdateLog from './components/UpdateLog';

const TODO_VISIBLE_KEY = 'turnip-todo-visible';

const AppContent: React.FC = () => {
  const [visibleAdmin, setVisibleAdmin] = useState(false);
  const [toConfig, setToConfig] = useState(EAdminPanelState.LINKS_ADMIN_PANEL);
  const [isShowAdmin, setIsShowAdmin] = useState(false);
  const [showTodo, setShowTodo] = useState(() => {
    try {
      const stored = localStorage.getItem(TODO_VISIBLE_KEY);
      return stored === null ? false : stored === 'true';
    } catch {
      return true;
    }
  });

  const handleTodoVisibleChange = (visible: boolean) => {
    setShowTodo(visible);
    try {
      localStorage.setItem(TODO_VISIBLE_KEY, String(visible));
    } catch {
      // ignore
    }
  };

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
            <DraggableWidget
              initialPosition={{ x: 16, y: 30 }}
              zIndex={9998}
              storageKey="turnip-widget-todo-btn-v2"
            >
              <button
                onClick={() => handleTodoVisibleChange(!showTodo)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'grab',
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
            </DraggableWidget>
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
            <TodoListWidget visible={showTodo} onVisibleChange={handleTodoVisibleChange} />
            <UpdateLog />
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
