import React, { useState } from "react";
import "./About.css";
import Juhiphoto from "../assets/Juhi photo.jpeg";
import { motion } from "framer-motion";
const About = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="modal">
        <div className="overlay">
          <div className="modal-content">
            <div className="flex text-xl w-[45%] h-[99%] ">
              <motion.div
                className="ml-3 text-center bg-jwhite rounded-[20px]  p-3 items-center "
                animate={{ x: [0, 100, 0] }}
              >
                <div className="items-center">
                  <img
                    src={Juhiphoto}
                    width={250}
                    height={250}
                    className="rounded-full"
                  ></img>
                  {/* Image */}
                </div>
                <div className="mt-10">
                  {/* details */}
                  <h1>Juhi Deore</h1>
                  <p className="text-sm mt-10"></p>
                </div>
              </motion.div>
              <div>{/* Other details */}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
