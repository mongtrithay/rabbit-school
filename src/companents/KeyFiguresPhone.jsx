import React, { useEffect, useState } from "react";
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
  const [keyFigures, setKeyFigures] = useState(null);

  useEffect(() => {
    const fetchKeyFigures = async () => {
      try {
        const response = await fetch("https://rabbit-api.onrender.com/api/key-figures");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setKeyFigures(data);
      } catch (error) {
        console.error("Error fetching key figures:", error);
      }
    };

    fetchKeyFigures();
  }, []);

return (
    <>
    <section className="">

      <div className="block lg:hidden">
        <h1 className="text-center mt-5 text-[20px] font-bold text-[#276BA3]">KEY FIGURES</h1>
        <div className="block lg:hidden flex justify-center mb-[50px] mt-10">
          <div className="w-[80%] h-[200px]">
            <div className="h-[25%] bg-[#276BA3] flex justify-center items-center">
              <h1 className="font-bold text-[30px] text-white">
                {keyFigures ? keyFigures.number : 'Loading...'}
              </h1>
            </div>
            <div className="h-[60%] bg-[#276BA3] bg-opacity-50 flex justify-center items-center">
              <p className="text-center w-[90%] text-[18px] text-white">
                {keyFigures ? keyFigures.description : 'Loading...'}
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
    </>
  );
}

export default KeyFiguresP;
