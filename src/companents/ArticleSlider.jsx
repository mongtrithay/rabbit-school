import ButttonReadMore from "../companents/ButtonReadMore";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const ArticleCard = (props) => {
  return (
    <div className="w-[400px] h-[auto] bg-white shadow-lg rounded-lg overflow-hidden mx-auto sm:w-[90%] lg:w-[400px]">
      {/* Maintain 'w-[400px]' on large screens and adjust for smaller screens */}
      <div className="w-[90%] h-[auto] m-auto">
        <img
          src={props.img}
          alt="Article"
          className="w-full h-[250px] object-cover mt-4 rounded-t-lg sm:h-[200px]"
        />
        <div className="p-4">
          <h1 className="text-orange-400 text-[20px] font-semibold mb-2 sm:text-[18px]">
            {props.title}
          </h1>
          <div className="w-[163px] h-[2px] bg-orange-400 mb-4"></div>
          <div className="w-full h-[180px] sm:h-auto">
            <p className="text-gray-500 text-[14px] mb-4 sm:text-[12px]">
              {props.name}
            </p>
          </div>
          <div className="flex justify-center">
            <Link to={`/detail?id=${props.id}`}>
              <ButttonReadMore className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-500 transition sm:w-full" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ArticleSlider = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [dataDetail, setDataDetail] = useState([]);
  const url = `https://rabbit-api.onrender.com/api/details/?populate=*`;
  const token =
    "93812113f85245dee16a45d5f5c6f023b35ac249bc796c511ba1fc348343f9d07235711df77886de46406ba3f3152e632009efbbb11a89293ccd2d83e5ee14058b0539d4e7cdb45b311025a84fb44de783fd6e36105340ac8032d5482e90c66d157b4de78a48c1af77e550b10dce988a6a68aeb537b1be68ff0e4b2943bed9b5";

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        const shortData = data.data;
        setDataDetail(shortData);
        // Log the full response for inspection

        // Adjust the path based on your response structure
        const imgUrl = data.data[0]?.attributes.media.data?.attributes?.url;
        console.log(imgUrl);
        setImageUrl(imgUrl);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImage();
  }, [url, token]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[100%] m-auto h-auto mt-10">
      <Slider {...settings}>
        {dataDetail.map((data, index) => {
          const { attributes } = data; // Destructure to access attributes directly
          const imageUrl = attributes.media.data.attributes.url; // Path to the image URL

          return (
            <ArticleCard
              key={index} // Unique key
              title={attributes.name} // Sakal's Journey
              img={imageUrl} // URL for the image
              name={attributes.main_description} // "Sakal is a 20 year old orphan..."
              additionalDescription={attributes.additional_descriptions} // The longer text if needed
              id={data.id}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default ArticleSlider;
