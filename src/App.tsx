import type React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';
import SearchBar from './components/SearchBar';
import LinkGrid from './components/LinkGrid';
import { linkCategories } from './config/links';
import { Background } from './components/Layout/Background';
import { ThemeSelector } from './components/ThemeSelector';
import { themeConfig } from './config/theme';
import { useTheme } from './hooks/useTheme';
import { ThemeProvider } from '@emotion/react';

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);

  @media (max-width: 768px) {
    padding: 15px;
    border-radius: 12px;
  }
`;

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme]  = useTheme();
  // const [currentTheme, setCurrentTheme] = useState(themeConfig.default);

  return (
    <ThemeProvider theme={currentTheme}>
    <Background theme={currentTheme}>
      <Header>
        <Title>Turnip起始页</Title>
      </Header>
      <MainContent>
        <SearchBar />
        <LinkGrid categories={linkCategories} />
      </MainContent>
      <ThemeSelector onSelect={setCurrentTheme} />
    </Background>
    </ThemeProvider>

  );
};

export default App;