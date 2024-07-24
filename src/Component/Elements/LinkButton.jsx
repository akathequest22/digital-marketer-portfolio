import React from "react";
import Link from "next/link";
import Button from "./Buton";

const LinkButton = ({
  href,
  anchorTarget,
  isAnchorTag,
  linkClassName,
  linkStyle,
  ...btnProps
}) => {
  const linkProps = {
    href: href,
    target: anchorTarget,
    className: linkClassName,
    style: linkStyle,
  };

  if (isAnchorTag)
    return (
      <a {...linkProps}>
        <Button {...btnProps} />
      </a>
    );
  return (
    <Link {...linkProps}>
      <Button {...btnProps} />
    </Link>
  );
};

export default LinkButton;
