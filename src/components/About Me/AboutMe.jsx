import { skillList, socialLinks } from "../Data/Data";
import { easeOut, motion } from "framer-motion";
const AboutMe = ({ isDarkModeOn, isPhone }) => {
  return (
    <>
      {" "}
      <div
        className={`${isDarkModeOn ? "bg-[#d1c7b5]" : " bg-[#ddd8ce]"} ${
          isPhone ? "text-center" : "text-left"
        }  about-me-desc w-[60%]  p-5 relative flex flex-col justify-center  `}
      >
        {/* <div className="float-right bg-red-200 m">
          <img src={closeArrow}></img>
        </div> */}
        <section className=" about-me mb-4">
          <h2
            className={` ${
              isPhone ? "text-center" : ""
            } text-4xl font-medium mb-3 about-title`}
          >
            About Me
          </h2>
          <p className="about-text">
            I'm Juhi Deore, driven by a passion for continuous learning and
            inspired by collaborative teamwork. I enjoy creating inclusive
            environments and have had the privilege of managing teams and
            supporting their growth. Beyond tech, I find joy in Bharatanatyam
            dance and Carnatic music. I'm eager to explore opportunities in both
            technical and managerial roles to contribute meaningfully.
          </p>
        </section>
        <section
          className={` ${
            isPhone ? "flex flex-col justify-center items-center" : ""
          } skills mb-4 `}
        >
          <h2
            className={` ${
              isPhone ? "text-center" : ""
            } text-4xl font-medium mb-5 about-title`}
          >
            Skills
          </h2>
          <div
            className={`${
              isPhone ? "w-[100%]" : "w-[80%]"
            }  grid grid-cols-4 gap-4 about-text`}
          >
            {skillList.map((skill) => (
              <motion.div
                key={skill.id}
                className="skill-item flex flex-col justify-center  items-center "
              >
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ opacity: 1, scale: 1.2 }}
                  transition={{
                    duration: 0.3,
                    ease: easeOut,
                  }}
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 mb-2"
                />
                <p>{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="experience mb-4  ">
          <h2
            className={` ${
              isPhone ? "text-center" : ""
            }  text-4xl font-medium  mb-2 about-title`}
          >
            Experience
          </h2>
          <div className="">
            <div>
              <ul className="list-disc about-text ml-5">
                <li>Software Developer at XYZ Corp</li>
                <li>Frontend Developer at ABC Inc</li>
                <li>Intern at Tech Startup</li>
              </ul>
            </div>
            {/* <div>
              <ul className="list-disc ml-5">
                <li>Software Developer at XYZ Corp</li>
                <li>Frontend Developer at ABC Inc</li>
                <li>Intern at Tech Startup</li>
              </ul>
            </div> */}
          </div>
        </section>

        <section
          className={`${
            isPhone ? "flex justify-center" : ""
          }  contact-info mt-5`}
        >
          <div className="flex space-x-10 ">
            {socialLinks.map((link) => (
              <a
                href={link.link}
                key={link.id}
                target="_blank"
                // rel="noopener noreferrer"
              >
                <img src={link.icon} alt={link.title} className="w-8 h-8" />
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
export default AboutMe;
