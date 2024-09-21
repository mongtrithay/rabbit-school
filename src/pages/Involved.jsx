import React, { useState, useEffect } from "react";
import Menu from "../companents/Menu";
import Footer from "../companents/Footer";
import jobofferImage from "../assets/images/joboffer.jpg";
import offerexpertise from "../assets/images/offerexpertise.jpg";

import {
  faBookOpenReader,
  faUsers,
  faGraduationCap,
  faHandshake,
  faRocket,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Involved() {
  const [status, setStatus] = useState("");
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchPositions = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/available-positions?populate=*"
        );
        const data = await response.json();

        if (data && data.data && isMounted) {
          setPositions(data.data);
          console.log("Positions:", data.data);
        } else {
          console.error("Unexpected data structure:", data);
        }
      } catch (error) {
        console.error("Error fetching positions:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchPositions();

    return () => {
      isMounted = false;
    };
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "cc7b7303-711c-4db0-ae53-db458849051d");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("Message sent successfully!");
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Menu />
      <h1 className="text-4xl md:text-5xl font-bold text-center mt-10 text-sky-700 ml-4 font-inika">
        DO YOU WANT TO GET INVOLVED?
      </h1>
      <div className="flex flex-col md:flex-row max-w-8xl mx-auto bg-sky-700 shadow-lg overflow-hidden mt-8">
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h1 className="text-3xl md:text-[40px] font-bold text-white ml-4 md:ml-8 font-inika">
            EXPLORE JOB
          </h1>
          <hr className="mb-4 md:mb-8 mt-2 ml-4 md:ml-8 border-4 w-[200px] md:w-[300px] border-orange-500" />
          <p className="text-base md:text-[24px] text-white leading-relaxed ml-4 md:ml-8 font-inika">
            Make a difference in children's lives by joining our passionate
            team. Whether you're an educator, social worker, or support staff,
            find a role that matches your skills and helps create a brighter
            future for vulnerable children. Together, we can build a better
            tomorrow, providing hope, support, and opportunities for every child
            to reach their full potential. Your dedication can make a lasting
            impact, transforming lives and communities. Join us in our mission
            to nurture, empower, and uplift the next generation.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={jobofferImage}
            alt="Job Offer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Available positions */}
      <div className="flex flex-col md:flex-row max-w-10xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden h-auto">
        <div className="w-full md:w-1/2 p-8 border-r-2 border-sky-700">
          <h1 className="text-3xl md:text-[40px] font-bold text-sky-700 mb-6 text-center font-inika">
            AVAILABLE POSITIONS
          </h1>

          <div className="h-[400px] overflow-y-auto ">
            {loading ? (
              <p>Loading positions...</p>
            ) : (
              positions.map((position) => {
                console.log("Position item:", position);
                return (
                  <div key={position.id} className="mb-6">
                    <h2 className="text-[25px] sm:text-[30px] font-bold text-sky-700 ">
                      <a
                        href={position.attributes.image_url.data.attributes.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-orange-500 "
                      >
                        {position.attributes.job_title}
                      </a>
                    </h2>
                    <p className="text-[20px] sm:text-[20px] text-gray-700 font-inika">
                      {position.attributes.discription}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 bg-white-100">
          <h1 className="text-3xl md:text-[40px] font-bold text-sky-700 mb-6 text-center font-inika">
            WHY WORKING WITH US?
          </h1>
          <ul className="space-y-8">
            <li className="flex items-start">
              <FontAwesomeIcon
                icon={faHandshake}
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] text-sky-700 mr-4 mb-4"
              />
              <div className="ml-2 md:ml-6">
                <p className="text-[25px] sm:text-[30px] font-bold text-sky-700">
                  Join a Meaningful Mission
                </p>
                <p className="text-[20px] text-gray-700 font-inika">
                  Be part of a team dedicated to empowering children with
                  intellectual disabilities and making a real difference in
                  their lives.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon
                icon={faRocket}
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] text-sky-700 mr-4 mb-4"
              />
              <div className="ml-2 md:ml-6">
                <p className="text-[25px] sm:text-[30px] font-bold text-sky-700">
                  Professional Growth Opportunities
                </p>
                <p className="text-[20px] text-gray-700 font-inika">
                  Gain unique experience working in a supportive environment
                  that encourages continuous learning and personal development.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon
                icon={faPeopleArrows}
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] text-sky-700 mr-4 mb-4"
              />
              <div className="ml-2 md:ml-6">
                <p className="text-[25px] sm:text-[30px] font-bold text-sky-700">
                  Collaborative and Inclusive Culture
                </p>
                <p className="text-[20px] text-gray-700 font-inika">
                Work alongside passionate professionals in a diverse and
                inclusive community that values your contributions
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* //section3 */}
      <div className="flex flex-col md:flex-row max-w-8xl mx-auto bg-sky-700 shadow-lg overflow-hidden h-auto md:h-[500px]">
        <div className="w-full md:w-1/2">
          <img
            src={offerexpertise}
            alt="Involved"
            className="w-full h-[300px] md:h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h1 className="text-[24px] md:text-[40px] font-bold text-white ml-4 md:ml-8 font-inika">
            OFFER EXPERTISE
          </h1>
          <hr className="mb-4 md:mb-8 mt-2 ml-4 md:ml-8 border-4 w-[220px] md:w-[380px] border-orange-500" />
          <p className="text-[18px] md:text-[24px] text-white leading-relaxed ml-4 md:ml-8 font-inika">
            Make a positive impact on the lives of children with disabilities by
            volunteering your skills or time joining our team. Whether you want
            to lend your expertise, support our programs, or contribute to our
            mission in other ways, your involvement can create real change. From
            mentoring and teaching to helping with events and fundraising, every
            effort counts. By working together, we can offer children hope,
            opportunities, and a brighter future. Join us and be a part of
            something meaningful.
          </p>
        </div>
      </div>

      {/* //section4 */}
      <div className="flex flex-col md:flex-row max-w-10xl mx-auto bg-white overflow-hidden h-auto">
        <div className="w-full md:w-2/2 p-8 bg-white-100">
          <h1 className="text-3xl font-bold text-sky-700 mb-6 text-center text- md-[20px] md:text-[40px] font-inika">
            WAYS TO GET INVOLVED
          </h1>
          <ul className="space-y-8 ml-4 md:ml-8">
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faBookOpenReader}
                className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] text-sky-700"
              />
              <div className="ml-6 md:ml-12">
                <p className="text-[25px] sm:text-[30px] md:text-[35px] font-bold text-sky-700 font-inika">
                  Classroom Support
                </p>
                <p className="text-[18px] md:text-[30px] text-gray-600 font-inika">
                  Help teachers with classroom activities and provide one-on-one
                  support to students.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faUsers}
                className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] text-sky-700"
              />
              <div className="ml-6 md:ml-12">
                <p className="text-[25px] sm:text-[30px] font-bold text-sky-700 font-inika">
                  Event Planning and Fundraising
                </p>
                <p className="text-[18px] md:text-[30px] text-gray-600 font-inika">
                  Assist in planning and running school events and fundraising
                  efforts.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] text-sky-700"
              />
              <div className="ml-6 md:ml-12">
                <p className="text-[25px] sm:text-[30px] font-bold text-sky-700 font-inika">
                  Contribute with Resources
                </p>
                <p className="text-[18px] md:text-[30px] text-gray-600 font-inika">
                  Help us gather or create educational games and school supplies
                  to enhance learning <br /> experiences for children with
                  intellectual disabilities
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row max-w-10xl mx-auto h-auto md:h-[550px]">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-8 bg-sky-700">
          <h1 className="text-[24px] md:text-[40px] text-white font-bold mb-6 text-center ml-8 font-inika">
            CONTACT US
          </h1>
          <div className="text-[16px] md:text-[20px] ml-2 md:ml-[40px] text-white space-y-4">
            <div className="text-center md:text-left">
              <h2 className="font-bold text-[24px] md:text-[30px] text-white font-inika">
                Phone
              </h2>
              <p className="text-[18px] md:text-[25px] text-white">
                <a href="tel:+85568901971" className="underline">
                  +855 68 901 971
                </a>
                <br />
                <a href="tel:+85517525815" className="underline">
                  +855 17 525 815
                </a>
              </p>
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-bold text-[24px] md:text-[30px] text-white font-inika">
                Email
              </h2>
              <p className="text-[18px] md:text-[25px] text-white font-inika">
                <a
                  href="mailto:sor.sothearom@rabbitschoolcambodia.net"
                  className="underline"
                >
                  sor.sothearom@rabbitschoolcambodia.net
                </a>
              </p>
            </div>

            <div className="text-center md:text-left">
              <h2 className="font-bold text-[24px] md:text-[30px] text-white font-inika">
                Address
              </h2>
              <p className="text-[18px] md:text-[25px] text-white">
                <a
                  href="https://goo.gl/maps/jvMBC2MgTz1kUyoh6"
                  className="text-white underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://goo.gl/maps/jvMBC2MgTz1kUyoh6
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="relative w-full md:w-1/2 p-8 bg-white">
          <div className="absolute top-0 left-0 w-full h-[7px] bg-sky-700"></div>
          <h1 className="text-[24px] md:text-[40px] font-bold text-sky-700 mb-6 text-center mt-4 font-inika">
            GET INVOLVED
          </h1>
          <form
            onSubmit={onSubmit}
            className="space-y-4 flex flex-col items-center"
          >
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-[90%] md:w-[450px] p-3 text-[16px] md:text-[20px] border border-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-[90%] md:w-[450px] p-3 text-[16px] md:text-[20px] border border-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="w-[90%] md:w-[450px] p-3 text-[16px] md:text-[20px] border border-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 h-[150px]"
            />
            <button
              type="submit"
              className="w-[90%] md:w-[450px] p-2 text-[16px] md:text-[20px] bg-orange-500 text-white font-bold hover:bg-gray-500 focus:outline-none focus:ring-2"
            >
              Submit
            </button>
          </form>
          {status && <p className="text-center mt-4">{status}</p>}
        </div>
        );
      </div>
      <Footer />
    </div>
  );
}

export default Involved;
