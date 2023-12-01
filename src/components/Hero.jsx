import React from "react";
import Checkmark from "../assets/checkmark.png";
import { Button } from "../components";
import People from "../assets/people.png";

const Hero = () => (
  <div className="px-[20px] sm:px-0 flex flex-col justify-center items-center pt-[53px] bg-[#E0EAF3]  ">
    <h1 className="text-center text-[28px] sm:text-[50px] font-bold text-[#1D1D1B] mb-[37px] max-w-[1000px]">
      A UI/UX Design Subscription So{" "}
      <span className="text-[#FF734F]">Good</span> It Should Come With{" "}
      <span className="text-[#FF734F]">Warning</span> Label
    </h1>
    <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[40px] mb-[25px]">
      <div className="flex">
        <img src={Checkmark} className="mr-[8px] w-[27px]" />
        <p className="text-[17px] font-bold ">No hiring headaches</p>
      </div>
      <div className="flex">
        <img src={Checkmark} className="mr-[8px] w-[27px]" />
        <p className="text-[17px] font-bold ">Weekly turnaround times</p>
      </div>
      <div className="flex">
        <img src={Checkmark} className="mr-[8px] w-[27px]" />
        <p className="text-[17px] font-bold ">One flat monthly rate</p>
      </div>
    </div>
    <a href="#get-started">
      <Button className="text-[17px] w-[auto] pl-[16px] pr-[16px] mt-[12px] mb-[15px]">
        START YOUR RISK FREE TRIAL
      </Button>
    </a>
    <img src={People} alt="people" className="w-[80%] sm:w-[700px]"></img>
  </div>
);

export default Hero;
