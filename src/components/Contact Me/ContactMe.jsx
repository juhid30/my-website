import { AnimatePresence, motion } from "framer-motion";

const ContactMe = () => {
  return (
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
          className="w-[100%] h-[100%] absolute top-0 left-0 z-[10] bg-yellow-200"
        >
          fsd
        </motion.div>
      </AnimatePresence>
    </>
  );
};
export default ContactMe;
