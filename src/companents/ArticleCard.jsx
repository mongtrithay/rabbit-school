import image16 from '../assets/images/image16.png';
import ButttonReadMore from "../companents/ButtonReadMore"
function ArticleCard() {
    return (
        <div className=" w-full h-[528px]">
            <div className="w-[400px] h-[500px] bg-white">
                <div className="w-[90%] h-[200px] m-auto">
`                    <img src={image16} alt="Article" className="w-full h-full object-cover" />`
                      <h1 className='text-orange-400 text-[20px] font-semibold'>Pisey’s Journey</h1>
                      <div className='w-[163px] h-[2px] bg-orange-400'></div>
                      <p className='text-gray-500 text-[13px] mt-4'>Pisey has an intellectual disability and epilepsy. Her mother always thought she could not go to school - and kept her at home until she was 14 years old, also because she is frequently ill. At that time here was no special school in the community at all. At home, she like running and walking around the house and village. </p>
                    <div className='flex justify-center mt-4'>
                        <ButttonReadMore />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default ArticleCard;
