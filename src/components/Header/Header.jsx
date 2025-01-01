import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiPhoneCallLight } from "react-icons/pi";
//import logo from "../../assets/logo.png";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [showCarsDropdown, setShowCarsDropdown] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <header className="w-full font-outfit bg-dark-gradient py-4  text-white md:px-10 px-4">
      <div
        className="container mx-auto  bg-gradient  justify-center bg-gradient-to-br h-full from-[#2d2d2d] to-transparent  
            bg-opacity-20 shadow-lg rounded-full"
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-10">
          {/* Logo */}
          <div className="flex items-center text-xl font-bold ">
            <h1 className="uppercase  bg-clip-text text-transparent bg-text-gradient md:text-xl text-base font-bold">
              frey digitals
            </h1>{" "}
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-8 text-sm font-light items-center">
            <Link to="/" className="hover:text-[#f5b754] font-light">
              Home
            </Link>
            <Link to="/content-creation" className="hover:text-[#f5b754] ">
              Content
            </Link>
            <Link to="/affiliate-marketing" className="hover:text-[#f5b754] ">
              Affiliate
            </Link>

            {/* Cars Dropdown */}

            <Link to="/consultation" className="hover:text-[#f5b754] ">
              Consultation
            </Link>

            <div className="flex space-x-6 items-center">
              {/* Cart Icon */}
              {/*  <a className="cart-mini-uri nav-link" href="/cart">
              <TiShoppingCart className="text-lg cursor-pointer" />
            </a>
*/}
              {/* Contact Section */}
              <div className="flex items-center space-x-2">
                {/* Phone Icon */}
                <a
                  href="tel:+2348124985138"
                  className="flex items-center space-x-2"
                >
                  <div className="border-[#f5b754] hover:bg-[#f5b754] border rounded-full p-2">
                    <PiPhoneCallLight className="text-lg" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs">Need help?</p>
                    <h5 className="text-sm text-[#f5b754]">
                      <a href="tel:+2349036321216">90 3632 1216</a>
                    </h5>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="lg:hidden" onClick={handleClick}>
            {nav ? <FaTimes color="#FFF" /> : <FaBars color="#FFF" />}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-1/2 z-[99999] bg-[#1b1b1b] transition-transform transform duration-300 ease-in-out ${
            nav ? "translate-y-16 " : "-translate-y-full"
          }`}
        >
          <ul className="text-white container mx-auto  px-6 text-sm font-light py-4">
            <li>
              <Link to="/" className="block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/content-creation" className="block py-2">
                Content
              </Link>
            </li>
            <li>
              <Link to="/affiliate-marketing" className="block py-2">
                Affiliate
              </Link>
            </li>

            <li>
              <Link to="/consultation" className="block py-2">
                Consultation
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
