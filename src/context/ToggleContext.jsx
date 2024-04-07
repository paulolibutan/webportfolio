import { createContext, useEffect, useState } from "react";

const ToggleContext = createContext();

export const ToggleContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [nav, setNav] = useState(false);
  const [navActive, setNavActive] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    });
  }, []);

  return (
    <ToggleContext.Provider
      value={{ darkMode, toggleDarkMode, nav, toggleNav,navActive }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContext;
