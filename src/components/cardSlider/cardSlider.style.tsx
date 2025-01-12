import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const SliderContainer = styled.section`
  position: relative;
  width: 80%;
  overflow: hidden;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 48px 0;

  @media (max-width: 768px) {
    width: 100%;
    padding: 24px;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  transition: all 0.5s ease-in-out;
  height: 250px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: row;
    height: auto;
    gap: 5px;
  }
`;

const slide = (currentIndex: number) => keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(${currentIndex * 100}%);
  }
`;

export const Card = styled.div<{ currentIndex: number }>`
  background-color: #0d4b7f;
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 1;
  width: 335px;
  height: 200px;
  font-size: 14px;
  text-align: left;

  animation: ${({ currentIndex }) => slide(currentIndex)} 0.5s ease-in-out;

  p {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 13px;
    line-height: 18px;

    .icon {
      background: #fff;
      border-radius: 10px;
      color: #101217;
    }
  }

  @media (max-width: 768px) {
    width: 250px;
    height: auto;
    font-size: 12px;
  }
`;

export const CardTitle = styled.h2`
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 1.2rem;
  }
`;

export const CardDescription = styled.p`
  margin-bottom: 20px;
  line-height: 10px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
    font-size: 12px;
  }
`;

export const CardButton = styled.button`
  background-color: white;
  color: #0d4b7f;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0b3b64;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 12px;
  }
`;

export const PrevButton = styled.button`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 768px) {
    padding: 8px;
    opacity: 0;
  }
`;

export const NextButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: all 0.5s ease-in;


  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 768px) {
    padding: 8px;
    opacity: 0;
  }
`;
