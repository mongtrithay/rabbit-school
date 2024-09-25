import Menu from "../companents/Menu";
import imageSrc from "../assets/images/footer.jpeg";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import Footer from "../companents/Footer";
import ButtonReadMore from "../companents/ButtonReadMore";
import pic1 from "../assets/images/pic1.jpeg";
// import pic3 from "../assets/images/P3-home.jpg";
import pic5 from "../assets/images/where.png";
import pic6 from "../assets/images/main-fund.jpg";
import icon1 from "../assets/images/respect.png";
import icon2 from "../assets/images/sharing.png";
import icon3 from "../assets/images/icon-gender.png";
import icon4 from "../assets/images/community.png";
import icon5 from "../assets/images/idea.png";
import icon6 from "../assets/images/using.png";
import home2 from "../assets/images/homepage2.jpg";
// import header from "../assets/images/hearderHome.jpg";
import header from "../assets/images/headerHome.jpg";
import KeyFigures from "../companents/KeyFigures";
import SliderPartner from "../companents/SliderPartner";
import SliderAction from "../companents/SliderAction";
import ReactDOM from "react-dom";
// import VideoPlayer from "../components/Video";
import VideoPlayer from "../companents/Video";
import KeyFiguresP from "../companents/KeyFiguresPhone";
import styled from "styled-components";
import MainFunders from "../companents/MainFunders";

const StyledDiv = styled.div`
  font-family: "Inika", serif; /* Use the Inika font */
  font-size: 22px;
  color: black;
`;

