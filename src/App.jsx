import { useEffect, useState } from "react";
import arrowUp from "./assets/up-right-arrow.png";
import close from "./assets/close.png";
import pattern from "./assets/7.png";
import insta from "./assets/instagram.png";
import github from "./assets/github.png";
import linkedIn from "./assets/linkedin.png";
import html from "./assets/html-5.png";
import css from "./assets/css-3.png";
import js from "./assets/js.png";
import java from "./assets/java.png";
import react from "./assets/physics.png";
import cprog from "./assets/cropped.jpg";
import tailwind from "./assets/cropped__1_-removebg-preview.png";
import ForgeFinance from "./assets/ForgeFinance.png";
import TarakkiDashboard from "./assets/Tarakki Dashboard.jpeg";
import PersonalSS from "./assets/Personal_SS-transformed.png";
import Vidyarthi from "./assets/Vidyarthi.jpeg";
import terna from "./assets/terna1.jpeg";
import juhi from "./assets/Juhi photo.jpeg";
import email from "./assets/envelope.png";
import Resume from "./assets/Juhi Resume_May_2024.pdf";
import closeWhite from "./assets/close-white.png";
import arrowUpBlack from "./assets/up-right-arrow-black.png";
import Navbar from "./components/Navbar";
import { scroll } from "framer-motion/dom";
import { motion, AnimatePresence } from "framer-motion";
import { Experience } from "./components/Experience";
import "./App.css";
import { Canvas } from "@react-three/fiber";
// import Carousel from "./components/Carousel";
import Blog from "./components/Blog";
import pp from "./assets/Avatar.png";
import vidyarthilogo from "./assets/Vidyarthi-logo-final.png";
import safarLogo from "./assets/Safar Logo.png";
import tklogo from "./assets/tarakki logo.png";
import forge from "./assets/Forge.png";
// import ProjectSlider from "./components/ProjectSlider";
import ContactForm from "./components/ContactForm";
import { Reveal } from "./components/Reveal";
// import GsapComponent from "./components/GsapComponent";
import Safar from "./assets/Tourist.png";
import Slider from "./components/Slider";
function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const [showAvatar, setShowAvatar] = useState(true);

  const [isPageLoadedFirstTime, setIsPageLoadedFirstTime] = useState(false);

  const fadeInAnim = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        staggerChildren: 0.3,
      },
    },
  };
  const newAnimation = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.3,
        staggerChildren: 0.4,
      },
    },
  };

  const listAnimation = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.4,
      },
    },
  };
  const listArray = [
    {
      id: "1",
      title: "Frontend",
      color: "#f24405",
    },
    {
      id: "2",
      title: "Backend",
      color: "#360159",
    },
    {
      id: "3",
      title: "UI/UX",
      color: "#28358a",
    },
    {
      id: "4",
      title: "Web Design",
      color: "#f29f05",
    },
    {
      id: "5",
      title: "AI/ML",
      color: "#ee06f2",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      title: "Email",
      icon: email,
      link: "mailto:55.juhideore@gmail.com",
      ref: "55.juhideore@gmail.com",
    },
    {
      id: 2,
      title: "Linkedin",
      icon: linkedIn,
      link: "https://www.linkedin.com/in/juhideore/",
      ref: "Juhi Deore",
    },
    {
      id: 3,
      title: "GitHub",
      icon: github,
      link: "https://github.com/juhid30",
      ref: "juhid30",
    },
    {
      id: 4,
      title: "Instagram",
      icon: insta,
      link: "https://www.instagram.com/juhi._11/",
      ref: "juhi._11",
    },
  ];

  const skillList = [
    {
      id: 1,
      icon: html,
    },
    {
      id: 2,
      icon: css,
    },
    {
      id: 3,
      icon: js,
    },
    {
      id: 4,
      icon: tailwind,
    },
    {
      id: 5,
      icon: react,
    },
    {
      id: 6,
      icon: cprog,
    },
    {
      id: 7,
      icon: java,
    },
  ];
  const cards = [
    {
      id: 1,
      url: ForgeFinance,
      title: "Forge Finance",
      brief: "Finance Gamification Website",
      para: `A website that offers a unique gamified approach to financial education, designed to increase user engagement and make learning about finance fun and interactive. Through a series of engaging games, quizzes, and interactive activities, users can explore various financial concepts, from budgeting and saving to investing and retirement planning. `,
      logo: forge,
    },
    {
      id: 2,
      url: Safar,
      title: "Safar",
      brief: "Tourist Guide Website",
      para: `A tourist guide website that offers users the opportunity to explore diverse destinations matched to user's interests and preferences. Visitors can filter attractions based on activities and regions, ensuring a tailored travel experience. With access to renowned landmarks and curated itinerary packages, travelers can plan their ideal trips effortlessly.`,
      logo: safarLogo,
    },
    {
      id: 3,
      url: TarakkiDashboard,
      title: "Tarakki",
      brief: "Campus Placement Scheduler",
      para: `A user-friendly web app for campus placements, offering a comprehensive scheduler and resource center. Features include an Interactive Placement Calendar for managing schedules and reminders, a Company Information Portal for insights on visiting companies, a Preparation Material Aggregator for accessing study resources, and a Community Section for instant assistance from peers or alumni.`,
      logo: tklogo,
    },
    {
      id: 4,
      url: PersonalSS,
      title: "Juhi Deore",
      brief: "Personal Portfolio",
      para: `My personal portfolio website - a culmination of my ongoing learning journey and the application of acquired knowledge from various sources. Here, I showcase projects and endeavors where I've implemented my skills while continuously absorbing new insights from diverse avenues. It portrays my journey of growth and development which translates into tangible results through this interactive platform, reflecting my passion for continuous improvement and innovation.`,
      logo: pp,
    },
    {
      id: 5,
      url: Vidyarthi,
      title: "Vidyarthi",
      brief: "Simplifying Student Life",
      para: `'Vidyarthi' is a student-centric website simplifying tasks that a student encounters frequently. A platform that streamlines administrative hassles, freeing students to focus on their academic journey. With a user-friendly interface, it fosters a supportive environment for the students. The vision is to empower students to overcome obstacles and achieve their full potential.`,
      logo: vidyarthilogo,
    },
  ];
  // const [isIconHovered, setIsIconHovered] = useState(
  //   Array(socialLinks.length).fill(false)
  // );
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

  const toggleDiv = (targetDiv, setTargetDiv) => {
    setTargetDiv(!targetDiv);
  };
  const expandDiv = (btnName) => {
    switch (btnName) {
      case "About":
        isBlogOpen || isContactOpen || isProjectOpen
          ? openDivWithDelay(isAboutOpen, setIsAboutOpen)
          : toggleDiv(isAboutOpen, setIsAboutOpen);
        break;
      case "Project":
        isBlogOpen || isContactOpen || isAboutOpen
          ? openDivWithDelay(isProjectOpen, setIsProjectOpen)
          : toggleDiv(isProjectOpen, setIsProjectOpen);
        break;
      case "Blog":
        isAboutOpen || isContactOpen || isProjectOpen
          ? openDivWithDelay(isBlogOpen, setIsBlogOpen)
          : toggleDiv(isBlogOpen, setIsBlogOpen);
        break;
      case "Contact":
        isAboutOpen || isBlogOpen || isProjectOpen
          ? openDivWithDelay(isContactOpen, setIsContactOpen)
          : toggleDiv(isContactOpen, setIsContactOpen);
        break;
      default:
        setIsAboutOpen(false);
        setIsBlogOpen(false);
        setIsContactOpen(false);
        setIsProjectOpen(false);
        break;
    }

    // if (btnName === "About") {
    //   isProjectOpen || isBlogOpen
    //     ? (setIsProjectOpen(false),
    //       setIsBlogOpen(false),
    //       setTimeout(() => {
    //         setIsAboutOpen(true);
    //       }, 600))
    //     : setIsAboutOpen(!isAboutOpen);
    // } else if (btnName === "Project") {
    //   isAboutOpen || isBlogOpen
    //     ? (setIsAboutOpen(false),
    //       setIsBlogOpen(false),
    //       setTimeout(() => {
    //         setIsProjectOpen(true);
    //       }, 600))
    //     : setIsProjectOpen(!isProjectOpen);
    // } else if (btnName === "Blog") {
    //   isAboutOpen || isProjectOpen
    //     ? (setIsAboutOpen(false),
    //       setIsProjectOpen(false),
    //       setTimeout(() => {
    //         setIsBlogOpen(true);
    //       }, 600))
    //     : setIsBlogOpen(!isBlogOpen);
    // } else {
    //   setIsAboutOpen(false);
    //   setIsBlogOpen(false);
    //   setIsProjectOpen(false);
    // }
  };
  const showIconText = (index) => {
    setIsIconHovered((prevState) => {
      const newArray = prevState.map((item, i) => i === index);
      return newArray;
    });
  };
  // const container = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       delayChildren: 0.5
  //     }
  //   }
  // }
  //   const item = {
  //     // hidden: { opacity: 0 },
  //     show: {
  //       initial: {
  //         opacity: 0,
  //         scale: 0.5 },

  //     animate:{ opacity: 1, scale: 1 },
  //     transition:{
  //       duration: 0.3,
  //       ease: [0, 0.71, 0.2, 1.01],
  //       scale: {
  //         type: "spring",
  //         damping: 5,
  //         stiffness: 100,
  //         restDelta: 0.001

  // }
  // } }
  //   }
  // scroll(
  //   (progress) => {
  //     progressWheel.style.strokeDasharray = `${progress}, 1`;
  //   },
  //   {
  //     source: document.querySelector("ul"),
  //     axis: "x"
  //   }
  // );
  return (
    <>
      <Navbar
        expandDiv={expandDiv}
        isContactOpen={isContactOpen}
        isProjectOpen={isProjectOpen}
        isAboutOpen={isAboutOpen}
        setIsAboutOpen={setIsAboutOpen}
        setIsBlogOpen={setIsBlogOpen}
        setIsProjectOpen={setIsProjectOpen}
        setIsContactOpen={setIsContactOpen}
        isBlogOpen={isBlogOpen}
      />

      <section className="bg-jblack p-4 w-[100%] h-[85vh] ">
        <div className="  w-[100%] h-[100%]">
          <motion.div
            className="  h-[100%] gap-x-[01%] gap-y-[01.4%] gridlayout "

            // variants={container}
            // initial="hidden"
            // animate="show"
          >
            {isContactOpen && (
              <>
                <AnimatePresence>
                  <motion.div
                    initial={{
                      y: "-50%",
                      opacity: 0,
                      scale: 1,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{ y: "-50%", opacity: 0, scale: 1 }}
                    transition={{
                      duration: 1,
                    }}
                    className="w-[98.3%] h-[81.7%] rounded-[1.8rem] contactdiv"
                  >
                    <motion.div
                      initial="hidden"
                      animate="show"
                      variants={fadeInAnim}
                      className=" p-5  flex  rounded-[1.8rem] h-[100%] text-left text-[150%] text-jblack"
                    >
                      {" "}
                      <img
                        src={close}
                        className="w-7 h-7 absolute top-6 right-6 cursor-pointer"
                        onClick={() => {
                          expandDiv("Contact");
                        }}
                      ></img>
                      <motion.div variants={fadeInAnim} className="w-[45%]">
                        <motion.h1
                          variants={fadeInAnim}
                          className="text-6xl p-4 px-3"
                        >
                          Contact Details
                        </motion.h1>
                        <motion.p
                          variants={fadeInAnim}
                          className="mt-[10%] w-[80%] relative left-10 text-[1.2rem] text-justify"
                        >
                          Thank you for your interest in getting in touch with
                          me. Whether you have a question, want to collaborate
                          on a project, or just want to say hello, I'd love to
                          hear from you!<br></br>Feel free to reach out!
                        </motion.p>
                        <motion.div
                          variants={fadeInAnim}
                          className=" grid grid-cols-2 grid-rows-2 w-[97%] relative left-[8%] gap-6 top-[10%]"
                        >
                          {socialLinks.map((item, index) => {
                            return (
                              <>
                                <motion.div
                                  variants={fadeInAnim}
                                  key={index}
                                  className="relative w-[95%] flex items-center gap-2 text-xl h-fit  my-5"
                                >
                                  <a href={item.link} target="_blank">
                                    <motion.img
                                      src={item.icon}
                                      className="w-7 cursor-pointer   h-7"
                                      // onMouseEnter={() => {
                                      //   setIsIconHovered(
                                      //     Array(socialLinks.length).fill(false)
                                      //   );
                                      //   showIconText(index);
                                      // }}
                                      // onMouseLeave={() => {
                                      //   setIsIconHovered(
                                      //     Array(socialLinks.length).fill(false)
                                      //   );
                                      // }}
                                    ></motion.img>
                                  </a>
                                  <motion.div
                                    // initial={{ opacity: 0, x: -10 }}
                                    // animate={{
                                    //   x: isIconHovered[index] ? 10 : 0,
                                    //   opacity: isIconHovered[index] ? 1 : 0,
                                    // }}
                                    // transition={{ duration: 0.5 }}
                                    className="flex gap-3 items-center  "
                                  >
                                    <motion.p
                                    // initial={{ opacity: 0 }}
                                    // animate={{ opacity: 1 }}
                                    >
                                      {item.ref}
                                    </motion.p>
                                  </motion.div>
                                </motion.div>
                              </>
                            );
                          })}
                        </motion.div>
                      </motion.div>
                      <ContactForm fadeInAnim={fadeInAnim} />
                      {/* <div className="bg-purple-200 w-[55%]  px-[5%]">
                      <div className="bg-pink-200 h-[85%] my-[9%] p-2 ">
                        <form className="flex flex-col gap-10 ">
                          {/* <label>Name</label> 
                          <input
                            type="text"
                            placeholder="Name"
                            className="w-[60%] rounded"
                          ></input>
                          <input
                            type="email"
                            placeholder="Email"
                            className="w-[60%] rounded"
                          ></input>
                          <textarea
                            placeholder="Your Message"
                            cols={50}
                            rows={6}
                            className="rounded"
                          ></textarea>
                          <button className="bg-blue-200 w-[20%] p-1 self-end rounded">
                            Submit
                          </button>
                        </form>
                      </div>
                    </div> */}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </>
            )}
            {isBlogOpen && (
              <Blog fadeInAnim={fadeInAnim} expandDiv={expandDiv} />
            )}

            <motion.div
              className=" bg-jwhite rounded-[1.8rem] p-2  flex overflow-clip  div1"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
                // scale: {
                //   type: "spring",
                //   damping: 9,
                //   stiffness: 100,
                //   restDelta: 0.001
                // }
              }}
            >
              {/* <div> */}
              <div className="pl-10 mt-5 w-[80%] text-left text-jblack">
                <h1 className="  text-[340%] ">
                  Transforming Ideas into Experiences.
                  {/* Explore my digital domain */}
                  {/* <p className="text-3xl text-right text-zinc-700 opacity-500 ">
                    Innovate. Create. Inspire.
                  </p> */}
                  {/* , where creativity flourishes and
              innovation thrives. */}
                </h1>
              </div>
              <div className="relative float-right absolute -right-[7%] -top-[20%] ">
                <img
                  src={pattern}
                  alt="pattern"
                  className="  w-[16rem] h-[16rem] rotate-[80deg] opacity-40"
                ></img>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
                delay: 0.1,
              }}
              // variants={item}
              // initial="hidden"
              // animate="show"
              layout
              // data-isOpen={isAboutOpen}
              onClick={() => expandDiv("About")}
              className={`${
                isAboutOpen ? "aboutOpen grid grid-cols-2" : ""
              } bg-[#083344] w-[100%] text-[#041c26] rounded-[1.8rem] div2`}
            >
              <motion.div
                className={` ${isAboutOpen ? "w-[90%] h-full" : "w-90 h-full"}`}
              >
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
                      {skillList.map((item, index) => {
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
                      })}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
            <div className="div3 grid grid-cols-2 gap-2 ">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                  delay: 0.2,
                }}
                layout
                data-isOpen={isProjectOpen}
                className="bg-[#ff7747] rounded-[1.8rem] p-2 projectdiv"
              >
                {isProjectOpen && (
                  <>
                    <h1 className="text-5xl text-jblack text-sb mt-2 x items-center">
                      My Projects
                    </h1>
                    <img
                      src={close}
                      alt="close"
                      className=" cursor-pointer relative -top-9 float-right right-7"
                      onClick={() => expandDiv("Project")}
                    ></img>

                    {/* // className="h-[70%] bg-yellow-200 overflow-auto mt-7
                      p-5"> */}
                    <Slider cards={cards} />

                    {/* <Carousel /> */}
                  </>
                )}

                {!isProjectOpen && (
                  <>
                    <div className="flex mx-9 my-5 w-[17rem] h-[4rem] relative">
                      {listArray.map((item, index) => {
                        return (
                          <div
                            key={index}
                            id={item.id}
                            style={{
                              backgroundColor: item.color,

                              left: `${index * 3}rem`,
                              zIndex: `${10 - index * 2}`,
                            }}
                            className={` w-[5rem] h-[5rem] border-[#ff7747] border-4 rounded-[50%] absolute `}
                          ></div>
                        );
                      })}
                    </div>
                    <div className="w-auto h-[30%] mt-10">
                      <h1 className="text-[2.5rem] leading-[2.7rem] float-left mx-12 mt-3 text-jblack text-left">
                        My <br></br>Projects
                      </h1>
                      <img
                        src={arrowUpBlack}
                        alt="arrow-black"
                        className="float-right  mt-[18%] mr-5 cursor-pointer w-8 h-8  "
                        onClick={() => expandDiv("Project")}
                      ></img>{" "}
                    </div>
                  </>
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                  delay: 0.3,
                }}
                className=" py-1 px-4 text-jwhite bg-jblack-900 rounded-[1.8rem] text-3xl "
              >
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={listAnimation}
                  className=" h-[100%] rounded-[1.8rem] items-center py-2 cursor-default "
                  style={{ ":hover": { transform: "scale(2.05)" } }}
                >
                  {listArray.map((item, index) => {
                    return (
                      <motion.div
                        variants={listAnimation}
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.1 },
                        }}
                        className="flex relative justify-center items-center   border-b-[1px] border-jwhite  h-[20%]   "
                      >
                        <div
                          key={index}
                          className={`absolute left-0 w-7 h-7 rounded-[50%]`}
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <p className="hover:scale-200 ">{item.title}</p>
                        {/* <img
                          src={arrowUp}
                          alt="arrow"
                          className="w-7 h-7 text-jwhite "
                        ></img> */}
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </div>
            <div className="div4">
              <div className="h-[60%] w-full ">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                    delay: 0.4,
                  }}
                  layout
                  data-isOpen={isBlogOpen}
                  className="bg-jwhite h-[67%] rounded-[1.8rem] p-2"
                >
                  <div className="w-full  h-full flex text-jblack justify-center ">
                    <div className="w-[70%] justify-center items-center flex">
                      <h1 className="text-3xl -mt-1 text-left ">
                        No. of Projects:{" "}
                        <span className="font-semibold">{cards.length}</span>
                      </h1>
                      {/* <h1 className="font-semibold opacity-85  text-7xl ml-4">
                        {cards.length}
                      </h1> */}
                    </div>
                  </div>

                  {/* {isBlogOpen && (
                    <>
                      <motion.div className="bg-jyellow">
                        <h1 className="text-5xl text-jblack text-sb mt-2">
                          Blogs
                        </h1>
                        <img
                          src={close}
                          alt="close"
                          className="float-right cursor-pointer -mt-[2.7%] mr-5 "
                          onClick={() => expandDiv("Blog")}
                        ></img>
                      </motion.div>
                    </>
                  )} */}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                    delay: 0.5,
                  }}
                  className="  flex justify-end text-center p-[5.5px]"
                >
                  <a href={Resume} target="_blank">
                    <button className="bg-[#f29f05] text-lg rounded-full mt-[2%] py-1 px-10 ">
                      Resume
                    </button>
                  </a>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                  delay: 0.5,
                }}
                className="bg-[#e3c06e] rounded-[1.8rem] p-2 w-full  h-[40%]"
              >
                <div>
                  <p className="text-xl">Social Links </p>
                  <div className="flex gap-[12%] justify-center mt-4">
                    {socialLinks.map((item, index) => {
                      if (item.title === "Email") return;
                      return (
                        <>
                          <a href={item.link} target="_blank">
                            <img
                              src={item.icon}
                              className="w-7 h-7 cursor-pointer"
                            ></img>
                          </a>
                        </>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* <div className='bg-jwhite  w-[100%] h-[80%] rounded-[1.8rem] p-2'>
            asa
          </div> */}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default App;
