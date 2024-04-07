import { techStacks } from "../data";
import ToggleContext from "../context/ToggleContext";
import { useContext } from "react";

const Technologies = () => {
  const { darkMode } = useContext(ToggleContext);

  return (
    <div
      id="tech"
      className="scroll-mt-20 max-w-xl container flex flex-col px-5 py-3 md:py-5 md:px-10 justify-center items-center md:items-start"
    >
      <h1 className="text-2xl md:text-3xl font-bold underline underline-offset-8 decoration-indigo-500 decoration-4">
        Tech Stacks
      </h1>
      <div
        className={`${
          darkMode ? `text-gray-300` : `text-gray-700`
        } w-full py-5 grid grid-cols-3 md:grid-cols-5 gap-x-3 md:gap-x-10 gap-y-2 justify-center items-center`}
      >
        {techStacks.map((item, index) => {
          return (
            <div
              className="flex flex-row justify-center md:justify-start items-center transition ease-in-out duration-300 w-full text-sm md:text-base font-medium cursor-pointer hover:scale-110"
              key={index}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
