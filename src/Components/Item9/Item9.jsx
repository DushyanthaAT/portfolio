import React from "react";
import Image_Slider from "../Image_Slider/Image_Slider";
import "./Item9.css";
const Item9 = () => {
  return (
    <div className="item item-9in">
      <div className="winnings-header">
        <div className="txt1">Winnings</div>
      </div>
      <div className="imgSlider">
        <Image_Slider />
      </div>
    </div>
  );
};

export default Item9;
