import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import ButtonDonate from "./ButtonDonate";
import RabbitSchoolImage from "../assets/images/footers.jpeg";
import Image from "../assets/images/img2.png";

const Footer = () => {
  return (
    <>
      <footer className="w-full">
        <section
          className="relative w-full h-[400px] max-md:h-[500px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${RabbitSchoolImage})` }}
        >
          <div className="max-md:w-full w-full h-full bg-black/50 flex items-center justify-center">
            <nav className="w-[60%] h-full text-center">
              <h1 className="text-white text-2xl font-bold mb-4">Rabbit School</h1>
              <p className="text-white text-xl leading-8 mb-4">
                At Rabbit School, we are committed to making a positive impact in our community. Your support helps us provide essential services and create meaningful change. Stay connected and join us in our mission to improve lives.
              </p>
              <ButtonDonate />
            </nav>
          </div>
        </section>

        <section className="w-full bg-[#276BA3] text-white py-12">
          <div className="container mx-auto flex flex-wrap w-[80%] m-auto">
            <div className="w-1/4 flex flex-col items-start">
              <img src={Image} alt="logo" className="w-1/2 mb-4" />
              <h5 className="font-bold text-lg mb-2">About us</h5>
              <ul>
                <li><a href="#" className="hover:underline">History</a></li>
                <li><a href="#" className="hover:underline">Missions</a></li>
                <li><a href="#" className="hover:underline">Values</a></li>
                <li><a href="#" className="hover:underline">Partners</a></li>
                <li><a href="#" className="hover:underline">News</a></li>
              </ul>
            </div>

            <div className="w-1/4">
              <h5 className="font-bold text-lg mb-2">Our Actions</h5>
              <ul>
                <li><a href="#" className="hover:underline">Special Education</a></li>
                <li><a href="#" className="hover:underline">Teacher Training</a></li>
                <li><a href="#" className="hover:underline">Vocational Training</a></li>
                <li><a href="#" className="hover:underline">Advocacy</a></li>
              </ul>
            </div>

            <div className="w-1/4">
              <h5 className="font-bold text-lg mb-2">Support Us</h5>
              <ul>
                <li><a href="#" className="hover:underline">Make a Donation</a></li>
                <li><a href="#" className="hover:underline">Sponsor a Student</a></li>
                <li><a href="#" className="hover:underline">Organize a Fund Collect</a></li>
              </ul>
            </div>

            <div className="w-1/4">
              <h5 className="font-bold text-lg mb-2">Get Involved</h5>
              <ul>
                <li><a href="#" className="hover:underline">Volunteer</a></li>
                <li><a href="#" className="hover:underline">Job Offer</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#276BA3] py-8">
          <div className="container lg:flex items-center md:flex-row">
            <div>
              <h1 className="text-slate-300 text-lg font-bold">Subscribe Now</h1>
              <p className="text-white">Stay updated with our latest news and initiatives</p>
              <div className="mt-4 flex">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="w-3/4 px-4 py-2 border border-gray-300"
                  required
                />
                <button type="submit" className="px-6 py-2 text-white font-bold bg-orange-500">
                  Send
                </button>
              </div>
            </div>
            <div className="flex space-x-6 text-white text-3xl ml-auto mt-3">
              <a href="mailto:info@rabbitschool.org">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="https://www.facebook.com/rabbitschoolcbd?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="tel:+85568901971">
                <FontAwesomeIcon icon={faPhone} />
              </a>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
