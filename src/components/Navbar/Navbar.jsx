import { navLabels } from "../Data/Data";
import hamburger from "../../assets/hamburg.png";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import "../../App.css";
const Navbar = ({
  isAboutOpen,
  isBlogOpen,
  isContactOpen,
  isProjectOpen,
  expandDiv,
}) => {
  const [activeBtn, setActiveBtn] = useState("");
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const openSideBar = () => {
    setIsSideBarOpen(true);
    console.log(isSideBarOpen);
  };
  const handleButtonClick = (name) => {
    if (activeBtn === name) {
      // If the active button is clicked again, close the div and reset the state
      setActiveBtn("");
      expandDiv(name);
    } else {
      setActiveBtn(name);
      expandDiv(name);
    }
  };
  return (
    <>
      <div className="sticky z-[100] pt-2 top-0 left-0 w-full h-[10.3vh] flex items-center text-lg  bg-joff   ">
        <div id="ham" className=" float-right absolute right-3">
          <img src={hamburger} onClick={openSideBar} className="w-8 h-8" />
        </div>

        <div
          id="navbar"
          className="content w-[100%] h-[100%] flex items-center justify-center"
        >
          <div className="w-[90%] h-[100%] flex items-center justify-between">
            <div className="w-[10%] text-4xl text-center cursor-default">
              Juhi
            </div>
            <div className="flex items-center justify-center gap-5">
              {navLabels.map((item) => {
                return (
                  <>
                    <div
                      key={item.name}
                      onClick={() => handleButtonClick(item.name)}
                      className={` ${
                        activeBtn === item.name ? "activeBtn" : ""
                      } border-[0.2rem] border-black px-4 py-1 rounded-[1.3rem] text-center cursor-pointer  `}
                    >
                      {item.name}
                    </div>
                  </>
                );
              })}
            </div>
            <div
              className="bg-gray-200 border-4 border-grayy-200 px-3 py-1 rounded-[1.3rem] cursor-pointer "
              onClick={() => handleButtonClick("Contact")}
            >
              Contact Me
            </div>
          </div>
        </div>
      </div>
      <Sidebar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
        isAboutOpen={isAboutOpen}
        isBlogOpen={isBlogOpen}
        isContactOpen={isContactOpen}
        isProjectOpen={isProjectOpen}
        expandDiv={expandDiv}
        activeBtn={activeBtn}
      />
    </>
  );
};
export default Navbar;
