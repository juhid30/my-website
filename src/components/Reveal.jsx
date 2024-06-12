import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
export const Reveal = ({ children }) => {
  const ref = useRef(null);
  //   const isInView = useInView(ref, { once: true });
  //   useEffect(() => {
  //     if (isInView) {
  //       console.log("hello");
  //       //   mainControls.start("visible");
  //     }
  //   }, [isInView]);
  const mainControls = useAnimation();

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      //   animate={mainControls}
      whileInView="visible"
      //   viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.6 }}
      className="h-[120%]  flex gap-5 justify-center w-[100%]"
    >
      {children}
    </motion.div>
  );
};
