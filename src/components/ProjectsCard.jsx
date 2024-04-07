import { MdOutlineCode, MdPageview } from "react-icons/md";
import ToggleContext from "../context/ToggleContext";
import { useContext } from "react";

const ProjectsCard = ({ name, description, demoLink, codeLink }) => {
  const { darkMode } = useContext(ToggleContext);

  return (
    <div className="cursor-pointer flex flex-col mt-10 gap-1 w-full rounded-xl px-5 md:px-10 py-5 transition ease-in-out duration-300 hover:bg-gray-300 hover:bg-opacity-10 hover:shadow-xl">
      <h1 className="text-xl font-bold ">{name}</h1>
      <div
        className={`${
          darkMode ? `text-gray-300` : `text-gray-700`
        } font-normal text-sm md:text-base`}
      >
        {description}
      </div>
      <div className="flex flex-row justify-center items-center mx-auto md:mx-0 w-full md:max-w-xs md:w-auto gap-3 md:gap-5 text-sm py-3 font-semibold">
        <a
          href={codeLink}
          className={`${
            darkMode ? `bg-transparent border` : `bg-black text-white`
          } p-2 rounded-full w-full hover:scale-105 transition-all ease-in-out duration-300`}
        >
          <div className="flex flex-row justify-center items-center gap-1">
            <MdOutlineCode />
            <h4>View Code</h4>
          </div>
        </a>
        <a
          href={demoLink}
          className={`${
            darkMode ? `bg-transparent border` : `bg-black text-white`
          } p-2 rounded-full w-full hover:scale-105 transition-all ease-in-out duration-300`}
        >
          <div className="flex flex-row justify-center items-center gap-1">
            <MdPageview />
            <h4>Live Demo</h4>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectsCard;
