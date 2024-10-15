import React from "react";
import { TbDeviceImacStar } from "react-icons/tb";
import "./Item1.css";

const Item1 = () => {
  return (
    <div className="item item-1in">
      <div className="icons">
        <TbDeviceImacStar />
      </div>
      <span className="txt1">Experience</span>
      <span className="txt2">2 + Years</span>
    </div>
  );
};

export default Item1;
