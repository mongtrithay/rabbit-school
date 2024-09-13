import image16 from '../assets/images/image16.png';
import ButttonReadMore from "../companents/ButtonReadMore";
import Slider from "react-slick";

const ArticleCard = () => {
    return (
        <div className="w-[400px] h-[500px] bg-white flex justify-center m-4">
            <div className="w-[90%] h-[200px]">
                <img src={image16} alt="Article" className="w-full h-full object-cover mt-4" />
                <h1 className='text-orange-400 text-[20px] font-semibold'>Pisey’s Journey</h1>
                <div className='w-[163px] h-[2px] bg-orange-400'></div>
                <p className='text-gray-500 text-[13px] mt-4'>
                    Pisey has an intellectual disability and epilepsy. Her mother always thought she could not go to school - and kept her at home until she was 14 years old, also because she is frequently ill. At that time, there was no special school in the community at all. At home, she likes running and walking around the house and village.
                </p>
                <div className='flex justify-center mt-4'>
                    <ButttonReadMore />
                </div>
            </div>
        </div>
    );
};

const ArticleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of articles shown at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Change slide every 3 seconds
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="w-[80%] m-auto h-auto">
            <Slider {...settings}>
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </Slider>
        </div>
    );
};

export default ArticleSlider;
