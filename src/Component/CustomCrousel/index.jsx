"use client";
import React, {  useRef } from "react";
import Image from "next/image";
import LinkButton from "../Elements/LinkButton";


const CustomCarousel = ({
  children,
  crouselWrapperClassName,
  crouselWrapperStyles,
  crouselCardContainerStyles,
  crouselCardContainerClassName,
  crouselArrowsClassName,
  crouselArrowsStyles,
  isShowViewAllBtn,
  viewAllBtnHref,
  isArrowOnBottom = true,
  isArrowOnTop = false,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const handlePrev = () => {
    if (divRef.current) {
      const width = divRef.current.offsetWidth;
      divRef.current.scrollLeft =
        divRef.current.scrollLeft - (width > 600 ? 360 : 300);
      console.log(width, "width");
    }
  };
  const handleNext = () => {
    if (divRef.current) {
      const width = divRef.current.offsetWidth;
      divRef.current.scrollLeft =
        divRef.current.scrollLeft + (width > 600 ? 360 : 300);
      console.log(width, "width");
    }
  };
  return (
    <div
      className={` relative overflow-hidden  ${crouselWrapperClassName}`}
      style={crouselWrapperStyles}
    >
      {isArrowOnTop && (
        <div
          className={` mb-8 flex justify-end gap-6 ${crouselArrowsClassName}`}
          style={crouselArrowsStyles}
        >
          {isShowViewAllBtn && (
            <LinkButton variant="TER" href={viewAllBtnHref || ""} size="large">
              View All Plans
            </LinkButton>
          )}
          <Image
            src={leftArrow}
            alt=""
            onClick={handlePrev}
            className=" transform cursor-pointer transition-transform duration-200 hover:translate-x-0.5"
          />
          <Image
            src={rightArrow}
            alt=""
            onClick={handleNext}
            className=" transform cursor-pointer transition-transform duration-200 hover:translate-x-0.5"
          />
        </div>
      )}
      <div
        className={`scroll-behavior  relative flex gap-8 overflow-x-hidden ${crouselCardContainerClassName}`}
        ref={divRef}
        style={crouselCardContainerStyles}
      >
        {children}
      </div>
      {isArrowOnBottom && (
        <div className="mt-8 flex justify-end gap-6">
          <Image
            src={leftArrow}
            alt=""
            onClick={handlePrev}
            className=" transform cursor-pointer transition-transform duration-200 hover:translate-x-0.5"
          />
          <Image
            src={rightArrow}
            alt=""
            onClick={handleNext}
            className=" transform cursor-pointer transition-transform duration-200 hover:translate-x-0.5"
          />
        </div>
      )}
    </div>
  );
};

export default CustomCarousel;
