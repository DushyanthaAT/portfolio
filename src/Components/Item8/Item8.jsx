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
  php,
  xd,
  webSite,
  LMSSUSL,
  GOGO,
  ps,
  ai,
  unistore,
  Trophy,
  Bunky,
  unity,
  csharp,
  bom,
  wg,
  PulsePen,
  tailwind,
  Netvision,
  iElect,
  Disastify,
} from "../../images";

import Tilty from "react-tilty";

const Item8 = () => {
  const cardData = [
    {
      id: 1,
      iconImages: [react, tailwind, nodeJs, mongoDB, firebase, figma],
      imageurl: PulsePen,
      title: "PulsePen: WebBlog",
      desc: "PulsePen is a full-stack blogging platform for easy content creation and management, featuring secure authentication and a user-friendly interface for writers, readers, and admins.",
      beUrl:
        "https://www.behance.net/gallery/214190263/PulsePen-Blogging-website-UIUX-Case-Study",
      gitUrl: "https://github.com/DushyanthaAT/PulsePen",
      figUrl:
        "https://www.figma.com/design/thvHA7urbKpSQTI4kHSPqK/PulsePen?node-id=0-1&t=VG1UfpVYBRLBOhuE-1",
      Category: "Web",
      designTool: "figma",
    },
    {
      id: 2,
      iconImages: [flutter, php, mySQL],
      imageurl: LMSSUSL,
      title: "LMS SUSL | Group",
      desc: "LMS SUSL is the Learning Management System of Sabaragamuwa University of Sri Lanka, providing students and lecturers with a digital platform to manage courses, access resources, and enhance learning through interactive tools.",
      beUrl:
        "https://www.behance.net/gallery/202623219/LMSSUSL-Learning-Management-Mobile-App-Case-Study",
      gitUrl: "https://github.com/DushyanthaAT/SUSL-LMS",
      // figUrl: "https://www.figma.com",
      Category: "Mobile",
    },
    {
      id: 3,
      iconImages: [xd, ps, ai],
      imageurl: GOGO,
      title: "gogo - Travel Planning App",
      desc: "gogo streamlines trip planning by offering users the best travel routes, transportation options, and nearby services like shops and accommodations. It also enhances safety by identifying dangerous locations, making travel easier and safer.",
      beUrl:
        "https://www.behance.net/gallery/205450219/GOGO-Travel-Planning-App-UIUX-Case-Study",
      // gitUrl: "https://www.github.com",
      figUrl:
        "https://xd.adobe.com/view/f0fbc67d-014d-4307-9af4-a56f0bb7f71f-a5a8/?fullscreen",
      Category: "UI/UX",
      designTool: "xd",
    },
    {
      id: 4,
      iconImages: [react, css, firebase, figma],
      imageurl: unistore,
      title: "Unistore | Group",
      desc: "UniStore is an online platform for university students to buy and sell preloved items and handmade crafts, promoting sustainability and supporting student entrepreneurs.",
      beUrl: "https://www.behance.net/gallery/210740171/UniStrore",
      gitUrl: "https://github.com/DushyanthaAT/UniStore-web-project",
      figUrl:
        "https://www.figma.com/proto/lH89BYaWGB7xzYhR7raWps/UniStore?page-id=0%3A1&node-id=236-492&node-type=frame&viewport=-740%2C1461%2C0.13&t=22pajRpJJzwxtFxK-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=188%3A129&show-proto-sidebar=1",
      Category: "Web",
      designTool: "figma",
    },
    {
      id: 5,
      iconImages: [unity, csharp],
      imageurl: bom,
      title: "Blaze of Magic | Group",
      desc: "Blaze of Magic is an open-world game where players complete missions through portals to earn points. Collect enough points to unlock the final boss battle against Tigreal",
      // beUrl: "https://www.behance.net/gallery/210740171/UniStrore",
      gitUrl: "https://github.com/DushyanthaAT/Blaze-of-Magic",
      figUrl: "https://dushyantha.itch.io/blaze-of-magic",
      Category: "Game",
      designTool: "itch",
    },
    {
      id: 6,
      iconImages: [xd, ps, ai],
      imageurl: wg,
      title: "WellnessGrocers | Group",
      desc: "A UI concept for Apple Vision that enhances grocery shopping with diet planning, health tracking, and a virtual gym. It empowers users through personalized recommendations and a gamified experience.",
      beUrl: "https://www.behance.net/gallery/210019027/WellnessGrocer",
      // gitUrl: "https://github.com/DushyanthaAT/Blaze-of-Magic",
      figUrl:
        "https://xd.adobe.com/view/46e016dd-c143-48b0-8c2b-ff242fdc29e0-13b3/",
      Category: "UI/UX",
      designTool: "xd",
    },
    {
      id: 7,
      iconImages: [flutter, mongoDB, firebase, react, nodeJs, xd],
      imageurl: Trophy,
      title: "TROPHY Employee Loyalty Application | Group",
      desc: "Trophy is a token-based loyalty app fostering community, engagement, and well-being. It combines gamification and stress-relief features to create a supportive workplace culture and elevate employee experiences",
      // beUrl: "https://www.behance.net/gallery/210019027/WellnessGrocer",
      gitUrl: "https://github.com/DushyanthaAT/Trophy",
      figUrl:
        "https://xd.adobe.com/view/328d180a-a7f1-42e0-99ed-93de14882578-67de/",
      Category: "Mobile",
      designTool: "xd",
    },
    {
      id: 8,
      iconImages: [xd, ps, ai],
      imageurl: Netvision,
      title: "NetVision ",
      desc: "NetVision is a web application designed to streamline the management and monitoring of network infrastructure. It provides real-time device health updates, visualizes network connections, and simplifies fault tracking, ensuring efficient and scalable network operations.",
      // beUrl: "https://www.behance.net/gallery/210019027/WellnessGrocer",
      // gitUrl: "https://github.com/DushyanthaAT/Blaze-of-Magic",
      figUrl:
        "https://xd.adobe.com/view/ab76984b-e61c-4e8d-80bd-a4ae35ee38bf-fe25/",
      Category: "UI/UX",
      designTool: "xd",
    },
    {
      id: 9,
      iconImages: [figma, ps, ai],
      imageurl: Bunky,
      title: "Bunky",
      desc: "Bunky is a platform designed to help users find the perfect roommate for their boarding place. It matches individuals based on compatibility, ensuring a harmonious living experience",
      // beUrl: "https://www.behance.net/gallery/210019027/WellnessGrocer",
      // gitUrl: "https://github.com/DushyanthaAT/Blaze-of-Magic",
      figUrl:
        "https://www.figma.com/design/Bl6orvfaCQQgV7rHeqZ4U6/Bunky?node-id=0-1&t=B0ZncY5wan6j1BCA-1",
      Category: "UI/UX",
      designTool: "figma",
    },
    {
      id: 10,
      iconImages: [xd, ps, ai],
      imageurl: Disastify,
      title: "Disastify",
      desc: "Disastify is a disaster management app offering real-time alerts, safety tips, damage reporting, and emergency chat. It connects responders, volunteers, and communities to streamline aid and save lives.",
      // beUrl: "https://www.behance.net/gallery/210019027/WellnessGrocer",
      // gitUrl: "https://github.com/DushyanthaAT/Blaze-of-Magic",
      figUrl:
        "https://xd.adobe.com/view/f0a03f98-489f-42ed-a0e1-5dd8b8575325-a5f3/",
      Category: "UI/UX",
      designTool: "xd",
    },
    {
      id: 11,
      iconImages: [xd, ps, ai],
      imageurl: iElect,
      title: "iElect",
      desc: "iElect is a secure e-voting system where the government manages parties and voters, while users can register, vote, and view analyzed election results for a transparent and seamless experience.",
      // beUrl: "https://www.behance.net/gallery/210019027/WellnessGrocer",
      // gitUrl: "https://github.com/DushyanthaAT/Blaze-of-Magic",
      figUrl:
        "https://xd.adobe.com/view/6221da19-57cd-4321-b994-1b47a02bb10a-3772/",
      Category: "UI/UX",
      designTool: "xd",
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
            return (
              <Tilty key={item.id} max={8}>
                <CardComponent item={item} />
              </Tilty>
            );
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
