import styled from "@emotion/styled";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 10px;
`;

export const ModalText = styled.p`
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 30%;
  margin: auto;
  background: #0f406e;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    background: #fff;
    color: #0f406e;
  }

  @media (max-width: 768px) {
    width: 80%;
    font-size: 14px;
  }
`;
