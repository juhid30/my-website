import { useState } from "react";
import forgefinance from "../assets/Forge Finance.png";
import touristweb from "../assets/Tourist.png";
import { motion } from "framer-motion";
import ProjectCarousel from "./ProjectCarousel";
const ProjectSlider = ({ cards }) => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  //   const [positionIndexes, setPositionIndexes] = useState(
  //     Array.from({ length: cards.length }, (_, i) => i)
  //   );

  //   const getXPosition = (position) => {
  //     switch (position) {
  //       case "center":
  //         return "0%";
  //       case "left1":
  //         return "-90%";
  //       case "left0":
  //         return "-50%";
  //       case "right0":
  //         return "50%";
  //       case "right1":
  //         return "90%";
  //       default:
  //         return "0%";
  //     }
  //   };

  //   const getScale = (position) => {
  //     return position === "center" ? 0.8 : 0.5;
  //   };

  //   const getZIndex = (position) => {
  //     return position === "center" ? 100 : 98;
  //   };

  //   const positions = Array.from({ length: cards.length }, (_, i) => {
  //     if (i === 0) return "center";
  //     else if (i === 1) return "left1";
  //     else if (i === cards.length - 1) return "right1";
  //     else if (i === cards.length - 2) return "right0";
  //     else return "left0";
  //   });

  //   const imageVariants = positions.reduce((acc, position) => {
  //     acc[position] = {
  //       x: getXPosition(position),
  //       scale: getScale(position),
  //       zIndex: getZIndex(position),
  //     };
  //     return acc;
  //   }, {});

  //   const handleNext = () => {
  //     setPositionIndexes((prevIndexes) =>
  //       prevIndexes.map((prevIndex) => (prevIndex + 1) % cards.length)
  //     );
  //   };

  //   const handleBack = () => {
  //     setPositionIndexes((prevIndexes) =>
  //       prevIndexes.map(
  //         (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
  //       )
  //     );
  //   };

  return (
    <>
      <div className="flex justify-center flex-col items-center bg-neutral-200 w-[100%] h-[70%]">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            className="bg-pink-900 absolute w-[40%] h-[70%]"
          >
            <img src={card.url}></img>
            {/* Render your card component here */}
            <ProjectCarousel cards={cards} />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row gap-3">
        <button className="bg-indigo-300" onClick={handleNext}>
          Next
        </button>
        <button className="bg-indigo-300" onClick={handleBack}>
          Back
        </button>
      </div>
    </>
  );
  //   <ProjectCarousel cards={cards} />;
};
export default ProjectSlider;
