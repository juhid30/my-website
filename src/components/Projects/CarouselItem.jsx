import React, { useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "./projects.css";
import { cards } from "../Data/Data";
function CarouselItem({ index, isFlipped, setIsFlipped }) {
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
      <div className="flip-card w-[98%] h-full" onClick={handleFlip}>
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
            style={{
              backgroundImage: "url(" + cards[index].url + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="flip-card-front rounded-[1.8rem] bg-red-200 object-center overflow-hidden w-[100%] h-[100%]"
            onMouseEnter={() => handleHover(true)} // Set isHovered to true on mouse enter
            onMouseLeave={() => handleHover(false)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              // whileHover={{ opacity: 1, y: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0  rounded-[1.8rem] bg-blue-200/50 left-0 w-full h-full "
            >
              <motion.div
                className="absolute bottom-10 right-0 w-[70%] flex flex-col gap-2 justify-center  items-center  h-[38%] rounded-l-[1.8rem] textOverlay "
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : 50,
                }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="text-4xl">{cards[index].title}</h1>
                <h3 className="text-2xl">{cards[index].brief}</h3>
                {/* <p>{cards[index].para}</p> */}
              </motion.div>
            </motion.div>

            {/* <img src={cards[index].url} className="w-full h-[90%] "></img> */}
          </div>

          <div className="flip-card-back relative w-[100%] flex  justify-center items-center bg-[#3a258e]/80 text-neutral-200 rounded-[1.8rem] h-[100%] ">
            <div className="flex flex-col items-center justify-center  w-[40%] h-[100%]">
              <div className="w-[50%] h-[40%] flex items-center float-left overflow-hidden">
                <img
                  src={cards[index].logo}
                  className="object-cover "
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <div className="w-[100%] h-[50%]  flex flex-col gap-3 items-center  text-center justify-center">
                <h1> Tools used:</h1>
                <div className="grid grid-cols-2 align-middle text-center">
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
            <div className=" flex flex-col justify-center items-center w-[50%] h-[100%]">
              <div className="w-[100%] h-[40%] flex items-center">
                {" "}
                <h1 className="text-5xl italic ml-2  w-[100%] ">
                  {cards[index].title}
                </h1>
              </div>
              <div className="text-sm w-[100%] h-[50%] flex  items-center justify-center">
                <p className="w-[100%]">{cards[index].para}</p>
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
