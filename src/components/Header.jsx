import { useEffect, useState } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { navlinks } from "../Data";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import { LuMoon, LuSunMedium } from "react-icons/lu";
import logo from "../assets/logo.svg";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  // console.log(darkMode);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode");
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <header className="z-50 flex justify-between items-center shadow-md py-6 px-12">
        <div className="logo ">
          <figure className="w-24">
            <img className="w-full" src={logo} alt="JAY SONI" />
          </figure>
        </div>
        <nav className="hidden sm:flex items-center gap-8">
          {navlinks.map((link, index) => (
            <li
              className="list-none text-neutral-800 dark:text-neutral-100 text-lg"
              key={index}
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
          <button
            className="text-neutral-800 dark:text-neutral-200 px-2 py-1 rounded"
            onClick={toggleDarkMode}
          >
            {darkMode ? <LuSunMedium size={24} /> : <LuMoon size={24} />}
          </button>
        </nav>

        <div className="button-container flex gap-4 sm:hidden">
          <button
            className="text-neutral-800 dark:text-neutral-200 px-2 py-1 rounded"
            onClick={toggleDarkMode}
          >
            {darkMode ? <LuSunMedium size={24} /> : <LuMoon size={24} />}
          </button>
          <CgMenuRight
            onClick={toggleDrawer}
            className="text-slate-800 dark:text-slate-200"
            size={32}
          />
        </div>
      </header>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        style={{ width: "100%", backgroundColor: "rgb(15 23 42 )" }}
        className="flex flex-col py-6 px-12 bg-slate-900"
      >
        <div className="close-nav ms-auto" onClick={toggleDrawer}>
          <CgClose className="text-slate-200" size={32} />
        </div>
        <div className="mobile-nav w-full h-full">
          <nav className="flex flex-col justify-center items-center h-full gap-10">
            {navlinks.map((link, index) => (
              <a
                className="list-none w-full text-center text-neutral-100 text-2xl"
                key={index}
                onClick={toggleDrawer}
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
