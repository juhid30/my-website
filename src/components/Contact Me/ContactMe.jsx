import { AnimatePresence, motion } from "framer-motion";
import { fadeInAnim, socialLinks } from "../Data/Data";
import { useState } from "react";
import closeArrow from "../../assets/cross_new.png";

const ContactMe = ({ isContactOpen, expandDiv }) => {
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
              className="w-[100%] h-[100%] z-[120] absolute top-0 left-0 rounded-[1.8rem] bg-yellow-200"
            >
              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeInAnim}
                className=" p-5  flex  rounded-[1.8rem] h-[100%] text-left text-[150%] text-jblack"
              >
                <div className="absolute top-5 right-5 ">
                  <img
                    src={closeArrow}
                    onClick={() => {
                      expandDiv("Contact");
                    }}
                    className="float-right"
                  ></img>
                </div>{" "}
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
                    Thank you for your interest in getting in touch with me.
                    Whether you have a question, want to collaborate on a
                    project, or just want to say hello, I'd love to hear from
                    you!<br></br>Feel free to reach out!
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
                              ></motion.img>
                            </a>
                            <motion.div className="flex gap-3 items-center  ">
                              <motion.p>{item.ref}</motion.p>
                            </motion.div>
                          </motion.div>
                        </>
                      );
                    })}
                  </motion.div>
                </motion.div>
                <motion.div className="w-[55%] text-2xl mt-7 px-[5%]">
                  <motion.div
                    variants={fadeInAnim}
                    className="h-[85%] my-[9%] p-2 "
                  >
                    {!submitted ? (
                      <motion.form
                        variants={fadeInAnim}
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-7"
                      >
                        {/* Your form inputs */}
                        <motion.input
                          variants={fadeInAnim}
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Name"
                          className="w-[60%] rounded placeholder:px-2"
                        ></motion.input>
                        {formErrors.name && (
                          <p className="text-red-500 -mt-8 px-2">
                            {formErrors.name}
                          </p>
                        )}
                        <motion.input
                          variants={fadeInAnim}
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-[60%] rounded placeholder:px-2"
                        ></motion.input>
                        {formErrors.email && (
                          <p className="text-red-500 -mt-8 px-2">
                            {formErrors.email}
                          </p>
                        )}

                        <motion.textarea
                          variants={fadeInAnim}
                          name="message"
                          placeholder="Your Message"
                          cols={50}
                          rows={6}
                          className="rounded placeholder:px-2 placeholer:py-4"
                          value={formData.message}
                          onChange={handleChange}
                        ></motion.textarea>
                        {formErrors.message && (
                          <p className="text-red-500 -mt-8 px-2">
                            {formErrors.message}
                          </p>
                        )}
                        <motion.button
                          variants={fadeInAnim}
                          type="submit"
                          className="bg-white p-1 text-jblack  px-2 rounded self-end"
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
                        className="text-center items-center relative top-[35%]"
                      >
                        <p className="text-5xl">
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
