import Menu from "../companents/Menu";
import imageSrc from "../assets/images/image5.png";
import services1 from "../assets/images/headerOurAction.png";
import services2 from "../assets/images/1.jpg";
import services3 from "../assets/images/3.jpeg";
import pic1 from "../assets/images/pic1.jpeg";
import pic2 from "../assets/images/pic2.jpeg";
import pic3 from "../assets/images/pic3.jpeg";
import pic4 from "../assets/images/pic4.jpeg";
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
      <div
  className="relative w-full h-[700px] bg-cover bg-center"
  style={{ backgroundImage: `url(${imageSrc})` }}
>
  <div className="absolute inset-0 flex justify-center items-center">
    <div className="bg-black bg-opacity-30 h-full w-full flex flex-col justify-center items-start px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="flex flex-col items-start gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
          <h1 className="font-bold text-[50px] sm:text-[60px] md:text-[75px] lg:text-[90px] text-[#F0990E]">What</h1>
          <h1 className="font-bold text-[40px] sm:text-[50px] md:text-[60px] lg:text-[75px] text-white mt-2 sm:mt-0">we do</h1>
        </div>
        <p className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:w-[500px] lg:-mt-10">We provide different levels of Individual adapted education to Children with intellectual disabilities</p>
        <ButtonDonate className="mt-4 sm:mt-6 md:mt-8 lg:mt-10" />
      </div>
    </div>
  </div>
</div>


      <section className="h-auto md:h-[800px] w-full flex flex-col md:flex-row justify-center items-center px-4">
  <div className="w-full max-w-[1000px]">
    <div className="bg-black bg-opacity-50 lg:h-[500px] h-[200px] w-full"></div>
    <p className="text-lg md:text-2xl mt-5 text-center text-black px-4">
      The Rabbit School provides different levels of special education
      according to the severity of the disability. The child can run all
      the programs or just choose one specific program, according to his
      “individual development plan”.
    </p>
  </div>
