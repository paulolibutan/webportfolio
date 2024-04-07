import Toggles from "./Toggles";
import { navMenu } from "../data";
import ToggleContext from "../context/ToggleContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { darkMode, navActive } = useContext(ToggleContext);

  return (
    <>
      <div
        className={`${navActive && darkMode && `bg-gray-950 shadow-xl`} ${
          navActive && !darkMode && `bg-slate-50 shadow-xl`
        } z-10 fixed left-0 right-0 w-full flex flex-row justify-center items-center py-5 px-5 md:px-10`}
      >
        <div className="max-w-3xl flex flex-row justify-between items-center w-full">
          <h1 className="font-bold text-3xl hover:scale-110 transition ease-in-out duration-300 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
            <Link to={"/webportfolio/"}>plbtn_</Link>
          </h1>
          <div className="flex flex-row justify-between items-center gap-8">
            <ul className="hidden md:flex flex-row gap-5">
              {navMenu.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="font-semibold text-base hover:scale-110 transition ease-in-out duration-300"
                  >
                    <Link to={item.destination}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
            <Toggles />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
