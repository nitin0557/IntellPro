import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const SubscribeContainer = styled.section`
  background-color: #f8f9fa;
  padding: 48px 0;

  @media (max-width: 768px) {
    padding: 24px 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 40px;
  margin: 0px 60px;

  @media (max-width: 768px) {
    flex-direction: column; 
    margin: 0 20px;
    padding: 20px; 
`;

export const Info = styled.div`
  width: 40%;
  margin-right: 32px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }

  .form-container {
    display: flex;
    gap: 15px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 30px;
  color: #343a40;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Description = styled.p`
  color: #6c757d;
  margin-bottom: 30px;
  font-size: 14px;
  line-height: 20px;

  @media (max-width: 768px) {
    text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  height: auto;
  background: #fff;
  border-radius: 60px;
  border: 0;
  outline: none !important;
  padding-left: 24px;
  font-size: 16px;
  box-shadow: 0 3px 6px rgb(0 0 0 /20%);

  @media (max-width: 768px) {
    font-size: 14px;
    padding-left: 16px;
  }
`;

export const Button = styled.button`
  width: 30%;
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

export const ImageWrapper = styled.div`
  width: 46%;
  overflow: hidden;

 animation: ${bounceIn} 3s ease-in-out;

  @media (max-width: 768px) {
    width: 80%; 
    margin-top: 20px; 
`;

export const Image = styled.img`
  width: 80%;
  height: 40%;

  @media (max-width: 768px) {
    width: 100%;
    height: 40%;
  }
`;
