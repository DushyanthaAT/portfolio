import React from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import "./Item2.css";
const Item2 = () => {
  return (
    <div className="item item-2in">
      <div className="icons">
        <MdOutlineWorkOutline />
      </div>
      <span className="txt1">Completed</span>
      <span className="txt2">10 + Projects</span>
    </div>
  );
};

export default Item2;
