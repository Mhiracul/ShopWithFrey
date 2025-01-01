import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

const AccordionItem = ({ number, title, content, isOpen, toggle }) => (
  <li className="accordion block mb-4">
    {" "}
    {/* Margin between items */}
    <div
      className={`acc-btn cursor-pointer p-8 flex justify-between items-center ${
        isOpen ? "bg-[#f5b754] rounded-t-[20px]" : "bg-[#222] rounded-[20px]"
      }`}
      onClick={toggle}
    >
      <div className="flex items-center">
        <span
          className={`count mr-2 text-base font-bold ${
            isOpen ? "text-black" : "text-[#f5b754]"
          }`}
        >
          {number}.
        </span>
        <span
          className={`${
            isOpen ? "text-black font-bold" : "text-white font-bold"
          }`}
        >
          {title}
        </span>
      </div>
      {isOpen ? (
        <MdKeyboardArrowDown className="text-black font-light" />
      ) : (
        <MdKeyboardArrowRight className="text-[#f5b754] font-light" />
      )}
    </div>
    <div
      className={`acc-content transition-all duration-300 ${
        isOpen ? "max-h-40" : "max-h-0 overflow-hidden"
      }`}
    >
      <div className="content">
        <div className="text p-4 bg-[#222] text-[#999] rounded-b-[20px]">
          <p className="text-sm py-5  font-light">{content}</p>
        </div>
      </div>
    </div>
  </li>
);

const TheFaq = () => {
  const [openIndex1, setOpenIndex1] = useState(null);
  const [openIndex2, setOpenIndex2] = useState(null);

  const accordionData1 = [
    {
      number: 1,
      title: "How can I contact you after payment?",
      content:
        "When you follow the instructions and successfully make payment, I will a send you a link to join.",
    },
    {
      number: 2,
      title: "Do I need to pay for any other thing after this N20,000?",
      content:
        "In the webinar you'll be given enough and complete information to go implement on your own. However, if you'd like me to personally mentor & guide you... you'll get the chance to get it at a heavily discounted rate. (Optional)",
    },
    {
      number: 3,
      title: "Is this class for total newbies alone?",
      content:
        "Yes it is for newbies only. This webinar is well suited for newbies who don't know anything about affiliate marketing & struggling affiliates as well",
    },
  ];

  const accordionData2 = [
    {
      number: 4,
      title: "When is the webinar holding?",
      content: "You will be sent a link to the class.",
    },
    {
      number: 5,
      title: "How many days is the training for?",
      content: "This is a one hour training. Not days or weeks",
    },
    {
      number: 6,
      title: "Are you going to personally mentor me?",
      content:
        "When you attend the webinar, you have the liberty to ask any questions you have...Also, you will get the chance to get my mentorship at a crazily discounted rate...",
    },
  ];

  const toggleAccordion = (index, setOpenIndex, openIndex) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-full font-outfit bg-[#1b1b1b]">
      <div className="container mx-auto xl:px-20 lg:px-20 px-10 py-20">
        <h1 className="bg-clip-text text-transparent bg-text-gradient text-xl text-center">
          Frequently asked questions
        </h1>
        <div className="flex w-full xl:flex-row lg:flex-row flex-col items-center lg:space-y-0 space-y-8 lg:space-x-8 xl:space-x-8">
          {/* First Accordion */}
          <div className="rounded-lg">
            <ul className="accordion-box">
              {accordionData1.map((item, index) => (
                <AccordionItem
                  key={item.number}
                  {...item}
                  isOpen={openIndex1 === index}
                  toggle={() =>
                    toggleAccordion(index, setOpenIndex1, openIndex1)
                  }
                />
              ))}
            </ul>
          </div>

          {/* Image Section */}

          {/* Second Accordion */}
          <div className="p-6 rounded-lg">
            <ul className="accordion-box">
              {accordionData2.map((item, index) => (
                <AccordionItem
                  key={item.number}
                  {...item}
                  isOpen={openIndex2 === index}
                  toggle={() =>
                    toggleAccordion(index, setOpenIndex2, openIndex2)
                  }
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheFaq;
