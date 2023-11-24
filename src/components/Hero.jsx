import React from "react";
import Checkmark from "../assets/checkmark.png";
import { Button } from "../components";

const Hero = () => (
  <div className="flex flex-col justify-center items-center pt-[53px] bg-[#E0EAF3] ">
    <h1>
      A UI/UX design subscription so good it should come with a warning label
    </h1>
    <div className="flex flex-col sm:flex-row gap-[40px]">
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
    <Button className="text-[17px] w-[auto] pl-[16px] pr-[16px]">
      START YOUR RISK FREE TRIAL
    </Button>
  </div>
);

export default Hero;
