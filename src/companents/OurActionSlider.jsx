// SliderComponent.js
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';
import image1 from "../assets/images/s1.jpg";
import image2 from "../assets/images/s2.jpg";
import image3 from "../assets/images/s3.jpg";
import image4 from "../assets/images/s4.jpg";
import image5 from "../assets/images/s5.jpg";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className='lg:w-[1600px] w-[80%] lg:ml-0 -ml-[40px]'>
      <div className="relative lg:h-[700px]">
        <img
          src={image1}
          alt="National Employment Forum"
          className="w-full lg:h-[95%] object-cover"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#276BA3] w-[100%] md:w-[800px] lg:w-[800px] lg:h-[150px] h-[50px] flex items-center justify-center">
          <span className="text-white text-[15px] md:text-[30px] lg:text-[40px] font-bold text-center">National Employment Forum</span>
        </div>
      </div>
      <div className="relative lg:h-[700px]">
        <img
          src={image5}
          alt="Sub National forum in Kandal"
          className="w-full lg:h-[95%] object-cover"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#276BA3] w-[100%] md:w-[800px] lg:w-[800px] lg:h-[150px] h-[50px] flex items-center justify-center">
          <span className="text-white text-[15px] md:text-[30px] lg:text-[40px] font-bold text-center">Sub National forum in Kandal</span>
        </div>
      </div>
      <div className="relative lg:h-[700px]">
        <img
          src={image4}
          alt="Children’s Day (Toul Kork and Preypouch)"
          className="w-full lg:h-[95%] object-cover"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#276BA3] w-[100%] md:w-[820px] lg:w-[820px] lg:h-[150px] h-[50px] flex items-center justify-center">
          <span className="text-white text-[15px] md:text-[30px] lg:text-[40px] font-bold text-center">Children’s Day (Toul Kork and Preypouch)</span>
        </div>
      </div>
      <div className="relative lg:h-[700px]">
        <img
          src={image2}
          alt="Autism Day (Phnom Penh and Kampong Steung)"
          className="w-full lg:h-[95%] object-cover"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#276BA3] w-[100%] md:w-[1000px] lg:w-[1000px] lg:h-[150px] h-[50px] flex items-center justify-center">
          <span className="text-white text-[15px] md:text-[30px] lg:text-[40px] font-bold text-center">Autism Day (Phnom Penh and Kampong Steung)</span>
        </div>
      </div>
      <div className="relative lg:h-[700px]">
        <img
          src={image3}
          alt="Cycling event in Siem Reap"
          className="w-full lg:h-[95%] object-cover"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#276BA3] w-[100%] md:w-[800px] lg:w-[800px] lg:h-[150px] h-[50px] flex items-center justify-center">
          <span className="text-white text-[15px] md:text-[30px] lg:text-[40px] font-bold text-center">Cycling event in Siem Reap</span>
        </div>
      </div>
    </Slider>
  );
};

export default SliderComponent;
