import React from "react";
import Article1 from "../assets/article1.png";
import Article2 from "../assets/article2.png";
import Article3 from "../assets/article3.png";
import Erick from "../assets/erick.png";
import Button from "./Button";

const Cases = () => {
  return (
    <div
      id="work"
      className="px-[20px] sm:px-0 bg-[#292526] flex flex-col justify-center items-center"
    >
      <h2 className="text-[28px] sm:text-[40px] font-bold text-[#fff] mt-[135px] mb-[109px]  text-center max-w-[1012px]">
        How <span className="text-[#F86642]">Accessible</span> UX Design Is
        Changing The <span className="text-[#F86642]">Businesses+</span> For The
        Better
      </h2>
      <div className="sm:w-[1160px]  sm:h-[565px] bg-[#91CFD2] flex-shrink-0 flex sm:flex-row flex-col justify-between items-center mb-[72px]">
        <div className="sm:w-[570px] w-auto  h-[363px] bg-[#231F20] flex-shrink-0 rounded-[15px] sm:ml-[21px] ml-[10px] sm:pl-[43px] pl-[20px] sm:mt-0 mt-[20px] sm:mr-0 mr-[10px] text-[#fff] flex flex-col justify-center">
          <div className="w-[88px] h-[34px] bg-[#FF734F] rounded-[6px] text-[#fff] flex justify-center items-center text-[16px] font-extrabold mb-[17px]">
            Secure
          </div>
          <h3 className="text-[#fff] sm:text-[27px] text-[16px] font-bold linear-[36px] mb-[21px]">
            A predictive analytics platform for consumers digital identity
            verification
          </h3>
          <button className="w-[216px] h-[44px] rounded-[12px] border border-[#FF734F] text-[16px] text-left pl-[15px]">
            READ CASE STUDY
          </button>
        </div>
        <img src={Article1} alt="article_photo" className="mt-[30px] sm:mt-0" />
      </div>

      <img
        src={Article2}
        alt="article_photo"
        className="mb-[72px] w-[1160px] h-[565px] sm:flex hidden "
      />

      <img
        src={Article3}
        alt="article_photo"
        className="mb-[55px] w-[1160px] h-[565px] sm:flex hidden"
      />

      <div className="flex flex-col justify-center items-center ">
        <h3 className="max-w-[890px] text-[#fff] sm:text-[38px] text-[22px] text-center sm:leading-[48px] leading-[36px] font-bold custom-h3 mb-[48px]">
          &nbsp; TDP helped identify the main pain points and designed a new UX
          that is accessible and easy to understand. The redesign pushed us
          forward on our mission to be able to verify 100% of IDs in real-time,
          and we raised over $100M in funding.&nbsp;
        </h3>
        <div className="flex flex-row justify-center items-center mb-[48px]">
          <img src={Erick} alt="Erick Desoto" className="mr-[16px]" />
          <div>
            <p className="text-[#FF734F] font-bold text-[24px]">ERICK DESOTO</p>
            <p className="text-[#fff]">VP of Product at Socure</p>
          </div>
        </div>
        <a href="#work">
          <Button className="text-[17px] w-[auto] pl-[16px] pr-[16px] mb-[70px] align-center">
            SEE OUR CASE STUDIES
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Cases;
