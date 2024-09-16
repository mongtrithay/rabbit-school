import Footer from "../companents/Footer";
import Menu from "../companents/Menu";
import images from "../assets/images/image3.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image.png";
// import image4 from "../assets/images/image4.jpeg";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.jpg";
import image7 from "../assets/images/image7.jpeg";
import image8 from "../assets/images/image8.png";
import image9 from "../assets/images/image9.png";
import image10 from "../assets/images/image10.png";
import image11 from "../assets/images/image11.png";
import image12 from "../assets/images/image12.png";
import image13 from "../assets/images/image13.png";

function AboutPage() {
  return (
    <>
      <div>
        <div>
          <Menu />
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-center text-[28px] sm:text-[50px] mt-5 text-sky-700">
            ABOUT OUR SCHOOL
          </h1>
        </div>

        <div className="flex justify-center items-center mt-3 px-2 sm:px-0">
          <h3 className="text-center text-base sm:text-xl text-sky-700">
            We are dedicated to supporting our children from their early years
            until they reach adulthood and achieve independence.
          </h3>
        </div>

        <div className="flex justify-center items-center gap-2 sm:gap-5 mt-3">
          <div className="flex justify-center items-center space-x-2 sm:space-x-6 mt-6">
            <div className="border-2 border-gray-300 p-2 sm:p-7 rounded-lg">
              <img
                className="w-24 h-32 sm:w-48 sm:h-60 object-cover rounded-lg"
                src={images}
                alt="Image 1"
              />
            </div>
            <div className="border-2 border-gray-300 p-2 sm:p-7 rounded-lg">
              <img
                className="w-24 h-32 sm:w-48 sm:h-60 object-cover rounded-lg"
                src={image2}
                alt="Image 2"
              />
            </div>
            <div className="border-2 border-gray-300 p-2 sm:p-7 rounded-lg">
              <img
                className="w-24 h-32 sm:w-48 sm:h-60 object-cover rounded-lg"
                src={image3}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 text-neutral-500 px-2 sm:px-0">
          <p className="text-center text-sm sm:text-xl max-w-3xl">
            All our students benefit from an individualized curriculum, using
            pedagogical and therapeutic methods. We defend an inclusive vision
            of education: with integrative and inclusive classes; we aim to
            integrate children with intellectual disabilities, as far as it is
            vocationally possible, into non-disability classes, but also to
            foster common spaces and activities.
          </p>
        </div>

        <div className="w-full h-auto bg-sky-700 flex flex-col justify-start items-center mt-10 pt-10 px-4">
          <h1 className="text-[28px] sm:text-[50px] text-center text-white mb-4">
            OUR GALLERY
          </h1>
          <p className="text-[16px] sm:text-[20px] text-center text-white max-w-md sm:max-w-3xl mb-6">
            We provide opportunities and support for people with disabilities,
            helping them lead fulfilling and independent lives.
          </p>
          <div className="grid grid-cols-3 gap-5 sm:gap-10 mt-12  mb-10 sm:mt-20 max-w-5xl mx-auto ">
            <div className="flex flex-col items-center">
              <img
                className="w-full h-auto object-cover"
                src={image4}
                alt="IMAGE4"
              />
              <img
                className="w-full h-auto object-cover mt-5"
                src={image5}
                alt="IMAGE5"
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-full h-auto object-cover"
                src={image6}
                alt="IMAGE6"
              />
              <img
                className="w-full h-auto object-cover mt-5"
                src={image7}
                alt="IMAGE7"
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-full h-auto object-cover"
                src={image8}
                alt="IMAGE8"
              />
              <img
                className="w-full h-auto object-cover mt-5"
                src={image9}
                alt="IMAGE9"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="w-[90%] m-auto mt-10">
            <h1 className="text-sky-700 text-[30px] sm:text-[50px] ">
              HISTORY OF RABBIT SCHOOL
            </h1>
            <p className="text-neutral-500 text-[15px] sm:text-[20px] mt-5">
              For the past 25 years, The Rabbit School (RSO) has been fighting
              for equal rights to education for CWID’s
            </p>

            {/* This div stays for both large and small screens */}
            <div className="w-full h-[50px] bg-sky-700 mt-10"></div>

            {/* Layout for large screens with borders */}
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 border-l-2 border-sky-700 h-[220px] p-4">
                <h1 className="ml-3 text-sky-700 text-[40px] sm:text-[50px]">
                  1997
                </h1>
                <p className="ml-3 text-neutral-500 text-[15px] sm:text-[20px] mt-2">
                  Creation of the RSO to provide education to children with
                  special needs
                </p>
              </div>
              <div className="flex-1 border-l-2 border-sky-700 h-[220px] p-4">
                <h1 className="ml-3 text-sky-700 text-[40px] sm:text-[50px]">
                  2008
                </h1>
                <p className="ml-3 text-neutral-500 text-[15px] sm:text-[20px] mt-2">
                  Opening of the first integrated class and the vocational
                  training center
                </p>
              </div>
              <div className="flex-1 border-l-2 border-sky-700 h-[13.75rem] p-4">
                <h1 className="ml-3 text-sky-700 text-[2.5rem] sm:text-[3.125rem]">
                  2012
                </h1>
                <p className="ml-3 text-neutral-500 text-[0.9375rem] sm:text-[1.25rem] mt-2">
                  Extension of activities in Kanda
                </p>
              </div>

              <div className="flex-1 border-l-2 border-sky-700 border-x-2 border-x-sky-700 h-[220px] p-4">
                <h1 className="ml-3 text-sky-700 text-[40px] sm:text-[50px]">
                  2013
                </h1>
                <p className="ml-3 text-neutral-500 text-[15px] sm:text-[20px] mt-2">
                  Extension of activities in Kampung Speu
                </p>
              </div>
            </div>
          </div>

          <div className="w-[90%] m-auto border-b-2 border-sky-700 mb-8">
            <div className="w-full h-[50px] bg-sky-700"></div>

            {/* Layout for responsive screens with 2 boxes per row */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
              <div className="border-l-2 border-sky-700 h-[220px] p-4 ">
                <h1 className="text-sky-700 text-[40px] sm:text-[50px]">
                  2014
                </h1>
                <p className="ml-3 text-neutral-500 text-[15px] sm:text-[20px] mt-2">
                  Opening of Siem Reap School
                </p>
              </div>

              <div className="border-l-2 border-sky-700 h-[220px] p-4">
                <h1 className="text-sky-700 text-[40px] sm:text-[50px]">
                  2020
                </h1>
                <p className="ml-3 text-neutral-500 text-[15px] sm:text-[20px] mt-2">
                  Launching of the Out Of School Children Program
                </p>
              </div>
              <div className="border-l-2 border-sky-700 h-[220px] p-4">
                <h1 className="text-sky-700 text-[40px] sm:text-[50px]">
                  2022
                </h1>
                <p className="ml-3 text-neutral-500 text-[15px] sm:text-[20px] mt-2">
                  Opening of the new Adapted library
                </p>
              </div>
              <div className="border-l-2 border-sky-700 border-x-2 border-x-sky-700 h-[220px] p-4">
                <h1 className="text-sky-700 text-[40px] sm:text-[50px]">
                  2024
                </h1>
                <p className="ml-3 text-neutral-500 text-[15px] sm:text-[20px] mt-2">
                  Launching of the speech therapy training project
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[833px] bg-sky-700 mt-10">
          <h1 className="text-[50px] text-white text-center mt-4">
            Student, Teacher & Volunteer Testimonials
          </h1>
        </div>

        <div className="w-full flex justify-center items-center mt-5">
          <h1 className="text-sky-700 text-[50px] text-center">
            Mission & Vision
          </h1>
        </div>

        <div className="flex mt-10">
          <div className="flex-1">
            <img
              className="w-full h-[430px] object-cover"
              src={image10}
              alt="Logo"
            />
          </div>
          <div className="flex-1">
            <div className="w-full h-[58px] bg-sky-700 flex justify-center">
              <h1 className="text-white text-[25px] text-center mt-2">
                Special education for children with disabilities
              </h1>
            </div>
            <p className="text-[25px] mt-24 ml-20 text-neutral-500">
              <span className="text-sky-700">
                The Rabbit School’s principal activity is to educate <br />
                children with intellectual disabilities from 4 to 25 years{" "}
                <br />
                old.
              </span>{" "}
              Our two principal schools are in Phnom Penh and <br />
              Siem Reap, but we also have classes in Kandal and Kampong Speu.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="flex-1">
            <div className="w-full h-[58px] bg-sky-700 flex justify-center">
              <h1 className="text-white text-[25px] text-center mt-2">
                Train teachers for special Education
              </h1>
            </div>
            <p className="text-[25px] mt-16 ml-28 text-neutral-500">
              In Cambodia, there is only one institute that provides <br />
              specialized training for teachers in special education. <br />
              <span className="text-sky-700 ">
                The Rabbit Schools not only organize such training <br />
                for their own teachers but also extend their services <br />
                to other schools.
              </span>
            </p>
          </div>
          <div className="flex-1">
            <img
              className="w-full h-[430px] object-cover"
              src={image11}
              alt="Logo"
            />
          </div>
        </div>

        <div className="flex ">
          <div className="flex-1">
            <img
              className="w-full h-[430px] object-cover"
              src={image12}
              alt="Logo"
            />
          </div>
          <div className="flex-1">
            <div className="w-full h-[58px] bg-sky-700 flex justify-center">
              <h1 className="text-white text-[25px] text-center mt-2">
                Vocational training and Job placement
              </h1>
            </div>
            <p className="text-[25px] mt-16 ml-32 text-neutral-500">
              <span className="text-sky-700">
                Professional inclusion in Cambodia is particularly <br />
                difficult for adults with intellectual disabilities.
              </span>{" "}
              When <br />
              they become adults, most of them come back to their <br />
              families with no job. The Rabbit Schools helps young <br />
              adults from 17 to 20 (sometimes until 24) to get trained <br />
              and obtain a job in a partner company.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="flex-1">
            <div className="w-full h-[58px] bg-sky-700 flex justify-center">
              <h1 className="text-white text-[25px] text-center mt-2">
                Advocacy to local authorities general public
              </h1>
            </div>
            <p className="text-[25px] mt-12 ml-32 text-neutral-500">
              A wide variety of{" "}
              <span className="text-sky-700">
                advocacy initiatives in local <br />
                communities
              </span>
              , direct support programs for parents to <br />
              define their child’s development and opportunities and <br />
              the choice to integrate the Rabbit School activities{" "}
              <span className="text-sky-700">
                in <br />
                normal Public Schools
              </span>{" "}
              (specific classrooms on the <br />
              Public Schools premises) is slowly removing the taboo <br />
              on mental disability in Cambodia
            </p>
          </div>
          <div className="flex-1">
            <img
              className="w-full h-[430px] object-cover"
              src={image13}
              alt="Logo"
            />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
export default AboutPage;
