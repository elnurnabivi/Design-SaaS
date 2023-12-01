import React, { useState } from "react";
import Line5 from "../assets/Line5.png";
import Arrow2 from "../assets/Arrow2.png";

const FAQtext = [
  {
    text: "Do I really get unlimited design services?",
    longText:
      "Yes, with our subscription, you can request as many design services as you need. However, please note that while requests are unlimited, they are completed one at a time unless specified otherwise.",
  },
  {
    text: "What is a realistic turnaround time?",
    longText:
      "The turnaround time for each design project can vary based on complexity. Typically, simple tasks are completed within 48 hours, while more complex designs may take longer.",
  },
  {
    text: "I need my designs ASAP—can you help?",
    longText:
      "We prioritize quick turnarounds and will do our best to accommodate urgent requests. Please specify your deadline when submitting a design task, and we'll let you know if it's feasible.",
  },
  {
    text: "What types of projects do you work on?",
    longText:
      "We handle a wide range of design projects, including but not limited to web design, graphic design, UI/UX design, and branding materials. Feel free to discuss your specific needs with us.",
  },
  {
    text: "What if I want to cancel my service?",
    longText:
      "You can cancel your service subscription at any time. There are no long-term contracts, and you're free to restart the service whenever you wish.",
  },
];

const FAQcontent = ({ text, longText }) => {
  const [open, setOpen] = useState(false);

  function handleToggle() {
    setOpen(!open);
  }
  console.log(open);
  return (
    <div className="mb-[52px]">
      <div
        className="flex flex-row justify-between cursor-pointer"
        onClick={handleToggle}
      >
        <p className="text-[23px] font-semibold ">{text}</p>
        <img src={Arrow2} alt="Arrow" className="w-[34px] h-[17px]" />
      </div>
      <p className={`w-[1147px] ${open ? "" : "hidden"}`}>{longText} </p>
      <img src={Line5} alt="Line" className="w-[1147px] h-[2px]" />
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#F6F6F6] pb-[110px]">
      <h2 className="text-[35px] font-bold mb-[77px]">
        Our Most <span className="text-[#FF734F]">Frequently</span> Asked
        Questions{" "}
      </h2>
      {FAQtext.map((FAQ, index) => {
        return (
          <FAQcontent key={index} text={FAQ.text} longText={FAQ.longText} />
        );
      })}
    </div>
  );
};

export default FAQ;
