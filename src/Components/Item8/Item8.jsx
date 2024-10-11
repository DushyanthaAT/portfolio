import React, { useState } from "react";
import { useEffect } from "react";
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
      id: 1,
      iconImages: [html, css, js],
      imageurl: webSite,
      title: "TestTitle",
      desc: "Lorem ipsum dolor sit amet consectetur adipi",
      beUrl: "https://www.behance.com",
      gitUrl: "https://www.github.com",
      figUrl: "https://www.figma.com",
      Category: "Mobile",
    },
    {
      id: 2,
      iconImages: [html, css, js],
      imageurl: webSite,
      title: "TestTitle",
      desc: "Lorem ipsum dolor sit amet consectetur adipi",
      beUrl: "https://www.behance.com",
      gitUrl: "https://www.github.com",
      figUrl: "https://www.figma.com",
      Category: "Web",
    },
    {
      id: 3,
      iconImages: [html, css, js],
      imageurl: webSite,
      title: "TestTitle",
      desc: "Lorem ipsum dolor sit amet consectetur adipi",
      beUrl: "https://www.behance.com",
      gitUrl: "https://www.github.com",
      figUrl: "https://www.figma.com",
      Category: "Web",
    },
  ];

  const projectsNav = [
    {
      name: "All",
    },
    {
      name: "Web",
    },
    {
      name: "Mobile",
    },
    {
      name: "UI/UX",
    },
    {
      name: "Game",
    },
  ];

  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(cardData);
    } else {
      const newProjects = cardData.filter((project) => {
        return project.Category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };
  return (
    <div className="item item-8">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <div className="txt1">Portfolio</div>
        </div>
        <div className="work_filter">
          {projectsNav.map((item, index) => {
            return (
              <span
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? "active-work" : ""
                } port-category`}
                key={index}
              >
                {item.name}
              </span>
            );
          })}
        </div>
        <div className="portfolio-items">
          {projects.map((item) => {
            return <CardComponent item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Item8;
