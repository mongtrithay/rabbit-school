import Menu from "../companents/Menu";
import imageSrc from "../assets/images/footer.jpeg";
import pic1 from "../assets/images/pic1.jpeg";
import pic2 from "../assets/images/pic2.jpeg";
import pic3 from "../assets/images/pic3.jpeg";
import pic4 from "../assets/images/pic4.jpeg";
import ButtonReadMore from "../companents/ButtonReadMore";
// import LineStyle from "../companents/LineStyle";

function OurAction() {
  return (
    <>
      <Menu />
      <div
        className="relative w-full h-[700px] bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-black bg-opacity-50 p-10 w-screen rounded">
            <h1 className="text-center text-white text-7xl">
              Welcome to the Rabbit School Organization
            </h1>
            <p className="text-white text-center text-2xl mt-5">
              The Rabbit School is a Cambodian NGO that was established in May
              1997{" "}
            </p>
          </div>
        </div>
      </div>

      <section className="h-[800px] w-full flex justify-center items-center">
        <div>
          <div className="bg-black bg-opacity-50 h-[500px] w-[1000px]"></div>
          <p className="w-[1000px] text-2xl mt-5 text-center">
            The Rabbit School provides different levels of special education
            according to the severity of the disability. The child can run all
            the programs or just choose one specific program, according to his
            “individual development plan”.
          </p>
        </div>
      </section>

      <section className="p-4">
        <div className="flex flex-wrap justify-center gap-7">
          {/* Block 1 */}
          <div className="w-full sm:w-[20rem] h-[25rem] flex flex-col">
            <div className="w-full h-[50%] bg-orange-400">
              <img
                src={pic1}
                alt="Description of image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[50%] bg-[#276BA3] bg-opacity-80 flex flex-col justify-center items-center">
              {/* Blue Box Header */}
              <div className="w-[15rem] h-[4rem] bg-[#276BA3] flex justify-center items-center -mt-[2rem] shadow-xl">
                <p className="text-white lg:text-[18px] text-[15px] text-center font-bold">
                  Education
                </p>
              </div>
              {/* Additional Text */}
              <div className="w-[80%] mt-4 text-center">
                <p className="text-white lg:text-[15px] text-[10px] mb-2">
                  In this class, we educate and stimulate children with moderate
                  to severe disabilities who may need more attention.
                </p>
              </div>
              <ButtonReadMore />
            </div>
          </div>

          {/* Block 2 */}
          <div className="w-full sm:w-[20rem] h-[25rem] flex flex-col">
            <div className="w-full h-[50%] bg-orange-400">
              <img
                src={pic2}
                alt="Description of image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[50%] bg-[#276BA3] bg-opacity-80 flex flex-col justify-center items-center">
              {/* Blue Box Header */}
              <div className="w-[15rem] h-[4rem] bg-[#276BA3] flex justify-center items-center -mt-[2rem] shadow-xl">
                <p className="text-white lg:text-[18px] text-[15px] text-center font-bold">
                  Teacher Training and Curriculum Development
                </p>
              </div>
              {/* Additional Text */}
              <div className="w-[80%] mt-4 text-center">
                <p className="text-white lg:text-[15px] text-[10px] mb-2">
                  We offer comprehensive training for teachers and develop
                  curriculum to enhance educational outcomes.
                </p>
              </div>
              <ButtonReadMore />
            </div>
          </div>

          {/* Block 3 */}
          <div className="w-full sm:w-[20rem] h-[25rem] flex flex-col">
            <div className="w-full h-[50%] bg-orange-400">
              <img
                src={pic3}
                alt="Description of image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[50%] bg-[#276BA3] bg-opacity-80 flex flex-col justify-center items-center">
              {/* Blue Box Header */}
              <div className="w-[15rem] h-[4rem] bg-[#276BA3] flex justify-center items-center -mt-[2rem] shadow-xl">
                <p className="text-white lg:text-[18px] text-[15px] text-center font-bold">
                  Awareness and Advocacy
                </p>
              </div>
              {/* Additional Text */}
              <div className="w-[80%] mt-4 text-center">
                <p className="text-white lg:text-[15px] text-[10px] mb-2">
                  We raise awareness and advocate for the rights of individuals
                  with disabilities.
                </p>
              </div>
              <ButtonReadMore />
            </div>
          </div>

          {/* Block 4 */}
          <div className="w-full sm:w-[20rem] h-[25rem] flex flex-col">
            <div className="w-full h-[50%] bg-orange-400">
              <img
                src={pic4}
                alt="Description of image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[50%] bg-[#276BA3] bg-opacity-80 flex flex-col justify-center items-center">
              {/* Blue Box Header */}
              <div className="w-[15rem] h-[4rem] bg-[#276BA3] flex justify-center items-center -mt-[2rem] shadow-xl">
                <p className="text-white lg:text-[18px] text-[15px] text-center font-bold">
                  Vocational Training and Job Placement
                </p>
              </div>
              {/* Additional Text */}
              <div className="w-[80%] mt-4 text-center">
                <p className="text-white lg:text-[15px] text-[10px] mb-2">
                  We provide vocational training and job placement services to
                  support employment opportunities.
                </p>
              </div>
              <ButtonReadMore />
            </div>
          </div>
        </div>
      </section>

      <section>
      <div className="h-[150px] px-4 sm:px-6 lg:px-0 mt-10">
        <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#276BA3] flex items-center ml-0 sm:ml-[30px] lg:ml-[60px]">
          WHERE WE WORK
        </h1>
        <div className="w-[80px] sm:w-[100px] lg:w-[120px] h-[3px] sm:h-[4px] lg:h-[5px] lg:mt-5 ml-0 sm:ml-[30px] lg:ml-[60px] bg-[#F0990E]"></div>
      </div>

      <div className="flex justify-center gap-[5rem] ">
        <div className="w-[30rem] h-[20rem]   ">
        <img
                src={pic3}
                alt="Description of image"
                className="w-full h-full object-cover"
              />
        </div>

        <div className="w-[30rem] h-[20rem] -mt-10 ">
        <img
                src={pic3}
                alt="Description of image"
                className="w-full h-full object-cover"
              />
        </div>

        <div className="w-[30rem] h-[20rem]  ">
        <img
                src={pic3}
                alt="Description of image"
                className="w-full h-full object-cover"
              />
        </div>
      </div>

      </section>


      <section className="h-[10rem]">

      </section>
    </>
  );
}

export default OurAction;
