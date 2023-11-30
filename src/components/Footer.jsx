import React from "react";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Mail from "../assets/Mail.png";
import LogoText from "../assets/logo_text.png";
import { navLinks } from "./NavBar";

const Footer = () => {
  return (
    <div className="flex flex-row justify-evenly items-center bg-[#1D1D1D] pt-[173px] pb-[173px]">
      <div>
        <img
          src={LogoText}
          alt="Logo_text"
          className="mb-[26px] max-w-[571px]"
        />
        <div className="flex flex-row justify-center items-center gap-[27px]">
          <div className="flex flex-row justify-center items-center">
            <img src={Mail} className="mr-[3px]" />
            <p className="text-[#FFFFFF]">hello@designproject.io</p>
          </div>
          <div className="flex flex-row justify-center items-center">
            <img src={Instagram} className="mr-[3px]" />
            <p className="text-[#FFFFFF]">@designproject.io</p>
          </div>
          <div className="flex flex-row justify-center items-center">
            <img src={Linkedin} className="mr-[3px]" />
            <p className="text-[#FFFFFF]">The Design Project</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[21px]">
        {navLinks.map((link) => (
          <p
            key={link.id}
            className="text-[#FFFFFF]  text-[15px] text-right font-bold"
          >
            {link.title}{" "}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Footer;
