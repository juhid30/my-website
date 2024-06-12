import { useState } from "react";
import About from "./About";

import { motion } from "framer-motion";
import "../App.css";

const Navbar = ({
  expandDiv,
  isContactOpen,
  isProjectOpen,
  isAboutOpen,
  setIsAboutOpen,
  setIsProjectOpen,
  setIsContactOpen,
  isBlogOpen,
  setIsBlogOpen,
}) => {
  const showContactMe = () => {
    setIsContactOpen(true);
    setIsAboutOpen(false);
    setIsProjectOpen(false);

    setIsBlogOpen(false);
  };

  return (
    <>
      <section className="bg-jblack px-10 z-[60] sticky top-0  ">
        <div className="px-4">
          <div className="  h-[15vh] flex items-center  justify-between">
            <div>
              <h1 className="text-4xl text-[#fb7644] mb-3 cursor-default">
                Juhi
              </h1>
            </div>
            <div className="flex gap-2">
              {/* <div><button className="border-2 border-jwhite rounded-full w-[6rem] text-jwhite py-1 hover:bg-[#f29e01] hover:border-[#f29e01] hover:text-[#332a1b] ">Home</button></div> */}
              <div>
                <button
                  className={`border-2 border-jwhite  rounded-full w-[6rem] text-jwhite py-1  hover:border-jyellow hover:text-jyellow  ${
                    isAboutOpen ? "activeBtn" : ""
                  } `}
                  onClick={() => {
                    expandDiv("About");
                  }}
                >
                  About
                </button>
              </div>

              <div>
                <button
                  className={`border-2 border-jwhite rounded-full w-[6rem] text-jwhite py-1  hover:border-jyellow hover:text-jyellow ${
                    isProjectOpen ? "activeBtn" : ""
                  } `}
                  onClick={() => {
                    expandDiv("Project");
                  }}
                >
                  Projects
                </button>
              </div>
              <div>
                <button
                  className={`border-2 border-jwhite rounded-full w-[6rem] text-jwhite py-1  hover:border-jyellow hover:text-jyellow ${
                    isBlogOpen ? "activeBtn" : ""
                  } `}
                  onClick={() => {
                    expandDiv("Blog");
                  }}
                >
                  Blogs
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                expandDiv("Contact");
              }}
              className="bg-jyellow w-[7rem] py-[0.4%] rounded-[1.8rem] hover:scale-110"
            >
              Contact Me
            </button>
            {/* <motion.div
              layout
              data-isOpen={isContactOpen}
              className="contactBtn border-2 border-[#f29e01] bg-[#f29e01] rounded-full w-[6rem] text-[#332a1b] py-1"
              onClick={showContactMe}
            >
              Contact
              {/* {isContactOpen && (
                  <div className="bg-jyellow w-20rem h-10rem">jhgsj </div>
                )} 
            </motion.div> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default Navbar;
