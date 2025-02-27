import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const ClockContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.2rem;
  color: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? '#ffffff' : '#2c3e50'};
  font-weight: 500;
  background: ${props => props.theme.id === 'custom' && props.theme.name === '暗黑主题' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.8)'};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 1000;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.3rem 0.8rem;
  }
`;

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ClockContainer>
      {`${time.getFullYear()}-${String(time.getMonth() + 1).padStart(2, '0')}-${String(time.getDate()).padStart(2, '0')} ${String(time.getHours()).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}:${String(time.getSeconds()).padStart(2, '0')}`}
    </ClockContainer>
  );
};

export default Clock;