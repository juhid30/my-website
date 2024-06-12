import React, { useState } from "react";
import { motion } from "framer-motion";
import close from "../assets/close.png";

import { Reveal } from "./Reveal";
import terna from "../assets/terna1.jpeg";
import Xav1 from "../assets/Xavier's1.jpeg";
import Vol1 from "../assets/Volantus1.jpeg";
import rightArrow from "../assets/arrow-small-right.png";
import rightArrowDouble from "../assets/right arrow double.png";
import back from "../assets/arrow-left.png";
import "../App.css";

function Blog({ fadeInAnim, expandDiv }) {
  const [openBlog, setOpenBlog] = useState({});

  const [blogSelected, setBlogSelected] = useState(false);

  const blogs = [
    {
      id: 1,
      title: "First Hackathon Win",
      para: `Thrilling dive into the unknown: securing 3rd place in our first hackathon, a testament to teamwork and determination.`,
      description: `Participating in our first hackathon was an exhilarating plunge into the unknown—a journey filled with nerves, excitement, and boundless opportunities for growth. Uncertain of our skills' adequacy, we embarked on this adventure with trepidation, fueled by the audacity to register and test our mettle against the best. What ensued was nothing short of extraordinary—surprisingly securing the third position, a testament to our collective teamwork and unwavering determination.

      The hackathon experience was a tapestry woven with threads of enrichment, learning, and camaraderie. Every moment was an opportunity to expand our horizons, as we navigated through challenges hand in hand, guided by a supportive organizing committee. Laughter mingled with moments of intense concentration, creating memories that would forever be etched in our minds.
      
      Yet, beyond the thrill of victory, the essence of the hackathon lay in the journey itself. It was a whirlwind experience, propelling us beyond our comfort zones, pushing the boundaries of our capabilities, and unveiling untapped reservoirs of potential. Each obstacle surmounted was a testament to our resilience, each solution crafted a testament to our creativity.
      
      But perhaps, amidst the chaos and frenzy, what truly resonated was the joy of discovery—the realization that in embracing the unknown, we uncover facets of ourselves we never knew existed. The hackathon was not merely a competition; it was a voyage of self-discovery, a quest to unearth our true potential and embrace the thrill of uncertainty.
      
      As we reflect on our hackathon journey, we are filled with gratitude—for the invaluable lessons learned, for the bonds forged, and for the indelible memories created. It was more than just a competition; it was a celebration of innovation, collaboration, and the relentless pursuit of excellence.
      
      In the end, the hackathon was not about winning or losing—it was about the journey, the lessons learned, and the growth attained along the way. It was about embracing the unknown with open arms, seizing every opportunity, and emerging stronger, wiser, and more inspired than ever before.
      
      Cheers to the hackathon journey—a testament to our resilience, determination, and unwavering spirit in the face of the unknown. Here's to embracing the challenges, conquering the obstacles, and continuing to push the boundaries of what is possible. For in the end, it is not the destination that matters most, but the journey itself.`,
      url: terna,
    },
    {
      id: 2,
      title: "HSC Excellence",
      para: `Achieved 2nd place in HSC exams amidst extracurricular engagement, grateful for St. Xavier's support.`,
      description: `As the curtains drew on my 12th-grade journey, I found myself standing on the podium of academic achievement, securing the 2nd place in my college academically in the HSC Board examinations. It was a moment of immense pride and gratitude, a culmination of hard work, dedication, and the unwavering support of my teachers. Despite being deeply involved in extracurricular activities, I managed to achieve a remarkable 93.33%, a testament to the balance between academics and holistic development.
      My journey through junior college at St. Xavier's College, Mumbai, was nothing short of exhilarating experiences. From the moment I stepped into the campus, I knew I was embarking on a transformative experience. The vibrant atmosphere fueled my passion for both academics and extracurricular pursuits.
      Balancing academics with extracurricular activities wasn't easy. Juggling between textbooks and rehearsals, laboratory experiments, and sports practices demanded meticulous time management and discipline. However, every challenge was a stepping stone, pushing me to strive for excellence in every aspect of my college life.
      The key to my success lay in finding synergy between academics and extracurriculars. While academics formed the cornerstone of my college journey, extracurricular activities added depth and richness to my overall experience. Engaging in debates sharpened my critical thinking skills, while participating in cultural events nurtured my creativity and self-expression. Each activity offered valuable lessons that transcended the confines of the classroom, shaping me into a well-rounded individual. Amidst the whirlwind of activities, I found solace in the unwavering support of my teachers. Their guidance, encouragement, and mentorship were instrumental in my academic journey. Whether it was clarifying doubts after class or providing valuable insights during exam preparations, they went above and beyond to ensure my success. Their belief in my potential instilled confidence in me, motivating me to push my boundaries and strive for excellence. Securing the 2nd place in my college academically was not just a personal triumph but a collective victory. It was a testament to the collaborative efforts of my teachers, peers, and family who stood by me every step of the way. Their unwavering support and encouragement fueled my determination, propelling me towards my goals.
      As I look back on my journey through junior college, I am filled with gratitude for the enriching experiences, lifelong friendships, and invaluable lessons that I have gained. St. Xavier's College will always hold a special place in my heart, for it was here that I discovered my passion, honed my skills, and laid the foundation for a promising future. The journey may have been challenging, but it was also immensely rewarding, reaffirming my belief in the power of perseverance, determination, and the unwavering support of those who believe in you.`,
      url: Xav1,
    },
    {
      id: 3,
      title: "Volantus Triumph",
      para: "Volantus Victory: SYJC Creates History! Leadership, Unity, and Unyielding Determination Shine Bright in College Event.",
      description: `In the annals of St. Xavier's College, Mumbai, one event stands out as a beacon of camaraderie, competition, and celebration of talent - Volantus. As the contingent leader for my class, I embarked on a journey that would redefine our college's history, leaving an indelible mark on all who participated.

      Volantus, a kaleidoscope of events spanning various disciplines, offered a platform for students to showcase their skills, creativity, and passion. From academic quizzes to cultural performances, from sports competitions to debates, the atmosphere buzzed with excitement and anticipation.
      
      Stepping into the role of contingent leader was both exhilarating and daunting. With the weight of responsibility on my shoulders, I navigated through the intricacies of event management, rallying my classmates and ensuring their participation in various contests. It was a test of leadership, organization, and teamwork - qualities that would shape my journey and forge lasting bonds.
      
      But the true highlight of Volantus came when the results were announced - for the first time in its history, a science division, particularly the SYJC batch, clinched the top spot. It was a moment of triumph, a testament to our collective efforts, dedication, and perseverance. The cheers, the applause, and the sense of accomplishment reverberated throughout the campus, marking a milestone that would be etched in our memories forever.
      
      The road to victory was not without its challenges. From early morning rehearsals to late-night strategy sessions, we poured our heart and soul into every event, leaving no stone unturned in our quest for excellence. And as the events unfolded, we stood united, facing every obstacle with resilience and determination.
      
      But beyond the trophies and accolades, Volantus was a journey of self-discovery and personal growth. It taught me the importance of effective communication, time management, and adaptability in the face of adversity. It nurtured my leadership skills, instilling in me the confidence to lead by example and inspire others to strive for greatness.
      
      `,
      url: Vol1,
    },
    {
      id: 4,
      title: "First Hackathon",
      description: `Participating in our first hackathon was a blend of nerves
            and excitement. Unsure if our skills were sufficient, we
            took a leap of faith and registered. Surprisingly, we
            secured the third position, a testament to our teamwork
            and determination. The experience was enriching, filled
            with learning moments and shared laughs. Guided by a
            supportive organizing committee, we navigated challenges
            with newfound confidence.This whirlwind experience wasn't
            just about winning; it was about pushing boundaries,
            discovering our true potential, and savoring the thrill of
            the unknown.`,
      url: terna,
    },
    {
      id: 5,
      title: "First Hackathon",
      description: `Participating in our first hackathon was a blend of nerves
            and excitement. Unsure if our skills were sufficient, we
            took a leap of faith and registered. Surprisingly, we
            secured the third position, a testament to our teamwork
            and determination. The experience was enriching, filled
            with learning moments and shared laughs. Guided by a
            supportive organizing committee, we navigated challenges
            with newfound confidence.This whirlwind experience wasn't
            just about winning; it was about pushing boundaries,
            discovering our true potential, and savoring the thrill of
            the unknown.`,
      url: terna,
    },
  ];
  const openBlogDescription = (blog) => {
    setBlogSelected(true);
    setOpenBlog(blog);
    console.log(openBlog);
  };
  const closeBlogDescription = () => {
    setBlogSelected(false);
    setOpenBlog({});
  };
  console.log(openBlog);
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
        className="w-[98.3%] h-[81.7%] rounded-[1.8rem] text-jblack shadow-2xl blogdiv"
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeInAnim}
          className=" h-[100%] p-5  text-[150%]"
        >
          <motion.div
            variants={fadeInAnim}
            className={`${
              blogSelected ? " w-[99.87%]" : "w-[54.75%] float-right"
            }  justify-between flex  items-center`}
          >
            {blogSelected && (
              <img
                src={back}
                onClick={() => {
                  closeBlogDescription();
                }}
                className="w-7 h-7 cursor-pointer "
              ></img>
            )}
            <h1 className="text-5xl text-jblack text-sb">Blogs</h1>
            <img
              src={close}
              className="w-7 h-7 float-right cursor-pointer"
              onClick={() => {
                expandDiv("Blog");
              }}
            ></img>
          </motion.div>

          {blogSelected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-[95%] h-[75%] bg-white  p-5 mt-[3.5%] ml-[2.5%]  flex items-center justify-center cursor-default "
            >
              {/* <div className="h-[90%] w-[100%] px-3   rounded-[1.9rem] shadow-lg bg-[#e89070]  gap-5 flex  items-center justify-center "> */}

              <img
                src={openBlog.url}
                className="w-[40%] object-cover h-[100%] pr-5"
              ></img>

              <div className="  h-[100%] flex  overflow-auto  scroll-smooth scrollbar-hide">
                <p className="text-lg text-justify m-2">
                  {openBlog.description}
                </p>
              </div>
              {/* </div> */}
            </motion.div>
          )}
          {!blogSelected && (
            <motion.div className="w-[100%] h-[85%]  px-5">
              <motion.div className="w-[100%] justify-center mt-[6%] scroll-smooth overflow-auto gap-[7%] flex scrollbar-hide  items-center h-[100%] flex-wrap">
                {blogs.map((blog, index) => {
                  return (
                    <>
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        className="  shadow-lg bg-white  mb-[3%] hover:bg-neutral-200 w-[25%] h-[94%] mt-4 overflow-hidden text-left cursor-default relative"
                      >
                        <img
                          src={blog.url}
                          className="h-[50%] object-cover w-full"
                        ></img>
                        <h1 className="py-2 px-6 mt-2 text-3xl">
                          {blog.title}
                        </h1>
                        <p className=" text-sm text-[#6e6e6f] px-6 mt-2 textOverflow text-justify">
                          {blog.para}
                        </p>
                        <div
                          className=" flex items-center absolute bottom-2 right-2 text-white bg-[#b69b87] p-1 text-sm cursor-pointer"
                          onClick={() => {
                            openBlogDescription(blog);
                          }}
                        >
                          <button>Read More</button>
                          <img
                            src={rightArrowDouble}
                            className="w-5 h-3 mt-1"
                          ></img>
                        </div>
                      </motion.div>
                    </>
                  );
                })}

                {/* //   <Reveal> */}
                {/* <div */}
                {/* //       key={blog.id}
                //       className="h-[75%] w-[95%] px-3 border-[0.01rem] border-white rounded-[1.9rem] shadow-lg shadow-gray-500 flex gap-5 items-center justify-center w-[100%]"
                //     >
                //       <div className="w-[50%] h-[80%]  ">
                //         <img */}
                {/* //           src={terna}
                //           className="w-full h-full rounded-[1.8rem]"
                //         ></img>
                //       </div>
                //       <div className="w-[66%] h-[70%] text-center p-4  overflow-hidden">
                //         <p className="text-lg text-justify textOverflow">
                //           {blog.para}
                //         </p>
                //       </div>
                //     </div>
                //   </Reveal>
                 */}
                {/* <Reveal>
                <div className="h-[70%] bg-purple-200 flex gap-5 items-center justify-center w-[100%]">
                  <div className="w-[50%] h-[80%] bg-black ">
                    <img
                      src={terna}
                      className="w-full h-full rounded-[1.8rem]"
                    ></img>
                  </div>
                  <div className="w-[60%] h-[70%] text-center p-4 bg-yellow-200">
                    <p className="text-lg">
                      Participating in our first hackathon was a blend of nerves
                      and excitement. Unsure if our skills were sufficient, we
                      took a leap of faith and registered. Surprisingly, we
                      secured the third position, a testament to our teamwork
                      and determination. The experience was enriching, filled
                      with learning moments and shared laughs. Guided by a
                      supportive organizing committee, we navigated challenges
                      with newfound confidence.This whirlwind experience wasn't
                      just about winning; it was about pushing boundaries,
                      discovering our true potential, and savoring the thrill of
                      the unknown.
                    </p>{" "}
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div className="h-[70%] bg-purple-200 flex gap-5 items-center justify-center w-[100%]">
                  <div className="w-[50%] h-[80%] bg-black ">
                    <img
                      src={terna}
                      className="w-full h-full rounded-[1.8rem]"
                    ></img>
                  </div>
                  <div className="w-[60%] h-[70%] text-center p-4 bg-yellow-200">
                    <p className="text-lg">
                      Participating in our first hackathon was a blend of nerves
                      and excitement. Unsure if our skills were sufficient, we
                      took a leap of faith and registered. Surprisingly, we
                      secured the third position, a testament to our teamwork
                      and determination. The experience was enriching, filled
                      with learning moments and shared laughs. Guided by a
                      supportive organizing committee, we navigated challenges
                      with newfound confidence.This whirlwind experience wasn't
                      just about winning; it was about pushing boundaries,
                      discovering our true potential, and savoring the thrill of
                      the unknown.
                    </p>{" "}
                  </div>
                </div>
              </Reveal> */}
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
export default Blog;
