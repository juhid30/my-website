import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "./Card";
import ForgeFinance from "../assets/Forge Finance.png";
import "../App.css";
import "./Horizontal.css";
function ProjectCarousel({ cards, index, isFlipped, setIsFlipped }) {
  // const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setisAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  // const handleFlip = () => {
  //   if (!isAnimating) {
  //     setIsFlipped(!isFlipped);
  //     isAnimating(true);
  //   }
  // };
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

  // const targetRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  // });
  // console.log(cards);

  // const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

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
            className="flip-card-front overflow-hidden w-[100%] h-[100%]"
            onMouseEnter={() => handleHover(true)} // Set isHovered to true on mouse enter
            onMouseLeave={() => handleHover(false)}
          >
            <div
              style={{
                backgroundImage: "url(" + cards[index].url + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="w-[100%] rounded-[1.8rem] object-center h-[100%]"
            >
              <motion.div
                initial={{ opacity: 0 }}
                // whileHover={{ opacity: 1, y: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0  rounded-[1.8rem] bg-[rgba(125,51,32,0.7)] left-0 w-full h-full "
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
            </div>
            {/* <img src={cards[index].url} className="w-full h-[90%] "></img> */}
          </div>

          <div className="flip-card-back relative w-[100%] p-5 flex flex-row gap-5 items-center bg-[#7D3320] text-neutral-200 rounded-[1.8rem] h-[100%] ">
            <div className="text-4xl w-[40%] h-full flex flex-row flex-wrap justify-center items-center">
              {/* 093824 */}
              {/* A34A34 */}
              <div className=" rounded-full w-40 h-40 flex justify-center items-center overflow-hidden shadow-md bg-neutral-200 shadow-gray-600">
                <img
                  src={cards[index].logo}
                  className="max-w-[7.8rem] max-h-[7.8rem] object-cover"
                ></img>
              </div>
              <h1 className="-mt-10 italic">{cards[index].title}</h1>
              {/* Left */}
            </div>
            <div className="absolute right-[5%] flex items-center text-jwhite text-justify text-sm text-jblack italic p-2 text-wrap w-[50%] h-[60%] ">
              <p>{cards[index].para}</p>
            </div>

            {/* <button className="absolute bg-red-400 right-10 bottom-10">
              Check it out
            </button> */}
            {/* <div className="grid grid-cols-2 h-full divide-x divide-black justify-center items-center  bg-green-200 ">
              <h1 className="text-3xl bg-blue-400">Project details</h1>
              <p className="bg-yellow-200">hfyhf</p>
            </div> */}
          </div>
        </motion.div>
      </div>
      {/* <div className="group h-[100%] w-[100%]">
            <div className="relative bg-red-200 h-[100%] w-[100%] transition-all duration-500 transform-style:preserve-3d group-hover:transform-rotateY-180">
              <div className="absolute h-full w-full bg-yellow-300 ">
                {/*Frontside hag
              </div>
              <div
                className="absolute bg-black h-full w-full"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Backside abc
              </div>
            </div>
          </div> */}
      {/* <div key={index} className="h-[85%] w-[60%] mt-6 p-5  bg-jyellow">
            <div className="flex items-center ">
              <img
                src={card.url}
                className="h-[60%] w-[61%] rounded-t-[1.8rem]"
              ></img>
              <div className="flex bg-blue-200 flex-col w-full justify-center">
                <h1
                  className="text-5xl italic whitespace-wrap "
                  style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
                >
                  {card.title}
                </h1>
                <h3 className="text-2xl mt-6">Finance Gamification</h3>
              </div>
            </div>
            <div className=" bg-pink-900 rounded-b-[1.8rem]  w-full h-[40%] p-1 flex-grow ">
              {card.para}
            </div>
          </div> */}
    </>
  );
  // <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
  //   <div className="sticky top-0 flex h-screen items-center overflow-hidden">
  //     <motion.div style={{ x }} className="flex gap-4">
  //       {cards.map((card) => {
  //         return <Card card={card} key={card.id} />;
  //       })}
  //     </motion.div>
  //   </div>
  // </section>

  // /* <div className="h-[100%] bg-red-200 overflow-auto ">
  //       <div className="w-full h-full flex bg-purple-200 overflow-x-auto">
  //         <div className="bg-blue-200 w-[40vw] h-[40%]">hjajbj</div>
  //         <div className="bg-pink-200 w-[40vw] h-[40%]">hjajbj</div>
  //         <div className="bg-blue-200 w-[40vw] h-[40%]">hjajbj</div>

  //         <div className="bg-blue-200 w-[40%] h-[40%]">hjajbj</div>
  //         <div className="bg-blue-200 w-[40%] h-[40%]">hjajbj</div>
  //         <div className="bg-blue-200 w-[40%] h-[40%]">hjajbj</div>
  //         <div className="bg-blue-200 w-[40%] h-[40%]">hjajbj</div>
  //       </div>
  //     </div> */
}
{
  /* <div className="z-90 bg-black-900 h-[100%] gap-3">
          {/* /<Marquee pauseOnHover speed={70} style={innerHeight:}> 
          <div id="slider" className="flex gap-7 ">
            {cards.map((card, index) => {
              return (
                <>
                  <div className="bg-purple-900 w-[40%] h-[100%]">ahb</div>
                <Card card={card} /> 
                </>
              );
            })}
          </div>
          {/* </Marquee> 
        </div> */
}

export default ProjectCarousel;
