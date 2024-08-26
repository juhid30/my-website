import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  childVariants,
  fadeInAnim,
  parentVariants,
  socialLinks,
} from "../Data/Data";
import { useState } from "react";
import closeArrow from "../../assets/cross_new.png";

const ContactMe = ({ isContactOpen, isPhone, expandDiv, isDarkModeOn }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Here you can add your form submission logic,
      // such as sending data to a backend server.
      // For now, let's just set submitted to true.
      setSubmitted(true);
      console.log(formData);
      emailjs
        .send(
          "service_gk234dg",
          "template_1ev6cxb",
          formData,
          "6c53iMslEEQKGhoCu"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      {isContactOpen && (
        <>
          <AnimatePresence>
            <motion.div
              {...(!isPhone && {
                initial: { y: "-50%", opacity: 0, scale: 1 },
                animate: { y: 0, opacity: 1, scale: 1 },
                transition: { delay: 0.3, duration: 1 },
              })}
              {...(isPhone && { variants: { parentVariants } })}
              layout
              className={` ${
                isPhone
                  ? "relative rounded-[0.9rem]"
                  : "w-[100%] h-[100%] rounded-[1.8rem]"
              } contact-div-open  z-[120] absolute top-0 left-0 ${
                isDarkModeOn
                  ? isPhone
                    ? ""
                    : "bg-[#769f96] "
                  : isPhone
                  ? ""
                  : "bg-yellow-200"
              }   `}
            >
              <motion.div
                initial="hidden"
                animate="show"
                layout
                {...(!isPhone && { variants: { fadeInAnim } })}
                {...(isPhone && { variants: { childVariants } })}
                className={` ${
                  isPhone ? "flex flex-col" : ""
                } p-5  flex  rounded-[1.8rem] h-[100%] text-left text-[150%] text-jblack relative`}
              >
                <div
                  className={` ${isPhone ? "" : "absolute top-5 right-5 "} `}
                >
                  <img
                    src={closeArrow}
                    onClick={() => {
                      expandDiv("Contact");
                    }}
                    className={` ${
                      isPhone ? "absolute top-2 right-3" : ""
                    } float-right cursor-pointer`}
                  ></img>
                </div>{" "}
                <motion.div
                  layout
                  {...(!isPhone && { variants: { fadeInAnim } })}
                  {...(isPhone && { variants: { childVariants } })}
                  className={` ${isPhone ? "" : "w-[45%]"} `}
                >
                  <motion.h1
                    layout
                    {...(!isPhone && { variants: { fadeInAnim } })}
                    {...(isPhone && { variants: { childVariants } })}
                    className={` ${
                      isPhone
                        ? " w-[100%] text-[3.2rem] leading-[4rem] py-4 "
                        : "text-6xl p-4 px-3"
                    } `}
                  >
                    Contact Details
                  </motion.h1>
                  <motion.p
                    layout
                    {...(!isPhone && { variants: { fadeInAnim } })}
                    {...(isPhone && { variants: { childVariants } })}
                    className={` ${
                      isPhone
                        ? "w-[90%] mt-[17%] text-[1.3rem] "
                        : " left-10 w-[80%] text-[1.2rem]  mt-[10%] "
                    } contact-para relative text-justify`}
                  >
                    Thank you for your interest in getting in touch with me.
                    Whether you have a question, want to collaborate on a
                    project, or just want to say hello, I'd love to hear from
                    you!<br></br>Feel free to reach out!
                  </motion.p>
                  <motion.div
                    layout
                    {...(!isPhone && { variants: { fadeInAnim } })}
                    {...(isPhone && { variants: { childVariants } })}
                    className={` ${
                      isPhone ? "hidden" : ""
                    }  contact-icons grid grid-cols-2 grid-rows-2  w-[123%] relative gap-3 top-[9.7%]`}
                  >
                    {socialLinks.map((item, index) => {
                      return (
                        <>
                          <motion.div
                            key={index}
                            layout
                            {...(!isPhone && { variants: { fadeInAnim } })}
                            {...(isPhone && { variants: { childVariants } })}
                            className={` ${
                              isPhone ? "" : ""
                            } contact-icons-div-indiv relative flex items-center left-6 gap-1 text-xl h-fit my-5`}
                          >
                            <a href={item.link} target="_blank">
                              <motion.img
                                src={item.icon}
                                className={` ${
                                  isPhone ? "" : ""
                                } contact-me-img w-7 cursor-pointer   h-7`}
                              ></motion.img>
                            </a>
                            <motion.div
                              className={` ${
                                isPhone ? "" : ""
                              } contact-text flex items-center `}
                            >
                              <motion.p>{item.ref}</motion.p>
                            </motion.div>
                          </motion.div>
                        </>
                      );
                    })}
                  </motion.div>
                </motion.div>
                <motion.div
                  className={` ${
                    isPhone
                      ? "w-[100%] mt-5 flex flex-col items-center h-[30rem]"
                      : "w-[55%] mt-7 px-[5%]"
                  }  text-2xl `}
                >
                  <motion.div
                    layout
                    {...(!isPhone && { variants: { fadeInAnim } })}
                    {...(isPhone && { variants: { childVariants } })}
                    className={` ${
                      isPhone ? "w-[100%] h-[100%]" : "h-[85%] my-[9%]"
                    }   p-2 `}
                  >
                    {!submitted ? (
                      <motion.form
                        layout
                        {...(!isPhone && { variants: { fadeInAnim } })}
                        {...(isPhone && { variants: { childVariants } })}
                        onSubmit={handleSubmit}
                        className={` ${isPhone ? "" : ""} flex flex-col gap-7`}
                      >
                        {/* Your form inputs */}
                        <motion.input
                          layout
                          {...(!isPhone && { variants: { fadeInAnim } })}
                          {...(isPhone && { variants: { childVariants } })}
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Name"
                          className={` ${
                            isPhone ? " w-[90%]" : " w-[60%]"
                          } rounded placeholder:px-2`}
                        ></motion.input>
                        {formErrors.name && (
                          <p
                            className={` ${
                              isPhone ? "px-1" : "px-2"
                            } text-red-500 -mt-8 `}
                          >
                            {formErrors.name}
                          </p>
                        )}
                        <motion.input
                          layout
                          {...(!isPhone && { variants: { fadeInAnim } })}
                          {...(isPhone && { variants: { childVariants } })}
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          className={` ${
                            isPhone ? " w-[90%]" : " w-[60%]"
                          } rounded placeholder:px-2`}
                        ></motion.input>
                        {formErrors.email && (
                          <p
                            className={` ${
                              isPhone ? "px-1" : "px-2"
                            } text-red-500 -mt-8 `}
                          >
                            {formErrors.email}
                          </p>
                        )}

                        <motion.textarea
                          layout
                          {...(!isPhone && { variants: { fadeInAnim } })}
                          {...(isPhone && { variants: { childVariants } })}
                          name="message"
                          placeholder="Your Message"
                          cols={50}
                          rows={6}
                          className={` ${
                            isPhone ? "" : ""
                          } rounded placeholder:px-2 placeholer:py-4`}
                          value={formData.message}
                          onChange={handleChange}
                        ></motion.textarea>
                        {formErrors.message && (
                          <p
                            className={` ${
                              isPhone ? "px-1" : "px-2"
                            } text-red-500 -mt-8`}
                          >
                            {formErrors.message}
                          </p>
                        )}
                        <motion.button
                          layout
                          {...(!isPhone && { variants: { fadeInAnim } })}
                          {...(isPhone && { variants: { childVariants } })}
                          type="submit"
                          className={` ${isPhone ? "" : ""} ${
                            isDarkModeOn ? "bg-[#afacac] " : "bg-white"
                          }  p-1 text-jblack  px-2 rounded self-end`}
                        >
                          Submit
                        </motion.button>
                      </motion.form>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.1,
                        }}
                        className={` ${
                          isPhone
                            ? "h-[100%]  flex  relative"
                            : "relative top-[35%]"
                        } text-center items-center `}
                      >
                        <p
                          className={` ${
                            isPhone ? "text-[2.5rem] text-center" : " text-5xl"
                          }`}
                        >
                          Thank you for your submission!
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </>
  );
};
export default ContactMe;
