import { navMenu } from "../data";
import ToggleContext from "../context/ToggleContext";
import { useContext } from "react";

const MobileNavbar = () => {
  const { toggleNav } = useContext(ToggleContext);

  return (
    <div className="z-50 fixed top-0 left-0 flex md:hidden flex-col justify-start h-full shadow-2xl bg-inherit w-[60%] sm:w-[50%] px-10 py-10 md:container">
      <ul className="flex flex-col gap-2">
        {navMenu.map((item, index) => {
          return (
            <li
              onClick={() => toggleNav()}
              key={index}
              className="font-semibold hover:scale-110 transition ease-in-out duration-300 text-2xl"
            >
              <a href={item.destination}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNavbar;
