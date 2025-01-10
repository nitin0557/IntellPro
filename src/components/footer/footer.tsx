import React from "react";
import { Container, FooterWrapper, LastStrip } from "./footer.style";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import TrainOutlinedIcon from "@mui/icons-material/TrainOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CopyrightIcon from "@mui/icons-material/Copyright";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <FooterWrapper>

        <Container>
          <div className="col1">
            <h4>Contact Us</h4>
            <p>
              Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United
              States
            </p>
            <p>Email: sale@Nest.com</p>
            <p>Phone No: 123456789</p>
          </div>
          <div className="col2">
            <h4>Follow Us</h4>
            <ul className="icon-list">
              <li>
                <Link to="#">
                  <FacebookRoundedIcon className="icon" />{" "}
                </Link>
              </li>
              <li>
                <Link to="#">
      
                  <TwitterIcon className="icon" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FacebookRoundedIcon className="icon" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <LinkedInIcon className="icon" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <YouTubeIcon className="icon" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <InstagramIcon className="icon" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col3">
            <h4>Head Office</h4>
            <ul className="footer-list">
              <li>
                <Link to="#">
      
                  <LocationOnOutlinedIcon className="icon" />
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </Link>
              </li>
              <li>
                <Link to="#">
      
                  <TimerOutlinedIcon className="icon" /> Lorem ipsum Lorem ipsum
                  Lorem ipsum Lorem ipsum
                </Link>
              </li>
              <li>
                <Link to="#">
      
                  <TimerOutlinedIcon className="icon" />
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </Link>
              </li>
              <li>
                <Link to="#">
                  <TrainOutlinedIcon className="icon" />
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum{" "}
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </FooterWrapper>
      <LastStrip>
        <p className="inline-text">
          <CopyrightIcon className="icon" /> All Rights Reserved Privacy Policy
        </p>
      </LastStrip>
    </>
  );
};

export default Footer;