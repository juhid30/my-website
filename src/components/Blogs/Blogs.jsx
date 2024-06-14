import { useScroll } from "@react-three/drei";
import { blogs, fadeInAnim } from "../Data/Data";
import { easeOut, motion } from "framer-motion";
import { useState } from "react";
import rightArrowDouble from "../../assets/right arrow double.png";
import back from "../../assets/arrow-left.png";
import closeArrow from "../../assets/cross_new.png";
import "../../App.css";
const Blogs = ({ expandDiv }) => {
  const [openBlog, setOpenBlog] = useState({});

  const [blogSelected, setBlogSelected] = useState(false);

  const openBlogDescription = (blog) => {
    setBlogSelected(true);
    setOpenBlog(blog);
    console.log(openBlog);
  };
  const closeBlogDescription = () => {
    setBlogSelected(false);
    setOpenBlog({});
  };

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
        className="w-[100%] h-[100%] z-[120] bg-blue-200 rounded-[1.8rem]  absolute top-0 left-0 cursor-default  "
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeInAnim}
          className="rounded-[1.8rem] h-[100%] p-5 text-[150%] flex relative gap-5"
        >
          <motion.div
            variants={fadeInAnim}
            className="w-[65%] border-2 border-black bg-joff scroll-smooth overflow-auto scrollbar-hide flex gap-5 items-center justify-center flex-wrap p-5"
          >
            {" "}
            {blogSelected && (
              <>
                <div className="  w-[100%]  flex flex-col items-center gap-5  h-[100%]  ">
                  <div className=" flex w-[94%] h-[45%] justify-between mt-6">
                    <div className="w-[45%] h-[100%]">
                      <img
                        src={openBlog.url}
                        className="h-[100%] object-fit"
                      ></img>
                    </div>
                    <div className="text-6xl w-[50%] flex items-center ">
                      <h1 className="text-center"> {openBlog.title}</h1>{" "}
                    </div>
                    <div
                      onClick={() => {
                        closeBlogDescription();
                      }}
                      className=" absolute bottom-5 right-4  bg-joff"
                    >
                      <button className="px-5">Back</button>
                    </div>
                  </div>
                  <div className=" h-[50%] text-base overflow-auto flex justify-center  scroll-smooth scrollbar-hide">
                    <p className="w-[94%]  ">{openBlog.description}</p>
                  </div>
                </div>
              </>
            )}
            {!blogSelected && (
              <>
                {blogs.map((blog) => {
                  return (
                    <>
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ opacity: 1, scale: 1.1 }}
                        transition={{
                          duration: 0.5,
                          ease: easeOut,
                        }}
                        onClick={() => {
                          openBlogDescription(blog);
                        }}
                        className="border-2 cursor-pointer rounded-[0.4rem] bg-pink-100 flex items-center justify-center text-3xl w-[30%] h-[45%]"
                      >
                        <h1 className="w-[100%]  text-center leading-relaxed">
                          {blog.title.split(" ").map((word, index) => (
                            <div key={index} className="text-center">
                              {word}
                            </div>
                          ))}
                        </h1>
                      </motion.div>
                    </>
                  );
                })}
              </>
            )}
          </motion.div>

          <div
            // variants={fadeInAnim}
            className="text-left flex flex-col gap-5 items-center w-[35%]"
          >
            <div className=" w-[100%] h-[10%] ">
              <img
                src={closeArrow}
                onClick={() => {
                  expandDiv("Blog");
                }}
                className="float-right cursor-pointer"
              ></img>
            </div>
            <h1 className="text-[600%]  w-[100%]">Blogs</h1>
            <p className="text-[80%] p-3 w-[100%] text-base">
              I've found solace in expressing and sharing my feelings and
              experiences through blog writing. Though I'm new to this medium,
              I've discovered a powerful outlet to articulate my thoughts and
              emotions. It's a journey of self-discovery and growth, where I
              explore the world through my own lens and invite readers to join
              me in reflecting on life's experiences.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
export default Blogs;
