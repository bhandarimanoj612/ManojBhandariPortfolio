import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: "SahajYatri",
    url: "https://github.com/bhandarimanoj612/FrontendSahajYatriUserReactNative?tab=readme-ov-file",
    image: "projects/sahajyatri.png",
    description:
      "A comprehensive travel app built using React Native, React, Tailwindcss and ASP.NET.",
  },
  {
    title: "YataiEats",
    url: "https://github.com/bhandarimanoj612/YetaiEats-Frontend-React-Native-customer",
    image: "projects/yetai.png",
    description:
      "A comprehensive food ordering app built using React Native, React, Tailwindcss and ASP.NET",
  },
  {
    title: "Baslerium",
    url: "https://github.com/bhandarimanoj612/BisleriumWebsiteReactJS-",
    image: "projects/Baslerium.png",
    description:
      "User can manage blog and reaction similar to reddit.Technology Used:React ,Asp .NET",
  },
  {
    title: "Rc Car",
    url: "https://www.linkedin.com/posts/manoj-bhandari-532864276_iot-grass-cutting-car-project-activity-7070087289623699457-1wF3/",
    image: "projects/rc.png",
    description:
      "Grass cutting car.Technology Use: ARDUINO IDE, IOT Equipment and C.",
  },
  {
    title: "Clock",
    url: "https://github.com/bhandarimanoj612/Clock-Project",
    image: "projects/clock.png",
    description: "It is a clock that is made using CSS, HTML, and JavaScript.",
  },
  {
    title: "RockSiccor",
    url: "https://github.com/bhandarimanoj612/Rock-Paper-Siccor",
    image: "projects/game.png",
    description:
      "It is a rock, paper, scissors game that is made using CSS, HTML, and JavaScript.",
  },
  {
    title: "Calculator",
    url: "https://github.com/bhandarimanoj612/Calculator",
    image: "projects/calculator.png",
    description:
      "It is a calculator that is made using CSS, HTML, and JavaScript.",
  },
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[2.2, 2]} />
        <meshBasicMaterial
          color={
            highlighted
              ? "red" // Red color for highlighted projects
              : "rgba(255, 100, 100, 0.4)" // Slightly transparent red color for non-highlighted projects
          }
          transparent
        />
      </mesh>
      <Image
        scale={[2, 1.2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
      />
      <mesh position={[-1, -0.4, 0.1]}>
        <Text
          maxWidth={1}
          fontSize={0.2} // Increased font size for better readability
          letterSpacing={-0.1} // Adjusted letter spacing for better spacing
          anchorX="left"
          anchorY="top"
          color={highlighted ? "white" : "rgba(255, 255, 255, 0.9)"} // Adjusted color to match futuristic theme
        >
          {project.title.toUpperCase()}
        </Text>
      </mesh>
      <mesh position={[-1, -0.6, 0.1]}>
        <Text
          maxWidth={1.8}
          fontSize={0.1} // Adjusted font size for mobile
          letterSpacing={-0.02} // Adjusted letter spacing for better spacing
          anchorX="left"
          anchorY="top"
          color={highlighted ? "white" : "rgba(255, 255, 255, 0.9)"} // Adjusted color to match futuristic theme
        >
          {project.description}
        </Text>
      </mesh>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [setCurrentProject]);

  return (
    <group position-y={-viewport.height * 2 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 1 + (index - currentProject) * 2,
            y: currentProject === index ? 1.4 : -0.1,
            z: currentProject === index ? 2 : -1,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};
