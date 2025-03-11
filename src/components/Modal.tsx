import styled from '@emotion/styled';

// 定义模态框的背景
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 半透明背景 */
  display: ${props => (props.isOpen ? 'block' : 'none')}; /* 根据 isOpen 控制显示隐藏 */
  justify-content: center;
  align-items: center;
`;

// 定义模态框的内容
const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  max-width: 500px;
`;

// 模态框组件
export const Modal = ({ isOpen, onClose }) => {
  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose}>
      <ModalContent>
        <h2>模态框标题</h2>
        <p>这是模态框的内容。</p>
        <button onClick={onClose}>关闭</button>
      </ModalContent>
    </ModalOverlay>
  );
};
