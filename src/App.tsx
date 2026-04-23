import type React from 'react';
import { useState, useEffect } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import Main from '@views/Main.tsx';
import { ShowAdminButton } from '@/styles/App.css';
import {
  AdminPanel, Background, MyModal, UpdateNotification, UpdateLog
} from './components';
import { ClockNew as Clock } from './components';
import { ThemeProvider, useThemeContext } from './contexts';
import { ConfigProvider, App as AntdApp } from 'antd';
import { EAdminPanelState } from '@types';
import { keyboardManager } from './utils/keyboard/keyboardManager';
import { updateLogManager } from './utils/version/updateLogManager';

const AppContent: React.FC = () => {
  const [visibleAdmin, setVisibleAdmin] = useState(false);
  const [toConfig, setToConfig] = useState(EAdminPanelState.LINKS_ADMIN_PANEL);
  const [isShowAdmin, setIsShowAdmin] = useState(false);

  const { appTheme, antdTheme, setAppTheme, isDark, toggleDarkMode } = useThemeContext();

  // 注册快捷键
  useEffect(() => {
    // 打开管理面板
    keyboardManager.registerShortcut('open-admin', {
      keys: ['Ctrl', 'K'],
      description: '打开管理面板',
      callback: () => setIsShowAdmin(true)
    });

    // 切换主题
    keyboardManager.registerShortcut('toggle-theme', {
      keys: ['Ctrl', 'T'],
      description: '切换主题',
      callback: () => {
        // 调用主题切换函数
        toggleDarkMode();
      }
    });

    // 开始监听
    keyboardManager.startListening();

    return () => {
      // 清理快捷键
      keyboardManager.removeShortcut('open-admin');
      keyboardManager.removeShortcut('toggle-theme');
    };
  }, [toggleDarkMode]);

  // 初始化更新日志
  useEffect(() => {
    // 检查是否已有更新日志
    const existingLogs = updateLogManager.getAllLogs();
    if (existingLogs.length === 0) {
      // 添加第一阶段功能的更新记录
      updateLogManager.addLog({
        version: '1.0.0',
        date: new Date().toISOString().split('T')[0],
        description: '第一阶段功能更新',
        changes: [
          '添加搜索历史功能，记录并管理用户的搜索记录',
          '实现快捷键支持，包括Ctrl+K打开管理面板和Ctrl+T切换主题',
          '新增链接收藏功能，用户可以收藏常用链接',
          '添加系统更新日志，记录应用的更新内容'
        ]
      });
    }
  }, []);

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
          <UpdateNotification checkInterval={180000} />
          <UpdateLog />
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