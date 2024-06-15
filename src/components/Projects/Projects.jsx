import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./projects.css";
import { useEffect } from "react";
import CarouselItem from "./CarouselItem";
import { cards } from "../Data/Data";
import closeArrow from "../../assets/cross_new.png";

const Projects = ({ expandDiv, isPhone, isDarkModeOn }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(Array(cards.length).fill(false));

  const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
  const nextIndex = (currentIndex + 1) % cards.length;

  const nextBtn = () => {
    setIsFlipped(Array(cards.length).fill(false)); // Reset all flipped cards

    if (isFlipped[currentIndex]) {
      setTimeout(() => {
        setCurrentIndex(nextIndex);
      }, 1000);
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const prevBtn = () => {
    setIsFlipped(Array(cards.length).fill(false)); // Reset all flipped cards
    if (isFlipped[currentIndex]) {
      setTimeout(() => {
        setCurrentIndex(prevIndex);
      }, 1000);
    } else {
      setCurrentIndex(prevIndex);
    }
  };

  const variants = {
    center: {
      x: "0%",
      opacity: 1,
      scale: 1.05,
      zIndex: "5",
      // backgroundImage: "url(" + cards[currentIndex].url + ")",
      boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.3)",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    left: {
      x: isPhone ? "-10%" : "-25%",
      opacity: 1,
      scale: 0.9,
      //   backgroundImage: "url(" + cards[prevIndex].url + ")",
      zIndex: "4",

      transition: {
        type: "spring",
        duration: 1,
      },
    },
    right: {
      //   backgroundImage: "url(" + cards[nextIndex].url + ")",
      x: isPhone ? "10%" : "25%",
      opacity: 1,
      scale: 0.9,

      zIndex: "3",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    rightHidden: {
      x: "40%",
      scale: 0,
      opacity: 0,
    },
    leftHidden: {
      x: "-40%",
      scale: 0,
      opacity: 0,
    },
  };
  const headerVariants = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div
      className={`${
        isDarkModeOn
          ? isPhone
            ? "bg-[#be8c63]"
            : " bg-[#e9a46c]"
          : " bg-purple-200"
      }  w-[100%] h-[100%] p-5 rounded-[1.8rem] z-[100] flex flex-col items-center  `}
    >
      <div className="float-right absolute top-4 right-3">
        <img
          src={closeArrow}
          onClick={() => expandDiv("Projects")}
          className="cursor-pointer"
        ></img>
      </div>
      <div className="project-description  w-[100%]">
        <div className="">
          <motion.h1
            className="header-content text-6xl text-jblack text-sb text-center items-center"
            variants={headerVariants}
            initial="initial"
            animate="animate"
          >
            {isPhone ? "Projects" : "Explore my projects"}
          </motion.h1>
        </div>
        {/* <motion.div
          className="text-lg text-gray-600 "
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <p>
            Explore some of my latest projects below. Click on the cards to see
            more details.
          </p>
          <p>
            Each project showcases my skills and experience in web development
            and design.
          </p>
        </motion.div> */}
      </div>
      {/*Carousel*/}
      <motion.div className="carousel-wrapper w-[100%] h-full flex flex-col items-center justify-center gap-y-5">
        <motion.div className="carousel-content relative flex  items-center justify-center w-[80%] h-[74%] ">
          <AnimatePresence initial={false}>
            <motion.div
              key={prevIndex}
              variants={variants}
              initial="leftHidden"
              animate="left"
              exit="leftHidden"
              className="carousel-item "
            >
              <CarouselItem
                isDarkModeOn={isDarkModeOn}
                isPhone={isPhone}
                index={prevIndex}
                isFlipped={isFlipped}
                setIsFlipped={setIsFlipped}
              />
            </motion.div>
            <motion.div
              variants={variants}
              key={currentIndex}
              initial="right"
              animate="center"
              className="carousel-item"
            >
              <CarouselItem
                isDarkModeOn={isDarkModeOn}
                isPhone={isPhone}
                index={currentIndex}
                isFlipped={isFlipped}
                setIsFlipped={setIsFlipped}
              />
            </motion.div>
            <motion.div
              key={nextIndex}
              variants={variants}
              initial="rightHidden"
              animate="right"
              exit="rightHidden"
              className="carousel-item"
            >
              <CarouselItem
                isDarkModeOn={isDarkModeOn}
                isPhone={isPhone}
                index={nextIndex}
                isFlipped={isFlipped}
                setIsFlipped={setIsFlipped}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <div className="carousel-btns flex gap-10 ">
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className={`bwd-btn flex items-center justify-center ${
              isDarkModeOn
                ? isPhone
                  ? "bg-[#4a2808]"
                  : " bg-[#4f2710]"
                : "bg-[#492c77]"
            }`}
            onClick={prevBtn}
          >
            <i class="fi fi-rr-angle-double-left"></i>
          </motion.button>
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className={`fwd-btn flex items-center justify-center ${
              isDarkModeOn
                ? isPhone
                  ? "bg-[#4a2808]"
                  : "bg-[#4f2710]"
                : "bg-[#492c77]"
            }`}
            onClick={nextBtn}
          >
            <i class="fi fi-rr-angle-double-right"></i>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
export default Projects;
