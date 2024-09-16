import React from "react";
import Menu from "../companents/Menu";
import Footer from "../companents/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faUsers,
  faGraduationCap,
  faHeart,
  faSackDollar,
  faChartLine,
  faCalendarCheck,
  faHouseMedicalCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

function Involved() {
  return (
    // section1
    <div className="min-h-screen bg-gray-100">
      <Menu />
      <h1 className="text-4xl md:text-5xl font-bold text-center mt-10 text-sky-700 ml-4">
        DO YOU WANT TO GET INVOLVED?
      </h1>
      <div className="flex flex-col md:flex-row max-w-8xl mx-auto bg-sky-700 shadow-lg overflow-hidden mt-8">
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h1 className="text-3xl md:text-[40px] font-bold text-white ml-4 md:ml-8">
            EXPLORE JOB
          </h1>
          <hr className="mb-4 md:mb-8 mt-2 ml-4 md:ml-8 border-4 w-[200px] md:w-[300px] border-orange-500" />
          <p className="text-base md:text-[24px] text-white leading-relaxed ml-4 md:ml-8">
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
            src="https://media.discordapp.net/attachments/1198512111777763432/1282633933162549298/image.png?ex=66e0116f&is=66debfef&hm=0443d2d5e873ebb6f92bd121bf8ad01a7ec34d8ce3e03556695d73fa5d9039f0&=&format=webp&quality=lossless&width=1173&height=660"
            alt="Involved"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/*//section*/}

      <div className="flex flex-col md:flex-row max-w-10xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden h-auto">
        <div className="w-full md:w-1/2 p-8 border-r-2 border-sky-700">
          <h1 className="text-4xl md:text-[40px] font-bold text-sky-700 mb-6 text-center">
            AVAILABLE POSITIONS
          </h1>
          <div className="mb-6">
            <h2 className="text-[30px] font-bold text-sky-700">
              Program Coordinator
            </h2>
            <p className="text-[20px] text-gray-700">
              Manage and oversee the planning and execution of various programs
              and projects.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-[30px] font-bold text-sky-700">
              Community Outreach Officer
            </h2>
            <p className="text-[20px] text-gray-700">
              Build and maintain relationships with local communities, identify
              needs, and promote NGO initiatives.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-[30px] font-bold text-sky-700">
              Fundraising Manager
            </h2>
            <p className="text-[20px] text-gray-700">
              Develop and implement fundraising strategies, organize campaigns,
              and build partnerships to secure financial support for the NGO’s
              activities.
            </p>
          </div>
          <div>
            <h2 className="text-[30px] font-bold text-sky-700">
              Volunteer Coordinator
            </h2>
            <p className="text-[20px] text-gray-700">
              Recruit, train, and manage volunteers. Ensure volunteers are
              matched with suitable roles and provide ongoing support and
              motivation.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 bg-white-100">
          <h1 className="text-4xl md:text-[40px] font-bold text-sky-700 mb-6 text-center">
            COMPANY BENEFITS
          </h1>
          <ul className="space-y-8">
            <li className="flex items-start">
              <FontAwesomeIcon
                icon={faSackDollar}
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] text-sky-700 mr-4 mt-4"
              />
              <div className="ml-2 md:ml-6">
                <p className="text-[30px] font-bold text-sky-700">
                  Competitive salary
                </p>
                <p className="text-[20px] text-gray-700">
                  We offer a salary package that reflects your skills,
                  experience, and contributions.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon
                icon={faChartLine}
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] text-sky-700 mr-4 mt-4"
              />
              <div className="ml-2 md:ml-6">
                <p className="text-[30px] font-bold text-sky-700">
                  Career Development Opportunities
                </p>
                <p className="text-[20px] text-gray-700">
                  We provide opportunities for career growth and professional
                  development.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon
                icon={faCalendarCheck}
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] text-sky-700 mr-4 mt-4"
              />
              <div className="ml-2 md:ml-6">
                <p className="text-[30px] font-bold text-sky-700">
                  Generous paid time off
                </p>
                <p className="text-[20px] text-gray-700">
                  Enjoy generous paid time off, including vacation days and
                  public holidays.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon
                icon={faHouseMedicalCircleCheck}
                className="w-[80px] h-[90px] md:w-[120px] md:h-[100px] text-sky-700  "
              />

              <div className="ml-2 md:ml-6">
                <p className="text-[30px] font-bold text-sky-700">
                  Comprehensive health benefits
                </p>
                <p className="text-[20px] text-gray-700">
                  Comprehensive health benefits covering medical, dental, and
                  optical needs.
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
            src="https://cdn.discordapp.com/attachments/1198512111777763432/1282634727693488229/image.png?ex=66e0122d&is=66dec0ad&hm=8908f87cca0fcd812f8ac4c4abe45097f8495f628ec67ca9d49a0cc1077464d1&"
            alt="Involved"
            className="w-full h-[300px] md:h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h1 className="text-[24px] md:text-[40px] font-bold text-white ml-4 md:ml-8">
            OFFER EXPERTISE
          </h1>
          <hr className="mb-4 md:mb-8 mt-2 ml-4 md:ml-8 border-4 w-[220px] md:w-[380px] border-orange-500" />
          <p className="text-[18px] md:text-[24px] text-white leading-relaxed ml-4 md:ml-8">
            Make a positive impact on children's lives by volunteering your
            skills or joining our team. Whether you want to lend your expertise,
            support our programs, or contribute to our mission in other ways,
            your involvement can create real change. From mentoring and teaching
            to helping with events and fundraising, every effort counts. By
            working together, we can offer children hope, opportunities, and a
            brighter future. Join us and be a part of something meaningful.
          </p>
        </div>
      </div>

      {/* //section4 */}

      <div className="flex flex-col md:flex-row max-w-10xl mx-auto bg-white overflow-hidden h-auto">
        <div className="w-full md:w-2/2 p-8 bg-white-100">
          <h1 className="text-[40px] font-bold text-sky-700 mb-6 text-center text- md-[20px] md:text-[40px]">
            WHY VOLUNTEER?
          </h1>
          <ul className="space-y-8 ml-4 md:ml-8">
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faBookOpenReader}
                className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] text-sky-700"
              />
              <div className="ml-6 md:ml-12">
                <p className="text-[25px] md:text-[35px] font-bold text-sky-700">
                  Classroom Support
                </p>
                <p className="text-[18px] md:text-[30px] text-gray-600">
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
                <p className="text-[25px] md:text-[35px] font-bold text-sky-700">
                  Event Planning and Fundraising
                </p>
                <p className="text-[18px] md:text-[30px] text-gray-600">
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
                <p className="text-[30px] md:text-[40px] font-bold text-sky-700">
                  Academic Guidance
                </p>
                <p className="text-[18px] md:text-[30px] text-gray-600">
                  Provide academic support and guidance to students.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faHeart}
                className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] text-sky-700"
              />
              <div className="ml-6 md:ml-12">
                <p className="text-[30px] md:text-[40px] font-bold text-sky-700">
                  Library Management
                </p>
                <p className="text-[18px] md:text-[30px] text-gray-600">
                  Help manage the school library and assist students with
                  finding resources.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row max-w-10xl mx-auto h-auto md:h-[550px]">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-8 bg-sky-700">
          <h1 className="text-[24px] md:text-[40px] text-white font-bold mb-6 text-center ml-8">
            CONTACT US
          </h1>
          <div className="text-[16px] md:text-[20px] ml-2 md:ml-[40px] text-white space-y-4">
            <div className="text-center md:text-left">
              <h2 className="font-bold text-[24px] md:text-[30px] text-white">
                Phone
              </h2>
              <p className="text-[18px] md:text-[25px] text-white">
                +855 68 901 971
              </p>
              <p className="text-[18px] md:text-[25px] text-white">
                +855 17 525 815
              </p>
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-bold text-[24px] md:text-[30px] text-white">
                Email
              </h2>
              <p className="text-[18px] md:text-[25px] text-white">
                sor.sothearom@rabbitschoolcambodia.net
              </p>
              <p className="text-[18px] md:text-[25px] text-white">
                hun.touch@rabbitschoolcambodia.net
              </p>
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-bold text-[24px] md:text-[30px] text-white">
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
          <h1 className="text-[24px] md:text-[40px] font-bold text-sky-700 mb-6 text-center mt-4">
            GET INVOLVED
          </h1>
          <form className="space-y-4 flex flex-col items-center">
            <input
              type="text"
              placeholder="Full Name"
              className="w-[90%] md:w-[400px] p-3 text-[16px] md:text-[20px] border border-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-[90%] md:w-[400px] p-3 text-[16px] md:text-[20px] border border-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <textarea
              placeholder="Message"
              className="w-[90%] md:w-[400px] p-3 text-[16px] md:text-[20px] border border-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 h-[150px]"
            />
            <button
              type="submit"
              className="w-[90%] md:w-[400px] p-2 text-[16px] md:text-[20px] bg-orange-500 text-white font-bold hover:bg-gray-500 focus:outline-none focus:ring-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default Involved;
