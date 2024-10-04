import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { webSite } from "../../images";
import "./Image_Slider.css";

function Image_Slider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    appendDots: (dots) => (
      <div
        style={{
          color: "#ddd",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  const img_data = [
    {
      img_title: "Test Title",
      img_src: webSite,
    },
    {
      img_title: "Test Title 2",
      img_src: webSite,
    },
    {
      img_title:
        "Test Title 3 asdsadasdasdasdasdsad asdas/</b> afasfasf asdfasfa saffdafdf",
      img_src: webSite,
    },
    {
      img_title: "Test Title 4",
      img_src: webSite,
    },
    {
      img_title: "Test Title 5",
      img_src: webSite,
    },
    {
      img_title: "Test Title 6",
      img_src: webSite,
    },
  ];
  return (
    <Slider {...settings}>
      {img_data.map((d) => (
        <div className="cer-container">
          <div className="cer-img">
            <img src={d.img_src} alt="" />
          </div>
          <span className="cer-title">{d.img_title}</span>
        </div>
      ))}
    </Slider>
  );
}

export default Image_Slider;
