import React from "react";
import YCombinator from "../assets/y_combinator.png";
import Sequ from "../assets/sequ.png";
import Accel from "../assets/accel.png";
import A16 from "../assets/a16.png";
import Line from "../assets/line.png";

const Customers = () => {
  return (
    <div className="bg-[#292526] flex flex-col justify-center items-center">
      <p className="text-[38px] font-bold text-[#fff] mt-[80px] mb-[52px]  text-center ">
        We helped our customers raise{" "}
        <span className="text-[#FF734F;]">$1B+</span>
      </p>
      <div className="flex flex-col sm:flex-row mb-[80px]">
        <img src={YCombinator} alt="Ycombinator"></img>
        <LineComponent />
        <img src={Sequ} alt="Sequ"></img>
        <LineComponent />
        <img src={Accel} alt="Accel"></img>
        <LineComponent />
        <img src={A16} alt="A16"></img>
      </div>
    </div>
  );
};

const LineComponent = () => {
  return (
    <img
      src={Line}
      alt="line"
      className="ml-[26px] mr-[26px] h-[100px] hidden sm:flex"
    ></img>
  );
};

export default Customers;
