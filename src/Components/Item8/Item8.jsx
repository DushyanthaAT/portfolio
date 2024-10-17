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
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
    {
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
  const [showAll, setShowAll] = useState(false);

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
  const toggleShowMore = () => {
    setShowAll(!showAll);
  };
  return (
    <div className="item item-8in">
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
          {projects.slice(0, showAll ? projects.length : 3).map((item) => {
            return <CardComponent item={item} key={item.id} />;
          })}
        </div>
        <div className="show-more-container">
          <button onClick={toggleShowMore} className="show-more-button">
            {showAll ? "Show Less" : "Show More"}
            {showAll ? (
              <iframe
                class="custom-iframe"
                src="https://lottie.host/embed/70f9cc45-ba9c-4806-ad97-b2ac77200b19/N9Sp8EgDR9.json"
              ></iframe>
            ) : (
              <iframe
                class="custom-iframe"
                src="https://lottie.host/embed/38e3a999-5c4e-44cc-9405-975e4c2250a4/wZYK4RH9Pv.json"
              ></iframe>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item8;
