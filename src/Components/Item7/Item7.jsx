import React, { useState } from "react";
import { profileImage } from "../../images";
import Button from "@mui/material/Button";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import TimelineComponent from "../timelineComponent/TimelineComponent";
import TimelineComponent2 from "../timelineComponent/timelineComponent2";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import "./Item7.css";
import { HoverBorderGradient } from "../UI/hover-border-gradient";

const Item7 = () => {
  const [toggle, setToggle] = useState(1);
  function updateToggle(id) {
    setToggle(id);
  }
  return (
    <div className="about-container">
      <div className="about-me">
        <span className="txt1">About Me</span>
        <div className="container2">
          <div className="amLeft">
            <img src={profileImage} alt="profile image" />
          </div>
          <div className="amRight">
            <span className="txt2 aboutme-para">
              I am a software engineering undergraduate specializing in UI/UX
              design and frontend development. With a strong foundation in
              problem-solving, I am eager to design innovative solutions that
              enhance user experiences. My passion for taking on new challenges
              drives me to continuously expand my knowledge in the field,
              ensuring I stay at the forefront of industry trends. I thrive in
              collaborative environments, leveraging my solid teamwork and
              leadership skills to contribute fresh ideas that push projects
              forward. I believe in the power of design to create captivating
              digital journeys and am committed to crafting solutions that
              engage and empower users.
            </span>
            <div className="amIcons">
              <a
                data-social="Github"
                href="https://github.com/DushyanthaAT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                data-social="LinkedIn"
                href="https://www.linkedin.com/in/dushyantha-thilakarathne-20837821a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoLinkedin />
              </a>
              <a
                data-social="Facebook"
                href="https://web.facebook.com/dushyantha.tilakarathne"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                data-social="Instagram"
                href="https://www.instagram.com/_dush.yan.tha_/?next=%2Fieeesrilanka%2F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                data-social="Behance"
                href="https://www.behance.net/dushyanthilaka"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBehance />
              </a>
            </div>
            {/* <Button
              variant="contained"
              startIcon={<MdOutlineFileDownload />}
              sx={[
                { borderRadius: 50 },
                { width: "conterntFit" },
                { fontSize: "0.55rem" },
                { padding: "2px 15px" },
                { backgroundColor: "var(--appBlue)" },
              ]}
            >
              Donwload CV
            </Button> */}
            <div className="btn-cont">
              <a
                href="/cv.pdf"
                download="Dushyantha_CV.pdf"
                className="download-btn"
              >
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="HoverBorderGradient"
                >
                  <MdOutlineFileDownload size={15} />
                  <span className="text">Download CV</span>
                </HoverBorderGradient>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="expEdu">
        <span className="txt1">Education and Volunteering</span>
        <div className="tab-container">
          <div>
            <Button
              className={toggle === 1 ? "show-edu-tab" : "edu-tab"}
              startIcon={<SchoolOutlinedIcon />}
              sx={(theme) => ({
                textTransform: "none",
                fontSize: "1.2rem",
                [theme.breakpoints.down("640")]: {
                  fontSize: "1rem",
                },
              })}
              disableTouchRipple
              onClick={() => updateToggle(1)}
            >
              Education
            </Button>
          </div>
          <div>
            <Button
              className={toggle === 2 ? "show-exp-tab" : "exp-tab"}
              startIcon={<WorkOutlineOutlinedIcon />}
              sx={(theme) => ({
                textTransform: "none",
                fontSize: "1.2rem",
                [theme.breakpoints.down("640")]: {
                  fontSize: "1rem",
                },
              })}
              disableTouchRipple
              onClick={() => updateToggle(2)}
            >
              Volunteering
            </Button>
          </div>
        </div>
      </div>
      <div className={toggle === 1 ? "show-tl-content" : "tl-content"}>
        <TimelineComponent />
      </div>
      <div className={toggle === 2 ? "show-tl-content" : "tl-content"}>
        <TimelineComponent2 />
      </div>
    </div>
  );
};

export default Item7;
