import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const ExaminationsContainer = styled.section`
  display: flex;
  align-items: flex-start;
  padding: 48px 0;
  gap: 40px;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 24px;
    gap: 20px;
    flex-wrap: wrap;
  }
`;

export const ExamWrapper = styled.div`
  display: flex;
  flex-grow: 1;

  .exam-list {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const TitleColumn = styled.div`
  padding-right: 20px;
  border-right: 1px solid #ddd;
  text-align: left;
  width: 25%;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    text-align: center;
    margin-bottom: 20px;
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

export const ExamItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 10px;

  animation: ${bounceIn} 2s ease-in-out;

  .month {
    width: 40px;
    height: 40px;
  }

  .info-item {
    margin-bottom: 6px;

    @media (max-width: 768px) {
      color: #7b7c7e;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ExamInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DateLevel = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-right: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DescriptionList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const DescriptionItem = styled.li`
  font-size: 14px;
  color: #666;
`;

export const Title = styled.h2`
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
