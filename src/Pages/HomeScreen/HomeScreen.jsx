import React from "react";
import "./Home.css";
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
import "./homebg.css";

const HomeScreen = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

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
          <div id="stars"></div>
          <div id="stars2"></div>
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
            {[
              { Component: Item1, id: "home" },
              { Component: Item2, id: "home" },
              { Component: Item3, id: "iam" },
              { Component: Item4, id: "status" },
              { Component: Item5, id: "home" },
              { Component: Item6, id: "home" },
              { Component: Item7, id: "about" },
              { Component: Item8, id: "portfolio" },
              { Component: Item9, id: "winnings" },
              { Component: Item10, id: "contacts" },
              { Component: Item11, id: "contacts" },
            ].map(({ Component, id }, index) => (
              <div
                key={index}
                id={id}
                className={`item-${index + 1} item-hover`}
                onMouseMove={handleMouseMove}
                style={{
                  "--clr": "#00adf2",
                }}
              >
                <Component />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
