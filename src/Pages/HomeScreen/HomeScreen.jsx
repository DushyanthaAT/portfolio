import React, { useEffect, useRef, useState } from "react";
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomeScreen = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [isLoaded, setIsLoaded] = useState(false);
  const gridContainerRef = useRef(null);
  const sideNavRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { x: "-100%", opacity: 0 }, // Start off-screen
      { x: "0%", opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 } // Animate into view
    );
  }, []);

  useEffect(() => {
    if (sideNavRef.current) {
      gsap.fromTo(
        sideNavRef.current,
        { x: "-250px", opacity: 0 }, // Start outside the viewport
        { x: "0px", opacity: 1, duration: 1, ease: "power2.out" } // Animate into view
      );
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const batch = ScrollTrigger.batch(".grid-cards", {
        duration: 1,
        start: "top 95%",
        end: "bottom 8%",
        // markers: true,
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, stagger: 0.15 }
          ),
        onEnterBack: (batch) =>
          gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
        onLeave: (batch) =>
          gsap.set(batch, {
            opacity: 0,
            y: -100,
            stagger: 0.3,
            overwrite: true,
            duration: 2,
          }),
        onLeaveBack: (batch) =>
          gsap.set(batch, {
            opacity: 0,
            y: 100,
            stagger: 0.3,
            overwrite: true,
            duration: 2,
          }),
      });

      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });

      if (gridContainerRef.current) {
        resizeObserver.observe(gridContainerRef.current);
      }

      return () => {
        resizeObserver.disconnect();
        batch.kill();
      };
    }
  }, [isLoaded]);

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
        <div className="sideNav" ref={sideNavRef}>
          <SideNav />
        </div>
        <div className="rightArea">
          <div id="stars"></div>
          <div id="stars2"></div>
          <span id="home" className="rightarea-heading" ref={headingRef}>
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
          <div className="grid-container" ref={gridContainerRef}>
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
                className={`item-${index + 1} item-hover grid-cards`}
                onMouseMove={handleMouseMove}
                style={{
                  opacity: 0,
                  y: 100,
                  "--clr": "#00adf2",
                }}
              >
                <Component />
              </div>
            ))}
          </div>
          <div className="web-footer">
            <span className="footer-txt">
              © 2024 Dushyantha Thilakarathna. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
