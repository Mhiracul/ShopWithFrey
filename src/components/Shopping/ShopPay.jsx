import React from "react";
import shop from "../../assets/Shopper.jpeg";
import { GoArrowUpRight } from "react-icons/go";

const ShopPay = () => {
  return (
    <div className="w-full h-full font-outfit bg-dark-gradient">
      <div className="container mx-auto md:px-10 px-4 py-20">
        <div className="flex flex-col md:items-start items-center gap-10">
          <div className="max-w-md md:text-left text-center text-white text-sm">
            <p>
              This isn’t just a course—it’s a blueprint for your transformation.
              If I could do it with just 100K in savings and no experience,
              imagine what’s possible for you.{" "}
            </p>
            <p>
              Your journey starts here. Let’s make it smooth and successful
              together. Here’s my student in less than 1 month after my class
            </p>
          </div>

          <img src={shop} alt="" className="w-60 h-72  py-2 px-4" />
        </div>

        <div className="flex justify-center mt-10">
          <a href="https://shopwithfrey.selar.co/cs6328">
            <button className="bg-text-gradient inline-flex gap-0.5 items-center py-2 px-4 rounded-full font-medium text-[#131313] transition-all duration-300 ease-in-out transform hover:animate-bounce">
              Make Payment <GoArrowUpRight />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShopPay;
