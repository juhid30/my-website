import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import MainDisplay from "./components/Main/MainDisplay";
// import Sidebar from "./components/Sidebar/Sidebar";
const App = () => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  const toggleSwitch = () => setIsDarkModeOn(!isDarkModeOn);
  const [isPhone, setIsPhone] = useState(window.innerWidth <= 767);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const openDivWithDelay = (targetDiv, setTargetDiv) => {
    setIsAboutOpen(false);
    setIsBlogOpen(false);
    setIsContactOpen(false);
    setIsProjectOpen(false);
    setTimeout(() => {
      setTargetDiv(true);
    }, 600);
  };
  const toggleDiv = (targetDiv, setTargetDiv) => {
    setTargetDiv(!targetDiv);
  };
  const expandDiv = (btnName) => {
    switch (btnName) {
      case "About":
        isBlogOpen || isContactOpen || isProjectOpen
          ? openDivWithDelay(isAboutOpen, setIsAboutOpen)
          : toggleDiv(isAboutOpen, setIsAboutOpen);
        break;
      case "Projects":
        isBlogOpen || isContactOpen || isAboutOpen
          ? openDivWithDelay(isProjectOpen, setIsProjectOpen)
          : toggleDiv(isProjectOpen, setIsProjectOpen);
        break;
      case "Blogs":
        isAboutOpen || isContactOpen || isProjectOpen
          ? openDivWithDelay(isBlogOpen, setIsBlogOpen)
          : toggleDiv(isBlogOpen, setIsBlogOpen);
        break;
      case "Contact":
        isAboutOpen || isBlogOpen || isProjectOpen
          ? openDivWithDelay(isContactOpen, setIsContactOpen)
          : toggleDiv(isContactOpen, setIsContactOpen);
        break;
      default:
        setIsAboutOpen(false);
        setIsBlogOpen(false);
        setIsContactOpen(false);
        setIsProjectOpen(false);
        break;
    }
  };
  return (
    <>
      <div className="max-w-[100%] relative min-h-[100vh] bg-joff flex flex-col">
        {/* <section className="sticky top-0 left-0 w-full h-[8vh]"> */}
        <Navbar
          isPhone={isPhone}
          isAboutOpen={isAboutOpen}
          isBlogOpen={isBlogOpen}
          isContactOpen={isContactOpen}
          isProjectOpen={isProjectOpen}
          expandDiv={expandDiv}
          isDarkModeOn={isDarkModeOn}
          toggleSwitch={toggleSwitch}
        />
        {/* </section> */}
        {/* <section className="flex flex-grow bg-blue-700"> */}
        <MainDisplay
          isPhone={isPhone}
          isAboutOpen={isAboutOpen}
          isBlogOpen={isBlogOpen}
          isContactOpen={isContactOpen}
          isProjectOpen={isProjectOpen}
          expandDiv={expandDiv}
          isDarkModeOn={isDarkModeOn}
          toggleSwitch={toggleSwitch}
        />
        {/* </section> */}
      </div>
    </>
  );
};

export default App;
