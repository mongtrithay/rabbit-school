import React from 'react';
import imageSrc from '../assets/images/img1.png';

function Menu() {
    return (
        <header className="flex items-center justify-between w-full h-20 bg-sky-700 p-4">
            <div className="flex items-center">
                <img className="w-16 h-16 object-contain" src={imageSrc} alt="Logo" />
            </div>
            <nav className="flex items-center w-full justify-end">
                <ul className="flex gap-12 text-white font-semibold mr-24">
                    <li>
                        <a href="#" className="hover:text-gray-400 transition-colors text-lg">HOME</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-400 transition-colors text-lg">ABOUT US</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-400 transition-colors text-lg">OUR ACTIONS</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-400 transition-colors text-lg">GET INVOLVED</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-400 transition-colors text-lg">SUPPORT US</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-400 transition-colors text-lg">CONTACT</a>
                    </li>
                </ul>
                <div className="flex items-center gap-4 ml-8">
                    <a href="#" className="text-white text-lg font-semibold hover:text-gray-400 transition-colors">ENG</a>
                    <div className="h-5 border-l border-gray-400"></div>
                    <a href="#" className="text-white text-lg font-semibold hover:text-gray-400 transition-colors">KH</a>
                </div>
            </nav>
        </header>
    );
}

export default Menu;
