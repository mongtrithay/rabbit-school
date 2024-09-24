import React, { useEffect, useState } from "react";
import axios from "axios";

const MainFunders = () => {
  const [funders, setFunders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFunders = async () => {
      try {
        const response = await axios.get(
          "https://rabbit-api.onrender.com/api/main-funds?populate=*",
          {
            headers: {
              Authorization: `Bearer 93812113f85245dee16a45d5f5c6f023b35ac249bc796c511ba1fc348343f9d07235711df77886de46406ba3f3152e632009efbbb11a89293ccd2d83e5ee14058b0539d4e7cdb45b311025a84fb44de783fd6e36105340ac8032d5482e90c66d157b4de78a48c1af77e550b10dce988a6a68aeb537b1be68ff0e4b2943bed9b5`,
            },
          }
        );
        setFunders(response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFunders();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="px-4 md:px-8">
      <h1 className="text-[20px] md:text-[48px] font-bold text-[#276BA3] -ml-1 lg:ml-[50px] mx-auto max-w-[90%] md:max-w-[80%] lg:mt-0 mt-2">
        MAIN FUNDERS IN 2023
      </h1>
      <div className="flex lg:mt-4 md:mt-6">
        <div className="w-[100px] lg:w-[300px] md:w-[150px] h-[2px] md:h-[5px] lg:ml-[50px] -ml-1  mx-1 md:mx-2 bg-[#F0990E]"></div>
      </div>
      <div className="flex lg:mt-4 md:mt-6">
        <div className="w-full flex justify-center items-center mt-8 mb-8 px-4 md:px-8 "></div>
      </div>
      <ul className="flex flex-col items-center">
        {funders.map((funder) => (
          <li key={funder.id} className="mb-4">
            <img
              src={funder.attributes.media.data.attributes.url}
              alt={funder.attributes.media.data.attributes.name}
              className="max-w-[90%]lg:w-[1000px] h-auto"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainFunders;
