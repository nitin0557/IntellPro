import React from "react";
import Carousel from "../../slider/slider";
import { Subscribe } from "../../subscribe";
import CardSlider from "../../cardSlider/cardSlider";
import { FaqAccordion } from "../../faqAccordion/faqAccordion";
import { Stats } from "../../stats/statsDesc";
import { Examinations } from "../../examination/examination";

interface MobileNavProps {
  isNavOpen: boolean;
  toggleMobileNav: any;
}

const Home: React.FC<MobileNavProps> = ({ isNavOpen, toggleMobileNav }) => {
  return (
    <>
      <Carousel isNavOpen={isNavOpen} toggleMobileNav={toggleMobileNav} />
      <Examinations />
      <CardSlider />
      <Stats />
      <FaqAccordion />
      <Subscribe />
    </>
  );
};

export default Home;
