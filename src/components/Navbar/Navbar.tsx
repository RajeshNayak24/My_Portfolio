import type { NavbarProps } from "./Navbar.types";
import logo from "../../assets/code.png";
import { useState } from "react";

const Navbar = ({ items }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full h-[80px] text-white fixed top-0 left-0 z-50 bg-[#2C2E3D]/80 backdrop-blur-sm border-b border-purple-500/20 ">
      <div className="flex  justify-between items-center px-8 py-4 lg:flex-row">
        <div className="flex  items-center gap-2 font-bold text-xl">
          <img className="w-10 h-10 rounded-full" src={logo} alt="profile" />
          <span>
            R<span className="text-[#FF77C9]">A</span>JESH
          </span>
        </div>

        <button
          className="lg:hidden flex flex-col justify-between w-6 h-5 hover:text-pink-400 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`h-[2px] w-full bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>

          <span
            className={`h-[2px] w-full bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>

          <span
            className={`h-[2px] w-full bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        <ul
          className={` absolute lg:static top-[70px] left-0 w-full lg:w-auto bg-[#2C2E3D] lg:bg-transparent flex flex-col lg:flex-row gap-6 px-6 py-6 lg:p-0 transform transition-all duration-300 origin-top 
            ${isMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} lg:scale-y-100 lg:opacity-100`}
        >
          {items.map((item) => (
            <li key={item.label}>
              <a
                className="hover:text-[#FF77C9] "
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
