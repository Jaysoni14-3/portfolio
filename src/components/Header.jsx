import { useState } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { navlinks } from "../Data";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <header className=" flex justify-between items-center shadow-md py-6 px-12">
        <div className="logo ">
          <h3 className="text-white text-2xl">Jay</h3>
        </div>
        <nav className="hidden sm:flex gap-8">
          {navlinks.map((link, index) => (
            <li className="list-none text-neutral-100 text-lg" key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </nav>
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
          </nav>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
