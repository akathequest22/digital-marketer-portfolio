"use client";
import React, { useRef } from "react";

const CustomCarousel = ({
  children,
  crouselWrapperClassName,
  crouselWrapperStyles,
  crouselCardContainerStyles,
  crouselCardContainerClassName,
  crouselArrowsClassName,
  crouselArrowsStyles,
  isArrowOnBottom = true,
  isArrowOnTop = false,
}) => {
  const divRef = useRef(null); // Initialize with null
  const handlePrev = () => {
    if (divRef.current) {
      const width = divRef.current.offsetWidth;
      divRef.current.scrollLeft = divRef.current.scrollLeft - 300;
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
      className={`relative overflow-hidden  ${crouselWrapperClassName}`}
      style={crouselWrapperStyles}
    >
      {isArrowOnTop && (
        <div
          className={`mb-8 flex justify-end gap-6 ${crouselArrowsClassName}`}
          style={crouselArrowsStyles}
        >
          <div className="cursor-pointer text-[#000]" onClick={handlePrev}>
            <span>Previous</span> &#9654;
          </div>
          <div className="cursor-pointer" onClick={handleNext}>
            <span>Next</span> &#9664;
          </div>
        </div>
      )}
      <div
        className={`scroll-behavior relative flex gap-8 overflow-x-hidden ${crouselCardContainerClassName}`}
        ref={divRef}
        style={crouselCardContainerStyles}
      >
        {children}
      </div>
      {isArrowOnBottom && (
        <div className="mt-8 flex justify-end gap-6">
          <div className="cursor-pointer text-[#000]" onClick={handlePrev}>
            <span>Previous</span> &#9654;
          </div>
          <div className="cursor-pointer" onClick={handleNext}>
            <span>Next</span> &#9664;
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomCarousel;
