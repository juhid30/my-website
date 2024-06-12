import React, { useState } from "react";
import { motion } from "framer-motion";
import close from "../assets/close.png";
function ContactForm({ fadeInAnim }) {
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
    <motion.div className="w-[55%] text-2xl mt-7 px-[5%]">
      <motion.div variants={fadeInAnim} className="h-[85%] my-[9%] p-2 ">
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
              <p className="text-red-500 -mt-8 px-2">{formErrors.name}</p>
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
              <p className="text-red-500 -mt-8 px-2">{formErrors.email}</p>
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
              <p className="text-red-500 -mt-8 px-2">{formErrors.message}</p>
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
            <p className="text-5xl">Thank you for your submission!</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
export default ContactForm;
