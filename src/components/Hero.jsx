import ToggleContext from "../context/ToggleContext";
import { useContext } from "react";
import resume from "../assets/Resume.pdf";

const Hero = () => {
  const { darkMode } = useContext(ToggleContext);

  return (
    <div className="max-w-xl container flex flex-col text-center justify-center items-center md:items-start px-5 md:px-10 pt-36 pb-10 md:pb-20 gap-3 drop-shadow-[50px_20px_100px_#007F73]">
      <h1 className="text-3xl md:text-5xl font-bold ">
        Hi, I&apos;m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
          Paulo.
        </span>
      </h1>
      <h2
        className={`${
          darkMode ? `text-gray-300` : `text-gray-700`
        } text-xl md:text-3xl tracking-tight font-semibold`}
      >
        Full-Stack Web Developer
      </h2>
      <h3
        className={`${
          darkMode ? `text-gray-300` : `text-gray-700`
        } text-sm md:text-xl font-medium`}
      >{`{ MongoDB, Express.js, React, Node.js }`}</h3>
      <div className="pt-5 flex flex-col md:flex-row max-w-xs w-full md:w-auto gap-3 md:gap-5 font-semibold">
        <a
          href="#contact"
          className={`cursor-pointer rounded-full text-sm md:text-base px-5 py-2 hover:scale-105 transition ease-in-out duration-300 ${
            darkMode ? `bg-transparent border` : `bg-black text-white`
          }`}
        >
          Get in touch
        </a>
        <a
          href={resume}
          target="_blank"
          className={`cursor-pointer rounded-full text-sm md:text-base px-5 py-2 hover:scale-105 transition ease-in-out duration-300 ${
            darkMode ? `bg-transparent border` : `bg-black text-white`
          }`}
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Hero;
