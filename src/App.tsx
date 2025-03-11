//react
import type React from 'react';
import { ThemeProvider } from '@emotion/react';
import Main from '@views/Main.tsx';
//组件
import { Background, } from './components';
import { useTheme } from './hooks';





//本地存储工具
import { themeManager } from "./utils"



const App: React.FC = () => {
  //主题
  const localThemeConfig = themeManager.getConfig();

  const [currentTheme, setCurrentTheme] = useTheme(localThemeConfig);

  return (
    <ThemeProvider theme={currentTheme}>
      <Background theme={currentTheme}>
        <Main cb={setCurrentTheme}></Main>
      </Background>
    </ThemeProvider>

  );
};

export default App;