import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

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

export const StatsContainer = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;
  width: 80%;
  margin: 0 auto;
  background: #f6f6f6;
  animation: ${bounceIn} 3s ease-in-out;

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }
`;

export const StatsItem = styled.div`
  text-align: center;
  padding: 20px;
  flex: 1 1 200px;
  margin: 10px;
  border-radius: 8px;
  min-width: 250px;
  text-align: left;

  @media (max-width: 768px) {
    min-width: 180px;
    padding: 15px;
  }
`;

export const ItemTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 15px;
  }
`;

export const ItemCount = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: #0056b3;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.8rem; 
`;

export const ItemDescription = styled.p`
  font-size: 12px;
  color: #666;
  line-height: 18px;

  @media (max-width: 768px) {
    font-size: 11px;
    line-height: 16px;
  }
`;
