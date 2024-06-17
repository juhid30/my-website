import email from "../../assets/envelope.png";
import linkedIn from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import insta from "../../assets/instagram.png";
import html from "../../assets/html-5.png";
import css from "../../assets/css-3.png";
import js from "../../assets/js.png";
import java from "../../assets/java.png";
import react from "../../assets/physics.png";
import cprog from "../../assets/cropped-removebg-preview.png";
import tailwind from "../../assets/cropped__1_-removebg-preview.png";
import ForgeFinance from "../../assets/ForgeFinance.png";
import TarakkiDashboard from "../../assets/Tarakki Dashboard.jpeg";
import PersonalSS from "../../assets/Personal_SS-transformed.png";
import Vidyarthi from "../../assets/Vidyarthi.jpeg";
import Safar from "../../assets/Tourist.png";
import vidyarthilogo from "../../assets/Vidyarthi-logo-final.png";
import pp from "../../assets/Avatar.png";
import safarLogo from "../../assets/Safar Logo.png";
import tklogo from "../../assets/tarakki logo.png";
import forge from "../../assets/Forge.png";
import terna from "../../assets/terna1.jpeg";
import Xav1 from "../../assets/Xavier's1.jpeg";
import Vol1 from "../../assets/Volantus1.jpeg";
import { color } from "framer-motion";
const navLabels = [
  {
    id: "1",
    name: "About",
  },
  {
    id: "2",
    name: "Projects",
  },
  {
    id: "3",
    name: "Blogs",
  },
];

const socialLinks = [
  {
    id: 1,
    title: "Email",
    icon: email,
    link: "mailto:55.juhideore@gmail.com",
    ref: "55.juhideore@gmail.com",
  },
  {
    id: 2,
    title: "Linkedin",
    icon: linkedIn,
    link: "https://www.linkedin.com/in/juhideore/",
    ref: "Juhi Deore",
  },
  {
    id: 3,
    title: "GitHub",
    icon: github,
    link: "https://github.com/juhid30",
    ref: "juhid30",
  },
  {
    id: 4,
    title: "Instagram",
    icon: insta,
    link: "https://www.instagram.com/juhi._11/",
    ref: "juhi._11",
  },
];

const listArray = [
  {
    id: "1",
    title: "Frontend",
    color: "#f24405",
  },
  {
    id: "2",
    title: "Backend",
    color: "#360159",
  },
  {
    id: "3",
    title: "UI/UX",
    color: "#28358a",
  },
  {
    id: "4",
    title: "Web Design",
    color: "#f29f05",
  },
  {
    id: "5",
    title: "AI/ML",
    color: "#ee06f2",
  },
];

