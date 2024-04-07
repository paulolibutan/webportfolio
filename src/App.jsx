import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ToggleContext from "./context/ToggleContext";
import MobileNavbar from "./components/MobileNavbar";
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
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
