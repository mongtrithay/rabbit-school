import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import ButtonDonate from "./ButtonDonate";
// Use the newly uploaded image here
import RabbitSchoolImage from "../assets/images/lastfooter.png";
import Image from "../assets/images/img2.png";
import { useEffect, useState } from "react";

function Footer() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          "https://rabbit-api.onrender.com/api/dynamic-contacts"
        );

        // Check if the response is okay
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data.data);
        setContacts(data.data[0]?.attributes);

        setLoading(false);
      } catch (error) {
        console.log("error", error);
        
      }
    };

    fetchContacts();
  }, []);
  console.log(contacts);
  const email = contacts.email;
  console.log(email);
  const phoneMF = contacts.phone_number_mf;
  const phoneSM = contacts.phone_number_sm;
  console.log(phoneMF);
  console.log(phoneSM);

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
            <nav className="max-md:w-[80%] w-[60%] h-full flex items-center ">
              <div>
                <h1 className="md:ml-[20rem] font-inika text-white max-md:mb-4 max-md:text-2xl text-2xl max-md:font-bold">
                  Rabbit School
                </h1>
                <div className="max-md:m-auto">
                  <p className="md:ml-[20rem] font-inika text-white text-xl leading-8">
                    At Rabbit School, we are committed to making a positive
                    impact in our community. Your support helps us provide
                    essential services and create meaningful change. Stay
                    connected and join us in our mission to improve lives.
                  </p>
                </div>

                <div className="md:ml-[20rem] mt-4 font-inika max-md:mt-2 max-md:flex max-md:justify-center">
                <Link to="/buttonDonate">
                  <ButtonDonate />
                </Link>
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
            <div className="max-md:grid max-md:grid-cols-2 max-md:ml-10 max-md:gap-2 md:ml-20 max-md:mt-2 flex flex-col md:flex-row md:space-x-16">
              <div className="mb-6 md:mb-0">
                <h5 className="font-bold text-lg mb-2 font-inika">About us</h5>
                <ul>
                  <li>
                    <a href="#" className="hover:underline font-inika">
                      History
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline font-inika">
                      Missions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline font-inika">
                      Values
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline font-inika">
                      Partners
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline font-inika">
                      News
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-2 md:mb-0">
                <h5 className="font-bold text-lg mb-2 font-inika">Our Actions</h5>
                <ul>
                  <li>
                    <a href="#" className="hover:underline font-inika">
                      Special Education
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline font-inika">
                      Teacher Training
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline font-inika">
                      Vocational Training
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline font-inika">
                      Advocacy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-2 md:mb-0">
                <h5 className="font-bold text-lg mb-2 font-inika">Support Us</h5>
                <ul>
                  <li>
                    <a href="#" className="hover:underline font-inika">
                      Make a Donation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline font-inika">
                      Sponsor a Student
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline font-inika">
                      Organize a Fund Collect
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-lg mb-2 font-inika">Get Involved</h5>
                <ul>
                  <li>
                    <a href="#" className="hover:underline font-inika">
                      Volunteer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline font-inika">
                      Job Offer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <hr />
        {/* Subscribe and Contact Section */}
        <section className="bg-[#276BA3] w-full  py-8 ">
          <div className=" flex items-center w-[100%] gap-20 max-md:gap-3 flex-col md:flex-row">
            <div className="flex flex-col items-center md:items-start ">
              <h1 className="max-md:ml-2 md:ml-[11rem] font-inika text-slate-300 max-md:text-lg font-bold">
                Subscribe Now
              </h1>
              <p className="md:ml-[11rem] font-inika max-md:ml-2 text-white max-md:text-2lg">
                Stay updated with our latest news and initiatives
              </p>
              <div className="mt-4 max-md:ml-2 flex">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="w-4/5 md:ml-[11rem] px-4 py-2 border border-gray-300"
                />

                <button className="px-6 py-2 text-white font-inika font-bold bg-orange-500">
                  Send
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-x-2 text-white text-6lg md:space-x-6 text-3xl mt-4 max-md:m-2 max-md:gap-5">
              <div className="flex gap-2">
                <div>
                  <a href="mailto:sor.sothearom@rabbitschoolcambodia.net">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </div>
                <div className="text-[15px]">
                  <a href={`mailto:${email}`}>{email}</a>
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <a
                    href="https://www.facebook.com/rabbitschoolcbd"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </div>
                <div className="text-[15px] font-inika">
                  <a
                    href="https://www.facebook.com/rabbitschoolcbd"
                    target="_blank"
                  >
                    www.facebook.com/rabbitschoolcbd
                  </a>
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <a href="tel:+85517525815">
                    <FontAwesomeIcon icon={faPhone} />
                  </a>
                </div>
                <div className="text-[15px]">
                  <a href={`tel:+${phoneMF}`}>
                    +{phoneMF} / <a href={`tel:+${phoneSM}`}>+{phoneSM}</a>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
