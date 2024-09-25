import Menu from "../companents/Menu";
// import imageSrc from "../assets/images/pic4.jpeg";
import imageSrc from "../assets/images/image5.png";
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
import image1 from "../assets/images/teacher.jpg";
import image2 from "../assets/images/pic2.jpeg";
import image3 from "../assets/images/new4.jpg";
import image4 from "../assets/images/pic4.jpeg";
import image5 from "../assets/images/pic5.jpeg";
import image6 from "../assets/images/pic6.jpeg";
import React from "react";
import Footer from "../companents/Footer";
import styled from "styled-components";
import CardAction from "../companents/CardAction";

const StyledDiv = styled.div`
  font-family: "Inika", serif; /* Use the Inika font */
  font-size: 22px;
  color: black;
`;

import education1 from "../assets/images/training.jpg";

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

function DetailOurAction2() {
  return (
    <>
      <StyledDiv>
        <Menu />
        <div
          className="relative w-full lg:h-[700px] h-[250px] bg-cover bg-center lg:mb-[200px]"
          style={{ backgroundImage: `url(${pic2})` }}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="lg:h-[150px] h-[50px] lg:w-[1000px] w-[300px] bg-[#276BA3] flex justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 text-white lg:mt-[700px] mt-[250px]">
              <h1 className="lg:text-[50px] font-bold text-center">
                {" "}
                TEACHER TRAINING AND CURRICULUM DEVELOPMENT{" "}
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
              We prepare teachers to work with children with intellectual
              disabilities and make them able to assess, follow and provide
              individually adapted education and complementary rehabilitation
              services to our students.
            </p>
          </div>
        </section>

        <section className="lg:mt-[100px] mt-[50px] flex  md:flex-row  flex-col-reverse">
          <div className="lg:w-[50%] lg:ml-[30px]">
            <div className=" px-4 sm:px-6 lg:px-0  ">
              <h1 className="text-[20px] sm:text-[40px] lg:text-[48px] font-bold text-[#276BA3] flex items-center ml-0 sm:ml-[30px] lg:ml-[60px]">
                A tailor-made training program
              </h1>
              <div className="w-[80px] sm:w-[100px] lg:w-[120px] h-[2px] sm:h-[4px] lg:h-[5px] lg:mt-5 ml-0 sm:ml-[30px] lg:ml-[60px] bg-[#F0990E]"></div>
            </div>
            <p className="lg:ml-[60px] w-[90%] ml-[15px] mt-[10px]  text-[10px] lg:text-[20px] lg:mt-[40px]">
              <span className="font-bold">
                We started our training in 2010 with the help of The University
                of London
              </span>{" "}
              so that the teachers could increase their knowledge of working
              with disabled children. With them, we worked on the{" "}
              <span className="font-bold">
                {" "}
                quality of teaching, capacity building, and child-friendly
                activities.
              </span>{" "}
              Since that time, we aim to improve constantly the quality of our
              educational services, and we regularly organize training in Phnom
              Penh and in other provinces.
            </p>

            <div className=" px-4 sm:px-6 lg:px-0 lg:mt-[100px] ">
              <h1 className="text-[20px] sm:text-[40px] lg:text-[48px] font-bold text-[#276BA3] flex items-center ml-0 sm:ml-[30px] lg:ml-[60px] lg:mt-0 mt-5">
                Various supports, trainings for all stakeholders
              </h1>
              <div className="w-[80px] sm:w-[100px] lg:w-[120px] h-[2px] sm:h-[4px] lg:h-[5px] lg:mt-5 ml-0 sm:ml-[30px] lg:ml-[60px] bg-[#F0990E]"></div>
            </div>
            <p className="lg:ml-[60px] w-[90%] lg:text-[20px] lg:mt-[40px] ml-[15px] mt-[10px]  text-[10px]">
              <span className="font-bold">
                We train teachers to individually assess students and to set up
                Individual Education Programs for each student.
              </span>{" "}
              We also organize
              <span className="font-bold">
                monthly meetings with our teachers
              </span>{" "}
              to discuss the challenges they face and work to increase better
              communication between teachers and children.
            </p>
            <p className="lg:ml-[60px] w-[90%] lg:text-[20px] lg:mt-[40px] ml-[15px] mt-[10px]  text-[10px]">
              <span className="font-bold">
                Our teachers also participate in various training organized by
                NGO partners and local special education trainers.
              </span>{" "}
              Moreover, The Rabbit School develops curriculum programs and
              manuals on special education for the use of teachers and parents.
            </p>
            <p className="lg:ml-[60px] w-[90%] lg:text-[20px] lg:mt-[40px] ml-[15px] mt-[10px]  text-[10px] font-bold">
              These trainings not only benefit primary school teachers but also
              school directors, members of Provincial and District of Education
              authorities, members of the Communes Committees, and members of
              civil society.
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
                      className="w-[100%] lg:h-[1060px] object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        <CardAction />
        <Footer/>
      </StyledDiv>
    </>
  );
}

export default DetailOurAction2;
