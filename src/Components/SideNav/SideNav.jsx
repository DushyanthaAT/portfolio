import React from "react";
import { GoHome } from "react-icons/go";
import { BiGitRepoForked } from "react-icons/bi";
import { PiCertificate } from "react-icons/pi";
import { BsInfoCircle } from "react-icons/bs";
import { LuMessagesSquare } from "react-icons/lu";
import { profileImage } from "../../images";
import "./SideNav.css";
import "../../Pages/responsive.css";

const SideNav = () => {
  return (
    <div className="sideNav">
      <div className="profile">
        <div className="profile-image">
          <img src={profileImage} alt="Profile-Image" />
        </div>
        <div className="profile-name">
          <p>JAMES SMITH</p>
        </div>
      </div>
      <div className="sideMenu-Items">
        <ul>
          <li className="home">
            <GoHome style={{ color: "var(--textCol2)" }} />
            <span className="list-text">HOME</span>
          </li>
          <li className="projects">
            <BiGitRepoForked style={{ color: "var(--textCol2)" }} />
            <span className="list-text">PROJECTS</span>
          </li>
          <li className="certificates">
            <PiCertificate style={{ color: "var(--textCol2)" }} />
            <span className="list-text">CERTIFICATES</span>
          </li>
          <li className="about">
            <BsInfoCircle style={{ color: "var(--textCol2)" }} />
            <span className="list-text">ABOUT</span>
          </li>
          <li className="contact">
            <LuMessagesSquare style={{ color: "var(--textCol2)" }} />
            <span className="list-text">CONTACT</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
