import Menu from "../companents/Menu";
import imageSrc from "../assets/images/image6.jpg";
import services1 from "../assets/images/headerOurAction.png";
import services2 from "../assets/images/1.jpg";
import services3 from "../assets/images/3.jpeg";
import pic1 from "../assets/images/headerOurAction.png";
import pic2 from "../assets/images/card2.jpg";
import pic3 from "../assets/images/card3.jpg";
import pic4 from "../assets/images/card4.jpg";
import ButtonReadMore from "../companents/ButtonReadMore";
import ButtonDonate from "../companents/ButtonDonate";
// import LineStyle from "../companents/LineStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/images/pic1.jpeg";
import image2 from "../assets/images/pic2.jpeg";
import image3 from "../assets/images/pic3.jpeg";
import image4 from "../assets/images/pic4.jpeg";
import image5 from "../assets/images/pic5.jpeg";
import image6 from "../assets/images/pic6.jpeg";
import VideoOurAction from "../companents/VideoOurAction";
import OurActionSlider from "../companents/OurActionSlider";
import React from "react";
import styled from "styled-components";
import CardAction from "../companents/CardAction";
import Footer from "../companents/Footer";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  font-family: "Inika", serif; /* Use the Inika font */
  font-size: 22px;
  color: black;
`;

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
};

const images = [image1, image2, image3, image4, image5, image6];

function OurAction() {
  return (
    <>
      <Menu />

      <StyledDiv>
        <div
          className="relative w-full lg:h-[700px] h-[400px] bg-cover bg-center"
          style={{ backgroundImage: `url(${imageSrc})` }}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-black bg-opacity-30 h-full w-full flex flex-col justify-center items-start px-4 sm:px-8 md:px-12 lg:px-16">
              <div className="flex flex-col items-start gap-4 sm:gap-6 md:gap-8 lg:gap-10 ">
                <div className="flex  sm:flex-row sm:items-center lg:w-[auto] w-[500px] gap-3 sm:gap-10">
                  <h1 className="font-bold text-[50px] sm:text-[60px] md:text-[75px] lg:text-[100px] text-[#F0990E]">
                    What
                  </h1>
                  <h1 className="font-bold text-[40px] sm:text-[50px] md:text-[60px] lg:text-[90px] text-white mt-2 sm:mt-0 ">
                    we do
                  </h1>
                </div>
                <p className="text-white text-[15px] sm:text-[18px]  md:text-[20px] lg:text-[25px] lg:w-[500px] w-[250px] lg:-mt-10 -mt-5 ml-[5px] lg:-mb-0 -mb-5">
                  We provide different levels of Individual adapted education to
                  Children with intellectual disabilities
                </p>

                <Link to="/buttonDonate">
                  <ButtonDonate />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section className="h-auto md:h-[800px] w-full flex flex-col md:flex-row justify-center items-center px-4">
          <div className="w-full max-w-[1000px]">
            <div className="bg-black bg-opacity-50 lg:h-[500px] h-[200px] w-full lg:mt-0 mt-4">
              <VideoOurAction />
            </div>
            <p className=" md:text-2xl lg:mt-[100px] mt-5 text-center text-black ">
              The Rabbit School provides different levels of special education
              according to the severity of the disability. The child can run all
              the programs or just choose one specific program, according to his
              “individual development plan”.
            </p>
          </div>
        </section>
        <CardAction />
        <section>
          <div className="px-4 md:px-8 lg:mb-[4rem] lg:mt-[2rem]  -mt-5 lg:ml-[4rem] mb-10">
            <h1 className="text-[20px] md:text-[48px] font-bold text-[#276BA3] -ml-1 lg:ml-[50px] mx-auto max-w-[90%] md:max-w-[80%] lg:mt-0 mt-2 ">
              Additional services
            </h1>
            <div className="flex lg:mt-4 md:mt-6">
              <div className="w-[65px] lg:w-[150px] md:w-[150px] h-[2px] md:h-[5px] lg:ml-[50px] -ml-1  mx-1 md:mx-2 bg-[#F0990E]"></div>
            </div>
          </div>

          <div className="flex justify-center lg:gap-[2rem] gap-2 ">
            <div
              className="relative lg:w-[500px] w-[150px] lg:h-[350px] h-[100px] bg-cover bg-center "
              style={{ backgroundImage: `url(${services1})` }}
            >
              <div className="absolute inset-0 flex justify-center items-center font-bold ">
                <div className="bg-black bg-opacity-50 lg:p-5 lg:h-[100px] h-[40px] flex items-center justify-center  w-screen ">
                  <h1 className="text-center text-white lg:text-[25px] text-[12px]">
                    language and speech therapy
                  </h1>
                </div>
              </div>
            </div>

            <div
              className="relative lg:w-[500px] w-[150px] lg:h-[350px] h-[100px] bg-cover bg-center lg:mt-[2.50rem] mt-[0.70rem] "
              style={{ backgroundImage: `url(${services2})` }}
            >
              <div className="absolute inset-0 flex justify-center items-center font-bold ">
                <div className="bg-black bg-opacity-50 lg:p-5 lg:h-[100px] h-[40px] flex items-center justify-center  w-screen ">
                  <h1 className="text-center text-white lg:text-[25px] text-[12px]">
                    parent support
                  </h1>
                </div>
              </div>
            </div>

            <div
              className="relative lg:w-[500px] w-[150px] lg:h-[350px] h-[100px] bg-cover bg-center "
              style={{ backgroundImage: `url(${services3})` }}
            >
              <div className="absolute inset-0 flex justify-center items-center font-bold ">
                <div className="bg-black bg-opacity-50 lg:p-5 lg:h-[100px] h-[40px] flex items-center justify-center  w-screen ">
                  <h1 className="text-center text-white lg:text-[25px] text-[12px]">
                    out of school children program
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lg:mb-[50px] ">
          <div className="px-4 md:px-8 lg:mb-[4rem] lg:mt-[2rem] mt-[2rem] lg:ml-[4rem]">
            <h1 className="text-[20px] md:text-[48px] font-bold text-[#276BA3] -ml-1 lg:ml-[50px] mx-auto max-w-[90%] md:max-w-[80%] lg:w-[100] lg:mt-0 mt-2">
              Defending people with disabilities rights at national and local
              level
            </h1>
            <div className="w-[100px] md:w-[150px] h-[2px] lg:h-[5px] lg:ml-[3rem] lg:mt-5 bg-[#F0990E]"></div>
            <div className="flex lg:mt-4 md:mt-6"></div>
          </div>

          <div className="flex justify-center items-center ">
            <OurActionSlider />
          </div>
        </section>

        <section>
          <Footer />
        </section>
      </StyledDiv>
    </>
  );
}

export default OurAction;
