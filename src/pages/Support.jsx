import Menu from "../companents/Menu";
import image15 from "../assets/images/image15.png"; // Corrected image import
import Footer from "../companents/Footer";

function SupportPage() {
  return (
    <>
      <div>
        <Menu />
        <h1 className="text-[30px] sm:text-[40px] text-sky-700 font-bold text-center mt-12 sm:mt-24 font-inika">
          Support Rabbit School
        </h1>
        <p className="text-[16px] sm:text-[20px] text-gray-500 text-center px-4 sm:px-0 font-inika">
          We are in need of various resources to support our educational and
          therapeutic programs. Your <br className="hidden sm:block" />
          donations help us provide essential tools and materials for our
          community.
        </p>

        <div className="w-[90%] sm:w-[60%] m-auto mt-10 sm:mt-14">
          <div className="flex flex-col gap-4 sm:gap-7">
            <h1 className="text-[30px] sm:text-[40px] text-sky-700 font-bold font-inika">
              DONATE RESOURCES
            </h1>
            <p className="text-[16px] sm:text-[20px] font-inika">
              <span className="text-sky-700">School Materials: </span>Books,
              pencils, DVDs, educational games.
            </p>
            <p className="text-[16px] sm:text-[20px] font-inika">
              <span className="text-sky-700">Children's Books:</span>Children’s
              books, especially in Khmer.
            </p>
            <p className="text-[16px] sm:text-[20px] font-inika">
              <span className="text-sky-700">Physiotherapy Devices: </span>{" "}
              Special devices and toys for physiotherapy.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row mt-12 sm:mt-24 gap-8 font-inika">
            <div className="flex-1 flex flex-col gap-4 sm:gap-7">
              <h1 className="text-[30px] sm:text-[40px] text-sky-700 font-bold font-inika">
                FINANCIAL DONATIONS
              </h1>
              <p>
                To make a financial contribution, please deposit your donation
                into  the following bank:
              </p>
              <p>
                <span className="font-bold"> Bank : </span>ACLEDA Bank Plc
              </p>
              <p>
                <span className="font-bold"> Account name :</span> Rabbit School
              </p>
              <p>
                <span className="font-bold"> Account number :</span>
                  2900-01-005152-1-2
              </p>
            </div>
            <div className="flex-1">
              <img
                src={image15}
                alt="Donation"
                className="w-full sm:w-[340px] h-auto "
              />{" "}
              {/* Updated image source */}
            </div>
          </div>
        </div>

        <p className="text-[16px] sm:text-[20px] text-gray-500 text-center mt-8 sm:mt-10 px-4 sm:px-0 font-inika">
          A receipt will be sent on your request to: afm.rabbitschool@gmail.com{" "}
          <br className="hidden sm:block" />
          We thank you for your generosity.
        </p>

        <div className="flex flex-col sm:flex-row w-[90%] sm:w-[65%] m-auto gap-6 sm:gap-10 mt-10">
          <div className="flex-1 text-center">
            <h1 className="text-[25px] sm:text-[30px] text-sky-700 font-bold font-inika">
              Address
            </h1>
            <p className="text-[18px] md:text-[25px] font-inika">
              <a
                href="https://goo.gl/maps/jvMBC2MgTz1kUyoh6"
                className="text-sky-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                https://goo.gl/maps/jvMBC2MgTz1kUyoh6
              </a>
            </p>
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-[25px] sm:text-[30px] text-sky-700 font-bold font-inika">
              Email
            </h1>
            <p className="text-[18px] md:text-[25px] text-sky-700 font-inika">
              <a
                href="mailto:sor.sothearom@rabbitschoolcambodia.net"
                className="underline"
              >
                sor.sothearom@rabbitschoolcambodia.net
              </a>
            </p>
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-[25px] sm:text-[30px] text-sky-700 font-bold font-inika">
              Phone{" "}
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

        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default SupportPage;