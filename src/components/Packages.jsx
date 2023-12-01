import React from "react";
import Package from "./Package";

const Packages = ({ selectedOption }) => {
  const pricingDetails = {
    MONTHLY: {
      Essential: { price: "$2,600", pricePeriod: "PER MONTH" },
      Pro: { price: "$3,595", pricePeriod: "PER MONTH" },
      Turbo: { price: "$5,200", pricePeriod: "PER MONTH" },
    },
    QUARTERLY: {
      Essential: { price: "$7,000", pricePeriod: "PER QUARTER" },
      Pro: { price: "$9,000", pricePeriod: "PER QUARTER" }, // Example prices
      Turbo: { price: "$13,000", pricePeriod: "PER QUARTER" },
    },
    YEARLY: {
      Essential: { price: "$25,000", pricePeriod: "PER YEAR" },
      Pro: { price: "$30,000", pricePeriod: "PER YEAR" }, // Example prices
      Turbo: { price: "$40,000", pricePeriod: "PER YEAR" },
    },
  };

  const packageData = [
    {
      name: "Essential",
      description: "Great for basic UI/UX design needs",
      features: [
        "UI execution",
        "Connect on Slack",
        "One 30 minute meeting a week",
      ],
      designTeam: [
        "1 designer working with 4-5 other customers at the same time",
      ],
    },
    {
      name: "Pro",
      description: "Great for end-to-end product design",
      features: [
        "Everything in Essential",
        "Full UI/UX design and research",
        "Dev ready Figma files",
        "One 1 hour meeting a week",
      ],
      designTeam: [
        "1 design lead",
        "1 designer working on 2-3 other customers at the same time",
      ],
    },
    {
      name: "Turbo",
      description:
        "Great for products that require more design horsepower and tight timelines",
      features: [
        "Everything in Essential and Pro",
        "User Testing",
        "Figma Prototypes",
        "Flexible meetings",
        "Custom workflows to speed up delivery",
      ],
      designTeam: [
        "1 design lead",
        "1 designer working on 1 other customer at the same time",
      ],
    },
  ];

  return (
    <div className="flex sm:flex-row flex-col gap-[42px]">
      {packageData.map((pkg, index) => {
        const currentPricing = pricingDetails[selectedOption][pkg.name];
        return (
          <Package
            key={index}
            name={pkg.name}
            description={pkg.description}
            price={currentPricing.price}
            pricePeriod={currentPricing.pricePeriod}
            features={pkg.features}
            designTeam={pkg.designTeam}
          />
        );
      })}
    </div>
  );
};

export default Packages;
