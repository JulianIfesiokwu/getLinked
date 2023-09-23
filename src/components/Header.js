import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menu from "../assets/menu.svg";
import closeMenu from "../assets/close-menu.svg";

const Header = () => {
  const [open, setOpen] = useState(false);
  // hide logo when menu is displayed on mobile
  const [hideLogo, setHideLogo] = useState(false);

  //stop body scroll when mobile menu is open
  open
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <header
      className={"w-full fixed top-0 left-0 z-50 bg-[#150E28]"}
      style={{
        borderBottom: "1px solid rgba(255, 255, 255, 0.18)",
      }}
    >
      <div className="md:flex items-center justify-between py-4 md:px-16 px-10 md:mx-auto">
        <div className="cursor-pointer flex items-center">
          <a
            href="/"
            className={`font-title font-bold text-white  text-4xl duration-500" ${
              hideLogo ? "invisible" : "visible"
            }`}
          >
            get<span className="text-[#D434FE]">linked</span>
          </a>
        </div>

        <div
          onClick={() => {
            setHideLogo(!hideLogo);
            setOpen(!open);
          }}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <img src={closeMenu} alt="close menu" />
          ) : (
            <img src={menu} alt="menu" />
          )}
        </div>

        <nav
          className={`w-full md:w-3/5 lg:w-2/5 md:gap-1 lg:gap-0 h-screen md:h-auto flex flex-col items-start md:flex-row md:items-center md:justify-between md:pb-0 bg-[#150E28] pb-12 absolute md:static md:z-auto z-30 left-0 md:pl-0 pl-10 transition-all duration-500 ease-in ${
            open ? "top-16" : "top-[-990px]"
          }`}
        >
          <a
            href="/#timeline"
            className={`font-inter md:font-sentence text-white text-base duration-500 mb-6 md:mb-0`}
            onClick={() => setOpen(false)}
          >
            Timeline
          </a>
          <a
            href="/#overview"
            className={`font-inter md:font-sentence text-white text-base duration-500 mb-6 md:mb-0`}
            onClick={() => setOpen(false)}
          >
            Overview
          </a>
          <a
            href="/#faqs"
            className={`font-inter md:font-sentence text-white text-base duration-500 mb-6 md:mb-0`}
            onClick={() => setOpen(false)}
          >
            FAQs
          </a>
          <NavLink
            to="/contact"
            className={`font-inter md:font-sentence text-white text-base duration-500 mb-6 md:mb-0`}
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/register"
            className={`font-inter md:font-sentence text-white text-base duration-500 mb-4 md:mb-0 rounded bg-gradient-to-r from-[#FE34B9] to-[#903AFF] px-12 py-3`}
            onClick={() => setOpen(false)}
          >
            Register
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
