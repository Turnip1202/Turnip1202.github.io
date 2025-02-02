import type React from 'react';
import styled from '@emotion/styled';
import SearchBar from './components/SearchBar';
import LinkGrid from './components/LinkGrid';
import { linkCategories } from './config/links';

const AppContainer = styled.div`
  min-height: 100vh;
  background: #f5f6fa;
  padding: 2rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header>
        <Title>Turnip起始页</Title>
      </Header>
      <MainContent>
        <SearchBar />
        <LinkGrid categories={linkCategories} />
      </MainContent>
    </AppContainer>
  );
};

export default App;