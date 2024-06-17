import "../../App.css";
import React, { useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "./projects.css";
import { cards } from "../Data/Data";
function CarouselItem({
  index,
  isPhone,
  isFlipped,
  setIsFlipped,
  isDarkModeOn,
}) {
  const [isAnimating, setisAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };
  const handleHover = (value) => {
    setIsHovered(value);
  };

  return (
    <>
      <div className="flip-card w-[98%] h-full " onClick={handleFlip}>
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped[index] ? 180 : 360 }}
          transition={{ duration: 0.2, animationDirection: "normal" }}
          onAnimationComplete={() => {
            setisAnimating(false);
          }}
        >
          <div
            className="flip-card-front rounded-[1.8rem]  object-center overflow-hidden w-[100%] h-[100%]"
            onMouseEnter={() => handleHover(true)} // Set isHovered to true on mouse enter
            onMouseLeave={() => handleHover(false)}
          >
            <img
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="w-[100%] h-[100%]"
              src={cards[index].url}
            ></img>
            <motion.div
              initial={{ opacity: 0 }}
              // whileHover={{ opacity: 1, y: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className={` ${isPhone ? "" : ""} ${
                isDarkModeOn ? " bg-[#e6d2c7]/20" : "bg-blue-200/20"
              } absolute bottom-0  rounded-[1.8rem]  left-0 w-full h-full `}
            >
              <motion.div
                className={` ${
                  isPhone ? "" : "gap-2"
                }  absolute bottom-10 right-0 w-[70%] flex flex-col  justify-center  items-center  h-[38%] rounded-l-[1.8rem] textOverlay`}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : 50,
                }}
                transition={{ duration: 0.3 }}
              >
                <h1 className={` ${isPhone ? "text-[1.7rem]" : "text-4xl"}  `}>
                  {cards[index].title}
                </h1>
                <h3
                  className={` ${
                    isPhone ? "text-[1.1rem] text-center" : "text-2xl  "
                  }  `}
                >
                  {cards[index].brief}
                </h3>
                {/* <p>{cards[index].para}</p> */}
              </motion.div>
            </motion.div>

            {/* <img src={cards[index].url} className="w-full h-[90%] "></img> */}
          </div>

          <div
            className={`${
              isDarkModeOn ? " bg-[#c5b894fb]" : " bg-[#73418d]  text-jwhite  "
            } flip-card-back relative w-[100%] flex ${
              isPhone ? " text-jwhite" : ""
            }   justify-center items-center rounded-[1.8rem] h-[100%] `}
          >
            <div
              className={` ${
                isPhone ? " gap-2 p-4 flex flex-col" : "w-[90%] flex"
              }  flip-card-back-content items-center justify-center h-[100%]`}
            >
              <div
                className={` ${
                  isPhone
                    ? "object-contain relative w-[50%] h-[50%]"
                    : "w-[50%] h-[40%] float-left"
                } flex items-center `}
              >
                <img
                  src={cards[index].logo}
                  className="object-cover "
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <div
                className={` ${
                  isPhone ? "gap-1 text-left text-[0.9rem] h-[50%]" : "h-[90%]"
                } w-[100%]  flex flex-col gap-3 items-center  text-center justify-center`}
              >
                <h1 className={`${isPhone ? "" : "text-4xl mb-5"}`}>
                  {" "}
                  Tools used:
                </h1>
                <div
                  className={` ${
                    isPhone ? "" : "text-center text-xl"
                  } grid grid-cols-2 align-middle `}
                >
                  {cards[index].tools.map((tool) => {
                    return (
                      <>
                        <li>{tool}</li>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center w-[50%] h-[100%] relative hidden ">
              <div className="w-[100%] h-[40%] flex items-center">
                {" "}
                <h1
                  className={` ${
                    isPhone ? "hidden" : ""
                  } text-5xl italic ml-2  w-[100%]`}
                >
                  {cards[index].title}
                </h1>
              </div>
              <div className="text-sm w-[100%] h-[50%] flex  items-center justify-center">
                <p
                  className={` ${
                    isPhone
                      ? "hidden"
                      : // ? "h-[90%] overflow-auto absolute top-3 w-[100%] text-[1.1rem] text-left"
                        ""
                  }  w-[100%]`}
                >
                  {cards[index].para}
                </p>
              </div>
            </div>
            {/* 093824 A34A34
              <div className=" rounded-full w-40 h-40 flex justify-center items-center overflow-hidden shadow-md bg-neutral-200/100 shadow-gray-600">
                <img
                  src={cards[index].logo}
                  className="max-w-[7.8rem] max-h-[7.8rem] object-cover"
                ></img>
              </div>
              <h1 className="-mt-10 italic">{cards[index].title}</h1>
              Left
            </div>
            <div className="absolute right-[5%] flex items-center text-jwhite text-justify text-sm text-jblack italic p-2 text-wrap w-[50%] h-[60%] ">
              <p>{cards[index].para}</p> */}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default CarouselItem;
