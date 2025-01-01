import React, { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";

const Consult = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-dark-gradient font-outfit w-full h-full">
      <div className="container mx-auto px-10 py-20">
        <h1
          className="text-3xl text-white font-bold mb-5 text-center"
          data-aos="fade-up"
        >
          Why Pay for My Consultation?
        </h1>
        <p
          className="text-[#999] text-sm text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Investing in a consultation with me is more than just a one-time
          session—it's your first step toward long-term success. Here's why:
        </p>

        <div
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="bg-gradient py-3 px-4 shadow-md justify-center bg-gradient-to-br h-full from-[#2d2d2d] to-transparent bg-opacity-20"
              data-aos="fade-up"
              data-aos-delay={`${600 + index * 200}`}
            >
              <div className="flex items-start gap-3">
                <h1 className="font-medium text-3xl bg-clip-text text-transparent bg-text-gradient">
                  {`0${index + 1}.`}
                </h1>
                <div className="flex flex-col gap-1">
                  <h1 className="text-lg font-medium text-white">
                    {index === 0 && "Proven Expertise"}
                    {index === 1 && "Tailored Solutions for Your Needs"}
                    {index === 2 && "Save Time and Avoid Mistakes"}
                    {index === 3 && "Unlock Growth Opportunities"}
                    {index === 4 && "Affordable Investment, Lasting Impact"}
                  </h1>
                  <p className="text-sm text-[#999]">
                    {index === 0 &&
                      "With experience as a content creator and strategist, I’ve successfully helped businesses and individuals achieve growth through tailored strategies and actionable advice."}
                    {index === 1 &&
                      "Every consultation is customized to address your unique goals, challenges, and industry, ensuring you walk away with a clear, actionable roadmap."}
                    {index === 2 &&
                      "Skip the trial-and-error phase by learning strategies that are proven to work. Whether you're starting as a content creator, looking to boost your affiliate marketing game, or needing clarity on personal shopping or social media, I’ll guide you on the most efficient path to success."}
                    {index === 3 &&
                      "Gain access to insider tips, tools, and strategies that will elevate your online presence, attract your ideal audience, and maximize your earning potential."}
                    {index === 4 &&
                      "A single session can unlock the insights and direction you need to make transformative changes, saving you time, money, and frustration in the long run."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h1
          className="text-[#999] text-center py-3 mt-5"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          Book your consultation now, and let’s start building the future you’ve
          been dreaming of!!
        </h1>
        <div
          className="flex justify-center mt-10"
          data-aos="fade-up"
          data-aos-delay="1400"
        >
          <a href="https://shopwithfrey.selar.co/qby4">
            <button className="bg-text-gradient inline-flex gap-0.5 items-center py-2 px-4 rounded-full font-medium text-[#131313] transition-all duration-300 ease-in-out transform hover:animate-bounce">
              Make Payment <GoArrowUpRight />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Consult;