const listItemColourDark = [
  {
    id: "1",
    color: "#84c3b1",
    // color: "#84c3b1",
  },
  {
    id: "2",
    color: "#ADD26A",
    // color: "#ADD26A",
  },
  {
    id: "3",
    color: "#fae4b1",
    // color: "#fae4b1",
  },
  {
    id: "4",
    color: "#db7691",
    // color: "#db7691",
  },
  {
    id: "5",
    color: "#BBBBF9",
    // color: "#ce8c80",
  },
];
const listAnimation = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.4,
    },
  },
};
const fadeInAnim = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.4,
      staggerChildren: 0.3,
    },
  },
};
const skillList = [
  {
    id: 1,
    icon: html,
  },
  {
    id: 2,
    icon: css,
  },
  {
    id: 3,
    icon: js,
  },
  {
    id: 4,
    icon: tailwind,
  },
  {
    id: 5,
    icon: react,
  },
  {
    id: 6,
    icon: cprog,
  },
  {
    id: 7,
    icon: java,
  },
];
const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 75,
      damping: 10,
      duration: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
      delay: 0.1,
    },
  },
};
const cards = [
  {
    id: 1,
    url: ForgeFinance,
    title: "Forge Finance",
    brief: "Finance Gamification Website",
    para: `A gamified financial education website designed to make learning about finance interactive and engaging through games, quizzes, and interactive activities.`,
    logo: forge,
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    url: Safar,
    title: "Safar",
    brief: "Tourist Guide Website",
    para: `An interactive tourist guide website offering diverse destinations matched to users' interests and preferences, with filtered attractions based on activities and regions, and access to renowned landmarks and curated itinerary packages for effortless trip planning.`,
    logo: safarLogo,
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    url: TarakkiDashboard,
    title: "Tarakki",
    brief: "Campus Placement Scheduler",
    para: `A user-friendly campus placement web app with a scheduler, company information portal, preparation material aggregator, and community section for instant assistance.`,
    logo: tklogo,
    tools: [
      "HTML",
      "Tailwind CSS",
      "MongoDB",
      "Express",
      "React",

      "Nodejs",
      "Python",
    ],
  },
  {
    id: 4,
    url: PersonalSS,
    title: "Juhi Deore",
    brief: "Personal Portfolio",
    para: `My portfolio showcases projects where I've applied skills and absorbed new insights, reflecting my journey of growth and development through continuous improvement and innovation.`,
    logo: pp,
    tools: ["HTML", "CSS", "React", "Three.js", "Tailwind CSS"],
  },
  {
    id: 5,
    url: Vidyarthi,
    title: "Vidyarthi",
    brief: "Simplifying Student Life",
    para: `'Vidyarthi' is a student-centric website that simplifies common tasks, streamlining administrative hassles to empower students and foster a supportive academic environment.`,
    logo: vidyarthilogo,
    tools: [
      "HTML",
      "Tailwind CSS",
      "MongoDB",
      "Express",
      "React",
      "Three.js",
      "Nodejs",
    ],
  },
];

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
    title: "Lorem ipsum",
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
    title: "Lorem ipsum",
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
    id: 6,
    title: "Lorem ipsum",
    para: `Achieved 2nd place in HSC exams amidst extracurricular engagement, grateful for St. Xavier's support.`,
    description: `As the curtains drew on my 12th-grade journey, I found myself standing on the podium of academic achievement, securing the 2nd place in my college academically in the HSC Board examinations. It was a moment of immense pride and gratitude, a culmination of hard work, dedication, and the unwavering support of my teachers. Despite being deeply involved in extracurricular activities, I managed to achieve a remarkable 93.33%, a testament to the balance between academics and holistic development.
    My journey through junior college at St. Xavier's College, Mumbai, was nothing short of exhilarating experiences. From the moment I stepped into the campus, I knew I was embarking on a transformative experience. The vibrant atmosphere fueled my passion for both academics and extracurricular pursuits.
    Balancing academics with extracurricular activities wasn't easy. Juggling between textbooks and rehearsals, laboratory experiments, and sports practices demanded meticulous time management and discipline. However, every challenge was a stepping stone, pushing me to strive for excellence in every aspect of my college life.
    The key to my success lay in finding synergy between academics and extracurriculars. While academics formed the cornerstone of my college journey, extracurricular activities added depth and richness to my overall experience. Engaging in debates sharpened my critical thinking skills, while participating in cultural events nurtured my creativity and self-expression. Each activity offered valuable lessons that transcended the confines of the classroom, shaping me into a well-rounded individual. Amidst the whirlwind of activities, I found solace in the unwavering support of my teachers. Their guidance, encouragement, and mentorship were instrumental in my academic journey. Whether it was clarifying doubts after class or providing valuable insights during exam preparations, they went above and beyond to ensure my success. Their belief in my potential instilled confidence in me, motivating me to push my boundaries and strive for excellence. Securing the 2nd place in my college academically was not just a personal triumph but a collective victory. It was a testament to the collaborative efforts of my teachers, peers, and family who stood by me every step of the way. Their unwavering support and encouragement fueled my determination, propelling me towards my goals.
    As I look back on my journey through junior college, I am filled with gratitude for the enriching experiences, lifelong friendships, and invaluable lessons that I have gained. St. Xavier's College will always hold a special place in my heart, for it was here that I discovered my passion, honed my skills, and laid the foundation for a promising future. The journey may have been challenging, but it was also immensely rewarding, reaffirming my belief in the power of perseverance, determination, and the unwavering support of those who believe in you.`,
    url: Xav1,
  },
  {
    id: 7,
    title: "Lorem ipsum",
    para: `Achieved 2nd place in HSC exams amidst extracurricular engagement, grateful for St. Xavier's support.`,
    description: `As the curtains drew on my 12th-grade journey, I found myself standing on the podium of academic achievement, securing the 2nd place in my college academically in the HSC Board examinations. It was a moment of immense pride and gratitude, a culmination of hard work, dedication, and the unwavering support of my teachers. Despite being deeply involved in extracurricular activities, I managed to achieve a remarkable 93.33%, a testament to the balance between academics and holistic development.
      My journey through junior college at St. Xavier's College, Mumbai, was nothing short of exhilarating experiences. From the moment I stepped into the campus, I knew I was embarking on a transformative experience. The vibrant atmosphere fueled my passion for both academics and extracurricular pursuits.
      Balancing academics with extracurricular activities wasn't easy. Juggling between textbooks and rehearsals, laboratory experiments, and sports practices demanded meticulous time management and discipline. However, every challenge was a stepping stone, pushing me to strive for excellence in every aspect of my college life.
      The key to my success lay in finding synergy between academics and extracurriculars. While academics formed the cornerstone of my college journey, extracurricular activities added depth and richness to my overall experience. Engaging in debates sharpened my critical thinking skills, while participating in cultural events nurtured my creativity and self-expression. Each activity offered valuable lessons that transcended the confines of the classroom, shaping me into a well-rounded individual. Amidst the whirlwind of activities, I found solace in the unwavering support of my teachers. Their guidance, encouragement, and mentorship were instrumental in my academic journey. Whether it was clarifying doubts after class or providing valuable insights during exam preparations, they went above and beyond to ensure my success. Their belief in my potential instilled confidence in me, motivating me to push my boundaries and strive for excellence. Securing the 2nd place in my college academically was not just a personal triumph but a collective victory. It was a testament to the collaborative efforts of my teachers, peers, and family who stood by me every step of the way. Their unwavering support and encouragement fueled my determination, propelling me towards my goals.
      As I look back on my journey through junior college, I am filled with gratitude for the enriching experiences, lifelong friendships, and invaluable lessons that I have gained. St. Xavier's College will always hold a special place in my heart, for it was here that I discovered my passion, honed my skills, and laid the foundation for a promising future. The journey may have been challenging, but it was also immensely rewarding, reaffirming my belief in the power of perseverance, determination, and the unwavering support of those who believe in you.`,
    url: Xav1,
  },
];

export {
  navLabels,
  socialLinks,
  listArray,
  listItemColourDark,
  listAnimation,
  fadeInAnim,
  parentVariants,
  childVariants,
  skillList,
  cards,
  blogs,
};
