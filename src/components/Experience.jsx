import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Office } from "./Office";
import { Projects } from "./Projects";

export const Experience = (props) => {
  const {
    section,
    menuOpened,
    tourOpened,
    photosOpened,
    mOpened,
    skillsOpened,
    projectsOpened,
    animation,
    headFollow,
    wireframe,
  } = props;
  const { viewport } = useThree();

  // Determine if the device is mobile
  const isMobile = window.innerWidth < 560;

  // Define initial camera positions and lookAt values
  const initialCameraPositionX = isMobile ? -2 : -8.6;
  const initialCameraLookAtX = isMobile ? 3 : 6;
  const initialCameraPositionY = isMobile ? 4 : 9;
  const initialCameraLookAtY = isMobile ? -11 : -8;
  const initialCameraPositionZ = isMobile ? 40 : 40;
  const initialCameraLookAtZ = isMobile ? -40 : -60;

  const cameraPositionX = useMotionValue(initialCameraPositionX);
  const cameraLookAtX = useMotionValue(initialCameraLookAtX);
  const cameraPositionY = useMotionValue(initialCameraPositionY);
  const cameraLookAtY = useMotionValue(initialCameraLookAtY);
  const cameraPositionZ = useMotionValue(initialCameraPositionZ);
  const cameraLookAtZ = useMotionValue(initialCameraLookAtZ);

  const animateCamera = (
    positionX,
    lookAtX,
    positionY,
    lookAtY,
    positionZ,
    lookAtZ
  ) => {
    animate(cameraPositionX, positionX, framerMotionConfig);
    animate(cameraLookAtX, lookAtX, framerMotionConfig);
    animate(cameraPositionY, positionY, framerMotionConfig);
    animate(cameraLookAtY, lookAtY, framerMotionConfig);
    animate(cameraPositionZ, positionZ, framerMotionConfig);
    animate(cameraLookAtZ, lookAtZ, framerMotionConfig);
  };

  useEffect(() => {
    if (menuOpened) {
      animateCamera(-5.6, 89, 4, -32, 11, -80);
    } else {
      animateCamera(1, 1, 2.3, -3.8, 9, -58);
    }
  }, [menuOpened]);

  useEffect(() => {
    if (tourOpened) {
      animateCamera(-4.3, 89, 3.4, -32, 10, -80);
    } else {
      animateCamera(1, 1, 2.3, -3.8, 9, -58);
    }
  }, [tourOpened]);

  useEffect(() => {
    if (photosOpened) {
      animateCamera(1, 2, 2.6, -2.8, 7, -38);
    }
  }, [photosOpened]);

  useEffect(() => {
    if (mOpened) {
      animateCamera(-1, 2, 2.6, -2.8, 7, -38);
    }
  }, [mOpened]);

  useEffect(() => {
    if (skillsOpened) {
      animateCamera(-1.9, 350, 2, 6, 4.7, 8);
    }
  }, [skillsOpened]);

  useEffect(() => {
    if (projectsOpened) {
      animateCamera(-1, 470, 2.3, 6, 5.5, 19);
    }
  }, [projectsOpened]);

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.position.y = cameraPositionY.get();
    state.camera.position.z = cameraPositionZ.get();
    state.camera.lookAt(
      cameraLookAtX.get(),
      cameraLookAtY.get(),
      cameraLookAtZ.get()
    );
  });

  return (
    <>
      <ambientLight intensity={1.5} />

      <motion.group
        position={[1.5, 3, 2.9]} // for changing position of house
        scale={isMobile ? [0.8, 0.6, 0.7] : [1.05, 0.81, 0.9]} // for zooming
        rotation-y={-Math.PI / 2}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
        transition={{ duration: 0.6 }}
      >
        <Office section={section} />
      </motion.group>

      {/* SKILLS */}
      <motion.group
        position={[0, -1.5, isMobile ? -5 : -10]}
        animate={{
          z: section === 1 ? 0 : isMobile ? -5 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, -5]} intensity={0.4} />
        <Float>
          <mesh position={[1, -3, -1]} scale={[1, 1, 1]}>
            <capsuleGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.5}
              speed={9}
              color={"blue"}
              wireframe={wireframe} // Apply wireframe state
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1, 1, 2]} position={[1, 1, -1]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.5}
              transparent
              distort={1}
              speed={4}
              color="green"
              wireframe={wireframe} // Apply wireframe state
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1, 1, 1]} position={[-1, -1, -2]}>
            <capsuleGeometry />
            <MeshWobbleMaterial
              opacity={0.5}
              transparent
              factor={1}
              speed={5}
              color={"red"}
              wireframe={wireframe} // Apply wireframe state
            />
          </mesh>
        </Float>
        <group scale={isMobile ? [1.5, 1.5, 1.5] : [3, 3, 3]} position-y={-1.5}>
          <Avatar
            animation={animation} // Use animation state
            headFollow={headFollow} // Apply headFollow state
            onClick={() => console.log("Avatar clicked")}
            wireframe={wireframe}
            // setWireframe={setWireframe}
          />
        </group>
      </motion.group>
      <Projects />
    </>
  );
};
