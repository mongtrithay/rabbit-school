import Menu from "../companents/Menu";
// import imageSrc from "../assets/images/pic4.jpeg";
import imageSrc from "../assets/images/image5.png";
import services2 from "../assets/images/1.jpg";
import detail3 from "../assets/images/detail3.jpg";
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
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    font-family: 'Inika', serif;  /* Use the Inika font */
    font-size: 22px;
    color: black;
`

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

function DetailOurAction3() {
  return (
    <>
    <StyledDiv>
      <Menu />
      <div
        className="relative w-full lg:h-[700px] h-[250px] bg-cover bg-center lg:mb-[200px]"
        style={{ backgroundImage: `url(${pic3})` }}
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="lg:h-[150px] h-[50px] lg:w-[1000px] w-[200px] bg-[#276BA3] flex justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 text-white lg:mt-[700px] mt-[250px]">
            <h1 className="lg:text-[50px] font-bold text-center">
              RAISING AWARENESS AND ADVOCACY
            </h1>
          </div>
        </div>
      </div>

      <section className="flex justify-center lg:mt-[5rem] mt-[3rem]">
        <div className="flex w-[90%]">
          <div className="lg:w-[50rem] w-[300px]  lg:h-[30rem]">
            <img
              src={detail3}
              alt="Description of image"
              className="w-full h-full object-cover border-[#276BA3] shadow-lg border-4"
            />
          </div>
          {/* <h1 className="">Promoting Inclusive and Integrated Education</h1> */}
          <p className="lg:ml-[2rem] ml-[1rem] lg:w-[45%] w-[250px] lg:text-[30px]  text-[10px] font-bold flex lg:justify-center lg:items-center text-center text-[#276BA3]">
            At The Rabbit School, we actively engage in a range of initiatives
            dedicated to raising awareness and advocating for the rights and
            well-being of individuals with intellectual disabilities in
            Cambodia.
          </p>
        </div>
      </section>

      <section className="lg:mt-[50px] mt-[50px] flex  md:flex-row  flex-col-reverse">
        <div className="lg:w-[50%] lg:ml-[30px]">
          <div className=" px-4 sm:px-6 lg:px-0  ">
            <h1 className="text-[20px] sm:text-[40px] lg:text-[48px] font-bold text-[#276BA3] flex items-center ml-0 sm:ml-[30px] lg:ml-[60px]">
              Transforming perception of disability
            </h1>
            <div className="w-[80px] sm:w-[100px] lg:w-[120px] h-[2px] sm:h-[4px] lg:h-[5px] lg:mt-5 ml-0 sm:ml-[30px] lg:ml-[60px] bg-[#F0990E]"></div>
          </div>
          <p className="lg:ml-[60px] w-[90%] ml-[15px] mt-[10px]  text-[10px] lg:text-[20px] lg:mt-[40px]">
            Our comprehensive approach includes organizing impactful awareness
            events on{" "}
            <span className="font-bold">
              significant occasions such as Autism Day, Children's Day, and Day
              for People with Intellectual Disabilities.
            </span>{" "}
            Additionally, we actively engage in lobbying efforts targeting
            government officials at both local and national levels, striving to
            bring about positive change in policies and support systems.
          </p>

          <div className=" px-4 sm:px-6 lg:px-0 lg:mt-[100px] ">
            <h1 className="text-[20px] sm:text-[40px] lg:text-[48px] font-bold text-[#276BA3] flex items-center ml-0 sm:ml-[30px] lg:ml-[60px] lg:mt-0 mt-5">
              Involving key stakeholders
            </h1>
            <div className="w-[80px] sm:w-[100px] lg:w-[120px] h-[2px] sm:h-[4px] lg:h-[5px] lg:mt-5 ml-0 sm:ml-[30px] lg:ml-[60px] bg-[#F0990E]"></div>
          </div>
          <p className="lg:ml-[60px] w-[90%] lg:text-[20px] lg:mt-[40px] ml-[15px] mt-[10px]  text-[10px]">
            In each of our events, <span className="font-bold"> community collaboration takes precedence as
            we strive to ensure their inclusion at every stage of preparation</span>
            and on the day of the event. Moreover, we actively encourage the
            participation of parents of our students, recognizing their vital
            role as the primary ambassadors of our cause.
          </p>


        </div>

        <div className="lg:w-[50%] h-[auto] lg:ml-[50px]">
          <div className=" w-[100%] m-[auto] h-[100%] ">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-[100%] lg:h-[710px] object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="lg:p-4 p-8 lg:mt-10">
        <div className="flex lg:items-center lg:justify-center lg:gap-[5rem] overflow-x-auto gap-4 snap-x snap-mandatory ">
          {/* Block 2 */}
          <div className="flex-shrink-0 w-[20rem] h-[25rem] flex flex-col snap-start">
            <div className="w-full lg:h-[50%] h-[47%] bg-orange-400">
              <img
                src={pic2}
                alt="Description of image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:h-[50%] h-[47%] bg-[#276BA3] bg-opacity-80 flex flex-col justify-center items-center">
              {/* Blue Box Header */}
              <div className="w-[15rem] h-[4rem] bg-[#276BA3] flex justify-center items-center lg:-mt-[2rem] -mt-[2rem] shadow-xl">
                <p className="text-white lg:text-[18px] text-[18px] text-center font-bold">
                  Teacher Training and Curriculum Development
                </p>
              </div>
              {/* Additional Text */}
              <div className="w-[80%] mt-4 text-center">
                <p className="text-white lg:text-[15px] text-[15px] mb-2">
                  We prepare teachers to work with children with intellectual
                  disabilities and make them able to assess...
                </p>
              </div>
              <ButtonReadMore />
            </div>
          </div>

                  {/* Block 1 */}
                  <div className="flex-shrink-0 w-[20rem] h-[25rem] flex flex-col snap-start">
            <div className="w-full lg:h-[50%] h-[47%] bg-orange-400">
              <img
                src={pic1}
                alt="Description of image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:h-[50%] h-[47%] bg-[#276BA3] bg-opacity-80 flex flex-col justify-center items-center">
              {/* Blue Box Header */}
              <div className="w-[15rem] h-[4rem] bg-[#276BA3] flex justify-center items-center lg:-mt-[2rem] -mt-[2rem] shadow-xl">
                <p className="text-white lg:text-[18px] text-[18px] text-center font-bold">
                  Education
                </p>
              </div>
              {/* Additional Text */}
              <div className="w-[80%] mt-4 text-center">
                <p className="text-white lg:text-[15px] text-[15px] mb-2">
                  The Rabbit School provides different levels of special
                  education according to the severity of the disability.
                </p>
              </div>
              <ButtonReadMore />
            </div>
          </div>
          {/* Block 4 */}
          <div className="flex-shrink-0 w-[20rem] h-[25rem] flex flex-col snap-start">
            <div className="w-full lg:h-[50%] h-[47%] bg-orange-400">
              <img
                src={pic4}
                alt="Description of image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:h-[50%] h-[47%] bg-[#276BA3] bg-opacity-80 flex flex-col justify-center items-center">
              {/* Blue Box Header */}
              <div className="w-[15rem] h-[4rem] bg-[#276BA3] flex justify-center items-center lg:-mt-[2rem] -mt-[2rem] shadow-xl">
                <p className="text-white lg:text-[18px] text-[18px] text-center font-bold">
                  Vocational Training and Job Placement
                </p>
              </div>
              {/* Additional Text */}
              <div className="w-[80%] mt-4 text-center">
                <p className="text-white lg:text-[15px] text-[15px] mb-2">
                  In Cambodia, people with intellectual disabilities have great
                  difficulty finding a job.
                </p>
              </div>
              <ButtonReadMore />
            </div>
          </div>
        </div>
      </section>
      </StyledDiv>
    </>
  );
}

export default DetailOurAction3;
