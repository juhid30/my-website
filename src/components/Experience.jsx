import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
// import { useControls } from "leva";

export const Experience = ({ isAboutOpen, isPhone }) => {
  // const animations = useControls({
  //   animations: {
  //     value: "Breathing",
  //     options: ["Breathing", "Dance"],
  //   },
  // });

  return (
    <>
      {/* <OrbitControls /> */}
      <group
        scale={isAboutOpen ? 1.25 : 1}
        position-z={isAboutOpen ? -3.6 : 0}
        position-y={isAboutOpen ? -1.2 : -1.4}
        position-x={isAboutOpen ? 0 : 0}
      >
        <Avatar isAboutOpen={isAboutOpen} />
      </group>
      <ambientLight intensity={2} />
    </>
  );
};
