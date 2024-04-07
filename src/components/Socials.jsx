import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useContext } from "react";

import ToggleContext from "../context/ToggleContext";

const Socials = () => {
  const { darkMode } = useContext(ToggleContext);

  return (
    <div className="py-10 flex flex-row gap-3 justify-start items-center">
      <a
        href="https://wwww.facebook.com/pau.libutan"
        target="_blank"
        className={`${
          darkMode ? `border-white` : `border-black`
        } cursor-poniter hover:scale-110 transition ease-in-out duration-300 border-2 p-2 rounded-full`}
      >
        <FaFacebookF size={25} />
      </a>
      <a
        href="https://www.linkedin.com/in/paulolibutan/"
        target="_blank"
        className={`${
          darkMode ? `border-white` : `border-black`
        } cursor-poniter hover:scale-110 transition ease-in-out duration-300 border-2 p-2 rounded-full`}
      >
        <FaLinkedinIn size={25} />
      </a>
      <a
        href="https://github.com/paulolibutan"
        target="_blank"
        className={`${
          darkMode ? `border-white` : `border-black`
        } cursor-poniter hover:scale-110 transition ease-in-out duration-300 border-2 p-2 rounded-full`}
      >
        <FaGithub size={25} />
      </a>
    </div>
  );
};

export default Socials;
