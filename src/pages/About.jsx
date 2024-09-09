import Menu from "../companents/Menu";
import images from '../assets/images/image3.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image.png';
import image4 from '../assets/images/image4.jpeg';
import image5 from '../assets/images/image5.png';
import image6 from '../assets/images/image6.jpg';
import image7 from '../assets/images/image7.jpeg';
import image8 from '../assets/images/image8.png';
import image9 from '../assets/images/image9.png';
import image10 from '../assets/images/image10.png';
import image11 from '../assets/images/image11.png';
import image12 from '../assets/images/image12.png';
import image13 from '../assets/images/image13.png';
import Footer from "../companents/Footer";

function AboutPage(){
    return(
        <>
        <div>

            <div>
                <Menu />
            </div>
            <div className="flex justify-center items-center">
                <h1 className="text-center text-[50px] mt-5 text-cyan-600">ABOUT OUR SCHOOL</h1>
            </div>

            <div className="flex justify-center items-center mt-3">
                <h3 className="text-center text-xl text-cyan-600">We are dedicated to supporting our children from their early years until they 
                        <br />reach adulthood and achieve independence
                </h3>
            </div>

            <div className="flex justify-center items-center gap-5 mt-3">
            <div className="flex justify-center items-center space-x-6 mt-6">
                <div className="border-2 border-gray-300 p-7 rounded-lg">
                    <img className="w-48 h-60 object-cover rounded-lg" src={images} alt="Image 1" />
                </div>
                <div className="border-2 border-gray-300 p-7 rounded-lg">
                    <img className="w-48 h-60 object-cover rounded-lg" src={image2} alt="Image 2" />
                </div>
                <div className="border-2 border-gray-300 p-7 rounded-lg">
                    <img className="w-48 h-60 object-cover rounded-lg" src={image3} alt="Image 3" />
                </div>
            </div>
            </div>

            <div className="justify-center items-center mt-10 text-neutral-500">
                <p className="text-center text-xl">All our students benefit from an individualized curriculum, using pedagogical and the rapeutical <br />
                 methods. We defend an inclusive vision of education: with integrative and inclusive classes; we <br />
                 aim to integrate children with intellectual disabilities, as through far as it vocational is possible,<br />
                 into non- Empowering training disability classes, but also to foster common spaces and activities.</p>
            </div>

            <div className="w-full h-[870px] bg-sky-700 flex flex-col justify-start items-center mt-10 pt-10">
                <h1 className="text-[50px] text-center text-white mb-4">OUR GALLERY</h1>
                <p className="text-[20px] text-center text-white">
                    We provide opportunities and support for people with disabilities, helping them <br />
                    lead fulfilling and independent lives.
                </p>
                <div className="flex flex-row gap-10 mt-20">
                    <div className="">
                    <img className="w-[310px] h-[225px] object-contain" src={image4} alt="IMAGE4" />
                    <img className="w-[310px] h-[225px] object-contain mt-10" src={image5} alt="IMAGE5" />
                    </div>
                    <div className="mt-20">
                    <img className="w-[310px] h-[225px]] object-contain" src={image6} alt="IMAGE6" />
                    <img className="w-[310px] h-[225px] object-contain mt-5" src={image7} alt="IMAGE7" />
                    </div>
                    <div>
                    <img className="w-[310px] h-[225px] object-contain" src={image8} alt="IMAGE8" />
                    <img className="w-[310px] h-[225px] object-contain mt-10" src={image9} alt="IMAGE9" />
                    </div>
                </div>
                </div>
                <div>
                <div className="w-[90%] m-auto mt-5">
                <h1 className="text-cyan-600 text-[50px]">HISTORY OF RABBIT SCHOOL</h1> 
                <p className="text-neutral-500 text-[20px] mt-5">For the past 25 years, The Rabbit School (RSO) has been fighting for equal rights to education for CWID’s</p>
                    <div className="w-full h-[50px] bg-sky-700 mt-10"></div>
                    <div className="flex">
            <div className="flex-1 border-l-2 border-sky-400 h-[220px]">
                <h1 className="ml-3 text-cyan-600 text-[50px]">1997</h1>
                <p className="ml-3 text-neutral-500 text-[20px]">Creation of the RSO in <br />order to provide <br />education to children with <br /> special needs</p>
            </div>
            <div className="flex-1 border-l-2 border-sky-400">
                <h1 className="ml-3 text-cyan-600 text-[50px]">2008</h1>
                <p className="ml-3 text-neutral-500 text-[20px]">Opening of the first <br />integrated class in <br /> Phnom Opening of the <br />vocational training center</p>
            </div>
            <div className="flex-1 border-l-2 border-sky-400">
                <h1 className="ml-3 text-cyan-600 text-[50px]">2012</h1>
                <p className="ml-3 text-neutral-500 text-[20px]">Extension of activities in <br /> Kanda</p>
             </div>                    
             <div className="flex-1 border-l-2 border-l-sky-400 border-x-2 border-x-sky-400">
                <h1 className="ml-3 text-cyan-600 text-[50px]">2013</h1>
                <p className="ml-3 text-neutral-500 text-[20px]">Extension of activities in <br />Kampung Speu</p>
            </div>
            </div>
            </div>
            <div>
            </div>
            </div>

            <div className="w-[90%] m-auto">
                <div className="w-full h-[50px] bg-sky-700"></div>
                <div className="flex">
                <div className="flex-1 border-l-2 border-sky-400 h-[220px]">
                <h1 className="ml-3 text-cyan-600 text-[50px]">1997</h1>
                <p className="ml-3 text-neutral-500 text-[20px]">Creation of the RSO in <br />order to provide <br />education to children with <br /> special needs</p>
            </div>
            <div className="flex-1 border-l-2 border-sky-400">
                <h1 className="ml-3 text-cyan-600 text-[50px]">2008</h1>
                <p className="ml-3 text-neutral-500 text-[20px]">Opening of the first <br />integrated class in <br /> Phnom Opening of the <br />vocational training center</p>
            </div>
            <div className="flex-1 border-l-2 border-sky-400">
                <h1 className="ml-3 text-cyan-600 text-[50px]">2012</h1>
                <p className="ml-3 text-neutral-500 text-[20px]">Extension of activities in <br /> Kanda</p>
             </div>                    
             <div className="flex-1 border-l-2 border-sky-400 border-x-2 border-x-sky-400">
                <h1 className="ml-3 text-cyan-600 text-[50px]">2013</h1>
                <p className="ml-3 text-neutral-500 text-[20px]">Extension of activities in <br />Kampung Speu</p>
            </div>
                </div>
            </div>
            
            <div className="w-full flex justify-center items-center">
            <h1 className="text-cyan-600 text-[50px] text-center">Mission & Vision</h1>
            </div>

            <div className="flex mt-10">
                <div className="flex-1">
                    <img className="w-full h-[430px]" src={image10} alt="Logo" />
                </div>
                <div className="flex-1">
                    <div className="w-full h-[58px] bg-sky-700 flex justify-center">
                            <h1 className="text-white text-[25px] text-center">Special education for children with disabilities</h1>
                    </div>
                        <p className="text-[25px] mt-24 ml-20">The Rabbit School’s principal activity is to educate <br />
                         children with intellectual disabilities from 4 to 25 years <br />
                         old. Our two principal schools are in Phnom Penh and <br />
                         Siem Reap, but we also have classes in Kandal and Kampong Speu.</p>
                </div>
            </div>

            <div className="flex">
            <div className="flex-1">
                    <div className="w-full h-[58px] bg-sky-700 flex justify-center">
                        <h1 className="text-white text-[25px] text-center">Special education for children with disabilities</h1>
                    </div>
                        <p className="text-[25px] mt-24 ml-20">The Rabbit School’s principal activity is to educate <br />
                         children with intellectual disabilities from 4 to 25 years <br />
                         old. Our two principal schools are in Phnom Penh and <br />
                         Siem Reap, but we also have classes in Kandal and Kampong Speu.</p>
                </div>
                <div className="flex-1">
                    <img className="w-full h-[430px]" src={image11} alt="Logo" />
                </div>
            </div>

            <div className="flex ">
                <div className="flex-1">
                    <img className="w-full h-[430px]" src={image12} alt="Logo" />
                </div>
                <div className="flex-1">
                    <div className="w-full h-[58px] bg-sky-700 flex justify-center">
                            <h1 className="text-white text-[25px] text-center">Special education for children with disabilities</h1>
                    </div>
                        <p className="text-[25px] mt-24 ml-20">The Rabbit School’s principal activity is to educate <br />
                         children with intellectual disabilities from 4 to 25 years <br />
                         old. Our two principal schools are in Phnom Penh and <br />
                         Siem Reap, but we also have classes in Kandal and Kampong Speu.</p>
                </div>
            </div>

            <div className="flex">
            <div className="flex-1">
                    <div className="w-full h-[58px] bg-sky-700 flex justify-center">
                        <h1 className="text-white text-[25px] text-center">Special education for children with disabilities</h1>
                    </div>
                        <p className="text-[25px] mt-24 ml-20">The Rabbit School’s principal activity is to educate <br />
                         children with intellectual disabilities from 4 to 25 years <br />
                         old. Our two principal schools are in Phnom Penh and <br />
                         Siem Reap, but we also have classes in Kandal and Kampong Speu.</p>
                </div>
                <div className="flex-1">
                    <img className="w-full h-[430px]" src={image13} alt="Logo" />
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}
export default AboutPage;