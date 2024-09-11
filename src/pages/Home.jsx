import Menu from "../companents/Menu";
import imageSrc from "../assets/images/footer.jpeg";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import Footer from "../companents/Footer";
import ButtonReadMore from '../companents/ButtonReadMore'

function Homepage() {
  return (
    <>
      <Menu />
      <div
        className="relative w-full h-[700px] bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-black bg-opacity-50  w-screen rounded">
            <h1 className="text-center text-white text-[75px]">
              Welcome to the Rabbit School Organization
            </h1>
            <div className="flex  mt-[70px] ml-[130px]">
              <div className="w-[150px] h-[5px]  ml-[50px] -mt-[50px] bg-[#F0990E]"></div>
              <div className="w-[50px] h-[5px]  ml-[20px] -mt-[50px] bg-[#F0990E] "></div>
              <div className="w-[30px] h-[5px]  ml-[20px] -mt-[50px] bg-[#F0990E]"></div>
              <div className="w-[15px] h-[5px]  ml-[20px] -mt-[50px] bg-[#F0990E]"></div>
              <div className="w-[10px] h-[5px]  ml-[20px] -mt-[50px] bg-[#F0990E]"></div>
              <p className="text-white  text-[20px] -mt-[65px] ml-[30px]">
                The Rabbit School is a Cambodian NGO that was established in May
                1997{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="h-[500px] w-full flex">
        <div className=" h-full w-[50%] flex justify-center items-center">
          <div className="bg-orange-300 h-[400px] w-[800px] ">
            {/* <img src={sampleImage} alt="Sample" className="absolute inset-0 object-cover w-full h-full" /> */}
          </div>
        </div>
        <div className=" h-full w-[50%]">
          <h1 className="h-[100px] text-[48px] font-bold flex items-center mt-[15px] ">
            Rabbit School’s story
          </h1>
          <div className="w-[100px] h-[5px]  bg-[#F0990E]"></div>

          <p className="w-[90%] mt-10 leading-[3rem] text-[20px]">
            The Rabbit School has been working for children with intellectual
            disabilities in Cambodia for over 25 years. We promote the rights of
            Children with Intellectual Disabilities, as we believe that they
            have the same fundamental rights as their fellow citizens to a
            decent life, with equal dignity and access to education, whatever
            the origin, nature, or severity of their impairments.
          </p>
        <ButtonReadMore/>
        </div>
      </section>

      <section className="bg-[#276BA3] h-[750px] w-full flex">
        <div className=" h-full w-[50%] flex justify-center items-center">
          <div className="bg-yellow-300 h-[650px] w-[700px] "></div>
        </div>
        <div className=" h-full w-[60%]">
          <h1 className="h-[100px] text-[36px] font-bold flex items-center mt-[15px] text-white">
            Disability in Cambodia, a persistent taboo
          </h1>
          <div className="w-[220px] h-[5px]  bg-[#F0990E]"></div>
          <p className="w-[90%] mt-10 leading-[3rem] text-[20px] text-white">
            In Cambodia, which has a predominantly Buddhist population,
            disability is often viewed as a taboo subject due to reincarnation
            beliefs.{" "}
          </p>
          <p className="w-[90%] mt-10 leading-[3rem] text-[20px] text-white">
            {" "}
            Unfortunately, many schools in Cambodia are not equipped to
            accommodate children with intellectual disabilities (CWIDs), with
            only a handful of special education schools available, most of which
            are private and charge high fees that are out of reach for most
            families.
          </p>
          <p className="w-[90%] mt-10 leading-[3rem] text-[20px] text-white">
            As a result, children with disabilities have limited options and are
            often kept at home. This places a heavy burden on parents,
            particularly mothers, who are unable to work and provide financial
            support for their families while also caring for their child.
          </p>
          <div className="flex mt-[50px]">
            <div className="w-[150px] h-[5px]  bg-[#F0990E]"></div>
            <div className="w-[50px] h-[5px]  ml-[20px]  bg-[#F0990E] "></div>
            <div className="w-[30px] h-[5px]  ml-[20px]  bg-[#F0990E]"></div>
            <div className="w-[15px] h-[5px]  ml-[20px]  bg-[#F0990E]"></div>
            <div className="w-[10px] h-[5px]  ml-[20px]  bg-[#F0990E]"></div>
          </div>
        </div>
      </section>
      <div className="h-[150px]">
        <h1 className="h-[100px] text-[48px] font-bold text-[#276BA3] flex items-center ml-[60px]">
          KEY FIGURES
        </h1>
        <div className="w-[120px] h-[5px] ml-[60px]  bg-[#F0990E]"></div>
      </div>

      <section className="h-[1000px] w-full flex">
        <div className="bg-red-500 w-[50%] h-full"></div>
        <div className="bg-green-500 w-[50%]" h-full></div>
      </section>

      {/* <h1 className="h-[200px] text-[48px] text-center font-bold">CORE VALUES</h1> */}
      <h1 className="h-[200px] text-[48px] text-center font-bold text-[#276BA3] flex items-center justify-center">
        CORE VALUES
      </h1>

      <section className=" h-[900px] w-full">
        <div className="flex  items-center space-x-10 mb-10 justify-center">
          <div className="w-[300px] h-[400px] bg-[#276BA3] bg-opacity-50 shadow-xl flex flex-col items-center">
            <div className="flex w-full justify-start">
              <div className="w-[70px] h-[5px] bg-white mt-5 ml-10"></div>
            </div>
            <h1 className="h-[100px] w-[280px] text-2xl mt-5 font-bold ml-5">
              Respect of each person’s dignity
            </h1>
            <FontAwesomeIcon
              icon={faUsers}
              className="text-xl w-[150px] h-[150px] -mt-5"
            />
            <p className="w-[90%] text-center mt-4 text-white">
              Dignity covers all aspects of daily life, including respect,
              privacy, autonomy, and self-worth.
            </p>
          </div>

          <div className="w-[300px] h-[400px] bg-[#276BA3] bg-opacity-50 shadow-xl flex flex-col items-center">
            <div className="flex w-full justify-start">
              <div className="w-[70px] h-[5px] bg-white mt-5 ml-10"></div>
            </div>
            <h1 className="h-[100px] w-[280px] text-2xl mt-5 font-bold ml-5">
              Learning and sharing
            </h1>
            <FontAwesomeIcon
              icon={faUsers}
              className="text-xl w-[150px] h-[150px] -mt-5"
            />
            <p className="w-[90%] text-center mt-4 text-white">
              In essence, it’s about personal growth and contributing to the
              growth of others.
            </p>
          </div>

          <div className="w-[300px] h-[400px] bg-[#276BA3] bg-opacity-50 shadow-xl flex flex-col items-center">
            <div className="flex w-full justify-start">
              <div className="w-[70px] h-[5px] bg-white mt-5 ml-10"></div>
            </div>
            <h1 className="h-[100px] w-[280px] text-2xl mt-5 font-bold ml-5">
              Gender equality
            </h1>
            <FontAwesomeIcon
              icon={faUsers}
              className="text-xl w-[150px] h-[150px] -mt-5"
            />
            <p className="w-[90%] text-center mt-4 text-white">
              Women and men, and girls and boys, enjoy the same rights,
              resources, opportunities and protections.
            </p>
          </div>
        </div>

        <div className="flex  items-center space-x-10 justify-center ">
          <div className="w-[300px] h-[400px] bg-[#276BA3] bg-opacity-50 shadow-xl flex flex-col items-center">
            <div className="flex w-full justify-start">
              <div className="w-[70px] h-[5px] bg-white mt-5 ml-10"></div>
            </div>
            <h1 className="h-[100px] w-[280px] text-2xl mt-5 font-bold ml-5">
            Community participation and ownership
            </h1>
            <FontAwesomeIcon
              icon={faUsers}
              className="text-xl w-[150px] h-[150px] -mt-5"
            />
            <p className="w-[90%] text-center mt-4 text-white">
            these concepts emphasize active involvement and a sense of responsibility.
            </p>
          </div>

          <div className="w-[300px] h-[400px] bg-[#276BA3] bg-opacity-50 shadow-xl flex flex-col items-center">
            <div className="flex w-full justify-start">
              <div className="w-[70px] h-[5px] bg-white mt-5 ml-10"></div>
            </div>
            <h1 className="h-[100px] w-[280px] text-2xl mt-5 font-bold ml-5">
            Encouragement of initiative ideas
            </h1>
            <FontAwesomeIcon
              icon={faUsers}
              className="text-xl w-[150px] h-[150px] -mt-5"
            />
            <p className="w-[90%] text-center mt-4 text-white">
            Encouragement of initiative ideas means supporting and motivating new and creative ideas.
            </p>
          </div>

          <div className="w-[300px] h-[400px] bg-[#276BA3] bg-opacity-50 shadow-xl flex flex-col items-center">
            <div className="flex w-full justify-start">
              <div className="w-[70px] h-[5px] bg-white mt-5 ml-10"></div>
            </div>
            <h1 className="h-[100px] w-[280px] text-2xl mt-5 font-bold ml-5">
            Using of existing resources
            </h1>
            <FontAwesomeIcon
              icon={faUsers}
              className="text-xl w-[150px] h-[150px] -mt-5"
            />
            <p className="w-[90%] text-center mt-4 text-white">
            Using existing resources means utilizing what is already available to achieve goals efficiently.
            </p>
          </div>
        </div>
      </section>

      <div className="h-[150px]">
        <h1 className="h-[100px] text-[48px] font-bold text-[#276BA3] flex items-center ml-[60px]">
          WERE WE WORK
        </h1>
        <div className="w-[120px] h-[5px] ml-[60px]  bg-[#F0990E]"></div>
      </div>

      <section className=" h-[800px] w-full">
        <div className="h-[100px] w-[45%] text-[20px] ml-[100px] mb-10">
          <p className=" text-gray-500">
            The Rabbit School currently works in Phnom Penh and three provinces
            in Cambodia. We have been active in Cambodia for many years, and
            receive strong support from the community’s in which we operate.
          </p>
        </div>
        <div className="h-[500px] w-[100%] mt-10 flex ">
          <div className="h-[100%] w-[25%] flex flex-col items-center justify-between">
            <div className="h-[150px] w-[65%]">
              <h1 className="text-[20px] text-blue-500 ">SIEM REAP</h1>
              <p className="mt-5 text-[20px]">
                15 Inclusive/Integrated Classes in 5 Primary Schools
              </p>
            </div>
            <div className="h-[100px] w-[65%]">
              <h1 className="text-[20px] text-blue-500 ">KAMPONG SPEU</h1>
              <p className="mt-5 text-[20px]">
                15 Inclusive/Integrated Classes in 15 Primary Schools
              </p>
            </div>
          </div>
          <div className="h-[100%] w-[50%] "></div>
          <div className="h-[100%] w-[25%] flex flex-col items-center justify-between">
            <div className="h-[200px] w-[65%]">
              <h1 className="text-[20px] text-blue-500 ">PHNOM PENH</h1>
              <p className="mt-5 text-[20px]">
                18 Inclusive/Integrated Classes at 1 Primary School The
                Vocational Training and Job Placement Centre in Phnom Penh
              </p>
            </div>
            <div className="h-[150px] w-[65%]">
              <h1 className="text-[20px] text-blue-500 ">SIEM REAP</h1>
              <p className="mt-5 text-[20px]">
                15 Inclusive/Integrated Classes in 5 Primary Schools
              </p>
            </div>
          </div>
        </div>
      </section>

      <h1 className="h-[200px] text-[48px] text-center font-bold text-[#276BA3] flex items-center justify-center">
        PARTNERS
      </h1>

      <section className="bg-blue-200 h-[300px] w-full">
        
      </section>

      <div>
        <h1 className="h-[150px] text-[48px] text-center font-bold text-[#276BA3] flex items-center ml-[60px]">
          MAIN FUNDERS IN 2023
        </h1>
        <div className="flex -mt-[20px]">
          <div className="w-[150px] h-[5px]  ml-[60px] bg-[#F0990E]"></div>
          <div className="w-[50px] h-[5px]  ml-[20px] bg-[#F0990E] "></div>
          <div className="w-[30px] h-[5px]  ml-[20px] bg-[#F0990E]"></div>
          <div className="w-[15px] h-[5px]  ml-[20px] bg-[#F0990E]"></div>
          <div className="w-[10px] h-[5px]  ml-[20px] bg-[#F0990E]"></div>
        </div>
      </div>

      <section className=" h-[700px] w-full flex justify-center items-center mt-[50px] mb-[50px]">
       <div className="w-[70%] h-[100%] bg-blue-500"></div>
      </section>
      <Footer />
    </>
  );
}

export default Homepage;
