import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/images/partner1.png";
import image2 from "../assets/images/partner2.png";
import image3 from "../assets/images/partner3.png";
import image4 from "../assets/images/partner4.png";
import image5 from "../assets/images/partner5.png";
import image6 from "../assets/images/partner6.png";
import image7 from "../assets/images/partner7.png";
import image8 from "../assets/images/partner8.png";
import image9 from "../assets/images/partner9.png";
import image10 from "../assets/images/partner10.png";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,          // Show 5 images at a time
  slidesToScroll: 1,        // Scroll 1 image at a time
  autoplay: true,
  autoplaySpeed: 3000,      // 3 seconds delay between slides
  pauseOnHover: false,
};

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

function SliderPartner() {
  return (
    <>
      <section className="w-full h-auto">
        <div className="w-full h-auto">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="px-1 flex justify-center items-center"> {/* Center image */}
                <img 
                  src={image} 
                  alt={`Slide ${index + 1}`} 
                  className="w-[200px] h-[80px] object-contain"  // Set width and height
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default SliderPartner;
