import { useContext } from "react";

import Navbar from "./components/Navbar";
import ToggleContext from "./context/ToggleContext";
import MobileNavbar from "./components/MobileNavbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

const App = () => {
  const { darkMode, nav } = useContext(ToggleContext);
  return (
    <div
      className={`font-body min-h-screen w-full}  ${
        darkMode ? `bg-gray-950 text-white` : `bg-slate-50 text-black`
      }`}
    >
      <Navbar />
      {nav && <MobileNavbar />}
      <div
        className={`${
          nav && `blur-sm opacity-50`
        } flex flex-col items-center justify-center mx-auto`}
      >
        <Hero />
        <Technologies />
        <Projects />
        <Contacts />
      </div>
      <Footer />
    </div>
  );
};

export default App;
