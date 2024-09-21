import React, { useState } from "react";
import Menu from "../companents/Menu";
import image14 from "../assets/images/image14.png";
import Footer from "../companents/Footer";

function ContactPage() {
  const [status, setStatus] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "cc7b7303-711c-4db0-ae53-db458849051d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("Message sent successfully!");
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div>
        <Menu />
        <h1 className="text-[40px] sm:text-[50px] text-sky-700 font-bold text-center mt-10 font-inika">
          GET IN TOUCH
        </h1>

        <div className="flex flex-col sm:flex-row w-[90%] sm:w-[65%] justify-center items-center m-auto gap-10 sm:gap-40 mt-10 sm:mt-16">
          <div className="flex-1 w-full">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-gray-700 font-inika">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full sm:w-[433px] h-[50px] p-2 border border-sky-700 mt-3"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-inika">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full sm:w-[433px] h-[50px] p-2 border border-sky-700 mt-3"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-inika">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full sm:w-[433px] h-[120px] sm:h-[150px] p-2 border border-sky-700 mt-3"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-[433px] bg-orange-500 text-white p-2 rounded font-inika"
              >
                Submit
              </button>
            </form>
            {status && <p className="mt-4 text-center">{status}</p>}
          </div>

          {/* Image Section */}
          <div className="flex-1 w-full sm:w-[552px] h-[400px] sm:h-[480px] mt-10 sm:mt-0">
            <img
              src={image14}
              alt=""
              className="w-[600px] h-[360px] object-cover mt-6"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-[90%] sm:w-[65%] m-auto gap-6 sm:gap-10 mt-10 ">
          <div className="flex-1 text-center">
            <h1 className="text-[25px] sm:text-[30px] text-sky-700 font-bold font-inika">
              Address
            </h1>
            <p className="text-[18px] sm:text-[20px] text-white">
              <a
                href="https://goo.gl/maps/jvMBC2MgTz1kUyoh6"
                className="text-gray-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://goo.gl/maps/jvMBC2MgTz1kUyoh6
              </a>
            </p>
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-[25px] sm:text-[30px] text-sky-700 font-bold font-inika">
              Email
            </h1>
            <p className="text-[18px] sm:text-[20px] text-gray-500">
              <a
                href="mailto:sor.sothearom@rabbitschoolcambodia.net font-inika"
                className="underline"
              >
                sor.sothearom@rabbitschoolcambodia.net
              </a>
            </p>
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-[25px] sm:text-[30px] text-sky-700 font-bold font-inika">
              Phone
            </h1>
            <p className="text-[18px] sm:text-[20px] text-gray-500 font-inika">
              <a href="tel:+85568901971" className="underline">
                +855 68 901 971
              </a>
              <br />
              <a href="tel:+85517525815" className="underline font-inika">
                +855 17 525 815
              </a>
            </p>
          </div>
        </div>
        <div className="mt-20">{/* <Footer /> */}</div>
      </div>
    </>
  );
}

export default ContactPage;
