import React, { useState } from "react";
import "./DropDownContainer.scss";
import { MoreIcon } from "../more-icon/MoreIcon";
export const DropDownContainer: React.FC<{
  children?: React.ReactNode;
  width?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  isLeftAligned?: boolean;
  isOpenToTheLeft?: boolean;
}> = ({
  children,
  width = "auto",
  marginLeft = 0,
  marginRight = 0,
  marginTop = 0,
  marginBottom = 0,
  isLeftAligned = false,
  isOpenToTheLeft = false
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const updateDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        style={{
          width,
          marginLeft,
          marginRight,
          marginTop,
          marginBottom,
          justifyContent: isOpenToTheLeft ? "start" : "end"
        }}
        className="more-icon-container"
        onClick={updateDropDown}
      >
        <div className="more-icon-wrapper">
          <MoreIcon color={"hsla(225, 14%, 100%, 0.7)"} />
        </div>
      </div>
      <div
        className={isLeftAligned ? "left-side" : "right-side"}
        style={{ width, marginLeft, marginRight, marginTop, marginBottom }}
      >
        {isOpen && children}
      </div>
    </div>
  );
};
