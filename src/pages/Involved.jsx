import Menu from "../companents/Menu";
import image14 from "../assets/images/image14.png";
import Footer from "../companents/Footer";

function ContactPage() {
  return (
    <>
      <div>
        <Menu />
        <h1 className="text-[40px] sm:text-[50px] text-sky-700 font-bold text-center mt-10">
          GET IN TOUCH WITH US
        </h1>
        <p className="text-[18px] sm:text-[20px] text-neutral-500 text-center mt-5">
          We’re excited to hear from you!
        </p>

        <div className="flex flex-col sm:flex-row w-[90%] sm:w-[65%] justify-center items-center m-auto gap-10 sm:gap-40 mt-10 sm:mt-16">
          {/* Contact Form Section */}
          <div className="flex-1 w-full">
            <form className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full sm:w-[350px] h-[45px] p-2 border border-blue-500 mt-3 rounded"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full sm:w-[350px] h-[45px] p-2 border border-blue-500 rounded mt-3"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full sm:w-[350px] h-[120px] sm:h-[130px] p-2 border border-blue-500 rounded mt-3"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-[350px] bg-yellow-500 text-white p-2 rounded"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Image Section (Map) */}
          <div className="flex-1 w-full sm:w-[450px] h-[300px] sm:h-[350px] mt-10 sm:mt-0">
            <a
              href="https://goo.gl/maps/jvMBC2MgTz1kUyoh6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image14} alt="Map" className="w-full h-full object-cover cursor-pointer" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-[90%] sm:w-[65%] m-auto gap-6 sm:gap-10 mt-10">
          <div className="flex-1 text-center">
            <h1 className="text-[25px] sm:text-[30px] text-sky-700 font-bold">Address</h1>
            <p className="text-[18px] md:text-[25px] text-white">
              <a
                href="https://goo.gl/maps/jvMBC2MgTz1kUyoh6"
                className="text-white underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://goo.gl/maps/jvMBC2MgTz1kUyoh6
              </a>
            </p>
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-[25px] sm:text-[30px] text-sky-700 font-bold">Email</h1>
            <p className="text-[18px] sm:text-[20px] text-gray-500">
              sor.sothearom@rabbitschoolcambodia.net <br />
              hun.touch@rabbitschoolcambodia.net
            </p>
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-[25px] sm:text-[30px] text-sky-700 font-bold">Phone </h1>
            <p className="text-[18px] sm:text-[20px] text-gray-500">
              +855 68 901 971 <br />
              +855 17 525 815
            </p>
          </div>
        </div>
        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ContactPage;
