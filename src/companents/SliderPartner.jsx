import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
};

function SliderPartner() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://rabbit-api.onrender.com/api/partner-images?populate=*"
        );
        const data = await response.json();
        console.log(data);

        const fetchedImages = data.data.map(
          (item) => item.attributes.image.data[0].attributes.url
        );
        setImages(fetchedImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="w-full h-auto lg:mb-[5rem] lg:mt-5">
      <div className="w-full h-auto">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-1 flex justify-center items-center">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-[300px] h-[200px] object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default SliderPartner;
