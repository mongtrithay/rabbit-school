import Menu from "../companents/Menu";
// import imageSrc from "../assets/images/pic4.jpeg";
import imageSrc from "../assets/images/headerHome.jpg";
import services2 from "../assets/images/1.jpg";
import services3 from "../assets/images/3.jpeg";
// import pic1 from "../assets/images/HeaderOurAction.jpeg";
import pic2 from "../assets/images/card2.jpg";
import pic3 from "../assets/images/card3.jpg";
import pic4 from "../assets/images/card4.jpg";
import ButtonReadMore from "../companents/ButtonReadMore";
import ButtonDonate from "../companents/ButtonDonate";
// import LineStyle from "../companents/LineStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/images/image3.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/pic3.jpeg";
import image4 from "../assets/images/pic4.jpeg";
import image5 from "../assets/images/pic5.jpeg";
import image6 from "../assets/images/pic6.jpeg";
import CardAction from "../companents/CardAction";
import Footer from "../companents/Footer";
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-family: "Inika", serif; /* Use the Inika font */
  font-size: 22px;
  color: black;
`;

import education1 from "../assets/images/education1.jpeg";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: false,
};

const images = [image1, image2, image3, image4, image5, image6];

function DetailOurAction1() {
  return (
    <>
      <StyledDiv>
        <Menu />
        <div
          className="relative w-full lg:h-[700px] h-[250px] bg-cover bg-center lg:mb-[200px]"
          style={{ backgroundImage: `url(${imageSrc})` }}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="lg:h-[100px] h-[50px] lg:w-[600px] w-[200px] bg-[#276BA3] flex justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 text-white lg:mt-[700px] mt-[250px]">
              <h1 className="lg:text-[50px] font-bold text-center">
                EDUCATION
              </h1>
            </div>
          </div>
        </div>

        <section className="flex justify-center lg:mt-[5rem] mt-[3rem]">
          <div className="flex w-[90%]">
            <div className="lg:w-[50rem] w-[300px]  lg:h-[30rem]">
              <img
                src={education1}
                alt="Description of image"
                className="w-full h-full object-cover border-[#276BA3] shadow-lg border-4"
              />
            </div>
            {/* <h1 className="">Promoting Inclusive and Integrated Education</h1> */}
            <p className="lg:ml-[2rem] ml-[1rem] lg:w-[45%] w-[250px] lg:text-[30px]  text-[10px] font-bold flex lg:justify-center lg:items-center text-center text-[#276BA3]">
              The Rabbit School provides different levels of special education
              according to the severity of the disability. The child can run all
              the programs or just choose a specific one, according to his
              individual development plan.
            </p>
          </div>
        </section>

        <section className="lg:mt-[100px] mt-[50px] flex  md:flex-row  flex-col-reverse ">
          <div className="lg:w-[50%] lg:ml-[30px]">
            <div className=" px-4 sm:px-6 lg:px-0 lg:mt-0 mt-10 ">
              <h1 className="text-[20px] sm:text-[40px] lg:text-[48px] font-bold text-[#276BA3] flex items-center ml-0 sm:ml-[30px] lg:ml-[60px]">
                Special Class
              </h1>
              <div className="w-[80px] sm:w-[100px] lg:w-[120px] h-[2px] sm:h-[4px] lg:h-[5px] lg:mt-5 ml-0 sm:ml-[30px] lg:ml-[60px] bg-[#F0990E]"></div>
            </div>
            <p className="lg:ml-[60px] w-[90%] ml-[15px] mt-[10px]  text-[10px] lg:text-[20px] lg:mt-[40px]">
              This class educates and stimulates children with moderate to
              severe disabilities who may need more attention. They receive
              adapted education and support in physiotherapy, occupational
              therapy, speech therapy, psychology, and health services.
            </p>

            <div className=" px-4 sm:px-6 lg:px-0 lg:mt-[100px] ">
              <h1 className="text-[20px] sm:text-[40px] lg:text-[48px] font-bold text-[#276BA3] flex items-center ml-0 sm:ml-[30px] lg:ml-[60px] lg:mt-0 mt-5">
                Readiness class
              </h1>
              <div className="w-[80px] sm:w-[100px] lg:w-[120px] h-[2px] sm:h-[4px] lg:h-[5px] lg:mt-5 ml-0 sm:ml-[30px] lg:ml-[60px] bg-[#F0990E]"></div>
            </div>
            <p className="lg:ml-[60px] w-[90%] lg:text-[20px] lg:mt-[40px] ml-[15px] mt-[10px]  text-[10px]">
              In this class, children with mild to moderate disabilities receive
              tailored education and acquire essential self-help skills that
              equip them for successful integration into mainstream public
              schools with inclusive learning environments.
            </p>

            <div className=" px-4 sm:px-6 lg:px-0 lg:mt-[100px] ">
              <h1 className="text-[20px] sm:text-[40px] lg:text-[48px] font-bold text-[#276BA3] flex items-center ml-0 sm:ml-[30px] lg:ml-[60px] lg:w-[500px] lg:mt-0 mt-5">
                Inclusive and integrated Education
              </h1>
              <div className="w-[80px] sm:w-[100px] lg:w-[120px] h-[2px] sm:h-[4px] lg:h-[5px] lg:mt-5 ml-0 sm:ml-[30px] lg:ml-[60px] bg-[#F0990E]"></div>
            </div>
            <p className="lg:ml-[60px] w-[90%] lg:text-[20px] lg:mt-[40px] ml-[15px] mt-[10px]  text-[10px]">
              This program responds to the needs of children with mild to
              moderate intellectual disabilities. This program makes it possible
              for disabled children to learn alongside non-disabled students in
              ordinary schools. They receive adapted education and learn social
              skills through integration in specially built classrooms. These
              children can eventually join ordinary classes among non-disabled
              students.
            </p>
          </div>

          <div className="lg:w-[50%] h-[auto] lg:ml-[50px] ">
            <div className=" w-[100%] m-[auto] h-[100%] ">
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-[100%] lg:h-[1060px] object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
        <CardAction />
        <Footer />
      </StyledDiv>
    </>
  );
}

export default DetailOurAction1;
