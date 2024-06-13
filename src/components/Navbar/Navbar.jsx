import { navLabels } from "../Data/Data";
import hamburger from "../../assets/hamburg.png";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
const Navbar = ({
  isAboutOpen,
  isBlogOpen,
  isContactOpen,
  isProjectOpen,
  expandDiv,
}) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const openSideBar = () => {
    setIsSideBarOpen(true);
    console.log(isSideBarOpen);
  };
  return (
    <>
      <div className="sticky z-[100] top-0 left-0 w-full h-[8vh] flex items-center text-lg bg-purple-200 ">
        <div id="ham" className=" float-right absolute right-3">
          <img src={hamburger} onClick={openSideBar} className="w-8 h-8" />
        </div>

        <div
          id="navbar"
          className="content w-[100%] h-[100%]  px-2 flex items-center justify-between"
        >
          <div className="w-[10%] text-3xl text-center">Juhi</div>
          <div className="flex items-center justify-center gap-5">
            {navLabels.map((item) => {
              return (
                <>
                  <div
                    onClick={() => {
                      expandDiv(item.name);
                    }}
                    className="border-4 px-4 py-1 rounded-[1.3rem] text-center "
                  >
                    {item.name}
                  </div>
                </>
              );
            })}
          </div>
          <div
            className="bg-white px-3 py-1 rounded-[1.3rem]"
            onClick={() => expandDiv("Contact")}
          >
            Contact Me
          </div>
        </div>
      </div>
      <Sidebar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
        isAboutOpen={isAboutOpen}
        isBlogOpen={isBlogOpen}
        isContactOpen={isContactOpen}
        isProjectOpen={isProjectOpen}
        expandDiv={expandDiv}
      />
    </>
  );
};
export default Navbar;
