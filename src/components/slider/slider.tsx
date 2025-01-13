import React, { useState, useEffect, useCallback } from "react";
import {
  CarouselWrapper,
  Dot,
  DotsContainer,
  ImageContainer,
  Image,
  TextWrapper,
  CarouselButton,
} from "./slider.style";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../..";
import { fetchExam } from "../../state/action/exam.action";
import { Loader } from "../loader/loader";

interface MobileNavProps {
  isNavOpen: boolean;
  toggleMobileNav: () => void;
}

const Carousel: React.FC<MobileNavProps> = React.memo(
  ({ isNavOpen, toggleMobileNav }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { dataReducer, loading } = useSelector((state: any) => state);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      dispatch(fetchExam());
    }, [dispatch]);

      useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDotsClicked = useCallback((activeIndex: number) => {
      setCurrentIndex(activeIndex);
    }, []);

    const nextSlide = useCallback(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === dataReducer?.data?.banners.length - 1 ? 0 : prevIndex + 1
      );
    }, [dataReducer?.data?.banners?.length]);

    useEffect(() => {
      const autoSlide = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(autoSlide);
    }, [nextSlide]);

    return (
      <CarouselWrapper isNavOpen={isNavOpen}>
        <TextWrapper>
         { windowWidth < 768 ? null : 
         (<>
         <h4>Lorem ipsum</h4>
          <p className="text">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum
          </p>
          </>)}
          <CarouselButton>
            {windowWidth < 768 ? <PlayArrowIcon className="know-more"/> :(<>Know More <PlayArrowIcon /> </>)  }
          </CarouselButton>
        </TextWrapper>

        <ImageContainer>
          {loading ? (
            <Loader />
          ) : (
            dataReducer?.data?.banners &&
            dataReducer.data.banners.length > 0 &&
            dataReducer.data.banners.map((imagesItem: any, index: number) => (
              <Image
                key={index}
                isActive={index === currentIndex}
                src={imagesItem.banner_img}
                alt={`Banner ${index}`}
              />
            ))
          )}
        </ImageContainer>

        <DotsContainer>
          {dataReducer?.data?.banners &&
            dataReducer.data.banners.length > 0 &&
            dataReducer.data.banners.map((imagesItem: any, index: number) => (
              <Dot
                key={index}
                isActive={index === currentIndex}
                onClick={() => handleDotsClicked(index)}
              />
            ))}
        </DotsContainer>
      </CarouselWrapper>
    );
  }
);

export default Carousel;
