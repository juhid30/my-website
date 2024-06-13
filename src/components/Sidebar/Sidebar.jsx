import "../../App.css";
import closeArrow from "../../assets/cross_new.png";
import { navLabels, socialLinks } from "../Data/Data";
import profilePhoto from "../../assets/Avatar.png";
import { useState } from "react";
const Sidebar = ({
  isSideBarOpen,
  setIsSideBarOpen,
  isAboutOpen,
  isBlogOpen,
  isContactOpen,
  isProjectOpen,
  expandDiv,
}) => {
  // const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  return (
    <>
      <div
        id="sidebar-wrapper"
        className={` bg-red-900 z-[120] fixed top-0 right-0 h-[100vh] w-[27%]  p-5 ${
          isSideBarOpen ? "open" : ""
        }`}
      >
        <div className="content flex flex-col items-center h-[100%] bg-blue-400">
          <div className=" w-[100%] h-[5rem] ">
            <img
              src={closeArrow}
              className="float-right cursor-pointer "
              onClick={closeSideBar}
            />
          </div>
          <div className="flex flex-col items-center bg-purple-900 w-[100%]">
            <div className="w-[12rem] h-[12rem] bg-yellow-200 rounded-full overflow-hidden">
              <img
                src={profilePhoto}
                className="max-w-[100%] h-auto object-contain rounded"
              ></img>
            </div>
            <div className="mt-10 h-[30%] w-full gap-5 flex flex-col items-center bg-pink-200">
              {navLabels.map((item) => {
                return (
                  <>
                    <div
                      key={item.id}
                      onClick={() => {
                        setIsSideBarOpen(false);
                        expandDiv(item.name);
                      }}
                      className="bg-orange-200 w-[80%] text-2xl h-10"
                    >
                      {item.name}
                    </div>
                  </>
                );
              })}
            </div>
            <div className="flex gap-5 items-center justify-center absolute bottom-10 bg-purple-200 ">
              {socialLinks.map((item) => {
                return (
                  <>
                    <div key={item.id} className="w-[10%] h-[10%]">
                      <img src={item.icon} />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
