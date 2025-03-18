import styled from '@emotion/styled';
import {BackgroundProps} from "@/types"


export const ShowAdminButton = styled.button`
  opacity: 0.5; /* 默认透明度 */
  background-color: transparent; /* 默认背景颜色设置为透明 */
  border: none; /* 去掉边框 */
  color: white; /* 默认字体颜色为蓝色 */
  transition: opacity 0.3s ease; /* 过渡效果 */
  cursor: pointer; /* 显示鼠标小手 */
  &:focus {
    outline: none; /* 去掉焦点时的边框 */
  }

  &:hover {
    opacity: 1; /* 鼠标悬停时的透明度 */
    background-color: transparent; /* 鼠标悬停时背景颜色仍为透明 */
  }
`;


export const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
`;

export const Title = styled.h1<BackgroundProps>`
  color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#ffffff' : '#2c3e50'};
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const MainContent = styled.main<BackgroundProps>`
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

export const Footer = styled.footer<BackgroundProps>`
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


