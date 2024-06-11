import { motion } from "framer-motion";
import { Howl } from "howler";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";

const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start justify-center
  ${mobileTop ? "justify-start md:justify-center " : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen md:left-32">
      <div className="mt-40 md:mt-0">
        <AboutSection setSection={setSection} />
      </div>

      <SkillsSection />

      <ProjectsSection />
    </div>
  );
};

const Website = () => {
  return (
    <div className="space-x-4 mt-10 flex ml-4 ">
      <a
        href="https://github.com/bhandarimanoj612"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-red-500"
      >
        <FaGithub size={18} />
      </a>
      <a
        href="https://www.linkedin.com/in/manoj-bhandari-532864276/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-red-500"
      >
        <FaLinkedin size={18} />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100012957270586"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-red-500"
      >
        <FaFacebook size={18} />
      </a>

      <a
        href="mailto:bhandarimanoj612@gmail.com" // Add your Gmail address here
        className="text-white hover:text-red-500"
      >
        <FaEnvelope size={18} />
      </a>
      <a
        href="tel:+9779819093071" // Add your phone number here
        className="text-white hover:text-red-500"
      >
        <FaPhone size={18} />
      </a>
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  const motivationalQuotes = [
    "I am motivated software developer with passion.",
    "I love creating beautiful user experiences.",
    "I am a full stack developer",
    "I am a Frontend developer",
  ];

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    return motivationalQuotes[randomIndex];
  };

  // Function to handle CV download
  const handleDownloadCV = () => {
    window.open(
      `https://drive.google.com/file/d/1VzovtgFOG89xgrv4dOZkyh-L9pcNCJ63/view`,
      "_blank"
    );
    setSection(3);
  };

  // for adding music
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const musicRef = useRef(null);

  useEffect(() => {
    // Use the direct link from Dropbox and force HTML5 Audio
    const musicSrc =
      "https://www.dropbox.com/scl/fi/h3q2s8c9sa7oyydmgln2f/OneLove.mp3?rlkey=2ompy5g37lw3lr7g1snj3kqmu&e=1&st=b0q3dm1c&dl=1";
    musicRef.current = new Howl({
      src: [musicSrc],
      html5: true, // Force HTML5 Audio
      loop: true,
      volume: 0.9,
    });

    // Log when audio is loaded or if there's an error
    musicRef.current.once("load", () => {
      console.log("Music loaded successfully.");
    });

    musicRef.current.on("loaderror", (id, err) => {
      console.error("Failed to load music:", err);
    });
  }, []);

  const toggleMusic = () => {
    const music = musicRef.current;
    if (music) {
      if (isMusicPlaying) {
        music.pause();
      } else {
        music.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <Section mobileTop>
      <h1 className="text-2xl font-serif leading-snug text-white mt-72 md:mt-32">
        Hello, I'm
        <br />
        <span className="bg-red-600 px-1 italic font-bold rounded-md">
          Manoj Bhandari
        </span>
      </h1>
      <motion.p
        className="text-sm text-white mt-4"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        "{getRandomQuestion()}"
        <br />
      </motion.p>
      <motion.button
        className={`bg-red-600 text-white py-1 px-2 md:py-4 md:px-8 rounded-lg font-bold text-sm md:text-lg mt-10 md:mt-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 hover:bg-red-700 transition-colors`}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        onClick={handleDownloadCV} // Call function on button click
      >
        Download My CV
      </motion.button>

      {/* Button to toggle music */}
      <motion.button
        className={`ml-3 bg-red-600 text-white py-2 px-3 rounded-lg font-bold text-xs mt-8 md:mt-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 hover:bg-red-700 transition-colors`}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        onClick={toggleMusic}
      >
        {isMusicPlaying ? (
          <>
            <FontAwesomeIcon icon={faPause} className="mr-2" /> Pause Music
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faPlay} className="mr-2" /> Play Music
          </>
        )}
      </motion.button>

      <Website />
    </Section>
  );
};

const skills = [
  { title: "React/React Native/Tailwind CSS", level: 90 },
  { title: "Asp Dotnet Core", level: 90 },
  { title: "Microsoft sql server", level: 80 },
  { title: "Figma", level: 90 },
  { title: "Git", level: 90 },
  { title: "Threejs / React Three Fiber", level: 40 },
  { title: "JavaScript", level: 90 },
  { title: "CSharp", level: 90 },
  { title: "TypeScript", level: 30 },
];

const languages = [
  { title: "Nepali", level: 100 },
  { title: "English", level: 90 },
];

const colors = [
  "rgba(255, 99, 71, 0.5)", // tomato with transparency
  "rgba(255, 69, 0, 0.5)", // orange red with transparency
  "rgba(255, 215, 0, 0.5)", // gold with transparency
  "rgba(173, 255, 47, 0.5)", // green yellow with transparency
  "rgba(0, 255, 127, 0.5)", // spring green with transparency
  "rgba(0, 206, 209, 0.5)", // dark turquoise with transparency
  "rgba(30, 144, 255, 0.5)", // dodger blue with transparency
  "rgba(255, 20, 147, 0.5)", // deep pink with transparency
  "rgba(138, 43, 226, 0.5)", // blue violet with transparency
  "rgba(255, 105, 180, 0.5)", // hot pink with transparency
];

const getColor = (index) => colors[index % colors.length];

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const chartWidth = 300;
  const barHeight = 10;
  const gap = 0;
  const maxLevel = 100;

  const mapDataToBars = (data) => {
    return data.map((item, index) => {
      const y = index * (barHeight + gap) + barHeight / 2;
      const width = (item.level / maxLevel) * chartWidth;
      return {
        y,
        width,
        title: item.title,
        level: item.level,
        color: getColor(index),
      };
    });
  };

  return (
    <section className="relative w-full h-full flex flex-col items-start ml-10 ">
      <motion.div
        className="w-full max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-xl font-bold text-white mb-5 mg:mt-16">Skills</h2>
        {skills.map((skill, index) => (
          <div key={index} className="mb-6">
            <h1 className="text-xs font-bold text-white mb-1">{skill.title}</h1>
            <svg width="50%" height={barHeight + gap}>
              <g>
                <motion.line
                  x1={0}
                  y1={barHeight / 2}
                  x2={(skill.level / maxLevel) * chartWidth}
                  y2={barHeight / 2}
                  stroke={
                    hoveredSkill === skill.title ? "#FFD700" : getColor(index)
                  }
                  strokeWidth={barHeight}
                  initial={{ x2: 0 }}
                  animate={{ x2: (skill.level / maxLevel) * chartWidth }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  // onMouseEnter={() => setHoveredSkill(skill.title)}
                  onMouseLeave={() => setHoveredSkill(null)}
                />
                <motion.circle
                  cx={(skill.level / maxLevel) * chartWidth}
                  cy={barHeight / 2}
                  r={4}
                  fill={
                    hoveredSkill === skill.title ? "#FFD700" : getColor(index)
                  }
                  initial={{ cx: 0 }}
                  animate={{ cx: (skill.level / maxLevel) * chartWidth }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                />
              </g>
            </svg>
          </div>
        ))}
        <h2 className="text-xl font-bold text-white  mb-2">Languages</h2>
        {languages.map((language, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xs font-semibold text-white mb-1">
              {language.title}
            </h3>
            <svg width="80%" height={barHeight + gap}>
              <g>
                <motion.line
                  x1={0}
                  y1={barHeight / 2}
                  x2={(language.level / maxLevel) * chartWidth}
                  y2={barHeight / 2}
                  stroke={
                    hoveredSkill === language.title
                      ? "#FFD700"
                      : getColor(index)
                  }
                  strokeWidth={barHeight}
                  initial={{ x2: 0 }}
                  animate={{ x2: (language.level / maxLevel) * chartWidth }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  // onMouseEnter={() => setHoveredSkill(language.title)}
                  onMouseLeave={() => setHoveredSkill(null)}
                />
                <motion.circle
                  cx={(language.level / maxLevel) * chartWidth}
                  cy={barHeight / 2}
                  r={4}
                  fill={
                    hoveredSkill === language.title
                      ? "#FFD700"
                      : getColor(index)
                  }
                  initial={{ cx: 0 }}
                  animate={{ cx: (language.level / maxLevel) * chartWidth }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                />
              </g>
            </svg>
          </div>
        ))}
      </motion.div>
      {hoveredSkill && (
        <div className="absolute top-4 left-4 text-white text-xl">
          {hoveredSkill}
        </div>
      )}
    </section>
  );
};

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-8 items-center justify-center mt-80">
        <button
          className="hover:text-red-600 transition-colors text-white mt-96 "
          onClick={previousProject}
        >
          Previous
        </button>
        <h2 className="text-5xl font-bold text-red-500 mt-96">Projects</h2>
        <button
          className="hover:text-red-600 transition-colors text-white mt-96"
          onClick={nextProject}
        >
          Next
        </button>
      </div>
    </Section>
  );
};
