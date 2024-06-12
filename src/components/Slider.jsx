import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./carousel.scss";
import { useEffect } from "react";
import ProjectCarousel from "./ProjectCarousel";

const Slider = ({ cards }) => {
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
      x: "0rem",
      opacity: 1,
      scale: 1.1,
      zIndex: "5",
      // backgroundImage: "url(" + cards[currentIndex].url + ")",
      boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.3)",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    left: {
      x: "-16rem",
      opacity: 1,
      scale: 1,
      //   backgroundImage: "url(" + cards[prevIndex].url + ")",
      zIndex: "4",

      transition: {
        type: "spring",
        duration: 1,
      },
    },
    right: {
      //   backgroundImage: "url(" + cards[nextIndex].url + ")",
      x: "16rem",
      opacity: 1,
      scale: 1,

      zIndex: "3",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    rightHidden: {
      x: "18rem",
      scale: 0,
      opacity: 0,
    },
    leftHidden: {
      x: "-18rem",
      scale: 0,
      opacity: 0,
    },
  };

  return (
    <motion.div className="carousel-wrapper">
      <motion.div className="carousel-content ">
        <AnimatePresence initial={false}>
          <motion.div
            key={prevIndex}
            variants={variants}
            initial="leftHidden"
            animate="left"
            exit="leftHidden"
            className="carousel-item"
          >
            <ProjectCarousel
              cards={cards}
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
            <ProjectCarousel
              cards={cards}
              index={currentIndex}
              isFlipped={isFlipped}
              setIsFlipped={setIsFlipped}
            />
            {/* <img
              src={cards[currentIndex].url}
              className="w-[40rem] object-cover h-[100%]"
            ></img>
            <h1>yygy</h1> */}
          </motion.div>
          <motion.div
            key={nextIndex}
            variants={variants}
            initial="rightHidden"
            animate="right"
            exit="rightHidden"
            className="carousel-item"
          >
            <ProjectCarousel
              cards={cards}
              index={nextIndex}
              isFlipped={isFlipped}
              setIsFlipped={setIsFlipped}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="carousel-btns">
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            duration: 0.5,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="bwd-btn"
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
          className="fwd-btn"
          onClick={nextBtn}
        >
          <i class="fi fi-rr-angle-double-right"></i>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Slider;
