import Menu from "../companents/Menu";
import image15 from '../assets/images/image15.png';
import Footer from "../companents/Footer";
function SupportPage(){
    return(
        <>
        <div>
            <Menu />
            <h1 className="text-[40px] text-sky-700 font-bold text-center mt-24">Support Rabbit School</h1>
            <p className="text-[20px] text-gray-500 text-center">We are in need of various resources to support our educational and therapeutic programs. Your <br />
            donations help us provide essential tools and materials for our community.</p>

            <div className="w-[75%] m-auto mt-14">
                <div className="flex flex-col gap-7">
                    <h1 className="text-[40px] text-sky-700 font-bold">DONATE RESOURCES</h1>
                    <p className="text-[20px]">
                        <span className="text-sky-700">School Materials: </span>Books, pencils, DVDs, educational games.
                    </p>
                    <p className="text-[20px]">
                        <span className="text-sky-700">Children's Books:</span>Children’s books, especially in Khmer.
                    </p>
                    <p className="text-[20px]">
                        <span className="text-sky-700">Physiotherapy Devices: </span> Special devices and toys for physiotherapy.
                    </p>
                </div>
                <div className="flex mt-24">
                    <div className="flex-1 flex flex-col gap-7">
                    <h1 className="text-[40px] text-sky-700 font-bold">FINANCIAL DONATIONS</h1>
                    <p>To make a financial contribution, please deposit your donation into <br /> <br />the following bank </p>
                    <p><span className="font-bold"> Bank:</span>ACLEDA Bank Plc</p>
                    <p><span className="font-bold"> Account name:</span> Rabbit School</p>
                    <p><span className="font-bold"> Account number:</span>  2900-01-005152-1-2</p>
                    </div>
                    <div className="flex1">
                    <img src={image15} alt="" className="w-[340px] h-[338px]"/>
                    </div>
                </div>
            </div>

            <p className="text-[20px] text-gray-500 text-center mt-10">A receipt will be sent on your request to: afm.rabbitschool@gmail.com <br />
            We thank you for your generosity.
            </p>

            <div className="mt-16">
                <Footer />
            </div>
        </div>
        </>
    )
}
export default SupportPage ;