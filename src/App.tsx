//react
import type React from 'react';
import { ThemeProvider } from '@emotion/react';
import Main from '@views/Main.tsx';
//组件
import { Background, } from './components';
import { useTheme } from './hooks';
import { Button, ConfigProvider, theme } from 'antd';




//本地存储工具
import { themeManager } from "./utils"



const App: React.FC = () => {

  const showAdmin = () => {
    console.log('showAdmin');
  }


  //主题
  const localThemeConfig = themeManager.getConfig();

  const [currentTheme, setCurrentTheme] = useTheme(localThemeConfig);

  return (
    <ThemeProvider theme={currentTheme}>
      <Background theme={currentTheme}>
        <ConfigProvider theme={{
          algorithm: theme.darkAlgorithm
        }}>
          <Button onClick={showAdmin}>管理面板</Button>
        </ConfigProvider>
        <Main cb={setCurrentTheme}></Main>
      </Background>
    </ThemeProvider>

  );
};

export default App;