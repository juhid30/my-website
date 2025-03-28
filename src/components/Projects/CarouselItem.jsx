import React, { useState } from "react";
import { motion } from "framer-motion";
import { cards } from "../Data/Data";
import "./CarouselItem.css";

function CarouselItem({
  index,
  isPhone,
  isFlipped,
  setIsFlipped,
  isDarkModeOn,
}) {
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
    <div className="card-container" onClick={handleFlip}>
      <motion.div
        className="card-inner"
        initial={false}
        animate={{ rotateY: isFlipped[index] ? 180 : 360 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* Card Front */}
        <div
          className={`card-face card-front ${
            isDarkModeOn ? "dark-mode" : "light-mode"
          }`}
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
        >
          <div className="card-image-container object-center ">
            <img
              src={cards[index].url}
              alt={cards[index].title}
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="card-image w-[100%] h-[100%]"
            />
            <motion.div
              className={`card-overlay ${
                isDarkModeOn ? "dark-overlay" : "light-overlay"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0.7 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <motion.div
            className="card-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h2 className={`card-title ${isPhone ? "small" : ""}`}>
              {cards[index].title}
            </h2>
            <p className={`card-brief ${isPhone ? "small" : ""}`}>
              {cards[index].brief}
            </p>
            <div className="card-indicator">
              <span>Click to flip</span>
              <motion.div
                className="flip-icon"
                animate={{ rotateY: [0, 180] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              >
                ↻
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Card Back */}
        <div
          className={`card-face card-back ${
            isDarkModeOn ? "dark-mode-back" : "light-mode-back"
          }`}
        >
          <div className="card-back-content-wrapper">
            <div className="card-back-header">
              <div className="logo-wrapper">
                <div className="logo-container">
                  <img
                    src={cards[index].logo}
                    alt={`${cards[index].title} logo`}
                    className="card-logo"
                  />
                </div>
                <h2 className="back-title">{cards[index].title}</h2>
              </div>
            </div>

            <div className="card-back-body scrollbar-hide">
              {cards[index].para && (
                <div className="description-section">
                  <h3 className="section-title">Description</h3>
                  <p className="description-text">{cards[index].para}</p>
                </div>
              )}{" "}
              <div className="tools-section">
                <h3 className="section-title">Tools & Technologies</h3>
                <div className="tools-grid">
                  {cards[index].tools.map((tool, i) => (
                    <div key={i} className="tool-item">
                      <span className="tool-icon">⚙️</span>
                      <span className="tool-name">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CarouselItem;
