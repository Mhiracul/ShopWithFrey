import React, { useEffect } from "react";
import hero from "../../assets/bg2.jpeg";
import { GoArrowUpRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Customize duration as needed
  }, []);
  return (
    <div
      className="w-full bg-white h-full font-outfit relative"
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
            <h1 className="uppercase text-shadow-default  text-white lg:text-6xl md:text-4xl text-2xl font-bold">
              frey digitals
            </h1>
            <p
              className="text-sm md:text-left text-center mt-3 text-[#cfcfcf]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Dedicated to helping you earn from home
            </p>
            <button
              className="bg-text-gradient inline-flex gap-0.5 items-center mt-4 py-2 px-4 rounded-full font-medium text-[#131313] transition-all duration-300 ease-in-out transform hover:animate-bounce"
              data-aos="zoom-in" // Add zoom-in animation on scroll
              data-aos-delay="600"
            >
              See More <GoArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
