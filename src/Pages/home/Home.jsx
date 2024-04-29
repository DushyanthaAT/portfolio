import React from "react";
import "./Home.css";
import profileImage from "../../images/profileImage.jpg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";

const home = () => {
  return (
    <div className="document">
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
              <HomeOutlinedIcon style={{ color: "#E2E2E2" }} />
              <span className="list-text">HOME</span>
            </li>
            <li className="projects">
              <AccountTreeOutlinedIcon style={{ color: "#E2E2E2" }} />
              <span className="list-text">PROJECTS</span>
            </li>
            <li className="certificates">
              <WorkspacePremiumOutlinedIcon style={{ color: "#E2E2E2" }} />
              <span className="list-text">CERTIFICATES</span>
            </li>
            <li className="about">
              <InfoOutlinedIcon style={{ color: "#E2E2E2" }} />
              <span className="list-text">ABOUT</span>
            </li>
            <li className="contact">
              <PermContactCalendarOutlinedIcon style={{ color: "#E2E2E2" }} />
              <span className="list-text">CONTACT</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="rightArea"></div>
    </div>
  );
};

export default home;