</section>


      <section className="p-4">
        <div className="flex flex-wrap justify-center gap-[5rem]">
          {/* Block 1 */}
          <div className="w-full sm:w-[20rem] h-[25rem] flex flex-col">
            <div className="w-full h-[50%] bg-orange-400">
              <img
                src={pic1}
                alt="Description of image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[50%] bg-[#276BA3] bg-opacity-80 flex flex-col justify-center items-center">
              {/* Blue Box Header */}
              <div className="w-[15rem] h-[4rem] bg-[#276BA3] flex justify-center items-center -mt-[2rem] shadow-xl">
                <p className="text-white lg:text-[18px] text-[15px] text-center font-bold">
                Education
                </p>
              </div>
              {/* Additional Text */}
              <div className="w-[80%] mt-4 text-center">
                <p className="text-white lg:text-[15px] text-[10px] mb-2">
                  We raise awareness and advocate for the rights of individuals
                  with disabilities.
                </p>
              </div>
              <ButtonReadMore />
            </div>
          </div>

          {/* Block 2 */}
          <div className="w-full sm:w-[20rem] h-[25rem] flex flex-col">
            <div className="w-full h-[50%] bg-orange-400">
              <img
                src={pic2}
                alt="Description of image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[50%] bg-[#276BA3] bg-opacity-80 flex flex-col justify-center items-center">
              {/* Blue Box Header */}
              <div className="w-[15rem] h-[4rem] bg-[#276BA3] flex justify-center items-center -mt-[2rem] shadow-xl">
                <p className="text-white lg:text-[18px] text-[15px] text-center font-bold">
                  Teacher Training and Curriculum Development
                </p>
              </div>
              {/* Additional Text */}
              <div className="w-[80%] mt-4 text-center">
                <p className="text-white lg:text-[15px] text-[10px] mb-2">
                  We offer comprehensive training for teachers and develop
                  curriculum to enhance educational outcomes.
                </p>
              </div>
              <ButtonReadMore />
            </div>
          </div>

          {/* Block 3 */}
          <div className="w-full sm:w-[20rem] h-[25rem] flex flex-col">
            <div className="w-full h-[50%] bg-orange-400">
              <img
                src={pic3}
                alt="Description of image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[50%] bg-[#276BA3] bg-opacity-80 flex flex-col justify-center items-center">
              {/* Blue Box Header */}
              <div className="w-[15rem] h-[4rem] bg-[#276BA3] flex justify-center items-center -mt-[2rem] shadow-xl">
                <p className="text-white lg:text-[18px] text-[15px] text-center font-bold">
                  Awareness and Advocacy
                </p>
              </div>
              {/* Additional Text */}
              <div className="w-[80%] mt-4 text-center">
                <p className="text-white lg:text-[15px] text-[10px] mb-2">
                  We raise awareness and advocate for the rights of individuals
                  with disabilities.
                </p>
              </div>
              <ButtonReadMore />
            </div>
          </div>

          {/* Block 4 */}
          <div className="w-full sm:w-[20rem] h-[25rem] flex flex-col">
            <div className="w-full h-[50%] bg-orange-400">
              <img
                src={pic4}
                alt="Description of image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[50%] bg-[#276BA3] bg-opacity-80 flex flex-col justify-center items-center">
              {/* Blue Box Header */}
              <div className="w-[15rem] h-[4rem] bg-[#276BA3] flex justify-center items-center -mt-[2rem] shadow-xl">
                <p className="text-white lg:text-[18px] text-[15px] text-center font-bold">
                  Vocational Training and Job Placement
                </p>
              </div>
              {/* Additional Text */}
              <div className="w-[80%] mt-4 text-center">
                <p className="text-white lg:text-[15px] text-[10px] mb-2">
                  We provide vocational training and job placement services to
                  support employment opportunities.
                </p>
              </div>
              <ButtonReadMore />
            </div>
          </div>
        </div>
      </section>

      <section>
      <div className="px-4 md:px-8 lg:mb-[4rem] lg:mt-[2rem] lg:ml-[4rem]">
        <h1 className="text-[20px] md:text-[48px] font-bold text-[#276BA3] -ml-1 lg:ml-[50px] mx-auto max-w-[90%] md:max-w-[80%] lg:mt-0 mt-2">
        ADDITIONAL SERVICES
        </h1>
        <div className="flex lg:mt-4 md:mt-6">
          <div className="w-[150px] md:w-[150px] h-[2px] md:h-[5px] lg:ml-[50px] -ml-1  mx-1 md:mx-2 bg-[#F0990E]"></div>
          <div className="w-[30px] md:w-[50px] h-[2px] md:h-[5px] mx-1 md:mx-2 bg-[#F0990E]"></div>
          <div className="w-[20px] md:w-[30px] h-[2px] md:h-[5px] mx-1 md:mx-2 bg-[#F0990E]"></div>
          <div className="w-[15px] md:w-[20px] h-[2px] md:h-[5px] mx-1 md:mx-2 bg-[#F0990E]"></div>
          <div className="w-[10px] md:w-[15px] h-[2px] md:h-[5px] mx-1 md:mx-2 bg-[#F0990E]"></div>
        </div>
      </div>
        <div className="flex justify-center gap-[2rem] ">
          <div
            className="relative w-[500px] h-[350px] bg-cover bg-center "
            style={{ backgroundImage: `url(${services1})` }}
          >
            <div className="absolute inset-0 flex justify-center items-center font-bold ">
              <div className="bg-black bg-opacity-50 p-5 w-screen ">
                <h1 className="text-center text-white text-[25px]">
                  language and speech therapy
                </h1>
              </div>
            </div>
          </div>

          <div
            className="relative w-[500px] h-[350px] bg-cover bg-center mt-[2.50rem] "
            style={{ backgroundImage: `url(${services2})` }}
          >
            <div className="absolute inset-0 flex justify-center items-center font-bold ">
              <div className="bg-black bg-opacity-50 p-5 w-screen ">
                <h1 className="text-center text-white text-[25px]">
                  parent support
                </h1>
              </div>
            </div>
          </div>

          <div
            className="relative w-[500px] h-[350px] bg-cover bg-center "
            style={{ backgroundImage: `url(${services3})` }}
          >
            <div className="absolute inset-0 flex justify-center items-center font-bold ">
              <div className="bg-black bg-opacity-50 p-5 w-screen ">
                <h1 className="text-center text-white text-[25px]">
                  out of school children program
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[10rem] ">
      <div className="px-4 md:px-8 lg:mb-[4rem] lg:mt-[2rem] lg:ml-[4rem]">
        <h1 className="text-[20px] md:text-[48px] font-bold text-[#276BA3] -ml-1 lg:ml-[50px] mx-auto max-w-[90%] md:max-w-[80%] lg:mt-0 mt-2">
        Defending people with disabilities rights at national and local level
        </h1>
        <div className="w-[100px] md:w-[150px] h-[2px] lg:h-[5px] lg:ml-[3rem] lg:mt-5 bg-[#F0990E]"></div>

        <div className="flex lg:mt-4 md:mt-6">

        </div>
      </div>


              <div className=" w-[85%] m-[auto] h-[100%] lg:-mt-8 ">
                <Slider {...settings}>
                  {images.map((image, index) => (
                    <div key={index}>
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-[100%] h-[700px] object-cover mt-10 mb-[50rem] "
                      />
                      
                    </div>
                  ))}
                </Slider>
              </div>
            
      </section>
    </>
  );
}

export default OurAction;
