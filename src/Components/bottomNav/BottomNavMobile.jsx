import React, { useState, useEffect } from "react";
import "./bottomNavMobile.css";
import "../../../src/Pages/responsive.css";
import { GoHome } from "react-icons/go";
import { BiGitRepoForked } from "react-icons/bi";
import { PiCertificate } from "react-icons/pi";
import { BsInfoCircle } from "react-icons/bs";
import { LuMessagesSquare } from "react-icons/lu";

const sections = [
  { id: "home", icon: <GoHome />, label: "Home" },
  { id: "about", icon: <BsInfoCircle />, label: "About" },
  { id: "portfolio", icon: <BiGitRepoForked />, label: "Portfolio" },
  { id: "winnings", icon: <PiCertificate />, label: "Winnings" },
  { id: "contacts", icon: <LuMessagesSquare />, label: "Contacts" },
];

const BottomNavMobile = () => {
  const [selectedItem, setSelectedItem] = useState("home"); // default to "home"

  // Handle scrolling to the selected section
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setSelectedItem(id);
  };

  // Track the active section based on scroll position
  const handleScrollChange = () => {
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setSelectedItem(section.id);
        }
      }
    });
  };

  // Attach scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScrollChange);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScrollChange);
    };
  }, []);

  return (
    <div className="bottom-nav">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`nav-item ${selectedItem === section.id ? "active" : ""}`}
          onClick={() => handleScroll(section.id)}
        >
          {React.cloneElement(section.icon, {
            style: {
              color: "var(--textCol2)",
              fontWeight: selectedItem === section.id ? "bold" : "normal",
              fontSize: selectedItem === section.id ? "24px" : "20px",
            },
          })}
        </div>
      ))}
    </div>
  );
};

export default BottomNavMobile;
