import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons"
import React from "react"
import imageSrc from '../assets/images/img2.png';
import ButtonDonate from "./ButtonDonate";


function Footer() {
  return (
    <>
      <footer className="w-full h-[900px]">
        <section className=" w-full m-auto  image bg-blue-600 image bg-no-repeat bg-center h-[850px]">
          <div className="w-full h-full bler bg-black/25 flex items-center">
            <nav className="w-[60%] h-[250px] mt-[80px] ml-[250px]">
              <h1 className="text-slate-300  mb-4 text-[48px] font-bold">Rabbit Shcool</h1>
              <p className="text-white text-[32px] ">
                At Rabbit School, we are committed to making a positive impact
                in our community. Your support helps us provide essential
                services and create meaningful change. Stay connected and join
                us in our mission to improve lives.
              </p>
              <ButtonDonate/>
            </nav>
          </div>
        </section>
        <section className="w-full m-auto h-[800px] bg-[#276BA3]">
          <section className="flex justify-start w-[100%] h-[500px] ">
            <div className="w-[20%] h-[400px] flex justify-center items-center  ml-[3rem] mt-[2.5rem]">
            <img src={imageSrc} alt="logo" className='ml-[5rem] mt-[3rem] ' />
            </div>
            <nav className="w-[1200px] ml-[7rem] mt-[5rem]">
              <ul className="flex gap-[6rem] text-[2rem] text-white font-bold">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About us</a>
                </li>
                <li>
                  <a href="">Our action</a>
                </li>
                <li>
                  <a href="">Support</a>
                </li>
                <li className="ml-[35px]">
                  <a href="">Get Involved</a>
                </li>
              </ul>
              <div>
                <section className="flex gap-[1rem] text-white text-[1.5rem] leading-10 mt-[20px]">
                  <div className="mr-[0.6rem]">
                    <ul>
                      <li>
                        <a href="">Rabbit History</a>
                      </li>
                    </ul>
                  </div>
                  <div className=" mr-[3.3rem]  ">
                    <ul>
                      <li>
                        <a href="">History</a>
                      </li>
                      <li>
                        <a href="">Missions</a>
                      </li>
                      <li>
                        <a href="">Values</a>
                      </li>
                      <li>
                        <a href="">Partners</a>
                      </li>
                      <li>
                        <a href="">News</a>
                      </li>
                      <li>
                        <a href="">Documentation</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mr-[2rem]">
                    <ul>
                      <li>
                        <a href="">Special Education</a>
                      </li>
                      <li>
                        <a href="">Teacher training</a>
                      </li>
                      <li>
                        <a href="">Vocational training</a>
                      </li>
                      <li>
                        <a href="">Advocacy</a>
                      </li>
                    </ul>
                  </div>
                  <div className=" ">
                    <ul>
                      <li>
                        <a href="">Make a donation</a>
                      </li>
                      <li>
                        <a href="">Sponsor a student</a>
                      </li>
                      <li>
                        <a href="">organize a fund collect</a>
                      </li>
                    </ul>
                  </div>
                  <div className=" ">
                    <ul>
                      <li>
                        <a href="">Volunteer</a>
                      </li>
                      <li>
                        <a href="">Job offer</a>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </nav>
          </section>
          <hr />
          <section className="flex">
            <section className="ml-[4rem]">
              <h1 className="text-slate-300 text-[40px] font-bold mt-[0.5rem]">
                Subscribe Now
              </h1>
              <p className=" text-white text-[20px] ">
                Stay updated with our latest news <br/> and initiatives
              </p>
              <input
                type="text"
                placeholder="Enter your email address"
                class="w-[60%] px-6 py-[1rem] my-2 inline-block border border-gray-300 box-border mt-[2.5rem]"
              />
              <button className=" px-6 py-[1rem] text-white font-bold bg-[#F0990E]">
                Send
              </button>
            </section>
            <section className=" w-[40%] h-[300px] gap-[2rem] flex  items-center ml-[4rem] decoration-white">
              <a className="text-[3rem] ml-[15rem] " href="">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a className="text-[3rem] decoration-white " href="">
                <FontAwesomeIcon icon={faPhone}
/ >
              </a>
              <a className="text-[3rem]" href="">
                <FontAwesomeIcon icon={faGlobe} />
              </a>
              <a href=""></a>
            </section>
          </section>
        </section>
      </footer>
    </>
  );
}

export default Footer;
