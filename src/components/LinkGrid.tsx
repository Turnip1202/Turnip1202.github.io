import type React from 'react';
import styled from '@emotion/styled';
import type { LinkCategory } from '../types';

const CategorySection = styled.section`
  margin: 2rem 0;
  padding: 1rem;
  background: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.8)'};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h2`
  color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#ffffff' : '#333333'};
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? 'rgba(255, 255, 255, 0.1)' : '#f0f0f0'};
`;

const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const LinkCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? 'rgba(0, 0, 0, 0.3)' : '#f8f9fa'};
  border-radius: 12px;
  text-decoration: none;
  color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#ffffff' : '#333333'};
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' 
      ? '0 4px 12px rgba(255, 255, 255, 0.1)' 
      : '0 4px 12px rgba(0, 0, 0, 0.1)'};
    background: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' 
      ? 'rgba(255, 255, 255, 0.1)' 
      : 'white'};
    color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' 
      ? '#ffffff' 
      : '#000000'};
  }
`;

const LinkIcon = styled.span`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const LinkName = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#cccccc' : '#666666'};
`;

interface LinkGridProps {
  categories: LinkCategory[];
}

const LinkGrid: React.FC<LinkGridProps> = ({ categories }) => {
  return (
    <>
      {categories.map(category => (
        <CategorySection key={category.id}>
          <CategoryTitle>{category.name}</CategoryTitle>
          <LinksGrid>
            {category.links.map(link => (
              <LinkCard
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon>{link.icon}</LinkIcon>
                <LinkName>{link.name}</LinkName>
              </LinkCard>
            ))}
          </LinksGrid>
        </CategorySection>
      ))}
    </>
  );
};

export default LinkGrid;