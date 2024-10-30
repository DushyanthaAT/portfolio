import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  codefest2021,
  codefest2022,
  codesprints,
  hacktrone,
  hackx,
  ix23,
  masterdesigner,
  slasscom,
  uxplore,
  webSite,
} from "../../images";
import "./Image_Slider.css";
import Tilty from "react-tilty";

function Image_Slider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1900,
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
    responsive: [
      {
        breakpoint: 1300, // Adjust for medium screens (e.g., tablets)
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
        },
      },
      {
        breakpoint: 900, // Adjust for small screens (e.g., mobile)
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
        },
      },
    ],
  };
  const img_data = [
    {
      img_title: "Winner - Individual Category in Master Designer V2.0",
      img_src: masterdesigner,
    },
    {
      img_title: "Most Innovative Team of hackX 9.0",
      img_src: hackx,
    },
    {
      img_title: "Finalist in CodeSprint 8",
      img_src: codesprints,
    },
    {
      img_title: "1st Runners-Up in IX 23",
      img_src: ix23,
    },
    {
      img_title: "Regional Winners at SLASSCOM National Ingenuity Awards-2024",
      img_src: slasscom,
    },
    {
      img_title: "Finalist in Mora UXPlore 1.0",
      img_src: uxplore,
    },
    {
      img_title: "Finalist in Codefest 2022 Hackthon",
      img_src: codefest2022,
    },
    {
      img_title: "Finalist in Codefest 2021 Designthon",
      img_src: codefest2021,
    },
    {
      img_title: "Finalist in Hacktron V1.0",
      img_src: hacktrone,
    },
  ];
  return (
    <Slider {...settings}>
      {img_data.map((d) => (
        <Tilty max={8}>
          <div className="cer-container">
            <div className="cer-img">
              <img src={d.img_src} alt="" />
            </div>
            <span className="cer-title">{d.img_title}</span>
          </div>
        </Tilty>
      ))}
    </Slider>
  );
}

export default Image_Slider;
