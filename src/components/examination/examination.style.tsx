import styled from "@emotion/styled";

export const ExaminationsContainer = styled.section`
  display: flex;
  align-items: flex-start;
  padding: 48px 0;
  gap: 40px;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;

  .exam-data-wrapper {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
  }

  .exam-list {
    width: 100%;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    flex: 1;
    margin-bottom: 20px;
  }

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 24px;
    gap: 20px;
  }
`;

export const TitleColumn = styled.div`
  flex: 0 0 auto;
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

export const ExamItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 10px;


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

li {
  animation: bounceIn 3s ease-in-out;
}


  .month {
    width: 40px;
    height: 40px;
  }

  .info-item {
    margin-bottom: 6px;
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
  font-size: 0.9rem;
  color: #666;
`;

export const Title = styled.h2`
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 0.9rem;
  color: #666;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
