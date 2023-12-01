import React from "react";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Mail from "../assets/Mail.png";
import LogoText from "../assets/logo_text.png";
import { navLinks } from "./NavBar";

const Footer = () => {
  return (
    <div className="px-[20px] sm:px-0 flex sm:flex-row flex-col  justify-evenly items-center bg-[#1D1D1D] pt-[173px] pb-[173px]">
      <div>
        <img
          src={LogoText}
          alt="Logo_text"
          className="mb-[26px] sm:max-w-[571px] max-w-[200px]"
        />
        <div className="flex sm:flex-row flex-col justify-center sm:items-center items-start sm:gap-[27px] gap-[7px] sm:mb-0 mb-[48px]">
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
      <div className="flex sm:flex-col flex-row flex-wrap justify-center gap-[21px]">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="text-[#FFFFFF]  text-[15px] sm:text-right text-center font-bold"
          >
            {link.title}{" "}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
