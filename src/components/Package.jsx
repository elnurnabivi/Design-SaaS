import React from "react";
import Line4 from "../assets/line4.png";
import Arrow from "../assets/arrow.png";

const Packages = ({
  name,
  description,
  price,
  pricePeriod,
  features,
  designTeam,
}) => {
  return (
    <div className="sm:w-[387px] w-[350px] sm:h-[887px] h-[800px] border rounded-[15px] border-[#FF734F] flex flex-col justify-between items-center">
      <div className="flex flex-col justify-around items-center mt-[66px]">
        <h3 className="text-[29px] font-bold mb-[10px]">{name}</h3>
        <p className="text-[15px] font-normal text-center">{description}</p>
      </div>
      <div className="flex flex-col justify-between items-center">
        <p className="text-[#FF734F] text-[40px] font-bold">{price}</p>
        <p className="text-[#FF734F] text-[16px] font-bold mb-[34px]">
          {pricePeriod}
        </p>
        <img src={Line4} alt="line" className="w-[228px] h-[2px]" />
      </div>
      <div className="flex flex-col justify-between items-start">
        <div className="flex flex-col justify-center items-left gap-[10px] mb-[50px]">
          <p className="text-[15px] font-bold">WHAT'S INCLUDED:</p>
          {features.map((feature, index) => (
            <p key={index} className="text-[14px] leading-5 max-w-[250px]">
              {feature}
            </p>
          ))}
        </div>
        <div className="flex flex-col justify-center items-left gap-[10px]">
          <p className="text-[15px] font-bold">DESIGN TEAM</p>
          {designTeam.map((design, index) => (
            <p key={index} className=" text-[14px] leading-5 max-w-[250px]">
              {design}
            </p>
          ))}
        </div>
      </div>

      <button className="flex justify-center items-center border-2 rounded-[15px] w-[262px] h-[62px] border-[#000] font-bold text-[14px] mb-[40px]">
        TRY FREE &nbsp; <img src={Arrow} />
      </button>
    </div>
  );
};

export default Packages;
