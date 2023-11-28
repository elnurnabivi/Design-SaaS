import React from "react";
import Package from "./Package";

const Packages = () => {
  return (
    <div className="flex flex-row gap-[42px]">
      <Package
        name="Essential"
        description="Great for basic UI/UX design needs"
        price="$2,600"
        pricePeriod="PER MONTH"
        features={[
          "UI execution",
          "Connect on Slack",
          "One 30 minute meeting a week",
        ]}
        designTeam={[
          "1 designer working with 4-5 other customers at the same time",
        ]}
      />
      <Package
        name="Pro"
        description="Great for end-to-end product design"
        price="$3,595"
        pricePeriod="PER MONTH"
        features={[
          "Everything in Essential",
          "Full UI/UX design and research",
          "Dev ready Figma files",
          "One 1 hour meeting a week",
        ]}
        designTeam={[
          "1 design lead",
          "1 designer working on 2-3 other customers at the same time",
        ]}
      />
      <Package
        name="Turbo"
        description="Great for products that require more design horsepower and tight timelines"
        price="$5,200"
        pricePeriod="PER MONTH"
        features={[
          "Everything in Essential and Pro",
          "User Testing",
          "Figma Prototypes",
          "Flexible meetings",
          "Custom workflows to speed up delivery",
        ]}
        designTeam={[
          "1 design lead",
          "1 designer working on 1 other customer at the same time",
        ]}
      />
    </div>
  );
};

export default Packages;
// import React from "react";
// import Line4 from "../assets/line4.png";
// import Arrow from "../assets/arrow.png";

// const Packages = () => {
//   return (
//     <div className="w-[387px] h-[887px] border rounded-[15px] border-[#FF734F] flex flex-col justify-between items-center">
//       <div className="flex flex-col justify-around items-center mt-[66px]">
//         <h3 className="text-[29px] font-bold mb-[10px]">Essential</h3>
//         <p className="text-[15px] font-normal">
//           Great for basic UI/UX design needs
//         </p>
//       </div>
//       <div className="flex flex-col justify-between items-center">
//         <p className="text-[#FF734F] text-[40px] font-bold">$2,600</p>
//         <p className="text-[#FF734F] text-[16px] font-bold mb-[34px]">
//           PER MONTH
//         </p>
//         <img src={Line4} alt="line" className="w-[228px] h-[2px]" />
//       </div>

//       <div className="flex flex-col justify-center items-left gap-[10px]">
//         <p className="text-[15px] font-bold">WHAT'S INCLUDED:</p>
//         <p className="text-[14px] ">UI execution</p>
//         <p className="text-[14px]">Connect on Slack</p>
//         <p className="text-[14px]">One 30 minute meeting a week</p>
//       </div>
//       <div className="flex flex-col justify-center items-left gap-[10px]">
//         <p className="text-[15px] font-bold">DESIGN TEAM</p>
//         <p className="max-w-[235px] text-[14px] leading-5">
//           1 designer working with 4-5 other customers at the same time
//         </p>
//       </div>
//       <button className="flex justify-center items-center border-2 rounded-[15px] w-[262px] h-[62px] border-[#000] font-bold text-[14px] mb-[40px]">
//         TRY FREE &nbsp; <img src={Arrow} />
//       </button>
//     </div>
//   );
// };

// export default Packages;
