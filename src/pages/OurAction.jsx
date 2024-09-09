import Menu from "../companents/Menu";
import imageSrc from "../assets/images/footer.jpeg";
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
        <p className="w-[1000px] text-2xl mt-5 text-center">The Rabbit School provides different levels of special education according to the severity of the disability. The child can run all the programs or just choose one specific program, according to his “individual development plan”.</p>
        </div>
      </section>

      {/* <section className="h-[750px] w-full flex">
        <div className="bg-gray-200 h-full w-[50%] flex justify-center items-center">
          <div className="bg-yellow-300 h-[650px] w-[700px] "></div>
        </div>
        <div className="bg-red-400 h-full w-[60%]"></div>
      </section> */}

      {/* <h1 className="h-[100px]">title</h1>
      <section className="h-[1000px] w-full flex">
        <div className="bg-red-500 w-[50%] h-full"></div>
        <div className="bg-green-500 w-[50%]" h-full ></div>
      </section> */}



  


    </>
  );
}

export default OurAction;
