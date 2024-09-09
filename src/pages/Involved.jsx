import React from 'react';
import Menu from '../companents/Menu';
import Footer from'../companents/Footer';

function Involved() {
  return (

    // section1
    <div className="min-h-screen bg-gray-100">
      <Menu />
      <h1 className="text-5xl font-bold text-center mt-10 text-sky-700">
        DO YOU WANT TO GET INVOLVED?
      </h1>
      <div className="flex flex-col md:flex-row max-w-8xl mx-auto bg-sky-700 shadow-lg overflow-hidden h-[500px] mt-8">
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-[40px] font-bold text-white ml-8">
            Explore Job
          </h1>
          <hr className="mb-8 mt-2 ml-8 border-4 w-[400px] border-orange-500" />
          <p className="text-[24px] text-white leading-relaxed ml-8">
            Make a difference in children's lives by joining our passionate team.
            Whether you're an educator, social worker, or support staff, find a role that matches your
            skills and helps create a brighter future for vulnerable children. Together, we can build
            a better tomorrow, providing hope, support, and opportunities for every child to reach
            their full potential. Your dedication can make a lasting impact, transforming lives and
            communities. Join us in our mission to nurture, empower, and uplift the next generation.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="https://via.placeholder.com/800x600"
            alt="Involved"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
{/* 
     //section2 */}

      <div className="flex flex-col md:flex-row max-w-10xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden h-auto">
        <div className="w-full md:w-1/2 p-8 border-r-2 border-sky-700">
          <h1 className="text-[40px] font-bold text-sky-700 ml-8 mb-6 text-center">AVAILABLE POSITIONS</h1>
          <div className="mb-6 ml-8">
            <h2 className="text-[30px] font-bold text-sky-700">Program Coordinator</h2>
            <p className="text-gray-700 text-[20px]">Manage and oversee the planning and execution of various programs and projects.</p>
          </div>
          <div className="mb-6 ml-8">
            <h2 className="text-[30px] font-bold text-sky-700">Community Outreach Officer</h2>
            <p className="text-gray-700 text-[20px]">Build and maintain relationships with local communities, identify needs, and promote NGO initiatives.</p>
          </div>
          <div className="mb-6 ml-8">
            <h2 className="text-[30px] font-bold text-sky-700">Fundraising Manager</h2>
            <p className="text-gray-700 text-[20px]">Develop and implement fundraising strategies, organize campaigns, and build partnerships to secure financial support for the NGO’s activities.</p>
          </div>
          <div className="ml-8">
            <h2 className="text-[30px] font-bold text-sky-700">Volunteer Coordinator</h2>
            <p className="text-gray-700 text-[20px]">Recruit, train, and manage volunteers. Ensure volunteers are matched with suitable roles and provide ongoing support and motivation.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 bg-white-100">
          <h1 className="text-[40px] font-bold text-sky-700 mb-6 text-center">COMPANY BENEFITS</h1>
          <ul className="space-y-8 ml-8">
            <li className="flex items-center">
              <svg className="w-[92px] h-[101px] text-orange-500 mr-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12V7H9V6h2zM9 8h2v6H9V8z"></path></svg>
              <div>
                <p className="text-[30px] font-bold text-sky-700">Competitive salary</p>
                <p className="text-[20px] text-gray-700">We offer a salary package that reflects your skills, experience, and contributions.</p>
              </div>
            </li>
            <li className="flex items-center">
              <svg className="w-[92px] h-[101px] text-orange-500 mr-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12V7H9V6h2zM9 8h2v6H9V8z"></path></svg>
              <div>
                <p className="text-[30px] font-bold text-sky-700">Career Development Opportunities</p>
                <p className="text-[20px] text-gray-700">We provide opportunities for career growth and professional development.</p>
              </div>
            </li>
            <li className="flex items-center">
              <svg className="w-[92px] h-[101px] text-orange-500 mr-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12V7H9V6h2zM9 8h2v6H9V8z"></path></svg>
              <div>
                <p className="text-[30px] font-bold text-sky-700">Generous paid time off</p>
                <p className="text-[20px] text-gray-700">Enjoy generous paid time off, including vacation days and public holidays.</p>
              </div>
            </li>
            <li className="flex items-center">
              <svg className="w-[92px] h-[101px] text-orange-500 mr-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12V7H9V6h2zM9 8h2v6H9V8z"></path></svg>
              <div>
                <p className="text-[30px] font-bold text-sky-700">Comprehensive health benefits</p>
                <p className="text-[20px] text-gray-700">Comprehensive health benefits covering medical, dental, and optical needs.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* //section3 */}

      <div className="flex flex-col md:flex-row max-w-8xl mx-auto bg-sky-700 shadow-lg overflow-hidden h-[500px]">
        <div className="w-full md:w-1/2">
          <img
            src="https://via.placeholder.com/800x600"
            alt="Involved"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-[40px] font-bold text-white ml-8">
          Give Your Time and Skills
          </h1>
          <hr className="mb-8 mt-2 ml-8 border-4 w-[600px] border-orange-500" />
          <p className="text-[24px] text-white leading-relaxed ml-8">
            Make a positive impact on children's lives by volunteering your skills or joining our team.
            Whether you want to lend your expertise, support our programs, or contribute to our mission in other ways,
            your involvement can create real change. From mentoring and teaching to helping with events and
            fundraising, every effort counts. By working together, we can offer children hope, opportunities, and a
            brighter future. Join us and be a part of something meaningful.
          </p>
        </div>
      </div>

      {/* //section4 */}

       <div className="flex flex-col md:flex-row max-w-10xl mx-auto bg-white   overflow-hidden h-auto">
        <div className="w-full md:w-2/2 p-8 bg-white-100">
          <h1 className="text-[40px] font-bold text-sky-700 mb-6 text-center ">WHY VOLUNTEER?</h1>
          <ul className="space-y-8 ml-8">
            <li className="flex items-center">
              <svg className="w-[135px] h-[120px] text-orange-500 mr-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12V7H9V6h2zM9 8h2v6H9V8z"></path></svg>
              <div>
                <p className="text-[35px] font-bold text-sky-700">Classroom Support</p>
                <p className="text-[30px] text-gray-600">Help teachers with classroom activities and provide one-on-one support to students.</p>
              </div>
            </li>
            <li className="flex items-center">
              <svg className="w-[135px] h-[120px] text-orange-500 mr-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12V7H9V6h2zM9 8h2v6H9V8z"></path></svg>
              <div>
                <p className="text-[35px] font-bold text-sky-700">Event Planning and Fundraising</p>
                <p className="text-[30px] text-gray-600">Assist in planning and running school events and funFundraisingdraising efforts.</p>
              </div>
            </li>
            <li className="flex items-center">
              <svg className="w-[135px] h-[120px] text-orange-500 mr-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12V7H9V6h2zM9 8h2v6H9V8z"></path></svg>
              <div>
                <p className="text-[40px] font-bold text-sky-700">Academic Guidance</p>
                <p className="text-[30px] text-gray-600">Provide academic support and guidance to students.</p>
              </div>
            </li>
            <li className="flex items-center ">
              <svg className="w-[135px] h-[120px]  text-orange-500 mr-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12V7H9V6h2zM9 8h2v6H9V8z"></path></svg>
              <div>
                <p className="text-[40px] font-bold text-sky-700">Library Management</p>
                <p className="text-[30px] text-gray-600">Help manage the school library and assist students with finding resources.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
 
      {/* //section5 */}
      {/* left Section */}

      <div className="flex flex-col md:flex-row max-w-10xl mx-auto h-[600px]">
   <div className="w-full md:w-1/2 p-8  bg-sky-700 ">
    <h1 className="text-[40px] text-white font-bold mb-6 text-center">CONTACT US</h1>
    <div className="text-[20px] text-white space-y-4">
      <div>
        <h2 className="font-bold text-[30px] text-white ml-[22%]">Phone</h2>
        <p className='text-[25px] ml-[22%] text-white'>+855 68 901 971</p>
        <p className='text-[25px] ml-[22%] text-white'>+855 17 525 815</p>
      </div> 
      <div>
        <h2 className="font-bold text-[30px] text-white ml-[22%]">Email</h2>
        <p className='text-[25px] ml-[22%] text-white'>sor.sothearom@rabbitschoolcambodia.net</p>
        <p className='text-[25px] ml-[22%] text-white'>hun.touch@rabbitschoolcambodia.net</p>
      </div>
      <div>
        <h2 className="font-bold text-[30px] text-white ml-[22%]">Address</h2>
        <p className='text-[25px] ml-[22%] '><a href="https://goo.gl/maps/jvMBC2MgTz1kUyoh6" className="text-white underline" target="_blank" rel="noopener noreferrer">https://goo.gl/maps/jvMBC2MgTz1kUyoh6</a></p>
      </div>
    </div>
  </div>

  {/* Right Section */}
  <div className="relative w-full md:w-1/2 p-8 h-[600px] bg-white">
  <div className="absolute top-0 left-0 w-full h-[7px] bg-sky-700"></div>
  <h1 className="text-[40px] font-bold text-sky-700 mb-6 text-center mt-4">GET INVOLVED</h1>
  <form className="space-y-4 flex flex-col items-center">
    <input 
      type="text" 
      placeholder="Full Name" 
      className="w-[400px] p-3 text-[20px] border border-sky-700  focus:outline-none focus:ring-2 focus:ring-sky-500" 
    />
    <input 
      type="email" 
      placeholder="Email" 
      className="w-[400px] p-3 text-[20px] border border-sky-700  focus:outline-none focus:ring-2 focus:ring-sky-500" 
    />
    <textarea 
      placeholder="Message" 
      className="w-[400px] p-3 text-[20px] border border-sky-700  focus:outline-none focus:ring-2 focus:ring-sky-500 h-[150px]" 
    />
    <button 
      type="submit" 
      className="w-[400px] p-2 text-[20px] bg-orange-400 text-white font-bold  hover:bg-gray-500 focus:outline-none focus:ring-2"
    >
      Submit
    </button>
  </form>
</div>


</div>



<Footer />

      










    </div>
  );
}

export default Involved;
