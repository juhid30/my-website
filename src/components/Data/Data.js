import email from "../../assets/envelope.png";
import linkedIn from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import insta from "../../assets/instagram.png";

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
// const skillList = [
//   {
//     id: 1,
//     icon: html,
//   },
//   {
//     id: 2,
//     icon: css,
//   },
//   {
//     id: 3,
//     icon: js,
//   },
//   {
//     id: 4,
//     icon: tailwind,
//   },
//   {
//     id: 5,
//     icon: react,
//   },
//   {
//     id: 6,
//     icon: cprog,
//   },
//   {
//     id: 7,
//     icon: java,
//   },
// ];
export {
  navLabels,
  socialLinks,
  listArray,
  listAnimation,
  fadeInAnim,
  // skillList,
};
