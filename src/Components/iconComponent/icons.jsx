import React from "react";
import "../../Pages/responsive.css";
import "./icons.css";


const Icons = ({ ImgURL, Name }) => {
  return (
    <div className="icon-container">
      <img className="icon-image" src={ImgURL} alt="icon" />
      <span className="txt2">{Name}</span>
    </div>
  );
};

export default Icons;
