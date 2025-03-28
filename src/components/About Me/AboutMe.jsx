import { skillList, socialLinks } from "../Data/Data";
import { easeOut, motion } from "framer-motion";

const AboutMe = ({ isDarkModeOn, isPhone }) => {
  return (
    <motion.div
      className={`
        ${
          isDarkModeOn
            ? "bg-gradient-to-br from-[#d1c7b5] to-[#c5bba8]"
            : "bg-gradient-to-br from-[#ddd8ce] to-[#eae6df]"
        }
        ${isPhone ? "text-center" : "text-left"}
        about-me-desc w-[60%] overflow-y-auto scrollbar-hide rounded-r-xl shadow-lg p-6 relative flex flex-col
      `}
    >
      {/* About Me Section */}
      <section
        className={`
        ${isPhone ? "flex flex-col justify-center items-center" : ""}
        about-me mb-6
      `}
      >
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`
            ${isPhone ? "text-center" : ""}
            text-4xl font-semibold mb-4 about-title relative inline-block
          `}
        >
          About Me
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-current mt-2 opacity-40"
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`about-text ${
            isPhone ? "text-[1.27rem]" : "text-base"
          } leading-relaxed `}
        >
          I'm Juhi Deore, driven by a passion for continuous learning and
          inspired by collaborative teamwork. I enjoy creating inclusive
          environments and have had the privilege of managing teams and
          supporting their growth. Beyond tech, I find joy in Bharatanatyam
          dance and Carnatic music. I'm eager to explore opportunities in both
          technical and managerial roles to contribute meaningfully.
        </motion.p>
      </section>

      {/* Skills Section */}
      <section
        className={`
        ${isPhone ? "flex flex-col justify-center items-center" : ""}
        skills mb-6
      `}
      >
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`
            ${isPhone ? "text-center" : ""}
            text-4xl font-semibold mb-5 about-title relative inline-block
          `}
        >
          Skills
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 bg-current mt-2 opacity-40"
          />
        </motion.h2>

        <div
          className={`
          ${isPhone ? "w-[100%]" : "w-[90%]"}
          grid ${isPhone ? "grid-cols-3" : "grid-cols-4"} gap-5 about-text
        `}
        >
          {skillList.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`
                skill-item flex flex-col justify-center items-center
                ${isDarkModeOn ? "hover:bg-[#c0b6a4]" : "hover:bg-[#e0dbd1]"}
                p-3 rounded-lg transition-all duration-300 hover:shadow-md
              `}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3, ease: easeOut }}
                className={`
                  w-14 h-14 flex items-center justify-center mb-2
                  ${isDarkModeOn ? "bg-[#beb4a2]/40" : "bg-[#d1ccc2]/40"}
                  rounded-full p-2
                `}
              >
                <img src={skill.icon} alt={skill.name} className="w-9 h-9" />
              </motion.div>
              <p className="text-sm font-medium text-center">{skill.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section
        className={`
        ${isPhone ? "flex flex-col justify-center items-center" : ""}
        experience mb-6
      `}
      >
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`
            ${isPhone ? "text-center" : ""}
            text-4xl font-semibold mb-4 about-title relative inline-block
          `}
        >
          Experience
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="h-1 bg-current mt-2 opacity-40"
          />
        </motion.h2>

        <div
          className={`
          ${
            isDarkModeOn
              ? "bg-[#c5bba8]/50 p-1 w-[100%]"
              : "bg-[#e0dbd1]/50 p-4"
          }
          rounded-lg shadow-sm
        `}
        >
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-3 about-text"
          >
            {[
              {
                role: "Data Science Intern",
                company: "TaskLance Analytics",
                period: "Aug 2024 - Jan 2025",
              },
              {
                role: "Technical Team Member",
                company: "Google Developer’s Group",
                period: "Oct 2024 - Present",
              },
              {
                role: "Web Team Member",
                company: "Developer’s Club, TSEC",
                period: "Mar 2024 - Present",
              },
              {
                role: "Administrative Assistant",
                company: "St. Xavier's College",
                period: "Jul 2022 - Aug 2022",
              },
              {
                role: "Business Operations Intern",
                company: "Asmi by Arch",
                period: "Dec 2021 - Aug 2022",
              },
            ].map((exp, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 * index + 0.4 }}
                className={`
                  flex ${isPhone ? " items-center" : "items-start"}
                  p-2 rounded-md
                  ${
                    isDarkModeOn
                      ? "hover:bg-[#beb4a2]/30"
                      : "hover:bg-[#d1ccc2]/30"
                  }
                  transition-all duration-300
                `}
              >
                <div
                  className={`
                  ${isPhone ? "mr-3" : "mr-3"}
                  w-2 h-2 rounded-full mt-2 flex-shrink-0
                  ${isDarkModeOn ? "bg-[#a39a89]" : "bg-[#b8b3aa]"}
                block
                `}
                />
                <div className={`${isPhone ? "" : ""}`}>
                  <div
                    className={`${isPhone ? "text-[1.27rem]" : "font-medium "}`}
                  >
                    {exp.role}
                  </div>
                  <div
                    className={`text-sm opacity-80 flex   ${
                      isPhone
                        ? "flex-col items-start justify-center"
                        : "items-center justify-between"
                    }`}
                  >
                    <div className={`${isPhone ? "mt-1 text-[1.02rem]" : ""}`}>
                      {exp.company}
                    </div>
                    <div
                      className={`${
                        isPhone ? "text-[1rem] mt-1" : "ml-4"
                      } text-xs opacity-70`}
                    >
                      {exp.period}
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className={`
        ${isPhone ? "hidden" : ""}
        contact-info mt-6
      `}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`
            ${isPhone ? "text-center" : ""}
            text-xl font-medium mb-3
          `}
        >
          Connect With Me
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`
            flex ${isPhone ? "justify-center" : ""} space-x-6
          `}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              // transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index + 0.6 }}
              className={`
                p-2 rounded-full
                ${
                  isDarkModeOn
                    ? "bg-[#c0b6a4]/50 hover:bg-[#b5ab99]/70"
                    : "bg-[#e0dbd1]/50 hover:bg-[#d5d0c6]/70"
                }
                transition-all duration-300 hover:shadow-md
              `}
            >
              <img src={link.icon} alt={link.title} className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* Download Resume Button */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className={`
          mt-6 ${isPhone ? "flex justify-center" : ""}
        `}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            ${
              isDarkModeOn
                ? "bg-[#b5ab99] hover:bg-[#a69c8a] text-gray-800"
                : "bg-[#c5c0b6] hover:bg-[#b8b3a9] text-gray-700"
            }
            px-6 py-2 rounded-lg font-medium shadow-sm hover:shadow-md
            transition-all duration-300 flex items-center
          `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Download Resume
        </motion.button>
      </motion.div> */}
    </motion.div>
  );
};

export default AboutMe;
