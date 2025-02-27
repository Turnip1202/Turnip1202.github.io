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
import Clock from './components/Clock';
import { siteConfig } from './config/site';

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
`;

const Title = styled.h1`
  color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#ffffff' : '#2c3e50'};
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
  background: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.6)'};
  color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#ffffff' : '#2c3e50'};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);

  @media (max-width: 768px) {
    padding: 15px;
    border-radius: 12px;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#ffffff' : '#2c3e50'};
  font-size: 14px;
  opacity: 0.8;
  margin-top: 2rem;

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 12px;
  }
`;

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useTheme();
  // const [currentTheme, setCurrentTheme] = useState(themeConfig.default);

  return (
    <ThemeProvider theme={currentTheme}>
      <Background theme={currentTheme}>
        <Clock />

        <Header>
          <Title>{siteConfig.title}</Title>
        </Header>
        <MainContent>
          <SearchBar />
          <LinkGrid categories={linkCategories} />
        </MainContent>
        <ThemeSelector onSelect={setCurrentTheme} />
        <Footer>
          {`${siteConfig.copyright.text}`}
        </Footer>
      </Background>
    </ThemeProvider>

  );
};

export default App;