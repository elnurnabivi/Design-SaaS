import React from "react";
import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/icon3.png";
import Group1 from "../assets/group1.png";
import Group2 from "../assets/group2.png";
import Group3 from "../assets/group3.png";
import Person1 from "../assets/person1.png";
import Person2 from "../assets/person2.png";
import Person3 from "../assets/person3.png";

const Needs = () => {
  return (
    <div className="bg-[#F6F6F6] pt-[150px] pb-[124px]">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[40px] font-bold text-center max-w-[1050px] mb-[23px]">
          A Diverse Team Of <span className="text-[#FF734F;]">Passionate</span>{" "}
          UX Nerds Who Are Here To Help Your{" "}
          <span className="text-[#FF734F;]">Startup Succeed</span>
        </h2>
        <p className="text-[16px] font-medium text-center max-w-[841px] mb-[23px]">
          From ideation to expansion, TDP understands the unique demands of your
          startup—providing you with optimized design strategies and fast
          turnarounds for an affordable monthly subscription.
        </p>
        <div className="grid grid-cols-3 text-center mb-[187px] gap-[35px]">
          <div className="flex flex-col justify-center items-center">
            <img
              src={Icon1}
              className="w-[150px] h-[130px] mt-[43px] mb-[23px]"
            />
            <h3 className="text-[19px] font-bold mb-[13px]">Costs 70% less</h3>
            <p className="max-w-[370px] text-[14px] leading-[24px]">
              We developed highly-optimized design processes to let us work fast
              and deliver incredible results—and we pass those savings on to you
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={Icon2}
              className="w-[150px] h-[130px] mt-[43px] mb-[23px]"
            />
            <h3 className="text-[19px] font-bold mb-[13px]">
              Adaptable and scalable
            </h3>
            <p className="max-w-[370px] text-[14px] leading-[24px]">
              High-velocity is crucial to a startup’s success, and that’s why
              TDP delivers new designs every week so your momentum never falters
            </p>
          </div>
          <div className="flex flex-col justify-start items-center">
            <img
              src={Icon3}
              className="w-[150px] h-[130px]  mt-[43px] mb-[23px]"
            />
            <h3 className="text-[19px] font-bold mb-[13px]">
              Fast turnaround times
            </h3>
            <p className="max-w-[370px] text-[14px] leading-[24px]">
              TDP was built for flexibility—we quickly adapt and grow as you
              grow
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[40px] font-bold text-center max-w-[1050px] mb-[23px]">
          How <span className="text-[#FF734F;]">Signing Up </span> With The
          Design Project <span className="text-[#FF734F;]">Works</span>!?
        </h2>
        <p className="text-[15px] font-medium text-center max-w-[944px] mb-[77px]">
          Take a minute to imagine how you’d feel watching your user count grow,
          and retention rates stay consistently high. When you prioritize
          effective UX, better retention and growth are natural consequences.
          Backed by countless hours of research and testing, TDP blends UX, UI,
          and Product design into a deliciously smooth process that fuels
          productivity and success.
        </p>
        <div className="grid grid-cols-3 text-center gap-[100px]">
          <div className="flex flex-col justify-center items-center">
            <img src={Group1} className="w-[59px] h-[59px] mb-[23px]" />
            <h3 className="text-[20px] font-bold mb-[16px] text-[#F86642] max-w-[203px] leading-6">
              Sign up for one of our services
            </h3>
            <img
              src={Person1}
              alt="person_photo"
              className="w-[96px] h-[156px] mb-[16px]"
            />
            <p className="max-w-[283px] text-[14px] leading-[24px]">
              Sign up for one of our affordable subscription play which offer a
              variety of options to fit your unique needs.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={Group2} className="w-[59px] h-[59px] mb-[23px]" />
            <h3 className="text-[20px] font-bold mb-[16px] text-[#F86642] max-w-[203px] leading-6">
              Meet your perfect match
            </h3>
            <img
              src={Person2}
              alt="person_photo"
              className="w-[138px] h-[156px] mb-[16px]"
            />
            <p className="max-w-[283px] text-[14px] leading-[24px]">
              We match you with the best TDP design expert for your needs. Then
              we schedule a call to learn about your startup.
            </p>
          </div>
          <div className="flex flex-col justify-start items-center">
            <img src={Group3} className="w-[59px] h-[59px]  mb-[23px]" />
            <h3 className="text-[20px] font-bold mb-[16px] text-[#F86642] max-w-[253px] leading-6">
              The first sprint begins (hold on tight)
            </h3>
            <img
              src={Person3}
              alt="person_photo"
              className="w-[109px] h-[156px] mb-[16px]"
            />
            <p className="max-w-[286px] text-[14px] leading-[24px]">
              TDP manages the project, learns the intimate details of what your
              users want, and delivers impactful design iterations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Needs;
