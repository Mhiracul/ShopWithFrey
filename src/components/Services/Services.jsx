import React from "react";
import { SiContentful } from "react-icons/si";
import { TbAffiliateFilled } from "react-icons/tb";
import { GiShoppingBag } from "react-icons/gi";
import { MdSocialDistance } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import content from "../../assets/content.jpeg";
import consult from "../../assets/consult.jpeg";
import shop from "../../assets/shop.jpeg";
import strategist from "../../assets/strategist.jpeg";
import affiliate from "../../assets/affiliate.jpeg";

const Services = () => {
  return (
    <div className="w-full h-full font-outfit bg-dark-gradient py-8 text-white">
      <div className="container mx-auto px-10">
        <h1 className="text-3xl font-bold mb-10 text-center">OUR SERVICES</h1>
        <div className="grid-cols-3 grid gap-20">
          <div className="flex flex-col items-center group">
            {/* Image container with fixed width */}
            <div className="w-80 h-60">
              <img
                src={content}
                alt="Content Creation"
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Gradient container with content hidden initially */}
            <div className="w-80 h-60 bg-gradient border-[#252525] border justify-center bg-gradient-to-br from-[#000000] to-[#131313] bg-opacity-20 shadow-lg rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col gap-4 items-start px-4 py-4">
                <div className="rounded-full font-bold bg-text-gradient p-2 flex justify-start items-start">
                  <SiContentful size={20} color="#131313" />
                </div>
                <div className="flex flex-col pb-6 gap-0.5">
                  <p className="text-[#999] text-xs">01</p>
                  <h1 className="text-2xl font-[200] text-[#fff]">
                    Content Creation Beginner Class
                  </h1>
                  <p className="text-sm font-light capitalize text-[#999]">
                    An Opportunity to Level your contents and become a paid
                    creator in 2025
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center group">
            {/* Image container with fixed width */}
            <div className="w-80 h-60">
              <img
                src={affiliate}
                alt="Affiliate Marketing"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="w-80 h-60 bg-gradient border-[#252525] border justify-center bg-gradient-to-br from-[#030303] to-[#131313] bg-opacity-20 shadow-lg rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col gap-4 items-start px-4 py-4">
                <div className="rounded-full font-bold bg-text-gradient p-2 flex justify-start items-start">
                  <TbAffiliateFilled size={20} color="#131313" />
                </div>
                <div className="flex flex-col pb-6 gap-0.5">
                  <p className="text-[#999] text-xs">01</p>
                  <h1 className="text-2xl font-[200] text-[#fff]">
                    Affiliate Marketing all in one class
                  </h1>
                  <p className="text-sm font-light capitalize text-[#999]">
                    An Opportunity to Level your contents and become a paid
                    creator in 2025
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center group">
            {/* Image container with fixed width */}
            <div className="w-80 h-60">
              <img
                src={shop}
                alt="Personal Shopping"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="w-80 h-60 bg-gradient border-[#252525] border justify-center bg-gradient-to-br from-[#030303] to-[#131313] bg-opacity-20 shadow-lg rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col gap-4 items-start px-4 py-4">
                <div className="rounded-full font-bold bg-text-gradient p-2 flex justify-start items-start">
                  <GiShoppingBag size={20} color="#131313" />
                </div>
                <div className="flex flex-col pb-6 gap-0.5">
                  <p className="text-[#999] text-xs">01</p>
                  <h1 className="text-2xl font-[200] text-[#fff]">
                    Personal Shopping Beginner Guide
                  </h1>
                  <p className="text-sm font-light capitalize text-[#999]">
                    An Opportunity to Level your contents and become a paid
                    creator in 2025
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center group">
            {/* Image container with fixed width */}
            <div className="w-80 h-60">
              <img
                src={strategist}
                alt="Social Media Strategist"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="w-80 h-60 bg-gradient border-[#252525] border justify-center bg-gradient-to-br from-[#030303] to-[#131313] bg-opacity-20 shadow-lg rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col gap-4 items-start px-4 py-4">
                <div className="rounded-full font-bold bg-text-gradient p-2 flex justify-start items-start">
                  <MdSocialDistance size={20} color="#131313" />
                </div>
                <div className="flex flex-col pb-6 gap-0.5">
                  <p className="text-[#999] text-xs">01</p>
                  <h1 className="text-2xl font-[200] text-[#fff]">
                    Social Media Strategist
                  </h1>
                  <p className="text-sm font-light capitalize text-[#999]">
                    An Opportunity to Level your contents and become a paid
                    creator in 2025
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center group">
            {/* Image container with fixed width */}
            <div className="w-80 h-60">
              <img
                src={consult}
                alt="Consultation"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="w-80 h-60 bg-gradient border-[#252525] border justify-center bg-gradient-to-br from-[#030303] to-[#131313] bg-opacity-20 shadow-lg rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col gap-4 items-start px-4 py-4">
                <div className="rounded-full font-bold bg-text-gradient p-2 flex justify-start items-start">
                  <RiCalendarScheduleFill size={20} color="#131313" />
                </div>
                <div className="flex flex-col pb-6 gap-0.5">
                  <p className="text-[#999] text-xs">01</p>
                  <h1 className="text-2xl font-[200] text-[#fff]">
                    Schedule a consultation
                  </h1>
                  <p className="text-sm font-light capitalize text-[#999]">
                    An Opportunity to Level your contents and become a paid
                    creator in 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
