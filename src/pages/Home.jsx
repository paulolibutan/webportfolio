import { useContext } from "react";

import Hero from "../components/Hero";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import ToggleContext from "../context/ToggleContext";

const Home = () => {
  const { nav } = useContext(ToggleContext);

  return (
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
  );
};

export default Home;
