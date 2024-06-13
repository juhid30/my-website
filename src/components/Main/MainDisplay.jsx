import { motion } from "framer-motion";
import {
  listArray,
  listAnimation,
  // skillLists
} from "../Data/Data";
import { useEffect, useState } from "react";
import ContactMe from "../Contact Me/ContactMe";
import Blogs from "../Blogs/Blogs";
import { Canvas } from "@react-three/fiber";
import { Experience } from "../Experience";

const MainDisplay = ({
  isAboutOpen,
  isBlogOpen,
  isContactOpen,
  isProjectOpen,
  expandDiv,
}) => {
  const [showAvatar, setShowAvatar] = useState(true);

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
    setIsPageLoadedFirstTime(true);
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
  return (
    <>
      <div className="flex flex-grow items-center justify-center bg-blue-700 h-fit">
        <div className="body-container bg-red-200 w-[96%] h-[40rem] rounded-[1.8rem]  gap-2 p-2 flex flex-col justify-center">
          <div className="row-1 flex h-[52%]">
            {isContactOpen && <ContactMe />}
            {isBlogOpen && <Blogs expandDiv={expandDiv} />}
            <div className="cell-1 w-[70%] bg-pink-900 p-5">
              {" "}
              Transforming Ideas into Experiences.
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
                delay: 0.1,
              }}
              layout
              data-isOpen={isAboutOpen}
              onClick={() => expandDiv("About")}
              className={`${isAboutOpen ? "expanded" : "w-[40%]"}
               cell-2 bg-green-200 w-[40%]`}
            >
              <motion.div className="about-div-closed w-[100%] h-[100%] bg-green-900">
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
                <div className="text-left bg-[#e0d1b1] rounded-r-[1.8rem] p-4  -ml-[10%] ">
                  <div className="float-right w-full h-[100%]">
                    <div className="flex w-[65%]   float-right text-center justify-between">
                      <h1 className="text-6xl">About Me</h1>
                      <img
                        src={close}
                        alt="close"
                        className="cursor-pointer  w-8 h-8 mt-3 "
                        onClick={() => expandDiv("About")}
                      ></img>
                    </div>

                    <p className="mt-[14%] text-lg px-3  text-justify ">
                      I thrive on continuous learning and teamwork, with a
                      natural aptitude for leadership. Excited about
                      opportunities in both technical fields and management, I
                      aim to create supportive environments where everyone can
                      flourish. Eager to expand my skills, I'm prepared to
                      tackle new challenges head-on and leave a positive mark.
                      Combining my passion for growth with a dedication to
                      fostering collaboration, I'm poised to navigate
                      complexities and drive impactful change. Ready to embrace
                      diverse opportunities, I'm committed to making meaningful
                      contributions wherever I go.
                    </p>
                    <h1 className="mt-6 text-4xl px-3">Skills:</h1>
                    <div className="grid grid-cols-4 grid-rows-2 gap-5 mt-7 float-right w-[80%] ">
                      {/* {skillList.map((item, index) => {
                        return (
                          <>
                            <div
                              key={index}
                              className=" rounded shadow-lg shadow-[#c9b893] w-20 h-14 flex justify-center items-center"
                            >
                              <img src={item.icon} className="w-7 h-7" />
                            </div>
                          </>
                        );
                      })}{" "} */}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
          <div className="row-2 flex bg-yellow-400 h-[47.5%]">
            <div className="inner-split flex w-[70%] bg-purple-200">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                  delay: 0.1,
                }}
                layout
                data-isOpen={isProjectOpen}
                onClick={() => expandDiv("Projects")}
                className={`${
                  isProjectOpen ? "expanded" : " w-[47.50%]"
                } bg-slate-500 project-div`}
              >
                {isProjectOpen && (
                  <>
                    <div>jg</div>
                    <div>fvug</div>
                  </>
                )}
                Projects
              </motion.div>
              <motion.div
                initial="hidden"
                animate="show"
                variants={listAnimation}
                className="cell-4 bg-blue-500 cursor-default w-[52.50%]"
              >
                {listArray.map((item, index) => {
                  return (
                    <motion.div
                      variants={listAnimation}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.1 },
                      }}
                      className="list-item-div  flex relative justify-center items-center   border-b-[1px] border-jwhite  h-[20%]   "
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
            <div className="cell-5 w-[40%]">
              <div className="cell-5-inner-1  w-[100%] h-[40%] bg-red-900">
                No.of Projects :{" "}
              </div>
              <div className="h-[60%] cell-5-inner-div">
                <div className="cell-5-inner-2 h-[25%] w-[100%] bg-green-200">
                  Resume
                </div>
                <div className="cell-5-inner-3 h-[75%] w-[100%] bg-blue-200 ">
                  Social Links
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainDisplay;
