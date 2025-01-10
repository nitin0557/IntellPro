import styled from "@emotion/styled";

export const CarouselWrapper = styled.section`
  width: 100%;
  height: 370px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f7f7;
  position: relative;
  padding: 0 30px;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column; /* Stack text and images vertically */
    padding: 20px 15px;
    opacity: ${(props: { isNavOpen: boolean }) =>
      props.isNavOpen ? "1" : "0"};
  }
`;

export const TextWrapper = styled.div`
  width: 40%;
  z-index: 10;
  margin: 0 auto;
  padding-left: 46px;

  h4 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #333;
  }
  .text {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #666;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
    text-align: -webkit-center; /* Center the text on small screens */

    h4 {
      font-size: 1.2rem; /* Smaller font size */
    }
    .text {
      font-size: 12px; /* Smaller font size */
    }
  }
`;

export const CarouselButton = styled.button`
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
    font-size: 14px;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 400px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-top: 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s ease-in-out;
  opacity: ${(props: { isActive: boolean }) => (props.isActive ? "1" : "0")};
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  position: absolute;
  right: 15px;
  top: 50%;

  @media (max-width: 768px) {
    top: auto;
    bottom: 10px;
    right: 50%;
    transform: rotate(-90deg);
  }
`;

export const Dot = styled.button`
  margin-bottom: 8px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  transition: background-color 0.5s ease-in;
  background-color: ${(props: { isActive: boolean }) =>
    props.isActive ? "#00a2d4" : "#f7f7f7"};

  @media (max-width: 768px) {
    width: 8px;
    height: 8px;
  }
`;
