import React from "react";
import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/icon3.png";

const Needs = () => {
  return (
    <div className="bg-[#F6F6F6] flex flex-col justify-center items-center pt-[150px] leading-11 ">
      <h2 className="text-[40px] font-bold text-center max-w-[1050px] mb-[23px]">
        A Diverse Team Of <span className="text-[#FF734F;]">Passionate</span> UX
        Nerds Who Are Here To Help Your{" "}
        <span className="text-[#FF734F;]">Startup Succeed</span>
      </h2>
      <p className="text-[16px] font-medium text-center max-w-[841px] mb-[23px]">
        From ideation to expansion, TDP understands the unique demands of your
        startup—providing you with optimized design strategies and fast
        turnarounds for an affordable monthly subscription.
      </p>
      <div className="grid grid-cols-3 text-center ">
        <div className="flex flex-col justify-center items-center">
          <img src={Icon1} className="w-[150px] h-[130px] mt-[23px]" />
          <h3>Costs 70% less</h3>
          <p className="max-w-[370px] text-[14px] leading-6">
            We developed highly-optimized design processes to let us work fast
            and deliver incredible results—and we pass those savings on to you
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={Icon2} className="w-[150px] h-[130px] mt-[23px]" />
          <h3>Adaptable and scalable</h3>
          <p className="max-w-[370px] text-[14px] leading-6">
            High-velocity is crucial to a startup’s success, and that’s why TDP
            delivers new designs every week so your momentum never falters
          </p>
        </div>
        <div className="flex flex-col justify-start items-center">
          <img src={Icon3} className="w-[150px] h-[130px] mt-[23px]" />
          <h3>Fast turnaround times</h3>
          <p className="max-w-[370px] text-[14px] leading-6">
            TDP was built for flexibility—we quickly adapt and grow as you grow
          </p>
        </div>
      </div>
    </div>
  );
};

export default Needs;
