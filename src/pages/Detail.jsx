import React, { useState, useEffect } from "react";
import Menu from "../companents/Menu";
import Footer from "../companents/Footer";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get("id");
  const ids = Number(search);

  const [dataDetail, setDataDetail] = useState(null); // Start with null
  const url = `https://rabbit-api.onrender.com/api/details/${ids}?populate=*`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setDataDetail(data.data); // Set data from API to state
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  // Handle loading state and data existence
  if (!dataDetail) return <div>Loading...</div>; // Display loading while fetching data
  if (!dataDetail.attributes) return <div>No data found.</div>; // Handle no data case

  return (
    <div className="flex flex-col min-h-screen">
      <Menu />
      <main className="flex-grow p-4 bg-gray-100">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          <h1 className="text-sky-700 text-[30px] sm:text-[40px] md:text-[50px] font-bold mb-4 text-center">
            {dataDetail.attributes.name || "Unnamed Detail"}{" "}
            {/* Fallback text */}
          </h1>
          <p className="text-gray-600 text-[20px] mb-4 text-center">
            {dataDetail.attributes.main_description ||
              "No description available."}{" "}
            {/* Fallback text */}
          </p>

          <img
            src={dataDetail.attributes.media?.data?.attributes?.url} // Dynamic image from API
            alt={dataDetail.attributes.name || "Detail"} // Use a meaningful alt text
            className="mb-8 w-[619px] h-[500px] object-cover"
          />

          <p className="text-gray-600 text-[20px] text-left mb-8">
            {dataDetail.attributes.additional_descriptions ||
              "No additional descriptions available."}{" "}
            {/* Fallback text */}
          </p>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Detail;
