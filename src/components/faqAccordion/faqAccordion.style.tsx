import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const FAQContainer = styled.section`
  width: 80%;
  margin: 0 auto;
  padding: 24px;

  h2 {
    text-align: center;
    font-size: 24px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 16px;
  }
`;

const bounceIn = keyframes`
  0% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
`;


export const FAQItemContainer = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  cursor: pointer;
  width: 100%;

  @keyframes bounceIn {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    50% {
      transform: translateY(10px);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
    }
  }
  animation: ${bounceIn} 3s ease-in-out;

  @media (max-width: 768px) {
    padding: 12px 0;
  }
`;

export const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  padding: 10px;
  font-size: 12px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Answer = styled.div<{ isOpen: boolean }>`
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};
  overflow: hidden;
  font-size: 12px;
  transition: font-size 0.5s ease-in-out;
  padding: ${(props) => (props.isOpen ? "10px" : "0 10px")};
  max-width: 1032px;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 13px;
    max-width: 300px;
    text-overflow: ellipsis;
    max-height: ${({isOpen}) =>(isOpen?'75px':'0px')};
    white-space: normal;
    overflow: hidden;
  }
`;

export const Icon = styled.span`
  font-size: 19.2px;
  transition: all 0.5s ease-in-out;
  &.open {
    background: #0f406e;
    color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;
