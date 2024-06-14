import {
  easeIn,
  easeInOut,
  easeOut,
  motion,
  useAnimation,
} from "framer-motion";
import Resume from "../../assets/Juhi Resume_May_2024.pdf";
import pattern from "../../assets/7.png";
import projectImg from "../../assets/complete.png";
import {
  listArray,
  listAnimation,
  childVariants,
  parentVariants,
  socialLinks,
  cards,
  // skillLists
} from "../Data/Data";
import { useEffect, useState } from "react";
import ContactMe from "../Contact Me/ContactMe";
import Blogs from "../Blogs/Blogs";
import { Canvas } from "@react-three/fiber";
import { Experience } from "../Experience";
import closeArrow from "../../assets/cross_new.png";
import AboutMe from "../About Me/AboutMe";
import Projects from "../Projects/Projects";
const MainDisplay = ({
  isAboutOpen,
  isBlogOpen,
  isContactOpen,
  isProjectOpen,
  expandDiv,
}) => {
  const [showAvatar, setShowAvatar] = useState(true);
  const controls = useAnimation();

  const [isPageLoadedFirstTime, setIsPageLoadedFirstTime] = useState(false);
  useEffect(() => {
    setShowAvatar(false);
    setTimeout(() => {
      setShowAvatar(true);
    }, 1000);

    if (isAboutOpen) {
      console.log("About Open");
    }
  }, [isAboutOpen]);

  useEffect(() => {
    setShowAvatar(false);
    setTimeout(() => {
      setShowAvatar(true);
    }, 1000);
    controls.start("visible");
  }, [controls]);

  const openDivWithDelay = (targetDiv, setTargetDiv) => {
    setIsAboutOpen(false);
    setIsBlogOpen(false);
    setIsContactOpen(false);
    setIsProjectOpen(false);
    setTimeout(() => {
      setTargetDiv(true);
    }, 600);
  };
  return (
    <>
      <div className="flex flex-grow items-center justify-center h-[100%]">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={parentVariants}
          className="body-container w-[96%] h-[38rem] rounded-[1.8rem]  gap-2 p-2 flex flex-col justify-center"
        >
          <motion.div className="row-1 gap-3 flex h-[52%]">
            {isContactOpen && (
              <ContactMe isContactOpen={isContactOpen} expandDiv={expandDiv} />
            )}
            {isBlogOpen && <Blogs expandDiv={expandDiv} />}
            <motion.div
              variants={childVariants}
              className="cell-1 w-[70%] rounded-[1.8rem] bg-pink-400 p-7 relative overflow-hidden text-left text-[340%] "
            >
              {" "}
              Transforming Ideas into Experiences.
              <div className=" float-right absolute -right-[7%] -top-[20%] ">
                <img
                  src={pattern}
                  alt="pattern"
                  className="  w-[16rem] h-[16rem] rotate-[80deg] opacity-40"
                ></img>
              </div>
            </motion.div>
            <motion.div
              variants={childVariants}
              layout
              data-isOpen={isAboutOpen}
              onClick={() => expandDiv("About")}
              className={`${isAboutOpen ? "expanded" : "w-[40%]"}
               cell-2 flex bg-green-200  rounded-[1.8rem] overflow-hidden cursor-default`}
            >
              <motion.div
                // initial={{ opacity: 0, scale: 0 }}
                // animate={{ opacity: 1, scale: 1 }}
                // transition={{
                //   duration: 0.5,
                //   ease: [0, 0.71, 0.2, 1.01],
                //   delay: 0.1,
                // }}
                // layout
                className={` ${
                  !isAboutOpen
                    ? "about-div-closed  w-[100%] h-[100%]"
                    : "w-[40%] h-[100%]"
                } cursor-pointer `}
              >
                {showAvatar && (
                  <Canvas
                    className={`w-full h-full
                `}
                    shadows
                    camera={{ position: [0, 0, 1.5], fov: 30 }}
                  >
                    {/* <color attach="background" args={["#ececec"]} /> */}
                    <Experience isAboutOpen={isAboutOpen} />
                  </Canvas>
                )}
              </motion.div>
              {isAboutOpen && (
                // e6d6b3
                <AboutMe />
              )}{" "}
            </motion.div>
          </motion.div>
          <div className="row-2 flex h-[47.5%] gap-3">
            <div className="inner-split gap-3 flex w-[70%]">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                variants={childVariants}
                transition={{
                  duration: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                  delay: 0.1,
                }}
                layout
                data-isOpen={isProjectOpen}
                className={`${
                  isProjectOpen ? "expanded" : " w-[47.50%]"
                }  project-div rounded-[1.8rem] `}
              >
                {isProjectOpen && <Projects expandDiv={expandDiv} />}
                {!isProjectOpen && (
                  <>
                    <div
                      className=" w-[100%] h-[100%] bg-blue-200 p-5 relative flex flex-col items-center cursor-pointer rounded-[1.8rem] "
                      onClick={() => expandDiv("Projects")}
                    >
                      <div className="w-[100%] h-[50%]">
                        <img
                          src={projectImg}
                          className="float-right p-2 w-[40%] h-[100%] opacity-60"
                        ></img>
                      </div>
                      <div className="w-[80%]">
                        <h1 className="text-5xl text-sb float-left">
                          My<br></br> Projects
                        </h1>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
              <motion.div
                initial="hidden"
                animate="show"
                variants={listAnimation}
                className="cell-4 rounded-[1.8rem] cursor-default w-[52.50%]"
              >
                {listArray.map((item, index) => {
                  return (
                    <motion.div
                      variants={listAnimation}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.1 },
                      }}
                      className="list-item-div  flex relative justify-center items-center border-b-[1px] border-jblack  h-[20%] cursor-default  text-3xl "
                    >
                      <div
                        key={index}
                        className={`absolute left-0 w-7 h-7 rounded-[50%]`}
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <p className="hover:scale-200 ">{item.title}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
            <motion.div variants={childVariants} className="cell-5 w-[40%]">
              <div className="cell-5-inner-1  p-5 rounded-[1.8rem] flex items-center justify-center w-[100%] h-[40%] bg-red-200">
                <h1 className="text-3xl text-center ">
                  No. of Projects :{" "}
                  <span className="font-semibold">{cards.length}</span>
                </h1>
              </div>
              <div className="h-[60%] cell-5-inner-div">
                <div className="cell-5-inner-2 h-[30%] w-[100%] flex justify-end items-center">
                  <a href={Resume} target="_blank">
                    <button className="bg-[#f29f05] text-lg rounded-full py-1 px-10 ">
                      Resume
                    </button>
                  </a>
                </div>
                <div className="cell-5-inner-3  p-5 rounded-[1.8rem]  h-[70%] w-[100%] gap-y-5 flex flex-col justify-center items-center bg-blue-200 ">
                  {/* <p className="text-xl">Social Links </p> */}
                  <div className="flex items-center gap-[20%] w-[60%] justify-center ">
                    {socialLinks.map((item, index) => {
                      if (item.title === "Email") return;
                      return (
                        <>
                          <a href={item.link} target="_blank">
                            <motion.img
                              initial={{ scale: 1 }}
                              whileHover={{ opacity: 1, scale: 1.2 }}
                              transition={{
                                duration: 0.5,
                                ease: easeOut,
                              }}
                              src={item.icon}
                              className="w-10 h-10 cursor-pointer"
                            ></motion.img>
                          </a>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default MainDisplay;