function Homepage() {
  return (
    <>
        <Menu />

      <StyledDiv>
        <div
          className="relative w-full lg:h-[43.75rem] h-[25rem] bg-cover bg-center"
          style={{ backgroundImage: `url(${header})` }}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-black bg-opacity-50  w-screen">
              <h1 className="text-center text-white lg:text-[83px] text-[1.20rem] sm:text-[2rem] md:text-[3rem] mt-8">
                Welcome to the Rabbit School Organization
              </h1>
              <div className="flex flex-wrap justify-center mt-[3.50rem]  lg:-ml-[20rem] -ml-[4rem] lg:mt-[4rem]">
                <div className="lg:w-[15.375rem] w-[9rem] lg:h-[0.3125rem] h-[0.10rem] lg:ml-[3.125rem] ml-[1.5rem] lg:-mt-[3.125rem] -mt-[3rem] bg-[#F0990E]"></div>
                <div className="lg:w-[5.125rem]  lg:h-[0.3125rem] h-[0.20rem] lg:ml-[1.25rem]  lg:-mt-[3.125rem] -mt-[3rem] bg-[#F0990E]"></div>
                <div className="lg:w-[2.875rem] lg:h-[0.3125rem] h-[0.20rem] lg:ml-[1.25rem]  lg:-mt-[3.125rem] -mt-[3rem] bg-[#F0990E]"></div>
                <div className="lg:w-[1.9375rem]  lg:h-[0.3125rem] h-[0.20rem] lg:ml-[1.25rem]  lg:-mt-[3.125rem] -mt-[3rem] bg-[#F0990E]"></div>
                <div className="lg:w-[0.625rem]  lg:h-[0.3125rem] h-[0.20rem] lg:ml-[1.25rem]  lg:-mt-[3.125rem] -mt-[3rem] bg-[#F0990E]"></div>
                <p className="text-white lg:text-[2.30rem] text-[0.50rem] sm:text-[0.75rem] md:text-[1rem] lg:-mt-[4.0625rem] -mt-[3.20rem] lg:ml-[1.875rem] ml-[0.75rem]">
               " Where all children can Learn and Grow " 
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="w-full flex flex-col lg:flex-row h-auto lg:h-[600px]">
          <div className="w-full lg:w-[50%] flex justify-center items-center p-4 lg:p-0">
            <div className=" h-auto lg:h-[400px] w-full lg:w-[80%] max-w-[800px]">
              <VideoPlayer />
            </div>
          </div>
          <div className="w-full lg:w-[50%] p-4 lg:p-8 flex flex-col justify-center">
            <h1 className="text-[25px] lg:text-[3rem] font-bold lg:mb-4">
              Rabbit School’s Story
            </h1>
            <div className="w-[100px] h-[2px] lg:h-[5px] bg-[#F0990E] mb-4"></div>
            <p className="text-[1rem] lg:text-[1.25rem] leading-[1.75rem] lg:leading-[2rem] mb-4 lg:mt-5">
              The Rabbit School has been working for children with intellectual
              disabilities in Cambodia for over 25 years. We promote the rights
              of Children with Intellectual Disabilities, as we believe that
              they have the same fundamental rights as their fellow citizens to
              a decent life, with equal dignity and access to education,
              whatever the origin, nature, or severity of their impairments.
            </p>
            {/* Button alignment is controlled here */}
            <div className="flex justify-start mt-4">
              <ButtonReadMore />
            </div>
          </div>
        </section>

        <section className="bg-[#276BA3] lg:h-[600px] w-full flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="h-[40rem] lg:h-full lg:w-[50%] flex justify-center items-center p-4 lg:p-0">
            <div className="bg-yellow-300 h-[35rem] lg:h-[30rem] w-full lg:w-[50rem] max-w-full">
              <img
                src={home2}
                alt="Description of image"
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="h-auto lg:h-full lg:w-[50%] p-4 lg:p-8 flex flex-col justify-center -mt-3">
            <h1 className="text-[25px] lg:text-[2.25rem] font-bold text-white  lg:mb-6">
              Disability in Cambodia, a persistent taboo
            </h1>
            <div className="w-[10rem] lg:w-[14rem] h-[2px] lg:h-[5px] bg-[#F0990E]  lg:mb-6"></div>
            <p className="text-[1rem] lg:text-[1.25rem] leading-[1.5rem] lg:leading-[1.75rem] text-white mb-6 mt-5">
              In Cambodia, which has a predominantly Buddhist population,
              disability is often viewed as a taboo subject due to{" "}
              <span className="text-[#F0990E] font-bold"> reincarnation </span>
              beliefs.
            </p>
            <p className="text-[1rem] lg:text-[1.25rem] leading-[1.5rem] lg:leading-[1.75rem] text-white mb-6">
              Unfortunately, many schools in Cambodia are{" "}
              <span className="text-[#F0990E] font-bold">
                not equipped to accommodate children with intellectual
                disabilities{" "}
              </span>
              (CWIDs), with only a handful of special education schools
              available, most of which are private and charge high fees that are
              out of reach for most families.
            </p>
            <p className="text-[1rem] lg:text-[1.25rem] leading-[1.5rem] lg:leading-[1.75rem] text-white mb-6">
              As a result, children with disabilities have limited options and
              are often kept at home. This places a{" "}
              <span className="text-[#F0990E] font-bold">
                {" "}
                heavy burden on parents, particularly mothers, who are unable to
                work and provide financial support{" "}
              </span>{" "}
              for their families while also caring for their child.
            </p>
            <div className="flex flex-wrap mt-1   lg:mt-12">
              <div className="w-[7.5rem] lg:w-[15.375rem] lg:h-[0.3125rem] h-[2px] bg-[#F0990E] mb-2 lg:mb-0 mr-4"></div>
              <div className="w-[2.5rem] lg:w-[3.125rem] lg:h-[0.3125rem] h-[2px] bg-[#F0990E] mb-2 lg:mb-0 mr-4"></div>
              <div className="w-[1.5rem] lg:w-[1.875rem] lg:h-[0.3125rem] h-[2px] bg-[#F0990E] mb-2 lg:mb-0 mr-4"></div>
              <div className="w-[0.75rem] lg:w-[0.9375rem] lg:h-[0.3125rem] h-[2px] bg-[#F0990E] mb-2 lg:mb-0 mr-4"></div>
              <div className="w-[0.5rem] lg:w-[0.625rem] lg:h-[0.3125rem] h-[2px] bg-[#F0990E]"></div>
            </div>
          </div>
        </section>

        <KeyFigures />
        <KeyFiguresP />

        {/* <h1 className="h-[200px] text-[48px] text-center font-bold">CORE VALUES</h1> */}
        <h1 className="lg:h-[200px] lg:text-[48px] text-[20px] text-center lg:mb-0 mb-5 font-bold text-[#276BA3] flex items-center justify-center lg:mt-[150px]">
          CORE VALUES
        </h1>

        <section className="w-full">
          <div className="hidden lg:flex lg:flex-wrap lg:justify-center lg:space-x-10 mb-10">
            <div className="w-[300px] h-[400px] bg-[#276BA3] bg-opacity-50 shadow-xl flex flex-col items-center mb-10">
              <div className="flex w-full justify-start">
                <div className="w-[70px] h-[5px] bg-white mt-5 ml-10"></div>
              </div>
              <h2 className="h-[100px] w-[280px] text-[25px] mt-5 font-bold ml-5 text-center lg:text-left">
                Respect of each person’s dignity
              </h2>
              <img
                src={icon1}
                alt="Description of image"
                className="w-[150px] h-[150px] object-cover -mt-5"
              />
              <p className="w-[90%] text-[18px]   text-center mt-4 text-white">
                Dignity covers all aspects of daily life, including respect,
                privacy, autonomy, and self-worth.
              </p>
            </div>

            <div className="w-[300px] h-[400px] bg-[#276BA3] bg-opacity-50 shadow-xl flex flex-col items-center mb-10">
              <div className="flex w-full justify-start">
                <div className="w-[70px] h-[5px] bg-white mt-5 ml-10"></div>
              </div>
              <h2 className="h-[100px] w-[280px] text-[25px] mt-5 font-bold ml-5 text-center lg:text-left">
                Learning and sharing
              </h2>
              <img
                src={icon2}
                alt="Description of image"
                className="w-[160px] h-[160px] object-cover -mt-8"
              />
              <p className="w-[90%] text-[18px]   text-center mt-4 text-white">
                In essence, it’s about personal growth and contributing to the
                growth of others.
              </p>
            </div>

            <div className="w-[300px] h-[400px] bg-[#276BA3] bg-opacity-50 shadow-xl flex flex-col items-center mb-10">
              <div className="flex w-full justify-start">
                <div className="w-[70px] h-[5px] bg-white mt-5 ml-10"></div>
              </div>
              <h2 className="h-[100px] w-[280px] text-[25px] mt-5 font-bold ml-5 text-center lg:text-left">
                Gender equality
              </h2>
              <img
                src={icon3}
                alt="Description of image"
                className="w-[160px] h-[160px] object-cover -mt-8"
              />
              <p className="w-[90%] text-[18px]  text-center mt-4 text-white">
                Women and men, and girls and boys, enjoy the same rights,
                resources, opportunities, and protections.
              </p>
            </div>
          </div>

          <div className="lg:hidden flex flex-col items-center space-y-10 mb-10">
            <div className="w-full max-w-[300px] h-[400px] bg-[#276BA3] bg-opacity-50 shadow-xl flex flex-col items-center">
              <div className="flex w-full justify-start">
                <div className="w-[70px] h-[5px] bg-white mt-5 ml-10"></div>
              </div>
              <h2 className="h-[100px] w-[280px] text-[25px] mt-5 font-bold ml-5 text-center">
                Respect of each person’s dignity
              </h2>
              <img
                src={icon1}
                alt="Description of image"
                className="w-[150px] h-[150px] object-cover -mt-5"
              />
              <p className="w-[90%] text-[18px] text-center mt-4 text-white">
                Dignity covers all aspects of daily life, including respect,
                privacy, autonomy, and self-worth.
              </p>
            </div>

            <div className="w-full max-w-[300px] h-[400px] bg-[#276BA3] bg-opacity-50 shadow-xl flex flex-col items-center">
              <div className="flex w-full justify-start">
                <div className="w-[70px] h-[5px] bg-white mt-5 ml-10"></div>
              </div>
              <h2 className="h-[100px] w-[280px] text-[25px] mt-5 font-bold ml-5 text-center">
                Learning and sharing
              </h2>
              <img
                src={icon2}
                alt="Description of image"
                className="w-[160px] h-[160px] object-cover -mt-8"
              />
              <p className="w-[90%] text-[18px]  text-center mt-4 text-white">
                In essence, it’s about personal growth and contributing to the
                growth of others.
              </p>
            </div>

            <div className="w-full max-w-[300px] h-[400px] bg-[#276BA3] bg-opacity-50 shadow-xl flex flex-col items-center">
              <div className="flex w-full justify-start">
                <div className="w-[70px] h-[5px] bg-white mt-5 ml-10"></div>
              </div>
              <h2 className="h-[100px] w-[280px] text-[25px] mt-5 font-bold ml-5 text-center">
                Gender equality
              </h2>
              <img
                src={icon3}
                alt="Description of image"
                className="w-[160px] h-[160px] object-cover -mt-8"
              />
              <p className="w-[90%]  text-[18px] text-center mt-4 text-white">
                Women and men, and girls and boys, enjoy the same rights,
                resources, opportunities, and protections.
              </p>
            </div>
          </div>

          <div className="hidden lg:flex lg:flex-wrap lg:justify-center lg:space-x-10 mb-10">
            <div className="w-[300px] h-[400px] bg-[#276BA3] bg-opacity-50 shadow-xl flex flex-col items-center mb-10">
              <div className="flex w-full justify-start">
                <div className="w-[70px] h-[5px] bg-white mt-5 ml-10"></div>
              </div>
              <h2 className="h-[100px] w-[280px] text-[25px] mt-5 font-bold ml-5 text-center lg:text-left">
                Community participation and ownership
              </h2>
              <img
                src={icon4}
                alt="Description of image"
                className="w-[150px] h-[150px] object-cover"
              />
              <p className="w-[90%] text-[18px]  text-center mt-4 text-white">
                These concepts emphasize active involvement and a sense of
                responsibility.
              </p>
            </div>

            <div className="w-[300px] h-[400px] bg-[#276BA3] bg-opacity-50 shadow-xl flex flex-col items-center mb-10">
              <div className="flex w-full justify-start">
                <div className="w-[70px] h-[5px] bg-white mt-5 ml-10"></div>
              </div>
              <h2 className="h-[100px] w-[280px] text-[25px] mt-5 font-bold ml-5 text-center lg:text-left">
                Encouragement of initiative ideas
              </h2>
              <img
                src={icon5}
                alt="Description of image"
                className="w-[150px] h-[150px] -mt-5"
              />
              <p className="w-[90%] text-[18px]  text-center mt-4 text-white">
                Encouragement of initiative ideas means supporting and
                motivating new and creative ideas.
              </p>
            </div>

            <div className="w-[300px] h-[400px] bg-[#276BA3] bg-opacity-50 shadow-xl flex flex-col items-center mb-10">
              <div className="flex w-full justify-start">
                <div className="w-[70px] h-[5px] bg-white mt-5 ml-10"></div>
              </div>
              <h2 className="h-[100px] w-[280px] text-[25px] mt-5 font-bold ml-5 text-center lg:text-left">
                Using of existing resources
              </h2>
              <img
                src={icon6}
                alt="Description of image"
                className="w-[150px] h-[150px] object-cover -mt-5"
              />
              <p className="w-[90%] text-[18px]  text-center mt-4 text-white">
                Using existing resources means utilizing what is already
                available to achieve goals efficiently.
              </p>
            </div>
          </div>

          <div className="lg:hidden flex flex-col items-center space-y-10 mb-10">
            <div className="w-full max-w-[300px] h-[400px] bg-[#276BA3] bg-opacity-50 shadow-xl flex flex-col items-center">
              <div className="flex w-full justify-start">
                <div className="w-[70px] h-[5px] bg-white mt-5 ml-10"></div>
              </div>
              <h2 className="h-[100px] w-[280px] text-[25px] mt-5 font-bold ml-5 text-center">
                Community participation and ownership
              </h2>
              <img
                src={icon4}
                alt="Description of image"
                className="w-[150px] h-[150px] object-cover"
              />
              <p className="w-[90%] text-[18px] text-center mt-4 text-white">
                These concepts emphasize active involvement and a sense of
                responsibility.
              </p>
            </div>

            <div className="w-full max-w-[300px] h-[400px] bg-[#276BA3] bg-opacity-50 shadow-xl flex flex-col items-center">
              <div className="flex w-full justify-start">
                <div className="w-[70px] h-[5px] bg-white mt-5 ml-10"></div>
              </div>
              <h2 className="h-[100px] w-[280px] text-[25px] mt-5 font-bold ml-5 text-center">
                Encouragement of initiative ideas
              </h2>
              <img
                src={icon5}
                alt="Description of image"
                className="w-[150px] h-[150px] -mt-5"
              />
              <p className="w-[90%] text-[18px] text-center mt-4 text-white">
                Encouragement of initiative ideas means supporting and
                motivating new and creative ideas.
              </p>
            </div>

            <div className="w-full max-w-[300px] h-[400px] bg-[#276BA3] bg-opacity-50 shadow-xl flex flex-col items-center">
              <div className="flex w-full justify-start">
                <div className="w-[70px] h-[5px] bg-white mt-5 ml-10"></div>
              </div>
              <h2 className="h-[100px] w-[280px] text-[25px] mt-5 font-bold ml-5 text-center">
                Using of existing resources
              </h2>
              <img
                src={icon6}
                alt="Description of image"
                className="w-[150px] h-[150px] object-cover -mt-5"
              />
              <p className="w-[90%] text-[18px]  text-center mt-4 text-white">
                Using existing resources means utilizing what is already
                available to achieve goals efficiently.
              </p>
            </div>
          </div>
        </section>

        <div className="h-[150px] px-4 sm:px-6 lg:px-0">
          <h1 className="text-[20px] sm:text-[40px] lg:text-[48px] font-bold text-[#276BA3] flex items-center ml-0 sm:ml-[30px] lg:ml-[60px]">
            WHERE WE WORK
          </h1>
          <div className="w-[80px] sm:w-[100px] lg:w-[120px] h-[2px] sm:h-[4px] lg:h-[5px] lg:mt-5 ml-0 sm:ml-[30px] lg:ml-[60px] bg-[#F0990E]"></div>
        </div>

        <section className="h-auto w-full px-4 sm:px-6 lg:px-0">
          <div className="text-base sm:text-lg lg:text-[20px] lg:w-[45%] text-gray-500 ml-0 sm:ml-[20px] lg:ml-[100px] mb-10 lg:mt-0 -mt-[6rem]">
            <p>
              The Rabbit School currently works in Phnom Penh and three
              provinces in Cambodia. We have been active in Cambodia for many
              years, and receive strong support from the community’s in which we
              operate.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-row mt-10 justify-center">
            <div className="w-full sm:w-[25%] lg:w-[15%] flex flex-col items-center justify-between mb-8 sm:mb-0">
              <div className="w-full flex flex-col items-center text-center">
                <h1 className="text-lg sm:text-[18px] lg:text-[30px] text-blue-500">
                 4 SIEM REAP
                </h1>
                <p className="mt-2 lg:w-[300px] sm:mt-4 text-base sm:text-[16px] lg:text-[25px] leading-9 text-gray-600">
                  15 Inclusive/Integrated Classes in 5 Primary Schools
                </p>
              </div>
              <div className="w-full flex flex-col items-center text-center mt-8">
                <h1 className="text-lg sm:text-[18px] lg:text-[30px] text-blue-500">
                 3 KAMPONG SPEU
                </h1>
                <p className="mt-2 lg:w-[300px] sm:mt-4 text-base sm:text-[16px] lg:text-[25px] leading-9 text-gray-600">
                  15 Inclusive/Integrated Classes in 15 Primary Schools
                </p>
              </div>
            </div>

            <div className="w-full sm:w-[50%] lg:w-[50%] overflow-hidden">
              <img
                src={pic5}
                alt="Description of image"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="w-full sm:w-[25%] lg:w-[15%] flex flex-col items-center justify-between mt-8 sm:mt-0">
              <div className="w-full flex flex-col items-center text-center">
                <h1 className="text-lg sm:text-[18px] lg:text-[30px] text-blue-500">
                 1 PHNOM PENH
                </h1>
                <p className="mt-2 lg:w-[300px] sm:mt-4 text-base sm:text-[16px] lg:text-[25px] leading-9 text-gray-600">
                  18 Inclusive/Integrated Classes at 1 Primary School The
                  Vocational Training and Job Placement Centre in Phnom Penh
                </p>
              </div>
              <div className="w-full flex flex-col items-center text-center mt-8">
                <h1 className="text-lg sm:text-[18px] lg:text-[30px] text-blue-500">
                2 KANDAL
                </h1>
                <p className="mt-2 lg:w-[300px] sm:mt-4 text-base sm:text-[16px] lg:text-[25px] leading-9 text-gray-600">
                  15 Inclusive/Integrated Classes in 5 Primary Schools
                </p>
              </div>
            </div>
          </div>
        </section>

        <h1 className="lg:h-[200px] lg:text-[48px] text-[20px] text-center font-bold text-[#276BA3] flex items-center justify-center lg:mt-0 mt-10">
          PARTNERS
        </h1>

        <SliderPartner />

        <MainFunders />
        {/* <div className="px-4 md:px-8">
        <h1 className="text-[20px] md:text-[48px] font-bold text-[#276BA3] -ml-1 lg:ml-[50px] mx-auto max-w-[90%] md:max-w-[80%] lg:mt-0 mt-2">
          MAIN FUNDERS IN 2023
        </h1>
        <div className="flex lg:mt-4 md:mt-6">
          <div className="w-[100px] md:w-[150px] h-[2px] md:h-[5px] lg:ml-[50px] -ml-1  mx-1 md:mx-2 bg-[#F0990E]"></div>
          <div className="w-[30px] md:w-[50px] h-[2px] md:h-[5px] mx-1 md:mx-2 bg-[#F0990E]"></div>
          <div className="w-[20px] md:w-[30px] h-[2px] md:h-[5px] mx-1 md:mx-2 bg-[#F0990E]"></div>
          <div className="w-[15px] md:w-[20px] h-[2px] md:h-[5px] mx-1 md:mx-2 bg-[#F0990E]"></div>
          <div className="w-[10px] md:w-[15px] h-[2px] md:h-[5px] mx-1 md:mx-2 bg-[#F0990E]"></div>
        </div>
      </div>

      <section className="w-full flex justify-center items-center mt-8 mb-8 px-4 md:px-8">
        <div className="w-full max-w-[90%] md:max-w-[70%] h-auto">
          <img
            src={pic6}
            alt="Description of image"
            className="w-full h-auto object-cover"
          />
        </div>
      </section> */}
        <Footer />
      </StyledDiv>
    </>
  );
}

export default Homepage;
