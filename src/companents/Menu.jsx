import React from 'react';
import imageSrc from '../assets/images/img1.png';

function Menu() {
    return (
        <div className="flex items-center p-2 w-full h-200 bg-sky-700">
            <div className="flex-shrink-0 mx-[50px]">
                <img className="w-20 h-20 object-contain" src={imageSrc} alt="Logo" />
            </div>
            <div className='flex items-center justify-end w-full h-200 '>
                <div className="mr-[50px] ">
                    <ul className="flex gap-20 text-white font-semibold text-xl">
                        <li>
                            <a href="#" className="hover:text-gray-600 transition-colors">HOME</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-600 transition-colors">ABOUT US</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-600 transition-colors">OUR ACTIONS</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-600 transition-colors">GET INVOLVED</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-600 transition-colors">SUPPORT</a>
                        </li>
                        <li className="">
                            <a href="#" className="hover:text-gray-600 transition-colors">CONTACT</a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-4 mr-[50px] ">
                    <a href="#" className="text-white text-xl font-semibold hover:text-gray-600 transition-colors">ENG</a>
                    <div className="h-5 border-l border-gray-400"></div>
                    <a href="#" className="text-white text-xl font-semibold hover:text-gray-600 transition-colors">KH</a>
                </div>
            </div>
        </div>
    );
}

export default Menu;
