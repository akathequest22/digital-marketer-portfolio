import React from "react";

const Badge = ({ children, border = "purpule", className, onClick, style }) => {
  const borderClass = `border-${border}`;
  return (
    <span
      className={`badge ${borderClass} ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default Badge;
