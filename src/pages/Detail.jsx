import React from "react";
import Menu from "../companents/Menu";
import Footer from "../companents/Footer"; // Corrected path from 'companents' to 'components'
import { useEffect, useState } from "react";

const Detail = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [dataDetail, setDataDetail] = useState([]);
  const url = `https://rabbit-api.onrender.com/api/details/${1}?populate=*`;
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
        console.log(data);
        setDataDetail(data) // Log the full response for inspection

        // Adjust the path based on your response structure
        const imgUrl = data.data[0]?.attributes.media.data?.attributes?.url;
        setImageUrl(imgUrl);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchImage();
  }, [url, token]);
  console.log(imageUrl);
  

  return (
    <div className="flex flex-col min-h-screen">
      <Menu />
      <main className="flex-grow p-4 bg-gray-100">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          <h1 className="text-sky-700 text-[30px] sm:text-[40px] md:text-[50px] font-bold mb-4 text-center">
            Sakal's Journey
          </h1>
          <p className="text-gray-600 text-[20px] mb-4 text-center">
            Sakal is a 20 year old orphan born in the National Borey for Infants
            and Children, the building which houses the Rabbit School’s
            headquarters. Sakal has an intellectual disability, and was unable
            to walk until he was 12 years old.
          </p>
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Sakal"
              className="mb-8 w-[619px] h-[500px] object-cover"
            />
          ) : (
            <p>Loading image...</p> // Optional loading state
          )}
          <p className="text-gray-600 text-[20px] text-left mb-8">
            At the age of 7, Sakal began to attend The Rabbit School. When he
            began formal education, Sakal had some behavioural issues, such as
            biting and spitting. In the early years of his schooling, he was
            very reliant on teachers and other carers for assistance. He was
            placed in the readiness class, a program designed for children with
            severe intellectual disabilities.
          </p>
          <p className="text-gray-600 text-[20px] text-left ">
            Over time, Sakal’s academic performance and behavior began to
            improve. After 2 years at the Rabbit School, Sakal transferred to a
            public school, and also attended English at a private institution.
            Unfortunately, Sakal’s public school teachers were unable to cope
            with teaching a child with intellectual disabilities, and as a
            result, Sakal dropped out of school at the age of 15.
          </p>
        </div>
      </main>
      {/* <Footer/> */}
    </div>
  );
};

export default Detail;
