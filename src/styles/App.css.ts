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
  padding: 2rem 0 1rem;
  
  /* 添加纻丽的动画效果 */
  animation: fadeInDown 0.8s ease-out;
  
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Title = styled.h1<BackgroundProps>`
  color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#ffffff' : '#2c3e50'};
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  font-weight: 800;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  letter-spacing: -0.02em;
  background: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' 
    ? 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)'
    : 'linear-gradient(135deg, #2c3e50 0%, #4a90e2 50%, #2c3e50 100%)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  /* 加入一些活力 */
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
    filter: brightness(1.1);
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    letter-spacing: -0.01em;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const MainContent = styled.main<BackgroundProps>`
  max-width: 1200px;
  margin: 0 auto;
  background: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.65)'};
  color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#ffffff' : '#2c3e50'};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 
    0 12px 40px 0 rgba(31, 38, 135, 0.2),
    0 2px 16px 0 rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  /* 动画效果 */
  animation: fadeInUp 0.8s ease-out 0.2s both;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* 响应式设计 */
  @media (max-width: 768px) {
    margin: 0 1rem;
    padding: 20px;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    margin: 0 0.5rem;
    padding: 16px;
    border-radius: 12px;
  }
`;

export const Footer = styled.footer<BackgroundProps>`
  text-align: center;
  padding: 24px 20px;
  color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#ffffff' : '#2c3e50'};
  font-size: 14px;
  opacity: 0.8;
  margin-top: 2.5rem;
  
  /* 动画效果 */
  animation: fadeIn 1s ease-out 0.4s both;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.8;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 15px;
    font-size: 13px;
    margin-top: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 16px 12px;
    font-size: 12px;
    margin-top: 1.5rem;
  }
`;


