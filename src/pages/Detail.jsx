import React from "react";
import Menu from "../companents/Menu";
import Footer from "../companents/Footer";
const Detail = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Menu />
      <main className="flex-grow p-4 bg-gray-100">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          <h1 className="text-sky-700 text-[30px] sm:text-[40px] md:text-[50px] font-bold mb-4 text-center">
            Sakal's Journey
          </h1>
          <p className="text-gray-600 text-[20px] mb-4 text-center">
            Sakal is a 20 year old orphan born in the National Borey for Infants
            and Children, the building which houses the Rabbit School’s
            headquarters. Sakal has an intellectual disability, and was unable
            to walk until he was 12 years old.
          </p>
          <img
            src="https://cdn.discordapp.com/attachments/1198512111777763432/1282960151053209692/image.png?ex=66e14140&is=66dfefc0&hm=13ca01c0d31ac162c8af4b0735f9887244ce68b3e31a530455730650db7bf83f&"
            alt="Sakal"
            className="mb-8 w-[619px] h-[500px] object-cover "
          />
          <p className="text-gray-600 text-[20px] text-left mb-8">
            At the age of 7, Sakal began to attend The Rabbit School. When he
            began formal education, Sakal had some behavioural issues, such as
            biting and spitting. In the early years of his schooling, he was
            very reliant on teachers and other carers for assistance. He was
            placed in the readiness class, a program designed for children with
            severe intellectual disabilities.
          </p>
          <p className="text-gray-600 text-[20px] text-left ">
            Over time, Sakal’s academic performance and behavior began to
            improve. After 2 years at the Rabbit School, Sakal transferred to a
            public school, and also attended English at a private institution.
            Unfortunately, Sakal’s public school teachers were unable to cope
            with teaching a child with intellectual disabilities, and as a
            result, Sakal dropped out of school at the age of 15.
          </p>
        </div>
      </main>
      {/* <Footer/> */}
    </div>
  );
};

export default Detail;
