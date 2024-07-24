import React from 'react'

const Heading = ({mainHeading,mainHeadingWithBorder}) => {
  return (
    <h1 className="xlg:leading-[84px] mb-[70px] text-center  font-ibmPlexSansCondensed text-[40px] font-bold leading-[50px] text-[#222222] xs:text-[48px] xs:leading-[56px] sm:mb-[150px] sm:text-[52px] sm:leading-[62px] md:text-[56px] md:leading-[68px] lg:text-[60px] lg:leading-[74px]  xl:text-[64px]">
    {mainHeading}{" "}
    <span className="border-b-[4px] border-[#156F20] ">
      {mainHeadingWithBorder}
    </span>
  </h1>
  )
}

export default Heading