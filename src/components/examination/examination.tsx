import React, { useEffect, useState, useMemo } from "react";
import {
  DescriptionItem,
  DescriptionList,
  ExaminationsContainer,
  Subtitle,
  Title,
  TitleColumn,
  ExamItem,
  ExamInfo,
  ExamWrapper,
} from "./examination.style";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

interface ExamItemProps {
  date: string;
  level: string;
  description?: string[];
}

export const Examinations: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000); 

    return () => clearInterval(intervalId); 
  }, []);

  const examData: ExamItemProps[] = useMemo(() => [
    { date: "02th October 2014", level: "Level 1 exam" },
    {
      date: "Nov-Dec 2016",
      level: "Level 2",
      description: ["Lorem Ipsum", "Lorem Ipsum"],
    },
    { date: `Ongoing this year (${currentYear})`, level: "Level 3 (Grad)" },
  ], [currentYear]);

  return (
    <ExaminationsContainer>
      <TitleColumn>
        <Title>Upcoming Examinations</Title>
        <Subtitle>Enquire about the examination & register for the exams</Subtitle>
      </TitleColumn>
      <ExamWrapper>
        {examData.map((exam, index) => (
          <ul key={index} className="exam-list">
            <ExamItem className="exam-item">
              <CalendarMonthOutlinedIcon className="month" />
              <ExamInfo>
                <span className="info-item">{exam.date}</span>
                <span className="info-item">{exam.level}</span>
                {exam.description && exam.description.length > 0 && (
                  <DescriptionList>
                    {exam.description.map((desc, i) => (
                      <DescriptionItem key={i}>{desc}</DescriptionItem>
                    ))}
                  </DescriptionList>
                )}
              </ExamInfo>
            </ExamItem>
          </ul>
        ))}
      </ExamWrapper>
    </ExaminationsContainer>
  );
};

export default Examinations;
