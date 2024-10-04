import React from "react";
import "./Item4.css";
import { IoMdCheckboxOutline } from "react-icons/io";

const Item4 = () => {
  return (
    <div className="item item-4">
      <div className="icons">
        <IoMdCheckboxOutline />
      </div>
      <span className="txt1">Status</span>
      <div className="status">
        <div className="sts_circle"></div>
        <span className="txt2">Available for Work</span>
      </div>
    </div>
  );
};

export default Item4;
