"use client";
import React, { useState } from "react";
import Logo from "../../Elements/Logo";
import IconButton from "../../Elements/IconButton";
import hamburgerIcon from "../../../public/icons/hamburger.svg";
import closeIcon from "../../../public/icons/close.svg";
import Button from "../Elements/Buton";

const NavsDb = [
  {
    text: "Why Us?",
    href: "#",
  },
  {
    text: "Services",
    href: "#",
  },
  {
    text: "Our Process ",
    href: "#",
  },
  {
    text: "Career",
    href: "#",
  },
  {
    text: "FAQs",
    href: "#",
  },
];

const PublicNavbarCEAA = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="relative mx-auto mb-[80px] flex w-[98%] items-center justify-between pt-4 md:flex-grow md:gap-[40px] lg:mb-[120px]">
      <Logo text="ISC" containerClassName="z-50"></Logo>
      <div className="hidden  lg:inline ">
        <ul className=" flex flex-wrap gap-4 ">
          {NavsDb.map((nav, i) => (
            <a href={nav.href} key={i}>{nav.text}</a>
          ))}
        </ul>
      </div>
      <div className=" hidden gap-4 lg:flex  ">
        <Button >Contact</Button>
      </div>
      <div className="flex items-center lg:hidden">
        <IconButton
          className=" z-50"
          icon={sidebarOpen ? closeIcon : hamburgerIcon}
          btnDim={24}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
      </div>
      {sidebarOpen && (
        <div className="absolute left-0 top-16 z-10 flex w-full flex-col bg-white shadow-md lg:hidden">
          <ul className="flex flex-col gap-4 p-4">
            {NavsDb.map((nav, i) => (
              <a key={i} href={nav.href}>
                {nav.text}
              </a>
            ))}
          </ul>
          <div className="flex justify-center gap-4 p-4 ">
            <Button >Contact</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PublicNavbarCEAA;
