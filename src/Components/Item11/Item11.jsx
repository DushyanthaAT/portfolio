import React from "react";
import "./Item11.css";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";

const Item11 = () => {
  const GDPurl = "https://dushyanthathilakarathne.myportfolio.com/";
  return (
    <div className="por-container">
      <div className="por-icon">
        <ImageSearchIcon />
      </div>
      <span className="txt1">Explore My Creativity</span>
      <span className="txt2">View My Design Works</span>
      <div
        className="por-btn"
        onClick={() => {
          window.open(GDPurl, "_blank");
        }}
      >
        <span>Design Portfolio</span>
      </div>
    </div>
  );
};

export default Item11;
