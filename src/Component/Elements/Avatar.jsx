import { AvatarProp } from "@/types";
import { getDims } from "@/utils/styleHelpers";
import { CSSProperties, useMemo } from "react";
import Witooltip from "./WiTooltip";

// vikingTodo: optimize the code!

const Avatar = ({
  username,
  image,
  className,
  style,
  dim = 40,
  onClick,
  bgColor = "#118810",
  textColor = "#fff",
  fontSize,
  showAsIs = false,
}) => {
  const initials = useMemo(() => {
    if (!username) return "**";
    const cleanedUserName = username.replace(/[^a-zA-Z ]/g, "").trim();
    if (!cleanedUserName) return "**";

    const splitName = cleanedUserName.split(" ");

    if (splitName.length === 0) return "**";

    if (splitName.length === 1) {
      return cleanedUserName.substring(0, 2);
    } else {
      const firstName = splitName[0][0];
      const lastName = splitName[splitName.length - 1][0];
      return firstName + lastName;
    }
  }, [username]);

  const bgStyles = useMemo(() => {
    const toReturn = {};

    if (image && !showAsIs) {
      toReturn.backgroundImage = `url(${image})`;
    } else {
      toReturn.background = bgColor;
    }
    return toReturn;
  }, [image, showAsIs, bgColor]);

  return (
    <>
     
        <div
          className={`flex items-center justify-center rounded-full bg-cover bg-center ${
            onClick ? "cursor-pointer" : ""
          } ${className}`}
          style={{
            ...style,
            ...getDims(dim),
            ...bgStyles,
          }}
          onClick={onClick}
        >
          {!image && (
            <p
              className={"select-none"}
              style={{
                color: textColor,
                fontSize:
                  typeof fontSize === "number"
                    ? fontSize + "px"
                    : typeof fontSize === "string"
                      ? fontSize
                      : dim / 2.5,
              }}
            >
              {showAsIs ? username : initials}
            </p>
          )}
        </div>
    </>
  );
};

export default Avatar;
