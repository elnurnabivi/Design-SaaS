import React from "react";

const Bubble = ({ text, className }) => {
  return (
    <div
      className={` ${className} sm:w-[460px] h-auto bg-[#000] rounded-[35px] text-[#fff] pl-[30px] pr-[30px] pt-[20px] pb-[20px] text-[18px] font-bold hover:bg-[#FF734F] hover:scale-105`}
    >
      {text}
    </div>
  );
};

const Whyus = () => {
  const bubblesData = [
    {
      text: "You want a new, innovative, and user-centered UX strategy for an existing product",
      side: "left",
    },
    {
      text: "You want to understand where users struggle when using your product",
      side: "right",
    },
    {
      text: "You want to translate complex data into an easy-to-understand dashboard",
      side: "left",
    },
    {
      text: "You need additional design resources that synergize with your (already) amazing design team",
      side: "right",
    },
    {
      text: "You‘re researching how UX can impact you business growth",
      side: "left",
    },
    {
      text: "You want to understand your users and design products that meet their needs",
      side: "right",
    },
  ];
  return (
    <div className="px-[20px] sm:px-0 flex flex-col justify-center items-center bg-[#F6F6F6]">
      <h2 className="sm:text-[35px] text-[28px] font-bold sm:mb-[81px] mb-[30px]">
        How To Know If <span className="text-[#FF734F]">TDP</span> Is Right For
        Your <span className="text-[#FF734F]">Startup</span>
      </h2>
      <div className="grid sm:grid-cols-2 grid-col-1 sm:gap-[40px] gap-[20px] sm:mb-[210px] mb-[80px]">
        {bubblesData.map((bubble, index) => {
          const positionClass =
            bubble.side === "left" ? "left-bubble" : "right-bubble";
          return (
            <Bubble key={index} text={bubble.text} className={positionClass} />
          );
        })}
      </div>
    </div>
  );
};

export default Whyus;
