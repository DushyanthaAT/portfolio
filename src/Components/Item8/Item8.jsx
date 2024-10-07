import React from "react";
import "./Item8.css";
import CardComponent from "./cardComponent/CardComponent";
import {
  boostrap,
  c,
  css,
  figma,
  firebase,
  flutter,
  git,
  github,
  html,
  java,
  js,
  mongoDB,
  mySQL,
  nodeJs,
  python,
  react,
  xd,
  webSite,
} from "../../images";

const Item8 = () => {
  const cardData = [
    {
      iconImages: [html, css, js],
      imageurl: webSite,
      title: "TestTitle",
      desc: "Lorem ipsum dolor sit amet consectetur adipi",
      beUrl: "https://www.behance.com",
      gitUrl: "https://www.github.com",
      figUrl: "https://www.figma.com",
      Category: "web",
    },
  ];
  return (
    <div className="item item-8">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <div className="txt1">Portfolio</div>
        </div>
        <div className="portfolio-items">
          {cardData.map((data, index) => (
            <CardComponent
              key={index}
              iconImages={data.iconImages}
              ImgURL={data.imageurl}
              Title={data.title}
              Desc={data.desc}
              BeURL={data.beUrl}
              GitURL={data.gitUrl}
              FigURL={data.figUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Item8;
