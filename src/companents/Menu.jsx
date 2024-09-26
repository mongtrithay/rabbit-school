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
    <div className="flex justify-between items-center p-2 w-full h-20 bg-sky-700 sticky top-0 z-10">
      {/* Logo */}
      <div className="flex justify-between items-center w-full">
        <div className="flex-shrink-0">
          <img className="w-16 h-16 object-contain" src={imageSrc} alt="Logo" />
        </div>

        {/* Hamburger icon for small screens */}
        <div className="lg:hidden">
          <FontAwesomeIcon
            icon={faBars}
            className="bx bx-menu xl:hidden block text-5xl text-white cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Full menu for larger screens */}
      <header
        className={`lg:flex lg:items-center max-md:hidden lg:justify-between w-full `}
      >
        <ul className="flex lg:flex-row items-center lg:gap-10 text-white font-semibold text-xl lg:ml-auto lg:mr-10">
          <li>
            <Link
              to="/"
              className="hover:text-gray-400 transition-colors font-inika"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gray-400 transition-colors font-inika"
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              to="/ouraction"
              className="hover:text-gray-400 transition-colors font-inika"
            >
              OUR ACTIONS
            </Link>
          </li>
          <li>
            <Link
              to="/involved"
              className="hover:text-gray-400 transition-colors font-inika"
            >
              GET INVOLVED
            </Link>
          </li>
          <li>
            <Link
              to="/support"
              className="hover:text-gray-400 transition-colors font-inika"
            >
              SUPPORT
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-gray-400 transition-colors font-inika"
            >
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Language Toggle */}
      </header>
      <div
        className={`absolute xl:hidden top-20 left-0 w-full bg-black flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
          menuOpen ? "block" : "hidden"
        }`}
        style={{
          transform: "translateY(0) scale(1)",
          transition: "transform 0.3s ease, opacity 0.3s ease",
        }}
      >
        <Link
          to="/"
          className="list-none w-full text-center p-4 hover:bg-sky-400 text-white transition-all cursor-pointer"
        >
          HOME
        </Link>
        <Link
          to="/about"
          className="list-none w-full text-center p-4 hover:bg-sky-400 text-white transition-all cursor-pointer"
        >
          ABOUT US
        </Link>
        <Link
          to="/ouraction"
          className="list-none w-full text-center p-4 hover:bg-sky-400 text-white transition-all cursor-pointer"
        >
          OUR ACTIONS
        </Link>
        <Link
          to="/involved"
          className="list-none w-full text-center p-4 hover:bg-sky-400 text-white transition-all cursor-pointer"
        >
          GET INVOLVED
        </Link>
        <Link
          to="/support"
          className="list-none w-full text-center p-4 hover:bg-sky-400 text-white transition-all cursor-pointer"
        >
          SUPPORT
        </Link>
        <Link
          to="/contact"
          className="list-none w-full text-center p-4 hover:bg-sky-400 text-white transition-all cursor-pointer"
        >
          CONTACT
        </Link>
      </div>
    </div>
  );
}

export default Menu;
