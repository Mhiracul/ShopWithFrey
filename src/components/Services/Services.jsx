import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiContentful } from "react-icons/si";
import { TbAffiliateFilled } from "react-icons/tb";
import { GiShoppingBag } from "react-icons/gi";
import { MdSocialDistance } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import content from "../../assets/content.jpeg";
import consult from "../../assets/consult.jpeg";
import shop from "../../assets/shop.jpeg";
import strategist from "../../assets/strategist.jpeg";
import affiliate from "../../assets/affiliate.jpeg";

const Services = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full h-full font-outfit bg-dark-gradient py-8 text-white">
      <div className="container mx-auto px-10">
        <h1
          className="text-3xl font-bold mb-10 text-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          OUR SERVICES
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-20">
          {[
            {
              no: "01",
              img: content,
              icon: <SiContentful size={20} color="#131313" />,
              title: "Content Creation Beginner Class",
              description:
                "An Opportunity to Level your contents and become a paid creator in 2025",
              details: "Details",
              link: "/content-creation",
            },
            {
              no: "02",
              img: affiliate,
              icon: <TbAffiliateFilled size={20} color="#131313" />,
              title: "Affiliate Marketing all in one class",
              description:
                "An Opportunity to start Affiliate Marketing and change your life in 2025",
              details: "Details",
              link: "/affiliate-marketing",
            },
            {
              no: "03",
              img: shop,
              icon: <GiShoppingBag size={20} color="#131313" />,
              title: "Personal Shopping Beginner Guide",
              description: "Have all the global stores at your fingertips",
              details: "Details",
              link: "/shopping",
            },
            {
              no: "04",
              img: strategist,
              icon: <MdSocialDistance size={20} color="#131313" />,
              title: "Social Media Strategist",
              description: "Deep dive into your business to guarantee sales",
              details: "Details",
              link: "/social-media",
            },
            {
              no: "05",
              img: consult,
              icon: <RiCalendarScheduleFill size={20} color="#131313" />,
              title: "Schedule a consultation",
              description:
                "Investing in a consultation with us is more than just one-time session - it's your first step towards long-term success",
              details: "Details",
              link: "/consultation",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center relative group"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={`${index * 200}`}
            >
              {/* Image container */}
              <div className="w-full sm:w-80 h-96 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-t-xl transition-opacity duration-300 group-hover:opacity-0"
                />
              </div>

              {/* Content container */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#030303] to-transparent bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl p-4">
                <div className="flex flex-col gap-4 items-start">
                  <div className="rounded-full font-bold bg-text-gradient p-2">
                    {service.icon}
                  </div>
                  <div className="flex flex-col pb-6 gap-0.5">
                    <p className="text-[#999] text-xs">{service.no}</p>
                    <h1 className="text-lg sm:text-2xl font-[200] text-[#fff]">
                      {service.title}
                    </h1>
                    <p className="text-sm font-light capitalize text-[#999]">
                      {service.description}
                    </p>
                    <Link to={service.link}>
                      <button className="bg-text-gradient text-center items-center mt-4 py-2 px-4 rounded-full font-medium text-[#131313] transition-all duration-300 ease-in-out transform hover:animate-bounce">
                        {service.details}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
