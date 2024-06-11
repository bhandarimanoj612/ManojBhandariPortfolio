import { useState, useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Leva } from "leva";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { Menu } from "./components/Menu";
import { ScrollManager } from "./components/ScrollManager";
import { Cursor } from "./components/Cursor";
import { HouseTour } from "./components/HouseTour";
import { framerMotionConfig } from "./config";
import { LoadingScreen } from "./components/LoadingScreen";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [tourOpened, setTourOpened] = useState(false);
  const [photosOpened, setPhotosOpened] = useState(false);
  const [mOpened, setMOpened] = useState(false);
  const [skillsOpened, setSkillsOpened] = useState(false);
  const [projectsOpened, setProjectsOpened] = useState(false);
  const [animation, setAnimation] = useState("Pool");
  const [headFollow, setHeadFollow] = useState(false);
  const [wireframe, setWireframe] = useState(true);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  useEffect(() => {
    setTourOpened(false);
    setPhotosOpened(false);
    setMOpened(false);
    setSkillsOpened(false);
    setProjectsOpened(false);
  }, [section]);

  const [showLevaControls, setShowLevaControls] = useState(false);

  const toggleLevaVisibility = () => {
    setShowLevaControls(!showLevaControls);
  };

  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />
      <MotionConfig transition={{ ...framerMotionConfig }}>
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <color attach="background" args={["#560373"]} />
          <ScrollControls pages={3} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Experience
                section={section}
                menuOpened={menuOpened}
                tourOpened={tourOpened}
                photosOpened={photosOpened}
                mOpened={mOpened}
                skillsOpened={skillsOpened}
                projectsOpened={projectsOpened}
                animation={animation}
                headFollow={headFollow}
                setHeadFollow={setHeadFollow}
                wireframe={wireframe}
                setWireframe={setWireframe}
              />
            </Scroll>
            <Scroll html>
              {!tourOpened && (
                <Interface tourOpened={tourOpened} setSection={setSection} />
              )}
            </Scroll>
          </ScrollControls>
        </Canvas>

        {!tourOpened && (
          <Menu
            onSectionChange={setSection}
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened}
            section={section}
            animation={animation}
            setAnimation={setAnimation}
            headFollow={headFollow}
            setHeadFollow={setHeadFollow}
            wireframe={wireframe}
            setWireframe={setWireframe}
          />
        )}

        {!menuOpened && section === 0 && (
          <HouseTour
            onSectionChange={setSection}
            tourOpened={tourOpened}
            setTourOpened={setTourOpened}
          />
        )}

        {tourOpened && (
          <>
            <div className="fixed bottom-10 w-full flex justify-center space-x-4 md:space-x-8">
              <button
                onClick={() => setMOpened(!mOpened)}
                className="m p-3 rounded-md text-white bg-red-500 hover:bg-red-700 hover:font-bold focus:bg-red-800 focus:font-bold"
              >
                M
              </button>
              <button
                onClick={() => setPhotosOpened(!photosOpened)}
                className="m p-3 rounded-md text-white bg-red-500 hover:bg-red-700 hover:font-bold focus:bg-red-800 focus:font-bold"
              >
                Photos
              </button>
              <button
                onClick={() => setSkillsOpened(!skillsOpened)}
                className="m p-3 rounded-md text-white bg-red-500 hover:bg-red-700 hover:font-bold focus:bg-red-800 focus:font-bold"
              >
                Skills
              </button>
              <button
                onClick={() => setProjectsOpened(!projectsOpened)}
                className="m p-3 rounded-md text-white bg-red-500 hover:bg-red-700 hover:font-bold focus:bg-red-800 focus:font-bold"
              >
                My Projects
              </button>
            </div>
          </>
        )}

        {showLevaControls && <Leva hidden />}
        <Cursor />
      </MotionConfig>
      <Leva hidden />
    </>
  );
}

export default App;
