import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./IntroScreen.css";
import HomeScreen from "../HomeScreen/HomeScreen";

const IntroScreen = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        setIsIntroComplete(true); // Set to true when the animation finishes
      },
    });

    // Animate the spotlight effect over the first name
    timeline.fromTo(
      firstNameRef.current,
      { backgroundPosition: "100%", opacity: 0, scale: 0.5 },
      {
        backgroundPosition: "-100%",
        opacity: 1,
        scale: 1,
        duration: 5,
        ease: "power2.inOut",
      },
      "="
    );

    // Animate the spotlight effect over the last name
    timeline.fromTo(
      lastNameRef.current,
      { backgroundPosition: "-100%", opacity: 0, scale: 0.5 },
      {
        backgroundPosition: "100%",
        opacity: 1,
        scale: 1,
        duration: 5,
        ease: "power2.inOut",
      },
      "="
    );

    timeline.to(
      firstNameRef.current,
      {
        backgroundPosition: "100%",
        color: "#fff",
        duration: 3,
      },
      "-=2"
    );

    timeline.to(
      lastNameRef.current,
      {
        backgroundPosition: "-100%",
        color: "#fff",
        duration: 3,
      },
      "-=2"
    );

    timeline.to(
      [firstNameRef.current, lastNameRef.current],
      {
        background: "none",
        color: "#000",
        duration: 3,
      },
      "-=1"
    );
  }, []);

  if (isIntroComplete) {
    return <HomeScreen />; // Render the HomeScreen when the intro animation completes
  }

  return (
    <div className="splashBG">
      <div className="intro-container">
        <h1 className="name">
          <span className="masked-text first-name" ref={firstNameRef}>
            Dushyantha
          </span>
          <span className="masked-text last-name" ref={lastNameRef}>
            Thilakarathne
          </span>
        </h1>
      </div>
    </div>
  );
};

export default IntroScreen;
