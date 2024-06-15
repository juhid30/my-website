import { useScroll } from "@react-three/drei";
import { blogs, childVariants, fadeInAnim, parentVariants } from "../Data/Data";
import { easeOut, motion } from "framer-motion";
import { useState } from "react";
import rightArrowDouble from "../../assets/right arrow double.png";
import back from "../../assets/arrow-left.png";
import closeArrow from "../../assets/cross_new.png";
import "../../App.css";
const Blogs = ({ isPhone, expandDiv }) => {
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
        {...(!isPhone && {
          initial: { y: "-50%", opacity: 0, scale: 1 },
          animate: { y: 0, opacity: 1, scale: 1 },
          transition: { delay: 0.3, duration: 1 },
        })}
        {...(isPhone && { variants: { parentVariants } })}
        layout
        className={` ${
          isPhone
            ? "expanded-blog-phone relative rounded-[1rem]"
            : "rounded-[1.8rem]"
        } w-[100%] h-[100%] z-[120] bg-blue-200   absolute top-0 left-0 cursor-default   `}
      >
        <motion.div
          initial="hidden"
          animate="show"
          layout
          {...(!isPhone && { variants: { fadeInAnim } })}
          {...(isPhone && { variants: { childVariants } })}
          className={` ${
            isPhone ? "p-4" : " p-5 gap-5"
          } blog-wrapper rounded-[1.8rem] h-[100%] text-[150%] flex relative `}
        >
          <motion.div
            {...(!isPhone && { variants: { fadeInAnim } })}
            {...(isPhone && { variants: { childVariants } })}
            layout
            className={` ${
              isPhone ? "p-3 gap-3 w-[100%]" : "p-5  gap-5  w-[65%] "
            }  blog-list   border-2 border-black bg-joff scroll-smooth overflow-auto scrollbar-hide flex items-center justify-center flex-wrap `}
          >
            {" "}
            {blogSelected && (
              <>
                <div
                  className={` ${
                    isPhone ? "" : " gap-5"
                  }  w-[100%]  flex flex-col items-center  h-[100%]`}
                >
                  <div
                    className={` ${
                      isPhone
                        ? "flex flex-col  items-center justify-evenly   mb-5 w-[100%] h-[55%]"
                        : "mt-6  w-[94%] h-[45%] flex  justify-between"
                    }  `}
                  >
                    <div
                      className={` ${
                        isPhone
                          ? "w-[100%]  flex justify-center items-center h-[70%]"
                          : "w-[45%] h-[100%]"
                      } `}
                    >
                      <img
                        src={openBlog.url}
                        className="h-[100%] object-fit"
                      ></img>
                    </div>
                    <div
                      className={` ${
                        isPhone
                          ? " w-[100%] text-[2.4rem] leading-[3rem] mt-3"
                          : "text-6xl w-[50%] "
                      } flex items-center `}
                    >
                      <h1
                        className={`${isPhone ? "w-[100%]" : ""} text-center `}
                      >
                        {" "}
                        {openBlog.title}
                      </h1>{" "}
                    </div>{" "}
                  </div>
                  <div
                    className={` ${
                      isPhone
                        ? "text-[1.2rem] h-[60%] mb-2"
                        : "text-base h-[50%] "
                    }   overflow-auto flex justify-center  scroll-smooth scrollbar-hide`}
                  >
                    <p className="w-[94%]  ">{openBlog.description}</p>
                  </div>{" "}
                  <div
                    onClick={() => {
                      closeBlogDescription();
                    }}
                    className={` ${
                      isPhone
                        ? "float-right  w-[100%]"
                        : "absolute bottom-5 right-4 "
                    }  bg-joff`}
                  >
                    <button
                      className={` ${
                        isPhone ? "float-right bg-blue-100" : ""
                      } px-5`}
                    >
                      Back
                    </button>
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
                        key={blog.id}
                        initial={{ scale: 1 }}
                        whileHover={{ opacity: 1, scale: 1.1 }}
                        transition={{
                          duration: 0.5,
                          ease: easeOut,
                        }}
                        onClick={() => {
                          openBlogDescription(blog);
                        }}
                        className={`${
                          isPhone ? "w-[95%] h-[46%]" : "w-[30%] h-[45%]"
                        } border-2 cursor-pointer rounded-[0.4rem] bg-pink-100 flex items-center justify-center text-3xl  `}
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

          <motion.div
            layout
            {...(!isPhone && { variants: { fadeInAnim } })}
            {...(isPhone && { variants: { childVariants } })}
            className={`${
              isPhone ? "" : "gap-5"
            } text-div text-left flex flex-col  items-center w-[35%]`}
          >
            <div
              // onClick={() => {
              //   console.log("Hello");
              //   expandDiv("Blogs");
              // }}
              className="w-[100%] h-[10%] float-right"
            >
              <img
                src={closeArrow}
                onClick={() => expandDiv("Blogs")}
                className={`${
                  isPhone ? "float-right absolute top-2 right-3" : "float-right"
                } cursor-pointer`}
              ></img>
            </div>
            <h1
              className={`${
                isPhone ? " text-[4rem]" : "text-[600%] "
              }  w-[100%]`}
            >
              Blogs
            </h1>
            <p
              className={`${
                isPhone ? "p-2 mt-5 text-[85%]" : "text-[80%] text-base"
              }  p-3 w-[100%] `}
            >
              I've found solace in expressing and sharing my feelings and
              experiences through blog writing. It's a powerful outlet to
              articulate my thoughts and emotions and a journey of
              self-discovery and growth.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};
export default Blogs;
