import React, { useState, useEffect } from "react";
import { GoHome } from "react-icons/go";
import { BiGitRepoForked } from "react-icons/bi";
import { PiCertificate } from "react-icons/pi";
import { BsInfoCircle } from "react-icons/bs";
import { LuMessagesSquare } from "react-icons/lu";
import { profileImage } from "../../images";
import "./SideNav.css";

const SideNav = () => {
  const [selectedItem, setSelectedItem] = useState("home");

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setSelectedItem(id);
  };

  const updateSelectedItemOnScroll = () => {
    const sections = document.querySelectorAll("div[id]"); // Select all divs with IDs
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      // Check if the section is in the viewport
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        setSelectedItem(section.id);
      }
    });
  };

  useEffect(() => {
    // Observe sections for intersection changes
    const sections = document.querySelectorAll("div[id]");
    const options = {
      root: null,
      threshold: 0.8,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelectedItem(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);
    sections.forEach((section) => observer.observe(section));

    // Add scroll event listener to update selected item
    window.addEventListener("scroll", updateSelectedItemOnScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", updateSelectedItemOnScroll); // Clean up the event listener
    };
  }, []);

  return (
    <div className="sideNav">
      <div className="profile">
        <div className="profile-image">
          <img src={profileImage} alt="Profile-Image" />
        </div>
        <div className="profile-name">
          <p>
            Dushyantha
            <br />
            Thilakarathne
          </p>
        </div>
      </div>
      <div className="sideMenu-Items">
        <ul>
          <li
            className={`home ${selectedItem === "home" ? "active" : ""}`}
            onClick={() => handleScroll("home")}
          >
            <GoHome style={{ color: "var(--textCol2)" }} />
            <span className="list-text">Home</span>
          </li>
          <li
            className={`about ${selectedItem === "about" ? "active" : ""}`}
            onClick={() => handleScroll("about")}
          >
            <BsInfoCircle style={{ color: "var(--textCol2)" }} />
            <span className="list-text">About</span>
          </li>
          <li
            className={`projects ${
              selectedItem === "portfolio" ? "active" : ""
            }`}
            onClick={() => handleScroll("portfolio")}
          >
            <BiGitRepoForked style={{ color: "var(--textCol2)" }} />
            <span className="list-text">Portfolio</span>
          </li>
          <li
            className={`certificates ${
              selectedItem === "winnings" ? "active" : ""
            }`}
            onClick={() => handleScroll("winnings")}
          >
            <PiCertificate style={{ color: "var(--textCol2)" }} />
            <span className="list-text">Winnings</span>
          </li>
          <li
            className={`contact ${selectedItem === "contacts" ? "active" : ""}`}
            onClick={() => handleScroll("contacts")}
          >
            <LuMessagesSquare style={{ color: "var(--textCol2)" }} />
            <span className="list-text">Contacts</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
