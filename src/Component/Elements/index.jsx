"use client";
import Image from "next/image";
import React from "react";

import logo from "../../../public/common/ISC SVG-01.svg";
import { APP_NAME } from "./AppName";

const Logo = ({
  text = APP_NAME,
  containerClassName = "",
  logoClassName = "",
  textClassName = "",
  containerStyle = {},
  logoStyle = {},
  textStyle = {},
}) => {
  // todo: add more props

  return (
    <div
      className={` ${containerClassName} flex items-center justify-center gap-3  `}
      style={containerStyle}
    >
      <Image
        className={logoClassName}
        width={40}
        src={logo}
        alt=""
        style={logoStyle}
      />
      <h1
        className={` text-[16px] sm:text-[22px] ${textClassName}`}
        style={textStyle}
      >
        {text}
      </h1>
    </div>
  );
};

export default Logo;
