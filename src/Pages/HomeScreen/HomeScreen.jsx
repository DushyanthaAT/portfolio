import React from "react";
import "./Home.css";
import {
  profileImage,
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
import SideNav from "../../Components/SideNav/SideNav";
import Item1 from "../../Components/Item1/Item1";
import Item2 from "../../Components/Item2/Item2";
import Item3 from "../../Components/Item3/Item3";
import Item4 from "../../Components/Item4/Item4";
import Item5 from "../../Components/Item5/Item5";
import Item6 from "../../Components/Item6/Item6";
import Item7 from "../../Components/Item7/Item7";
import Item8 from "../../Components/Item8/Item8";
import Item9 from "../../Components/Item9/Item9";
import Item10 from "../../Components/Item10/Item10";
import Item11 from "../../Components/Item11/Item11";
import "../responsive.css";
import BottomNavMobile from "../../Components/bottomNav/BottomNavMobile";
import { Typewriter } from "react-simple-typewriter";

const HomeScreen = () => {
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
    <div className="document">
      <div className="bottomNav">
        <BottomNavMobile />
      </div>
      <div className="doc-wrapper">
        <div className="sideNav">
          <SideNav />
        </div>
        <div className="rightArea">
          <span id="home" className="rightarea-heading">
            <span
              style={{
                paddingTop: "5rem",
                paddingBottom: "20rem",
                margin: "auto 0",
                fontWeight: "normal",
                fontSize: "clamp(1.2rem, 5vw, 2rem)",
              }}
            >
              I am a{" "}
              <span style={{ color: "#00adf2", fontWeight: "bold" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "Full Stack Developer",
                    "UI/UX Engineer",
                    "Graphic Designer",
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </span>
          </span>
          <div className="grid-container">
            <div className="item-1">
              <Item1 />
            </div>
            <div className="item-2">
              <Item2 />
            </div>
            <div className="item-3">
              <Item3 />
            </div>
            <div className="item-4">
              <Item4 />
            </div>
            <div className="item-5">
              <Item5 />
            </div>
            <div id="home" className="item-6">
              <Item6 />
            </div>
            <div id="about" className="item-7">
              <Item7 />
            </div>
            <div id="portfolio" className="item-8">
              <Item8 />
            </div>
            <div id="winnings" className="item-9">
              <Item9 />
            </div>
            <div id="contacts" className="item-10">
              <Item10 />
            </div>
            <div className="item-11">
              <Item11 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
