import { navLabels } from "../Data/Data";
import hamburger from "../../assets/hamburg.png";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import { easeOut, motion } from "framer-motion";
import "../../App.css";
import moon from "../../assets/moon.png";
import sun from "../../assets/sun.png";
import { easeInOut } from "framer-motion/dom";

const Navbar = ({
  isPhone,
  isAboutOpen,
  isBlogOpen,
  isContactOpen,
  isProjectOpen,
  expandDiv,
  isDarkModeOn,
  toggleSwitch,
}) => {
  const [activeBtn, setActiveBtn] = useState("");
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const openSideBar = () => {
    setIsSideBarOpen(true);
    console.log(isSideBarOpen);
  };
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
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
      <div
        className={`${
          isDarkModeOn ? "bg-jblack" : "bg-joff"
        } sticky z-[150] pt-2 top-0 left-0 w-full h-[10.3vh] flex items-center justify-center text-lg `}
      >
        {isPhone ? (
          <>
            <div className="float-right z-[120] h-[2rem] w-[90%]  ">
              <div
                className="switch float-right flex  w-[3.7rem] ml-5 h-[90%] "
                data-isDarkModeOn={isDarkModeOn}
                onClick={() => {
                  // console.log("Dark");
                  toggleSwitch();
                }}
              >
                <motion.div
                  className="handle flex justify-center items-center"
                  layout
                  transition={spring}
                >
                  <img
                    src={isDarkModeOn ? moon : sun}
                    className="cursor-pointer"
                  ></img>
                </motion.div>
              </div>
            </div>
          </>
        ) : null}{" "}
        {/* <div id="ham" className=" float-right absolute right-3">
          <img src={hamburger} onClick={openSideBar} className="w-8 h-8" />
        </div> */}
        <div
          id="navbar"
          className="content w-[100%] h-[100%] flex items-center justify-center"
        >
          <div className="w-[90%] h-[100%] flex items-center justify-between">
            <div
              className={`${
                isDarkModeOn ? "text-jwhite" : ""
              } w-[10%] text-4xl text-center cursor-default`}
            >
              Juhi
            </div>
            <div className="flex items-center justify-center  gap-5">
              {navLabels.map((item) => {
                return (
                  <>
                    <motion.div
                      key={item.name}
                      whileHover={{
                        scale: 1.1,
                        transition: { ease: easeOut },
                      }}
                      onClick={() => handleButtonClick(item.name)}
                      className={` 
                        border-[0.2rem] ${
                          isDarkModeOn
                            ? "border-jwhite text-jwhite hover:bg-jwhite hover:text-black"
                            : "border-[#d3d5d8] hover:bg-gray-300"
                        }  px-4 py-1 rounded-[1.3rem] text-center cursor-pointer  `}
                    >
                      {item.name}
                    </motion.div>
                  </>
                );
              })}
            </div>
            {/* <div className="flex items-center gap-5 h-[100%] w-[12%] justify-center bg-red-900"> */}
            {/* <div
                className="switch bg-blue-900 h-[40%] w-[20%] "
                data-isDarkModeOn={isDarkModeOn}
                onClick={toggleSwitch}
              >
                <motion.div className="handle" layout transition={spring} />
              </div> */}
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { ease: easeOut },
              }}
              className={`${
                isDarkModeOn
                  ? "bg-jwhite border-jwhite"
                  : "bg-gray-200  border-gray-200 "
              }  px-3 py-1 border-[0.2rem] rounded-[1.3rem] cursor-pointer `}
              onClick={() => handleButtonClick("Contact")}
            >
              Contact Me
            </motion.div>
          </div>
        </div>
        {/* <div className="absolute right-10">sfs</div> */}
      </div>
      {/* </div> */}
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
