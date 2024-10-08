import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import image1 from "../assets/images/pic1.jpeg";
import image2 from "../assets/images/pic2.jpeg";
import image3 from "../assets/images/pic3.jpeg";
import image4 from "../assets/images/pic4.jpeg";
import image5 from "../assets/images/pic5.jpeg";
import image6 from "../assets/images/pic6.jpeg";

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

function KeyFigures() {
  const [figures, setFigures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFigures = async () => {
      try {
        const response = await axios.get(
          "https://rabbit-api.onrender.com/api/key-figures?populate=*",
          {
            headers: {
              Authorization: `Bearer 93812113f85245dee16a45d5f5c6f023b35ac249bc796c511ba1fc348343f9d07235711df77886de46406ba3f3152e632009efbbb11a89293ccd2d83e5ee14058b0539d4e7cdb45b311025a84fb44de783fd6e36105340ac8032d5482e90c66d157b4de78a48c1af77e550b10dce988a6a68aeb537b1be68ff0e4b2943bed9b5`,
            },
          }
        );
        setFigures(response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFigures();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <section>
        <div className="w-[90%] h-[1100px] hidden lg:block lg:mt-[100px]">
          <div className="lg:h-[150px] lg:-ml-0 -ml-10 -mt-[60px] mb-[20px] flex justify-center">
            <h1 className="h-[100px] lg:text-[48px] text-[20px] font-bold text-[#276BA3] flex items-center ml-[60px]">
              KEY FIGURES
            </h1>
          </div>

          <div className="w-full h-full flex justify-evenly mt-[1rem] items-center ml-8">
            <div className="lg:w-[48%] w-[48%] lg:h-full lg:ml-5 lg:-mt-[6rem] ">
              {figures.map((figure) => (
                <div
                  key={figure.id}
                  className="flex items-center m-[3rem] w-[80%] h-[110px] bg-[#276BA3] bg-opacity-50"
                >
                  <div className="h-[80px] w-[82px] bg-[#276BA3] text-white ml-[-40px] rotate-[45deg] flex justify-center items-center">
                    <span className="text-[25px] font-bold rotate-[-45deg]">
                      {figure.attributes.number}
                    </span>
                  </div>
                  <div className="w-full h-full flex items-center">
                    <p className="ml-[25px] text-[20px] leading-[1.5] ">
                      {figure.attributes.desrciption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:w-[50%] lg:h-[1100px] lg:-mt-[0.50rem] lg:-ml-[5rem] ">
              <div className="w-[100%] m-[auto] h-[100%] ">
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
