function Footer() {
  return (
    <>
      <footer className="w-full h-[900px]">
        <section className=" w-full m-auto  image bg-blue-600 image bg-no-repeat bg-center h-[850px]">
          <div className="w-full h-full bler bg-black/25 flex items-center">
            <nav className="w-[60%] h-[250px] mt-[80px] ml-[250px]">
              <h1 className="text-white mb-4 text-6xl">Rabbit Shcool</h1>
              <p className="text-white text-[30px] ">
                At Rabbit School, we are committed to making a positive impact
                in our community. Your support helps us provide essential
                services and create meaningful change. Stay connected and join
                us in our mission to improve lives.
              </p>
            </nav>
          </div>
        </section>
        <section className="w-full m-auto h-[800px] bg-blue-600">
          <section className="flex justify-start w-[100%] h-[500px] ">
            <div className="w-[20%] h-[70%]  ml-[3rem] mt-[5rem]">
              <img src="" alt="logo-footer" className="" />
            </div>
            <nav className="w-[1000px] ml-[7rem] mt-[4rem]">
              <ul className="flex gap-[4rem] text-[1.7rem] text-white font-bold">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About us</a>
                </li>
                <li>
                  <a href="">Our action</a>
                </li>
                <li>
                  <a href="">Support</a>
                </li>
                <li className="ml-[35px]">
                  <a href="">Get Involved</a>
                </li>
              </ul>
              <div>
                <section className="flex gap-[1rem] text-white text-[1rem] leading-7">
                  <div className="mr-[1rem]">
                    <ul>
                      <li>
                        <a href="">Rabbit History</a>
                      </li>
                    </ul>
                  </div>
                  <div className=" mr-[3.5rem] ">
                    <ul>
                      <li>
                        <a href="">History</a>
                      </li>
                      <li>
                        <a href="">Missions</a>
                      </li>
                      <li>
                        <a href="">Values</a>
                      </li>
                      <li>
                        <a href="">Partners</a>
                      </li>
                      <li>
                        <a href="">News</a>
                      </li>
                      <li>
                        <a href="">Documentation</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mr-[3rem]">
                    <ul>
                      <li>
                        <a href="">Special Education</a>
                      </li>
                      <li>
                        <a href="">Teacher training</a>
                      </li>
                      <li>
                        <a href="">Vocational training</a>
                      </li>
                      <li>
                        <a href="">Advocacy</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mr-[1.5rem] ">
                    <ul>
                      <li>
                        <a href="">Make a donation</a>
                      </li>
                      <li>
                        <a href="">Sponsor a student</a>
                      </li>
                      <li>
                        <a href="">organize a fund collect</a>
                      </li>
                    </ul>
                  </div>
                  <div className=" ">
                    <ul>
                      <li>
                        <a href="">Volunteer</a>
                      </li>
                      <li>
                        <a href="">Job offer</a>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </nav>
          </section>
          <hr />
          <section className="flex">
            <section className="ml-[4rem]">
              <h1 className="text-white text-[2rem] font-bold mt-[2rem]">
                Subscribe Now
              </h1>
              <p className=" text-white text-[1rem] ">
                Stay updated with our latest news and initiatives
              </p>
              <input
                type="text"
                placeholder="Enter your email address"
                class="w-[60%] px-2 py-1 my-2 inline-block border border-gray-300 box-border mt-[7rem]"
              />
              <button className=" px-6 py-[0.3rem] text-white font-bold bg-orange-600">
                Send
              </button>
            </section>
            <section className="ml-[4rem]">
              <a href=""></a>
              <a href=""></a>
              <a href=""></a>
              <a href=""></a>
            </section>
          </section>
        </section>
      </footer>
    </>
  );
}

export default Footer;
