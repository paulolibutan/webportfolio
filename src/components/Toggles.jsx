import { useContext } from "react";
import {
  MdDarkMode,
  MdOutlineLightMode,
  MdOutlineMenu,
  MdClose,
} from "react-icons/md";
import ToggleContext from "../context/ToggleContext";

const Toggles = () => {
  const { darkMode, toggleDarkMode, nav, toggleNav } =
    useContext(ToggleContext);

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <button onClick={() => toggleDarkMode()}>
        {darkMode ? (
          <div className="border-2 border-white rounded-full pe-3 transition-all ease-in-out duration-300">
            <MdOutlineLightMode size={20} />
          </div>
        ) : (
          <div className="border-2 border-black rounded-full ps-3 transition-all ease-in-out duration-300">
            <MdDarkMode size={20} />
          </div>
        )}
      </button>
      <button onClick={() => toggleNav()} className="block md:hidden">
        {nav ? <MdClose size={30} /> : <MdOutlineMenu size={30} />}
      </button>
    </div>
  );
};

export default Toggles;
