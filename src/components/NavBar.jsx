import React from "react";
import logo from "../assets/logo.png";
import { Button } from "../components";

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

const NavBar = () => (
  <div className="flex sm:flex-row flex-col justify-center items-center pt-[55px] bg-[#E0EAF3] ">
    <a href="#">
      <img src={logo} alt="logo" className="w-[54px] h-[54px] mr-[100px]" />
    </a>
    <ul className="sm:flex flex-row hidden gap-[37px] text-[14px] font-bold">
      {navLinks.map((link, index) => (
        <li key={link.id}>
          <a href={`#${link.id}`}>{link.title}</a>
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

export default NavBar;
