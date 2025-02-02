import type React from 'react';
import styled from '@emotion/styled';
import type { LinkCategory } from '../types';

const CategorySection = styled.section`
  margin: 2rem 0;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const CategoryTitle = styled.h2`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0f0f0;
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
  background: #f8f9fa;
  border-radius: 12px;
  text-decoration: none;
  color: #333;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background: white;
  }
`;

const LinkIcon = styled.span`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const LinkName = styled.span`
  font-size: 0.9rem;
  color: #666;
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