import { useState } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { navlinks } from "../Data";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import logo from "../assets/logo.svg";

import ResumeDoc from "../assets/Jaysoni_CV.pdf";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <header className=" flex justify-between items-center shadow-md py-6 px-12">
        <div className="logo ">
          {/* <h3 className="text-white text-2xl">Jay</h3> */}
          <figure className="w-24">
            <img className="w-full" src={logo} alt="JAY SONI" />
          </figure>
        </div>
        <nav className="hidden sm:flex gap-8">
          {navlinks.map((link, index) => (
            <li className="list-none text-neutral-100 text-lg" key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </nav>
        <a
          className="hidden sm:flex"
          href={ResumeDoc}
          download="Jay Soni Resume"
          target="_blank"
          rel="noreferrer"
        >
          <button className="text-slate-200  flex items-center font-medium gap-2 p-2 bg-slate-700 hover:bg-slate-800 rounded transition-colors">
            Download resume
          </button>
        </a>
        <div className="button-container sm:hidden" onClick={toggleDrawer}>
          <CgMenuRight className="text-slate-200" size={32} />
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
            <a
              href={ResumeDoc}
              download="Jay Soni Resume"
              target="_blank"
              rel="noreferrer"
            >
              <button className="text-slate-200  flex items-center font-medium gap-2 p-2 bg-slate-700 hover:bg-slate-800 rounded transition-colors">
                Download resume
              </button>
            </a>
          </nav>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
