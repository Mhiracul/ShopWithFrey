import React, { useEffect } from "react";
import { FaInstagram, FaMailBulk, FaTiktok } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Customize duration as needed
  }, []);
  return (
    <footer className="w-full font-outfit bg-dark-gradient py-8  text-white px-10">
      <div
        className="container mx-auto  bg-gradient  justify-center bg-gradient-to-br h-full from-[#2d2d2d] to-transparent  
            bg-opacity-20 shadow-lg rounded-xl"
      >
        <div className="flex flex-col gap-3 py-4 items-center">
          <h1
            className="text-4xl text-center font-light max-w-[12rem] text-white"
            data-aos="fade-up"
          >
            Let's Synergize
          </h1>
          <p
            className="text-[#999] text-sm max-w-md font-light text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Join hands with us to experience unmatched quality and reliable
            service that exceeds expectations!
          </p>
          <div className="flex gap-2 items-center">
            <a
              href="https://www.instagram.com/earn_with_frey"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 ease-in-out transform hover:animate-bounce"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
              >
                <defs>
                  <linearGradient
                    id="gold-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" style={{ stopColor: "#b57e10" }} />
                    <stop offset="25%" style={{ stopColor: "#f9df7b" }} />
                    <stop offset="50%" style={{ stopColor: "#f9df7b" }} />
                    <stop offset="75%" style={{ stopColor: "#b57e10" }} />
                    <stop offset="100%" style={{ stopColor: "#b57e10" }} />
                  </linearGradient>
                </defs>
                <FaInstagram style={{ fill: "url(#gold-gradient)" }} />
              </svg>
            </a>

            {/* TikTok Icon with Link */}
            <a
              href="https://www.tiktok.com/@earn_with_frey"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 ease-in-out transform hover:animate-bounce"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
              >
                <defs>
                  <linearGradient
                    id="gold-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" style={{ stopColor: "#b57e10" }} />
                    <stop offset="25%" style={{ stopColor: "#f9df7b" }} />
                    <stop offset="50%" style={{ stopColor: "#f9df7b" }} />
                    <stop offset="75%" style={{ stopColor: "#b57e10" }} />
                    <stop offset="100%" style={{ stopColor: "#b57e10" }} />
                  </linearGradient>
                </defs>
                <FaTiktok style={{ fill: "url(#gold-gradient)" }} />
              </svg>
            </a>

            {/* Email Icon with Link */}
            <a
              href="mailto:your.freydigital1@gmail.com"
              className="transition-all duration-300 ease-in-out transform hover:animate-bounce"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
              >
                <defs>
                  <linearGradient
                    id="gold-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" style={{ stopColor: "#b57e10" }} />
                    <stop offset="25%" style={{ stopColor: "#f9df7b" }} />
                    <stop offset="50%" style={{ stopColor: "#f9df7b" }} />
                    <stop offset="75%" style={{ stopColor: "#b57e10" }} />
                    <stop offset="100%" style={{ stopColor: "#b57e10" }} />
                  </linearGradient>
                </defs>
                <FaMailBulk style={{ fill: "url(#gold-gradient)" }} />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
