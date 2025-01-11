import React, { useEffect, useState } from "react";
import {
  Container,
  HeaderWrapper,
  Logo,
  Nav,
  Search,
  Button,
  Hamburger,
} from "./header.style";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import Select from "../select/select";
import SearchBarComponent from "./searchbar";

interface MobileNavProps {
  isMobileNavOpen: boolean;
  toggleMobileNav: any;
  isDesKtopNavOpen: boolean;
  toggleDesktopNav: any;
}

interface UserResponse {
  data: { country: string }[];
}

const Header: React.FC<MobileNavProps> = ({
  isMobileNavOpen,
  toggleMobileNav,
  isDesKtopNavOpen,
}) => {
  const [userData, setUserData] = useState<string[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries"
        );
        const data: UserResponse = await response.json();
        const userList = data.data.map((item: any) => item.country);
        setUserData(userList);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearchClicked = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderWrapper>
      <Container>
        <Logo>LOGO</Logo>
        <Hamburger onClick={toggleMobileNav}>
          {isMobileNavOpen ? <MenuIcon /> : <CloseIcon />}
        </Hamburger>

        <Nav isMobileNavOpen={isMobileNavOpen} isDeskOpen={isDesKtopNavOpen}>
          <Link to="/IntellPro" className="nav-item qualification">
            Qualifications <KeyboardArrowDownIcon />
            <ul className="sub-menu">
              {[
                "Lorem Ipsum",
                "Lorem Ipsum",
                "Lorem Ipsum",
                "Lorem Ipsum",
                "Lorem Ipsum",
                "Lorem Ipsum",
              ].map((item: any, index) => (
                <li key={index}>
                  <Link to="/IntellPro">{item}</Link>
                </li>
              ))}
            </ul>
          </Link>
          <Link to="/IntellPro" className="nav-item organization">
            Organizations <KeyboardArrowDownIcon />
            <ul className="sub-menu">
              {[
                "Lorem Ipsum",
                "Lorem Ipsum",
                "Lorem Ipsum",
                "Lorem Ipsum",
                "Lorem Ipsum",
                "Lorem Ipsum",
              ].map((item: any, index) => (
                <li key={index}>
                  <Link to="/IntellPro">{item}</Link>
                </li>
              ))}
            </ul>
          </Link>
          <Link to="/IntellPro" className="nav-item">
            Research & Analysis <KeyboardArrowDownIcon />
          </Link>
          <Link to="/IntellPro" className="nav-item">
            Lorem ipsum <KeyboardArrowDownIcon />
          </Link>
          <Link to="/IntellPro" className="nav-item">
            Lorem ipsum <KeyboardArrowDownIcon />
          </Link>

          <Search isSearchOpen={isSearchOpen}>
            <SearchIcon
              onClick={handleSearchClicked}
              style={{ cursor: "pointer" }}
            />
          </Search>

          <Button isNavOpen={!isMobileNavOpen} isDeskOpen={isDesKtopNavOpen}>
            <button className="btn">Enrollment</button>
          </Button>
        </Nav>

        {windowWidth < 768 ? (
          <SearchBarComponent isMobileNavOpen={isSearchOpen} />
        ) : (
          <Select
            data={userData}
            toggleMobileNav={toggleMobileNav}
            isMobileNavOpen={isMobileNavOpen}
            placeholder="All"
          />
        )}
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
