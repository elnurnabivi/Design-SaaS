import React, { useState } from "react";
import Packages from "./Packages";
import Line2 from "../assets/line2.png";
import Button from "./Button";

const Prices = () => {
  const [selectedOption, setSelectedOption] = useState("MONTHLY");
  return (
    <div
      id="pricing"
      className="px-[10px] sm:px-0 bg-[#F6F6F6] flex flex-col justify-center items-center "
    >
      <div className="pricing-toggle mt-[170px] mb-[116px]">
        <button
          className={`toggle-option selected w-[108px] text-[13px] font-bold pt-[15px] pb-[15px] border border-[#FF6900] rounded-tl-[12px] rounded-bl-[12px] ${
            selectedOption === "MONTHLY" ? "bg-[#FF6900]" : ""
          }`}
          onClick={() => setSelectedOption("MONTHLY")}
        >
          MONTHLY
        </button>
        <button
          className={`toggle-option w-[124px] text-[13px] font-bold pt-[15px] pb-[15px] border-t border-b border-[#FF6900] ${
            selectedOption === "QUARTERLY" ? "bg-[#FF6900]" : ""
          }`}
          onClick={() => setSelectedOption("QUARTERLY")}
        >
          QUARTERLY
        </button>
        <button
          className={`toggle-option w-[108px] text-[13px] font-bold pt-[15px] pb-[15px] border border-[#FF6900] rounded-tr-[12px] rounded-br-[12px] ${
            selectedOption === "YEARLY" ? "bg-[#FF6900]" : ""
          }`}
          onClick={() => setSelectedOption("YEARLY")}
        >
          YEARLY
        </button>
      </div>
      <Packages selectedOption={selectedOption} />
      <div className="flex flex-col justify-center items-center ">
        <img src={Line2} alt="line" className="mt-[158px] mb-[28px]" />
        <h4 className="text-[18px] font-bold mt-[13px]">
          Hey! Need a custom plan?{" "}
          <span className="text-[#F86642]">Contact us!</span>
        </h4>
        <p className="text-[14px] mb-[62px]">
          Try us risk free for 7 days, if you don’t love us, get your money
          back.
        </p>
        <a href="#get-started">
          <Button className="w-[233px] h-[59px] rounded-[15px] sm:mb-[225px] mb-[80px]">
            GET STARTED
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Prices;
