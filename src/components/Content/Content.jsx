import React from "react";
import { FaStar } from "react-icons/fa";
import Content1 from "../../assets/content1.jpeg";
import Content2 from "../../assets/content2.jpeg";
import { GoArrowUpRight } from "react-icons/go";
const Content = () => {
  const contentList = [
    {
      title: "5 TikTok Niches",
      description:
        "that are perfect for you, plus a bank of content ideas to get started.",
    },
    {
      title: "10 Hook Ideas",
      description:
        "that will keep your audience engaged from the first second.",
    },
    {
      title: "7 TikTok Editing Hacks",
      description: "to make your videos stand out.",
    },
    {
      title: "Lighting Setups",
      description: "to ensure your content looks professional every time.",
    },
    {
      title: "How to Pitch to Brands",
      description: "and secure paid collaborations with confidence.",
    },
    {
      title: "How to Build a Creator Portfolio",
      description:
        "that showcases your work and sets your prices for when brands reach out.",
    },
  ];
  return (
    <div className="w-full font-outfit h-full bg-dark-gradient">
      <div className="container mx-auto md:px-10 px-4 py-20">
        <div className="flex lg:flex-row flex-col items-center gap-10">
          <div className=" text-sm bg-gradient md:px-10 px-5 py-3 text-white justify-center bg-gradient-to-br h-full from-[#2d2d2d] to-transparent bg-opacity-20 shadow-lg rounded-xl">
            <p>
              Are you ready to take your TikTok game to the next level and start
              getting noticed by brands?{" "}
            </p>
            <p>
              I’ve created a step-by-step content course designed to help you
              create scroll-stopping videos, build your personal brand, and
              start earning as a content creator. In this course, you’ll learn:{" "}
            </p>
            <ul className="grid md:grid-cols-2 grid-cols-1 gap-4 py-8">
              {contentList.map((item, index) => (
                <li
                  key={index}
                  className="text-sm font-normal bg-gradient p-4 justify-center bg-gradient-to-br h-full from-[#121212] to-transparent bg-opacity-20 shadow-lg rounded-xl"
                >
                  <FaStar className="text-yellow-400 mr-2 inline" />
                  <strong>{item.title}</strong> {item.description}
                </li>
              ))}
            </ul>
            <p>
              Whether you’re just starting out or looking to take your content
              to the next level, this course will give you the tools you need to
              grow and monetize your TikTok presence.{" "}
            </p>
            <p>
              Don’t wait to turn your creativity into an income! Click the link
              to sign up and start your journey today.{" "}
            </p>
            <p>Let’s make your TikTok dreams a reality! </p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-2">
              <img src={Content1} alt="" className="rounded-md shadow-md" />
              <img src={Content2} alt="" className="rounded-md shadow-md" />
            </div>
            <p className="font-medium text-center md:text-xl text-base mt-4 text-[#999]">
              These are what i made from some brand deals last year
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <a href="https://shopwithfrey.selar.co/1x3396">
            <button className="bg-text-gradient inline-flex gap-0.5 items-center py-2 px-4 rounded-full font-medium text-[#131313] transition-all duration-300 ease-in-out transform hover:animate-bounce">
              Make Payment <GoArrowUpRight />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
