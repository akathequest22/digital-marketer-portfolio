import React, { CSSProperties } from "react";

import Para from "@/components/Elements/Para";



const Card = ({
  subTitle,
  title,
  description,
  isLargeHeading,
  anchorText,
  viewDetailHref,
  cardContainerClassName,
  cardContainerStyles,
  titleStyles,
  subTitleStyles,
}) => {
  return (
    <>
      <div
        className={`flex flex-col items-start  rounded-[32px] border border-[#074B0F] bg-[#FFFFFF] px-[24px]
    py-[32px] ${cardContainerClassName}`}
        style={cardContainerStyles}
      >
        {subTitle && (
          <Para
            level="xxlg-bold"
            color="#444444"
            className=" mb-8 tracking-[2px]"
            styles={subTitleStyles}
          >
            {subTitle}
          </Para>
        )}
        <Para
          level={isLargeHeading ? "xxxlg-bold" : "xlg-bold"}
          color="#444444"
          className=" mb-8"
          styles={titleStyles}
        >
          {title}
        </Para>
        {description?.map((d, key) => (
          <p className=" mb-8 text-left text-[16px] text-[#444444]" key={key}>
            {d}
          </p>
        ))}
        <a
          href={viewDetailHref}
          style={{
            borderBottom: "1px solid #444444",
            color: "#444444",
            fontSize: "16px",
            fontWeight: "500",
            cursor: "pointer",
            marginTop: "auto",
          }}
        >
          {anchorText}
        </a>
      </div>
    </>
  );
};

export default Card;
