
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import DropdownMenu from "./DropdownMenu";
import MobileNav from "./MobileNav";
import NavButton from "./NavButton";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) return;
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;
      setIsHidden(currentScroll > lastScrollTop);
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop, isOpen]);

  return (
    <div
      className={`text-white absolute top-0 left-0 w-full p-5 transition-transform duration-300 z-50 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0)" }} // Light transparency
    >
      <div className="flex items-center justify-between px-6 h-10 sm:px-1">
        <div className="flex-shrink-0">
          <Logo />
        </div>

        <div className="hidden sm:flex flex-1 justify-center">
          <DropdownMenu />
        </div>

        <div className="sm:hidden">
          <NavButton isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>

      {isOpen && <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} />}
    </div>
  );
};

export default Navbar;