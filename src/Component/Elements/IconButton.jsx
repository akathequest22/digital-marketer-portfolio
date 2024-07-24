"use client";
import { getDims } from "@/utils";
import Image from "next/image";
import React from "react";


const IconButton = ({
  onClick,
  buttonStyle,
  icon,
  iconStyle,
  className,
  btnDim = 40,
  iconHeight,
  iconWidth,
  iconComp,
}) => {
  return (
    <div
      className={`flex origin-center cursor-pointer items-center justify-center rounded-full transition-all hover:scale-110 hover:bg-[#0001] active:bg-[#0002] ${className}`}
      style={{ ...getDims(btnDim), ...buttonStyle }}
      onClick={onClick}
    >
      {iconComp ?? (
        <Image
          alt=""
          src={icon}
          width={iconWidth}
          height={iconHeight}
          style={{ ...iconStyle }}
        />
      )}
    </div>
  );
};
export default IconButton;
