
import pic1 from "../assets/images/headerOurAction.png";
import pic2 from "../assets/images/card2.jpg";
import pic3 from "../assets/images/card3.jpg";
import pic4 from "../assets/images/card4.jpg";
import ReadMoreAction from "../companents/ReadMoreAction";
import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";



function CardAction() {
  return (
    <>
      <section className="lg:p-4 p-8 lg:mt-[50px] lg:mb-[50px]">
        <div className="flex lg:items-center lg:justify-center lg:gap-[5rem] overflow-x-auto gap-4 snap-x snap-mandatory ">
          {/* Block 1 */}
          <div className="flex-shrink-0 w-[20rem] h-[25rem] flex flex-col snap-start">
            <div className="w-full lg:h-[50%] h-[47%] bg-orange-400">
              <img
                src={pic1}
                alt="Description of image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:h-[50%] h-[47%] bg-[#276BA3] bg-opacity-80 flex flex-col justify-center items-center">
              {/* Blue Box Header */}
              <div className="w-[15rem] h-[4rem] bg-[#276BA3] flex justify-center items-center lg:-mt-[2rem] -mt-[2rem] shadow-xl">
                <p className="text-white lg:text-[18px] text-[18px] text-center font-bold">
                  Education
                </p>
              </div>
              {/* Additional Text */}
              <div className="w-[80%] mt-4 text-center">
                <p className="text-white lg:text-[15px] text-[15px] mb-2">
                  The Rabbit School provides different levels of special
                  education according to the severity of the disability.
                </p>
              </div>
              <Link to='/DetailOurAction1'>
              <ReadMoreAction />
              </Link>
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex-shrink-0 w-[20rem] h-[25rem] flex flex-col snap-start">
            <div className="w-full lg:h-[50%] h-[47%] bg-orange-400">
              <img
                src={pic2}
                alt="Description of image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:h-[50%] h-[47%] bg-[#276BA3] bg-opacity-80 flex flex-col justify-center items-center">
              {/* Blue Box Header */}
              <div className="w-[15rem] h-[4rem] bg-[#276BA3] flex justify-center items-center lg:-mt-[2rem] -mt-[2rem] shadow-xl">
                <p className="text-white lg:text-[18px] text-[18px] text-center font-bold">
                  Teacher Training and Curriculum Development
                </p>
              </div>
              {/* Additional Text */}
              <div className="w-[80%] mt-4 text-center">
                <p className="text-white lg:text-[15px] text-[15px] mb-2">
                  We prepare teachers to work with children with intellectual
                  disabilities and make them able to assess...
                </p>
              </div>

              <Link to='/DetailOurAction2'>
              <ReadMoreAction />
              </Link>
            </div>
          </div>

          {/* Block 3 */}
          <div className="flex-shrink-0 w-[20rem] h-[25rem] flex flex-col snap-start">
            <div className="w-full lg:h-[50%] h-[47%] bg-orange-400">
              <img
                src={pic3}
                alt="Description of image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:h-[50%] h-[47%] bg-[#276BA3] bg-opacity-80 flex flex-col justify-center items-center">
              {/* Blue Box Header */}
              <div className="w-[15rem] h-[4rem] bg-[#276BA3] flex justify-center items-center lg:-mt-[2rem] -mt-[2rem] shadow-xl">
                <p className="text-white lg:text-[18px] text-[18px] text-center font-bold">
                  Awareness and Advocacy
                </p>
              </div>
              {/* Additional Text */}
              <div className="w-[80%] mt-4 text-center">
                <p className="text-white lg:text-[15px] text-[15px] mb-2">
                  At The Rabbit School, we actively engage in a range of
                  initiatives dedicated to raising awareness ...
                </p>
              </div>
              <Link to='/DetailOurAction3'>
              <ReadMoreAction />
              </Link>
            </div>
          </div>

          {/* Block 4 */}
          <div className="flex-shrink-0 w-[20rem] h-[25rem] flex flex-col snap-start">
            <div className="w-full lg:h-[50%] h-[47%] bg-orange-400">
              <img
                src={pic4}
                alt="Description of image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:h-[50%] h-[47%] bg-[#276BA3] bg-opacity-80 flex flex-col justify-center items-center">
              {/* Blue Box Header */}
              <div className="w-[15rem] h-[4rem] bg-[#276BA3] flex justify-center items-center lg:-mt-[2rem] -mt-[2rem] shadow-xl">
                <p className="text-white lg:text-[18px] text-[18px] text-center font-bold">
                  Vocational Training and Job Placement
                </p>
              </div>
              {/* Additional Text */}
              <div className="w-[80%] mt-4 text-center">
                <p className="text-white lg:text-[15px] text-[15px] mb-2">
                  In Cambodia, people with intellectual disabilities have great
                  difficulty finding a job.
                </p>
              </div>
              <Link to='/DetailOurAction4'>
              <ReadMoreAction />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default CardAction;
