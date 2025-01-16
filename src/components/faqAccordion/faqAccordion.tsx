import React, { useState, useMemo, useCallback } from 'react';
import { Answer, FAQContainer, FAQItemContainer, Icon, Question } from './faqAccordion.style';
import RemoveIcon from '@mui/icons-material/Remove';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

interface FAQItem {
  question: string;
  answer: string;
}

const faqsData: FAQItem[] = [
  {
    question: 'How does an investor gain access to MF Utility?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    question: 'Will investors be able to have multiple Common Account Numbers?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    question: 'How does an investor gain access to MF Utility?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
];

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const memoizedFaqs = useMemo(() => faqsData, []);

  const toggleFAQ = useCallback((index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  }, []);

  return (
    <FAQContainer>
      <h2>FAQ</h2>
      {memoizedFaqs.map((faq, index) => (
        <FAQItemContainer key={index} onClick={() => toggleFAQ(index)}>
          <Question>
            {faq.question}
            <Icon className={openIndex === index ? 'open' : ''}>
              {openIndex === index ? <RemoveIcon /> : <AddOutlinedIcon />}
            </Icon>
          </Question>
          <Answer isOpen={openIndex === index}>{faq.answer}</Answer>
        </FAQItemContainer>
      ))}
    </FAQContainer>
  );
};


