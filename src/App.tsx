import React, { useState, Suspense, lazy, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Loader } from "./components/loader/loader";

const Header = lazy(() => import("./components/header/header"));
const Footer = lazy(() => import("./components/footer/footer"));
const Home = lazy(() => import("./components/pages/Home"));

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false); // Mobile nav closed by default
  const [isDesKtopNavOpen, setIsDesKtopNavOpen] = useState<boolean>(false); // Desktop nav closed by default

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const toggleDesktopNav = () => {
    setIsDesKtopNavOpen(!isDesKtopNavOpen);
  };

  return (
    <>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Header
          isMobileNavOpen={isMobileNavOpen}
          isDesKtopNavOpen={isDesKtopNavOpen}
          toggleDesktopNav={toggleDesktopNav}
          toggleMobileNav={toggleMobileNav}
        />

        <Routes>
          <Route
            path="/EduConnect"
            element={
              <Home
                isNavOpen={isMobileNavOpen}
                toggleMobileNav={toggleMobileNav}
              />
            }
          />
        </Routes>

        <Footer />
      </Suspense>
    </>
  );
}

export default App;
