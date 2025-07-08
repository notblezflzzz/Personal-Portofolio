import React, { useState, useEffect } from "react";
import { PiMoonFill } from "react-icons/pi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import "/src/index.css";
import logoImg from "../assets/image.png"; // Ganti dengan path logo kamu

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const navLinks = (
    <>
      <li><a href="/" className="nav-link block">Home</a></li>
      <li><a href="#About" className="nav-link block">About Me</a></li>
      <li><a href="#Skills" className="nav-link block">Skills</a></li>
      <li><a href="
https://api.whatsapp.com/send?phone=6282124986289" className="nav-link block" target="_blank">Contact</a></li>
      <li>
        <button
          onClick={toggleDarkMode}
          className="p-1 rounded-full border-2 border-black dark:border-white"
          aria-label="Toggle dark mode"
        >
          <PiMoonFill />
        </button>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-[#181818] border-b border-white/20 dark:border-[#222] shadow-lg px-6 py-4 transition-colors dark:text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center dark:text-white">
        <div>
          
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black dark:text-white text-2xl" aria-label="Toggle menu">
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
        <ul className="hidden md:flex space-x-1 gap-[30px] items-center text-black dark:text-white font-poppins text-[16px] font-semibold">
          {navLinks}
        </ul>
      </div>
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 px-2 text-black dark:text-white font-poppins text-[16px] font-semibold">
          {navLinks}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;