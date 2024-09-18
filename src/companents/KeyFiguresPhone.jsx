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

function KeyFiguresP() {
  return (
    <>
    <section>
      <div className="block lg:hidden">
      <h1 className="text-center mt-5 text-[20px]  font-bold text-[#276BA3]">KEY FIGURES</h1>
        <div className="block lg:hidden flex justify-center mb-[50px] mt-10">
          <div className="w-[80%] h-[200px]">
            <div className="h-[25%] bg-[#276BA3] flex justify-center items-center">
              <h1 className="font-bold text-[30px] text-white">268</h1>
            </div>
            <div className="h-[60%] bg-[#276BA3] bg-opacity-50 flex justify-center items-center">
              <p className="text-center w-[90%] text-[15px] text-white">
                Children with intellectual disabilities access to school thanks
                to the RSO in 2023. The biggest school, in Phnom Penh, welcomes
                198 students.
              </p>
            </div>
          </div>
        </div>

       

   
      </div>

      {/* <div className="lg:w-[50%] lg:h-[1100px] lg:-mt-[0.50rem]  lg:-ml-[5rem] ">
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
            </div> */}
            </section>
    </>
  );
}

export default KeyFiguresP;
