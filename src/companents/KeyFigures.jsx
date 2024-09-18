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

function KeyFigures() {
  return (
    <>
      <section>
        <div className="w-[100%] h-[1100px] hidden lg:block lg:mt-[100px]">

          <div className="lg:h-[150px lg:-ml-0 -ml-10 -mt-[60px] mb-[80px]">
            <h1 className="h-[100px] lg:text-[48px] text-[20px]  font-bold text-[#276BA3] flex items-center ml-[60px]">
              KEY FIGURES
            </h1>
            <div className="w-[120px] lg:h-[5px]  ml-[60px] lg:-mt-0 -mt-5 bg-[#F0990E]"></div>
          </div>

          <div className="w-full h-full flex justify-evenly mt-[1rem] items-center ml-8">
            <div className="lg:w-[48%] w-[48%] lg:h-full lg:ml-5  lg:-mt-[6rem] ">
              <div className="flex items-center m-[3rem] w-[80%] h-[110px] bg-[#276BA3] bg-opacity-50">
                <div className="lg:h-[80px] h-[40px] w-[50px] lg:w-[82px] bg-[#276BA3] text-white ml-[-40px] rotate-[45deg] flex justify-center items-center">
                  <span className="lg:text-[2rem] text-[1rem] font-bold rotate-[-45deg]">
                    268
                  </span>
                </div>
                <div className="lg:w-full lg:h-full flex justify-center items-center">
                  <p className="ml-[25px] lg:text-[20px] text-[10px] leading-[1.5] ">
                    Children with intellectual disabilities access to school
                    thanks to the RSO in 2023. The biggest school, in Phnom
                    Penh, welcomes 198 students.
                  </p>
                </div>
              </div>

              <div className="flex items-center m-[3rem] w-[80%] h-[110px] bg-[#276BA3] bg-opacity-50">
                <div className="h-[80px] w-[82px] bg-[#276BA3] text-white ml-[-40px] rotate-[45deg] flex justify-center items-center">
                  <span className="text-[2rem] font-bold rotate-[-45deg]">
                    268
                  </span>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <p className="ml-[25px] text-[20px] leading-[1.5]">
                    Children with intellectual disabilities access to school
                    thanks to the RSO in 2023. The biggest school, in Phnom
                    Penh, welcomes 198 students.
                  </p>
                </div>
              </div>

              <div className="flex items-center m-[3rem] w-[80%] h-[110px] bg-[#276BA3] bg-opacity-50">
                <div className="h-[80px] w-[82px] bg-[#276BA3] text-white ml-[-40px] rotate-[45deg] flex justify-center items-center">
                  <span className="text-[2rem] font-bold rotate-[-45deg]">
                    268
                  </span>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <p className="ml-[25px] text-[20px] leading-[1.5]">
                    Children with intellectual disabilities access to school
                    thanks to the RSO in 2023. The biggest school, in Phnom
                    Penh, welcomes 198 students.
                  </p>
                </div>
              </div>

              <div className="flex items-center m-[3rem] w-[80%] h-[110px] bg-[#276BA3] bg-opacity-50">
                <div className="h-[80px] w-[82px] bg-[#276BA3] text-white ml-[-40px] rotate-[45deg] flex justify-center items-center">
                  <span className="text-[2rem] font-bold rotate-[-45deg]">
                    268
                  </span>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <p className="ml-[25px] text-[20px] leading-[1.5]">
                    Children with intellectual disabilities access to school
                    thanks to the RSO in 2023. The biggest school, in Phnom
                    Penh, welcomes 198 students.
                  </p>
                </div>
              </div>

              <div className="flex items-center m-[3rem] w-[80%] h-[110px] bg-[#276BA3] bg-opacity-50">
                <div className="h-[80px] w-[82px] bg-[#276BA3] text-white ml-[-40px] rotate-[45deg] flex justify-center items-center">
                  <span className="text-[2rem] font-bold rotate-[-45deg]">
                    268
                  </span>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <p className="ml-[25px] text-[20px] leading-[1.5]">
                    Children with intellectual disabilities access to school
                    thanks to the RSO in 2023. The biggest school, in Phnom
                    Penh, welcomes 198 students.
                  </p>
                </div>
              </div>

              <div className="flex items-center m-[3rem] w-[80%] h-[110px] bg-[#276BA3] bg-opacity-50">
                <div className="h-[80px] w-[82px] bg-[#276BA3] text-white ml-[-40px] rotate-[45deg] flex justify-center items-center">
                  <span className="text-[2rem] font-bold rotate-[-45deg]">
                    268
                  </span>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <p className="ml-[25px] text-[20px] leading-[1.5]">
                    Children with intellectual disabilities access to school
                    thanks to the RSO in 2023. The biggest school, in Phnom
                    Penh, welcomes 198 students.
                  </p>
                </div>
              </div>

              <div className="flex items-center m-[3rem] w-[80%] h-[110px] bg-[#276BA3] bg-opacity-50">
                <div className="h-[80px] w-[82px] bg-[#276BA3] text-white ml-[-40px] rotate-[45deg] flex justify-center items-center">
                  <span className="text-[2rem] font-bold rotate-[-45deg]">
                    268
                  </span>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <p className="ml-[25px] text-[20px] leading-[1.5]">
                    Children with intellectual disabilities access to school
                    thanks to the RSO in 2023. The biggest school, in Phnom
                    Penh, welcomes 198 students.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-[50%] lg:h-[1100px] lg:-mt-[0.50rem]  lg:-ml-[5rem] ">
              <div className=" w-[100%] m-[auto] h-[100%] ">
                <Slider {...settings}>
                  {images.map((image, index) => (
                    <div key={index}>
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-[100%] h-[1060px] object-cover"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default KeyFigures;
