import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import imageSrc from "../assets/images/img1.png";
import { Link } from "react-router-dom";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex items-center p-2 w-full h-20 bg-sky-700 sticky top-0 z-10">
      {/* Logo */}
      <div className="flex-shrink-0 mx-[20px]">
        <img className="w-16 h-16 object-contain" src={imageSrc} alt="Logo" />
      </div>

      {/* Hamburger icon for small screens */}
      <div className="lg:hidden ml-[60%] ">
        <FontAwesomeIcon
          icon={faBars}
          className="bx bx-menu xl:hidden block text-5xl text-white cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Full menu for larger screens */}
      <header className={`lg:flex lg:items-center lg:justify-between w-full`}>
        <ul className="flex max-md:hidden flex-col lg:flex-row items-center lg:gap-10 text-white font-semibold text-xl lg:ml-auto lg:mr-20">
          <li>
            <Link to="/" className="hover:text-gray-400 transition-colors font-inika">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/aboutpage" className="hover:text-gray-400 transition-colors font-inika">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/ouraction" className="hover:text-gray-400 transition-colors font-inika">
              OUR ACTIONS
            </Link>
          </li>
          <li>
            <Link to="/involved" className="hover:text-gray-400 transition-colors font-inika">
              GET INVOLVED
            </Link>
          </li>
          <li>
            <Link to="/supportpage" className="hover:text-gray-400 transition-colors font-inika">
              SUPPORT
            </Link>
          </li>
          <li>
            <Link to="/contactpage" className="hover:text-gray-400 transition-colors font-inika">
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Language Toggle */}
        <div className="flex max-md:hidden items-center gap-4 text-white text-xl font-semibold lg:mr-20 font-inika">
          <a href="#" className="hover:text-gray-400 transition-colors">
            ENG
          </a>
          <div className="h-5 max-md:hidden border-l border-gray-400 font-inika"></div>
          <a href="#" className="hover:text-gray-400 transition-colors">
            KH
          </a>
        </div>
        <div
          className={`absolute xl:hidden top-20 left-0 w-full bg-black flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transform: "translateY(0) scale(1)", transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <Link to="/" className="list-none w-full text-center p-4 hover:bg-sky-400 text-white transition-all cursor-pointer">
            HOME
          </Link>
          <Link to="/aboutpage" className="list-none w-full text-center p-4 hover:bg-sky-400 text-white transition-all cursor-pointer">
            ABOUT US
          </Link>
          <Link to="/ouraction" className="list-none w-full text-center p-4 hover:bg-sky-400 text-white transition-all cursor-pointer">
            OUR ACTIONS
          </Link>
          <Link to="/involved" className="list-none w-full text-center p-4 hover:bg-sky-400 text-white transition-all cursor-pointer">
            GET INVOLVED
          </Link>
          <Link to="/supportpage" className="list-none w-full text-center p-4 hover:bg-sky-400 text-white transition-all cursor-pointer">
            SUPPORT
          </Link>
          <Link to="/contactpage" className="list-none w-full text-center p-4 hover:bg-sky-400 text-white transition-all cursor-pointer">
            CONTACT
          </Link>
          <li className="list-none flex justify-center items-center gap-2 w-full text-center p-4 hover:bg-sky-400 text-white transition-all cursor-pointer">
            <li>ENG</li>
            <li>KH</li>
          </li>
        </div>
      </header>
    </div>
  );
}

export default Menu;
