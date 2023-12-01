import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Button } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const navLinks = [
  {
    id: "howitworks",
    title: "HOW IT WORKS",
  },
  {
    id: "about",
    title: "ABOUT",
  },
  {
    id: "work",
    title: "WORK",
  },
  {
    id: "pricing",
    title: "PRICING",
  },
  {
    id: "blog",
    title: "BLOG",
  },
];

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  function navHandle() {
    setShowNav(!showNav);
  }
  console.log(showNav);

  return (
    <div className="flex sm:justify-center justify-around items-center  pt-[55px] bg-[#E0EAF3] relative">
      <a href="#">
        <img src={logo} alt="logo" className="w-[54px] h-[54px] mr-[100px]" />
      </a>
      <div className="sm:hidden pl-[100px]" onClick={navHandle}>
        <FontAwesomeIcon
          icon={faBars}
          size="2xl"
          style={{ color: "#000000" }}
        />
      </div>
      <ul
        className={`${
          showNav
            ? "flex flex-col bg-[#E0EAF3] pt-[30px] sm:pt-0 pb-[30px] sm:pb-0 text-center"
            : "hidden"
        } absolute sm:static sm:flex sm:flex-row gap-[25px] sm:gap-[37px] text-[16px] sm:text-[14px] font-bold`}
        style={{ top: "100%", right: 0, left: 0 }}
      >
        {navLinks.map((link, index) => (
          <li key={link.id}>
            <a href={`#${link.id}`} className="">
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      <a href="#get-started">
        <Button className="ml-[128px] w-[162px] h-[45px] sm:inline hidden">
          GET STARTED
        </Button>{" "}
      </a>
    </div>
  );
};

export default NavBar;
