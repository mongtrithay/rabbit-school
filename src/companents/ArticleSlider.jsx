import image16 from '../assets/images/image16.png';
import ButttonReadMore from "../companents/ButtonReadMore";
import image from '../assets/images/image.png';
import Banpisey from '../assets/images/BanPisey.jpeg';
import Rith from '../assets/images/Kheavothearith.jpeg';
import ven from '../assets/images/DirkSchraven.jpeg';
import Slider from "react-slick";

const ArticleCard = (props) => {
    return (
        <div className="w-[400px] h-auto bg-white shadow-lg rounded-lg overflow-hidden mx-auto sm:w-[90%]">
        {/* Added 'sm:w-[90%]' to make the card take up more width on phones */}
        <div className="w-[90%] h-[560px] m-auto">
          <img
            src={props.img}
            alt="Article"
            className="w-full h-[250px] object-cover mt-4 rounded-t-lg"
          />
          <div className="p-4">
            <h1 className="text-orange-400 text-[20px] font-semibold mb-2 sm:text-[18px]">
              {props.title}
            </h1>
            <div className="w-[163px] h-[2px] bg-orange-400 mb-4"></div>
            <div className='w-full h-[180px]'>
              <p className="text-gray-500 text-[14px] mb-4 sm:text-[12px]">
                {props.name}
              </p>
            </div>
            <div className="flex justify-center">
              <ButttonReadMore 
                className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-500 transition sm:w-full"
              />
            </div>
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
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
        <div className="w-[80%] m-auto h-auto mt-10">
            <Slider {...settings}>
                <ArticleCard title = "Srey Kalyan" img={image16} name="Srey Kalyan, grew up in a poor family in Cambodia, and as such, was forced to dropout of high school. However, in 1997, I was given the opportunity to work as a volunteer in the Nutrition Center in Phnom Penh. Around this time, Mr. Hun Touch, a biology professor, arrived at the Nutrition Centre with two volunteers from Denmark." />
                <ArticleCard title ="Sakal" img={image} name="Sakal is a 20 year old orphan born in the National Borey for Infants and Children, the building which houses the Rabbit School’s headquarters. Sakal has an intellectual disability, and was unable to walk until he was 12 years old. At the age of 7, Sakal began to attend The Rabbit School. When he began formal education, Sakal had some behavioural issues, such as biting and spitting." />
                <ArticleCard title ="Ban Pisey" img={Banpisey} name="Ban Pisey is a girl, born in 2001. She lives in the Kandal province. It is around 2 kms from school. She lives together with her 4 siblings and mother. A very poor family and mom cannot afford bringing Ban Pisey to school. Pisey has an intellectual disability and epilepsy. Her mother always thought she could not go to school - and kept her at home until she was 14 years old, also because she is frequently ill."/>
                <ArticleCard title ="Kheav Sothearith" img={Rith} name="Kheav Sothearith, a 17-year-old boy with Autism, resides in Sangkat Chey Chumnean, Khan Daun Penh, Phnom Penh, with his parents and two siblings. Coming from an economically disadvantaged background, Sothearith's family faces financial constraints. His father works as a security guard at a shop, while his mother is employed as a cleaner at a hotel. " />
                <ArticleCard title ="Dirk Schraven and Mariken" img={ven} name="Dirk Schraven and Mariken Kruijff live and work in The Netherlands:  “In 2016 we visited the Rabbit School during our 8 months overland trip from Amsterdam to Singapore. When you see with your own eyes the incredible work the team is doing, how the teachers engage with the children and what this all means to their families, you instantly believe in the purpose of the Rabbit School." />
            </Slider>
        </div>
    );
};

export default ArticleSlider;
