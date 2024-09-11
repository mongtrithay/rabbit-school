import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import imageSrc from "../assets/images/img1.png";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex items-center p-2 w-full h-20 bg-sky-700">
      {/* Logo */}
      <div className="flex-shrink-0 mx-[20px]">
        <img className="w-16 h-16 object-contain" src={imageSrc} alt="Logo" />
      </div>

      {/* Hamburger icon for small screens */}
      <div className="lg:hidden ml-[70%] ">
        <FontAwesomeIcon
          icon={faBars}
          className=" bx bx-menu xl:hidden block text-5xl text-white cursor-pointer "
          onClick={toggleMenu}
        />
      </div>

      {/* Full menu for larger screens */}
      <header
        className={`lg:flex lg:flex lg:items-center  lg:justify-between w-full`}
      >
        <ul className="flex max-md:hidden flex-col lg:flex-row items-center lg:gap-10 text-white font-semibold text-xl lg:ml-auto lg:mr-20">
          <li>
            <a href="#" className="hover:text-gray-400 transition-colors">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition-colors">
              ABOUT US
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition-colors">
              OUR ACTIONS
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition-colors">
              GET INVOLVED
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition-colors">
              SUPPORT
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition-colors">
              CONTACT
            </a>
          </li>
        </ul>

        {/* Language Toggle */}
        <div className="flex max-md:hidden items-center gap-4 text-white text-xl font-semibold lg:mr-20">
          <a href="#" className="hover:text-gray-400 transition-colors">
            ENG
          </a>
          <div className="h-5 max-md:hidden border-l border-gray-400"></div>
          <a href="#" className="hover:text-gray-400 transition-colors">
            KH
          </a>
        </div>
        <div
          className={`absolute xl:hidden top-20 left-0 w-full bg-black flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transform: "transform o.3s ease, opacity o.3s ease" }}
        >
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 text-white transition-all cursor-pointer">
            HOME
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 text-white transition-all cursor-pointer">
            ABOUT US
          </li>
          <li className="list-none  w-full text-center p-4 hover:bg-sky-400 text-white transition-all cursor-pointer">
            OUR ACTIONS
          </li>
          <li className="list-none  w-full text-center p-4 hover:bg-sky-400 text-white transition-all cursor-pointer">
            GET INVOLVED
          </li>
          <li className="list-none  w-full text-center p-4 hover:bg-sky-400 text-white transition-all cursor-pointer">
            SUPPORT
          </li>
          <li className="list-none  w-full text-center p-4 hover:bg-sky-400 text-white transition-all cursor-pointer">
            CONTACT
          </li>
          <li className="list-none flex justify-center items-center gap-2  w-full text-center p-4 hover:bg-sky-400 text-white transition-all cursor-pointer">
            <li>ENG</li>
            <li>KH</li>
          </li>
        </div>
      </header>
    </div>
  );
}

export default Menu;
