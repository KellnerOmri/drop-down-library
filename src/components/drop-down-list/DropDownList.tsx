import React from "react";
import "./DropDownList.scss";
import { DropDownModel } from "../../models/drop-down.model";

export const DropDownList: React.FC<{ data: DropDownModel[] }> = ({ data }) => {
  /* if I had more time i will make this coponent more generic - enable to choosing colors, borders, padding
   */

  return (
    <div className="drop-down-list-wrapper">
      {data.map((line) => {
        return (
          <div
            onClick={() => !line.isDisable && line.functionAction()}
            className={`drop-down-list-line ${line.isDisable ? "disable" : ""}`}
          >
            <span>{line.name}</span>
            {/* - if I had more time .here we can add icon if exsits  
            {line.iconName && <img src={line.iconName} />}
            */}
          </div>
        );
      })}
    </div>
  );
};
