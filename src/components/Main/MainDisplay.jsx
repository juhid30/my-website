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
import moon from "../../assets/moon.png";
import sun from "../../assets/sun.png";
import {
  listArray,
  listAnimation,
  childVariants,
  parentVariants,
  socialLinks,
  cards,
  listItemColourDark,
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
  isPhone,
  isAboutOpen,
  isBlogOpen,
  isContactOpen,
  isProjectOpen,
  expandDiv,
  isDarkModeOn,
  toggleSwitch,
}) => {
  const [showAvatar, setShowAvatar] = useState(true);

  const controls = useAnimation();

  const [isPageLoadedFirstTime, setIsPageLoadedFirstTime] = useState(false);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

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
      <div
        className={`${
          isDarkModeOn ? "bg-jblack" : ""
        } flex flex-grow items-center justify-center h-[100%] cursor-default`}
      >
        <motion.div
          initial="hidden"
          animate={controls}
          variants={parentVariants}
          className={`${
            isDarkModeOn ? "bg-jblack" : ""
          } body-container relative w-[96%] h-[38rem] rounded-[1.8rem]  gap-2 p-2 flex flex-col justify-center`}
        >
          <motion.div className="row-1 gap-3 flex h-[52%]">
            {isContactOpen && !isPhone && (
              <ContactMe
                isContactOpen={isContactOpen}
                isPhone={isPhone}
                expandDiv={expandDiv}
                isDarkModeOn={isDarkModeOn}
              />
            )}
            {isBlogOpen && !isPhone && (
              <Blogs
                isPhone={isPhone}
                expandDiv={expandDiv}
                isDarkModeOn={isDarkModeOn}
              />
            )}
            <motion.div
              variants={childVariants}
              className={`${
                isDarkModeOn ? "bg-jwhite" : " bg-pink-400"
              } cell-1 w-[70%] rounded-[1.8rem] p-6 relative overflow-hidden text-left text-[3.6rem]  `}
            >
              {/* [#f7f4e3] */}{" "}
              <div className="text-left intro-text ml-8">
                {isPhone ? (
                  <>
                    <h1 id="name">Juhi Deore</h1>{" "}
                    {/* <div className="flex items-center"> */}
                    <h2 id="profession">Software Developer</h2> {/* </div> */}
                  </>
                ) : (
                  <>
                    <h1 className=" leading-tight text-left">
                      {" "}
                      Transforming Ideas into Experiences.
                    </h1>
                    <div
                      className="para-div flex  
                    mt-7
                    items-center"
                    >
                      {/* leading-[6rem] */}
                      <h2 className="banner-para text-[1.7rem] ">
                        That's me!{" "}
                      </h2>
                      <motion.div
                        className={`${
                          isDarkModeOn ? "bg-[#9f9e9b66]" : "bg-[#e7d5d566]"
                        }  switch relative flex w-[8%] ml-5 h-[90%] `}
                        data-isDarkModeOn={isDarkModeOn}
                        onClick={toggleSwitch}
                      >
                        <motion.div
                          layout
                          transition={spring}
                          className={`handle ${
                            isDarkModeOn ? "bg-[#615b5b6d]" : "bg-white"
                          } flex justify-center items-center `}
                        >
                          <motion.img
                            src={isDarkModeOn ? moon : sun}
                            className=" cursor-pointer"
                          ></motion.img>
                        </motion.div>
                      </motion.div>
                    </div>{" "}
                  </>
                )}{" "}
              </div>
              <div className="transparent-bg-img-div float-right absolute -right-[7%] -top-[20%] ">
                <img
                  src={pattern}
                  alt="pattern"
                  className=" transparent-bg-img w-[16rem] h-[16rem] rotate-[80deg] opacity-40"
                ></img>
              </div>
            </motion.div>
            <motion.div
              variants={childVariants}
              layout
              data-isOpen={isAboutOpen}
              onClick={() => expandDiv("About")}
              className={`${
                isAboutOpen
                  ? `expanded about-div  ${
                      isDarkModeOn
                        ? isPhone
                          ? "bg-[#70213d]"
                          : " bg-pink-800"
                        : ""
                    } `
                  : "w-[40%]"
              } ${
                isDarkModeOn
                  ? isPhone
                    ? "bg-[#ae405b]"
                    : "bg-[#e6456d]"
                  : "bg-green-200  "
              } 
               cell-2 flex rounded-[1.8rem] relative overflow-hidden cursor-default`}
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
                    : "w-[40%] h-[100%] avatar-div"
                } cursor-pointer `}
              >
                {showAvatar && (
                  <Canvas
                    className={` ${
                      isPhone
                        ? isAboutOpen
                          ? "w-[98%] h-[100%]  "
                          : "avatar-canvas"
                        : "w-full h-full"
                    } 
                `}
                    shadows
                    camera={{ position: [0, 0, 1.5], fov: 30 }}
                  >
                    {/* <color attach="background" args={["#ececec"]} /> */}
                    <Experience isAboutOpen={isAboutOpen} isPhone={isPhone} />
                  </Canvas>
                )}
              </motion.div>
              {isAboutOpen && (
                // e6d6b3
                <AboutMe isPhone={isPhone} isDarkModeOn={isDarkModeOn} />
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
                {isProjectOpen && (
                  <Projects
                    expandDiv={expandDiv}
                    isPhone={isPhone}
                    isDarkModeOn={isDarkModeOn}
                  />
                )}
                {!isProjectOpen && (
                  <>
                    <div
                      className={` ${
                        isDarkModeOn ? "bg-[#ff8a62]" : "bg-blue-200"
                      } project-closed-banner w-[100%] h-[100%] p-5 flex flex-col items-center cursor-pointer rounded-[1.8rem] `}
                      onClick={() => expandDiv("Projects")}
                    >
                      <div className="project-closed-img-div  w-[100%] h-[50%]">
                        <img
                          src={projectImg}
                          className="project-closed-img float-right p-2 w-[40%] h-[100%] opacity-60"
                        ></img>
                      </div>
                      <div className="w-[80%] ">
                        <h1 className="text-5xl project-closed-title text-sb float-left">
                          {isPhone ? (
                            "My Projects"
                          ) : (
                            <>
                              My
                              <br />
                              Projects
                            </>
                          )}
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
                      className={`list-item-div flex relative justify-center items-center border-b-[1px] ${
                        isDarkModeOn
                          ? "border-joff text-[#f7f4e3] "
                          : "border-jblack "
                      }  h-[20%] cursor-default  text-3xl `}
                    >
                      <div
                        key={index}
                        className={`absolute left-0 w-7 h-7 rounded-[50%]`}
                        style={{
                          backgroundColor: isDarkModeOn
                            ? listItemColourDark[index].color
                            : item.color,
                        }}
                      ></div>
                      <p className="hover:scale-200 ">{item.title}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
            <motion.div variants={childVariants} className="cell-5  w-[40%]">
              <div
                className={` ${
                  isDarkModeOn
                    ? isPhone
                      ? "bg-[#b8b3e8]"
                      : "bg-[#f4b4af]"
                    : " bg-red-200"
                } cell-5-inner-1  p-5 rounded-[1.8rem] flex items-center justify-center w-[100%] h-[40%]`}
              >
                <h1 className="occupation-text text-3xl text-center ">
                  Software Developer
                  {/* No. of Projects :{" "}
                  <span className="font-semibold">{cards.length}</span> */}
                </h1>
              </div>
              <div className="h-[60%] cell-5-inner-div">
                <div className="cell-5-inner-2 relative h-[30%] w-[100%] flex justify-end items-center">
                  <a
                    href={Resume}
                    target="_blank"
                    className="resume-a-tag flex"
                  >
                    <button
                      className={`${
                        isDarkModeOn ? "bg-[#ecd1a0]" : "bg-[#f29f05]"
                      } resume  text-lg rounded-full py-1 px-5 `}
                    >
                      <h1 className="text-center">
                        {" "}
                        {isPhone ? "Download resume" : "Download Resume"}
                      </h1>
                    </button>
                  </a>
                </div>
                {isPhone && (
                  <>
                    <motion.div
                      variants={childVariants}
                      layout
                      data-isOpen={isBlogOpen}
                      {...(!isBlogOpen && {
                        onClick: () => expandDiv("Blogs"),
                      })}
                      className={`${
                        isBlogOpen
                          ? "expanded"
                          : "flex items-center    justify-center "
                      }  ${
                        isDarkModeOn ? "bg-[#a6ca9e] " : "bg-purple-200"
                      } mt-[30%] blog-div-phone  w-[100%] h-[100%]  rounded-[1.8rem]  flex flex-col items-center  `}
                    >
                      {" "}
                      {!isBlogOpen && (
                        <>
                          {" "}
                          <h1
                            className={`${
                              isPhone ? " p-1 text-[2.34rem]" : " text-[2.7rem]"
                            }  w-[100%] h-[100%] text-center   `}
                          >
                            Dive Into My Blogosphere!
                          </h1>
                        </>
                      )}
                      {isBlogOpen && (
                        <>
                          <Blogs
                            isPhone={isPhone}
                            expandDiv={expandDiv}
                            isDarkModeOn={isDarkModeOn}
                          />
                        </>
                      )}
                    </motion.div>
                  </>
                )}
                {isPhone && (
                  <>
                    <motion.div
                      variants={childVariants}
                      layout
                      data-isOpen={isContactOpen}
                      {...(!isContactOpen && {
                        onClick: () => expandDiv("Contact"),
                      })}
                      className={`${
                        isContactOpen
                          ? "expanded"
                          : isDarkModeOn
                          ? "flex items-center bg-[#769f96] mt-[0%] justify-center"
                          : "flex items-center py-1  mt-[0%] justify-center"
                      }   cont-div-phone  w-[100%] h-[100%]  flex flex-col rounded-[0.9rem]  bg-green-200 items-center  `}
                    >
                      {!isContactOpen && (
                        <>
                          {" "}
                          <div className=" w-[100%] h-[100%] text-center px-[3.30%] ">
                            <h1 className="w-[100%]  text-[2rem]">
                              Get In Touch?
                            </h1>
                            <h2 className="w-[100%]  text-[1.5rem]">
                              Click here
                            </h2>
                          </div>
                        </>
                      )}
                      {isContactOpen && (
                        <>
                          <ContactMe
                            isDarkModeOn={isDarkModeOn}
                            isContactOpen={isContactOpen}
                            isPhone={isPhone}
                            expandDiv={expandDiv}
                          />
                        </>
                      )}
                    </motion.div>
                  </>
                )}
                <div
                  className={`${
                    isDarkModeOn
                      ? isPhone
                        ? "bg-[#f4f2f2ae]"
                        : "bg-[#6acdaf]"
                      : isPhone
                      ? ""
                      : "bg-blue-200"
                  }  cell-5-inner-3  p-5 rounded-[1.8rem]  h-[70%] w-[100%] gap-y-5 flex flex-col justify-center items-center  `}
                >
                  {/* <p className="text-xl">Social Links </p> */}
                  <div
                    className={`${
                      isPhone ? "w-[85%] gap-7" : "w-[75%]   gap-[20%]"
                    } social-link-div flex items-center justify-center relative  `}
                  >
                    {socialLinks.map((item, index) => {
                      if (!isPhone && item.title === "Email") return null;
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
                              className="social-link-icon  w-10 h-10 cursor-pointer"
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
