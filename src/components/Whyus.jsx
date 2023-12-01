import React from "react";

const Bubble = ({ text, className }) => {
  return (
    <div
      className={` ${className} w-[460px] h-auto bg-[#000] rounded-[35px] text-[#fff] pl-[30px] pr-[30px] pt-[20px] pb-[20px] text-[18px] font-bold hover:bg-[#FF734F] hover:scale-105`}
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
    <div className="flex flex-col justify-center items-center bg-[#F6F6F6]">
      <h2 className="text-[35px] font-bold mb-[81px]">
        How To Know If <span className="text-[#FF734F]">TDP</span> Is Right For
        Your <span className="text-[#FF734F]">Startup</span>
      </h2>
      <div className="grid grid-cols-2 gap-[40px] mb-[210px]">
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

const createSetter = await fetch("/api/users/random_user");
