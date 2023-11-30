import React from "react";
import Button from "./Button";
import People2 from "../assets/People2.png";

const TryUs = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#F6F6F6]">
      <h2 className="max-w-[652px] text-[50px] font-bold mb-[28px] leading-[48px] text-center">
        Let’s <span className="text-[#FF734F]">Build</span> Something{" "}
        <span className="text-[#FF734F]">Awesome</span> Together!
      </h2>
      <p className="text-[14px] text-center mb-[39px]">
        Try us risk free for 7 days, if you don’t love us, get your money back.
      </p>
      <Button className="w-[233px] h-[59px] rounded-[15px] mb-[54px]">
        GET STARTED
      </Button>
      <img src={People2} alt="people_photo" className="max-w-[601px]" />
    </div>
  );
};

export default TryUs;
