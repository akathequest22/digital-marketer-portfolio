"use client";

import Button from "../Elements/Buton";





const HeadingDesc = ({
  // level = 2,
  isHeading1 = false,
  title,
  isButton = true,
  btnText,
  description,
  descriptionClassName,
  descriptionStyle = {},
  containerClassName,
  containerStyle,
  btnClassName,
  btnStlyle
}) => {
  return (
    <div className={containerClassName} style={containerStyle}>
      {isHeading1 ? (
        <h1 className="xlg:leading-[84px] mb-3 font-ibmPlexSansCondensed text-[40px] font-bold leading-[50px] text-[#062d3e] xs:text-[48px] xs:leading-[56px] sm:text-[52px] sm:leading-[62px] md:text-[56px] md:leading-[68px] lg:text-[60px] lg:leading-[74px]  xl:text-[64px]">
          {title}
        </h1>
      ) : (
        <h3 className="xlg:leading-[84px] mb-3 font-ibmPlexSansCondensed text-[40px] font-bold leading-[50px] text-[#062d3e]  xs:text-[48px] xs:leading-[56px] sm:text-[52px] sm:leading-[62px] md:text-[56px] md:leading-[68px] lg:text-[60px] lg:leading-[74px]  xl:text-[64px]">
          {title}
        </h3>
      )}

      {description && (
        <p className={descriptionClassName} styles={descriptionStyle}>
          {description}
        </p>
      )}
      <div className=" flext mt-8 justify-center lg:justify-start">
        {isButton && (
          <Button isPri className={btnClassName} style={btnStlyle} bnText={btnText}>
            {btnText}
          </Button>
        )}
      </div>
     
    </div>
  );
};

export default HeadingDesc;
