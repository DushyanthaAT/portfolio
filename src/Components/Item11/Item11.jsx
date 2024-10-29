import React from "react";
import "./Item11.css";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";

import ColorLensIcon from "@mui/icons-material/ColorLens";
import { HoverBorderGradient } from "../UI/hover-border-gradient";

const Item11 = () => {
  const GDPurl = "https://dushyanthathilakarathne.myportfolio.com/";
  const handleButtonClick = () => {
    window.open(GDPurl, "_blank");
  };
  return (
    <div className="por-container">
      <div className="por-icon">
        <ImageSearchIcon />
      </div>
      <span className="txt1">Explore My Creativity</span>
      <span className="txt2">View My Design Works</span>
      <div className="btn-cont">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="HoverBorderGradient"
          onClick={handleButtonClick}
        >
          <ColorLensIcon size={13} />
          <span className="text">Design Portfolio</span>
        </HoverBorderGradient>
      </div>
    </div>
  );
};

export default Item11;
