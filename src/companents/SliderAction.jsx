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
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const images = [image1, image2, image3, image4, image5, image6];

function SliderAction() {
  return (
    <>
      <section className="w-full ">
        <div className=" w-[70%] m-[auto] ">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-[100%] h-[100%]"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default SliderAction;
