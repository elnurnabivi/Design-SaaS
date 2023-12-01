import React from "react";
import Button from "./Button";
import People2 from "../assets/People2.png";

const TryUs = () => {
  return (
    <div
      id="get-started"
      className="px-[20px] sm:px-0 flex flex-col justify-center items-center bg-[#F6F6F6] pt-[40px]"
    >
      <h2 className="max-w-[652px] sm:text-[50px] text-[30px] font-bold mb-[28px] leading-[48px] text-center">
        Let’s <span className="text-[#FF734F]">Build</span> Something{" "}
        <span className="text-[#FF734F]">Awesome</span> Together!
      </h2>
      <p className="text-[14px] text-center mb-[39px]">
        Try us risk free for 7 days, if you don’t love us, get your money back.
      </p>
      <Button className="w-[233px] h-[59px] rounded-[15px] mb-[54px]">
        GET STARTED
      </Button>
      <img
        src={People2}
        alt="people_photo"
        className="sm:max-w-[601px] w-[350px]"
      />
    </div>
  );
};

export default TryUs;
