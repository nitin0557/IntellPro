import React, { useEffect, useState, useCallback, useMemo } from "react";
import {
  SliderContainer,
  SliderWrapper,
  Card,
  PrevButton,
  NextButton,
  CardTitle,
  CardDescription,
} from "./cardSlider.style"; 
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface CardProps {
  title: string;
  description: string;
}

const CardSlider: React.FC = React.memo(() => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const cards: CardProps[] = useMemo(() => [
    {
      title: "Lorem Ipsum 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Lorem Ipsum 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Lorem Ipsum 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Lorem Ipsum 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Lorem Ipsum 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ], []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  }, [cards.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  }, [cards.length]);

  const slideInterval = 3000;

  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNext();
    }, slideInterval);
    return () => clearInterval(autoSlide);
  }, [handleNext]);

  return (
    <SliderContainer>
      <PrevButton onClick={handlePrev}>←</PrevButton>
      <SliderWrapper>
        {cards.map((card, index) => (
          <Card
            key={index}
            style={{
              transform: `translateX(${(currentIndex) * 100}%)`,
            }}
          >
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
            <p>Know More <ChevronRightIcon className="icon" /></p>
          </Card>
        ))}
      </SliderWrapper>
      <NextButton onClick={handleNext}>→</NextButton>
    </SliderContainer>
  );
});

export default CardSlider;
