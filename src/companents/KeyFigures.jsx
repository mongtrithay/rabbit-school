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
        <div className="w-[100%] h-[1100px]">
          <div class=" inline-block">
            <span class="text-blue-600 font-bold text-[2.5rem] m-[3rem]">
              KEY FIGURES
            </span>
            <div class=" ml-[3rem] h-[3px] w-20 h-1 bg-orange-400"></div>
          </div>
          <div className="w-full h-full flex justify-evenly mt-[1rem] items-center">
            <div className="w-[48%] h-full ">
              <div className=" flex items-center m-[4rem] w-[80%] h-[84px] bg-blue-300 ">
                <div class="h-[60px] w-[60px] bg-blue-600 text-white ml-[-30px] rotate-[45deg] flex justify-center items-center">
                  <span className="text-[2rem] font-bold rotate-[-45deg]">
                    268
                  </span>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <p className="ml-[20px]">
                    Children with intellectual disabilities access to school
                    thanks to the RSO in 2023. The biggest school, in Phnom
                    Penh, welcomes 198 students.
                  </p>
                </div>
              </div>
              <div className=" flex items-center m-[4rem] w-[80%] h-[84px] bg-blue-300 ">
                <div class="h-[60px] w-[60px] bg-blue-600 text-white ml-[-30px] rotate-[45deg] flex justify-center items-center">
                  <span className="text-[2rem] font-bold rotate-[-45deg]">
                    268
                  </span>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <p className="ml-[20px]">
                    Children with intellectual disabilities access to school
                    thanks to the RSO in 2023. The biggest school, in Phnom
                    Penh, welcomes 198 students.
                  </p>
                </div>
              </div>
              <div className=" flex items-center m-[4rem] w-[80%] h-[84px] bg-blue-300 ">
                <div class="h-[60px] w-[60px] bg-blue-600 text-white ml-[-30px] rotate-[45deg] flex justify-center items-center">
                  <span className="text-[2rem] font-bold rotate-[-45deg]">
                    268
                  </span>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <p className="ml-[20px]">
                    Children with intellectual disabilities access to school
                    thanks to the RSO in 2023. The biggest school, in Phnom
                    Penh, welcomes 198 students.
                  </p>
                </div>
              </div>
              <div className=" flex items-center m-[4rem] w-[80%] h-[84px] bg-blue-300 ">
                <div class="h-[60px] w-[60px] bg-blue-600 text-white ml-[-30px] rotate-[45deg] flex justify-center items-center">
                  <span className="text-[2rem] font-bold rotate-[-45deg]">
                    268
                  </span>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <p className="ml-[20px]">
                    Children with intellectual disabilities access to school
                    thanks to the RSO in 2023. The biggest school, in Phnom
                    Penh, welcomes 198 students.
                  </p>
                </div>
              </div>
              <div className=" flex items-center m-[4rem] w-[80%] h-[84px] bg-blue-300 ">
                <div class="h-[60px] w-[60px] bg-blue-600 text-white ml-[-28px] rotate-[43deg] flex justify-center items-center">
                  <span className="text-[2rem] font-bold rotate-[-45deg]">
                    268
                  </span>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <p className="ml-[20px]">
                    Children with intellectual disabilities access to school
                    thanks to the RSO in 2023. The biggest school, in Phnom
                    Penh, welcomes 198 students.
                  </p>
                </div>
              </div>
              <div className=" flex items-center m-[4rem] w-[80%] h-[84px] bg-blue-300 ">
                <div class="h-[60px] w-[60px] bg-blue-600 text-white ml-[-30px] rotate-[45deg] flex justify-center items-center">
                  <span className="text-[2rem] font-bold rotate-[-45deg]">
                    268
                  </span>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <p className="ml-[20px]">
                    Children with intellectual disabilities access to school
                    thanks to the RSO in 2023. The biggest school, in Phnom
                    Penh, welcomes 198 students.
                  </p>
                </div>
              </div>
              <div className=" flex items-center m-[4rem] w-[80%] h-[84px] bg-blue-300 ">
                <div class="h-[60px] w-[60px] bg-blue-600 text-white ml-[-30px] rotate-[45deg] flex justify-center items-center">
                  <span className="text-[2rem] font-bold rotate-[-45deg]">
                    268
                  </span>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <p className="ml-[20px]">
                    Children with intellectual disabilities access to school
                    thanks to the RSO in 2023. The biggest school, in Phnom
                    Penh, welcomes 198 students.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[48%] h-[1000px] bg-blue-600 ">
              <div className=" w-[100%] m-[auto] ">
                <Slider {...settings}>
                  {images.map((image, index) => (
                    <div key={index}>
                      <img src={image} alt={`Slide ${index + 1}`} className="w-[100%] h-[1000px]" />
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
