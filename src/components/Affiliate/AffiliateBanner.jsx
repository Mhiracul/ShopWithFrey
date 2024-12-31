import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hero from "../../assets/contentcreation.jpeg";

const AffiliateBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Customize duration as needed
  }, []);
  return (
    <div
      className="w-full bg-white h-full font-gilroy relative"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="bg-gradient  justify-center bg-gradient-to-br h-full from-[#131313] to-transparent  
                bg-opacity-20"
      >
        <div className=" container mx-auto flex flex-col h-[90vh] lg:items-start items-center justify-center ">
          <div className="py-2 px-10 rounded-full" data-aos="fade-up">
            <h1 className="uppercase lg:text-left text-center text-shadow-default  text-white lg:text-6xl md:text-4xl text-2xl font-bold">
              Content creation
            </h1>
            <p
              className="text-sm md:text-left text-center mt-3 text-[#cfcfcf]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              An Opportunity to Level your contents and become a paid creator in
              2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateBanner;
