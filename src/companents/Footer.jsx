import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import ButtonDonate from "./ButtonDonate";
// Use the newly uploaded image here
import RabbitSchoolImage from "../assets/images/footers.jpeg";
import Image from "../assets/images/img2.png";

function Footer() {
  return (
    <>
      <footer className="w-full">
        {/* Hero Section with Background Image */}
        <section
          className="relative w-full h-[400px] max-md:h-[500px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${RabbitSchoolImage})`,
          }}
        >
          <div className="max-md:w-full w-full max-md:h-full h-full max-md:bg-black/50 bg-black/50 max-md:flex max-md:items-center max-md:justify-center">
            <nav className="max-md:w-[60%] w-[60%] h-full flex items-center  max-md:text-center">
              <div>
                <h1 className=" md:ml-[20rem] text-white max-md:mb-4 max-md:text-2xl text-2xl max-md:font-bold">
                  Rabbit School
                </h1>
                <p className=" md:ml-[20rem] text-white text-xl leading-8">
                  At Rabbit School, we are committed to making a positive impact
                  in our community. Your support helps us provide essential
                  services and create meaningful change. Stay connected and join
                  us in our mission to improve lives.
                </p>
                <div className=" md:ml-[20rem] mt-4 max-md:mt-2">
                  <ButtonDonate />
                </div>
              </div>
            </nav>
          </div>
        </section>

        {/* Footer Links Section */}
        <section className="w-full bg-[#276BA3] text-white py-12">
          <div className="container mx-auto flex flex-wrap ">
            <div className="max-md:w-1/4 md:w-1/4 max-md:flex max-md:mt-[-30px] max-md:ml-4 md:ml-[1rem]  max-md:justify-center max-md:items-center">
              <img src={Image} alt="logo" className="max-md:w-1/2  md:w-1/2 " />
            </div>
            <div className="max-md:grid max-md:grid-cols-2 max-md:ml-10 max-md:gap-2 md:ml-20 md:space-x-16 max-md:mt-2 flex flex-col md:flex-row ">
              <div className="mb-6 md:mb-0">
                <h5 className="font-bold text-lg mb-2">About us</h5>
                <ul>
                  <li>
                    <a href="#" className="hover:underline">
                      History
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Missions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Values
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Partners
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      News
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-2 md:mb-0">
                <h5 className="font-bold text-lg mb-2">Our Actions</h5>
                <ul>
                  <li>
                    <a href="#" className="hover:underline">
                      Special Education
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Teacher Training
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Vocational Training
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Advocacy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-2 md:mb-0">
                <h5 className="font-bold text-lg mb-2">Support Us</h5>
                <ul>
                  <li>
                    <a href="#" className="hover:underline">
                      Make a Donation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Sponsor a Student
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Organize a Fund Collect
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-lg mb-2">Get Involved</h5>
                <ul>
                  <li>
                    <a href="#" className="hover:underline">
                      Volunteer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Job Offer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe and Contact Section */}
        <section className="bg-[#276BA3] py-8">
          <div className="container flex items-center">
            <div>
              <h1 className="max-md:ml-2 md:ml-[11rem] text-slate-300 max-md:text-lg font-bold">
                Subscribe Now
              </h1>
              <p className="md:ml-[11rem] max-md:ml-2 text-white max-md:text-2lg">
                Stay updated with our latest news and initiatives
              </p>
              <div className="mt-4 max-md:ml-2 flex">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="w-3/4 md:ml-[11rem] px-4 py-2 border border-gray-300"
                />
                <button className="px-6 py-2 text-white font-bold bg-[#F0990E]">
                  Send
                </button>
              </div>
            </div>
            <div className="flex space-x-2 text-white text-6lg md:space-x-6 text-3xl md:ml-[20rem] md:mt-[3rem] max-md:m-2">
              <a href="#">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faPhone} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faGlobe} />
              </a>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
