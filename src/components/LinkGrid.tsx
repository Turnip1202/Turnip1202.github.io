import type React from 'react';
import styled from '@emotion/styled';
import type { LinkCategory,BackgroundProps } from '../types';

const CategorySection = styled.section<BackgroundProps>`
  margin: 2.5rem 0;
  padding: 0;
  background: transparent;
  border-radius: 16px;
  
  /* 添加入场动画 */
  animation: categoryFadeIn 0.8s ease-out both;
  
  @keyframes categoryFadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* 逐个延迟动画 */
  &:nth-of-type(1) { animation-delay: 0.5s; }
  &:nth-of-type(2) { animation-delay: 0.6s; }
  &:nth-of-type(3) { animation-delay: 0.7s; }
  &:nth-of-type(4) { animation-delay: 0.8s; }
  &:nth-of-type(n+5) { animation-delay: 0.9s; }
`;

const CategoryTitle = styled.h2<BackgroundProps>`
  color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#ffffff' : '#2c3e50'};
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  padding: 0.75rem 1rem;
  background: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.6)'};
  border-radius: 12px;
  border-left: 4px solid #4a90e2;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  position: relative;
  
  /* 添加微妙的反光效果 */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1)
    );
    border-radius: 0 12px 12px 0;
  }
`;

const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.25rem;
  margin-top: 0.5rem;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 1rem;
    padding: 0 0.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 0.75rem;
    padding: 0;
  }
`;

const LinkCard = styled.a<BackgroundProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  background: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.8)'};
  border-radius: 16px;
  text-decoration: none;
  color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#ffffff' : '#333333'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.3)'};
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  min-height: 120px;
  
  /* 添加微妙的背景效果 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      transparent 0%,
      rgba(74, 144, 226, 0.02) 50%,
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题'
    ? '0 12px 32px rgba(255, 255, 255, 0.1), 0 4px 16px rgba(0, 0, 0, 0.1)'
    : '0 12px 32px rgba(74, 144, 226, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1)'};
    background: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题'
    ? 'rgba(255, 255, 255, 0.12)'
    : 'rgba(255, 255, 255, 0.95)'};
    border-color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题'
    ? 'rgba(255, 255, 255, 0.2)'
    : 'rgba(74, 144, 226, 0.2)'};
    color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题'
    ? '#ffffff'
    : '#2c3e50'};
    
    &::before {
      opacity: 1;
    }
    
    /* 悬停时的图标和文字效果 */
    span:first-of-type {
      transform: scale(1.1);
      filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
    }
    
    span:last-of-type {
      color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#ffffff' : '#2c3e50'};
      font-weight: 600;
    }
  }
  
  &:active {
    transform: translateY(-2px) scale(1.01);
  }
`;

const LinkIcon = styled.span`
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
  display: block;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  transition: all 0.3s ease;
`;

const LinkName = styled.span<BackgroundProps>`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? 'rgba(255, 255, 255, 0.9)' : '#555555'};
  text-align: center;
  line-height: 1.4;
  transition: all 0.3s ease;
`;

interface LinkGridProps {
  categories: LinkCategory[];
}

export const LinkGrid: React.FC<LinkGridProps> = ({ categories }) => {
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
