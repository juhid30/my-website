import { fadeInAnim } from "../Data/Data";
import { motion } from "framer-motion";
const Blogs = () => {
  return (
    <>
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
        transition={{
          delay: 0.6,
          duration: 1,
        }}
        className="w-[100%] h-[100%] absolute top-0 left-0 z-[10] bg-orange-200"
      >
        dsd
      </motion.div>
    </>
  );
};
export default Blogs;
