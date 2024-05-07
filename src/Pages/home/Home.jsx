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
} from "../../images";
import { GoHome } from "react-icons/go";
import { BiGitRepoForked } from "react-icons/bi";
import { PiCertificate } from "react-icons/pi";
import { BsInfoCircle } from "react-icons/bs";
import { LuMessagesSquare } from "react-icons/lu";
import { TbDeviceImacStar } from "react-icons/tb";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import { MdOutlineFileDownload } from "react-icons/md";
import Icons from "../../components/iconComponent/icons";
import About from "../../components/about/About";

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
      <div className="rightArea">
        <div className="right-heading">
          <h1>I'm a Front End Developer</h1>
        </div>
        <div className="grid-container">
          <div className="item item-1">
            <div className="icons">
              <TbDeviceImacStar />
            </div>
            <span className="txt1">Experience</span>
            <span className="txt2">2 + Years</span>
          </div>
          <div className="item item-2">
            <div className="icons">
              <MdOutlineWorkOutline />
            </div>
            <span className="txt1">Completed</span>
            <span className="txt2">10 + Projects</span>
          </div>
          <div className="item item-3">
            <span className="txt1">I am</span>
            <span className="txt2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae
              placeat veritatis quisquam facilis sunt neque? Aliquid, atque id.
              Deleniti nulla dolorem sunt suscipit. Sint nemo pariatur
              exercitationem ea eaque qui excepturi nesciunt fugiat quas natus
              laborum officiis vero tempora neque sunt inventore, corrupti fugit
              quibusdam! Fuga porro doloribus repellat pariatur voluptatibus?
              Non accusamus eligendi nihil ipsam consequatur debitis facere
              architecto aliquid assumenda, quidem repellendus, voluptatem
              necessitatibus, porro praesentium facilis?
            </span>
          </div>
          <div className="item item-4">
            <div className="icons">
              <IoMdCheckboxOutline />
            </div>
            <span className="txt1">Status</span>
            <div className="status">
              <div className="sts_circle"></div>
              <span className="txt2">Available for Work</span>
            </div>
          </div>
          <div className="item item-5">
            <div className="icons">
              <IoDocumentTextOutline />
            </div>
            <div className="txt1">CV</div>
            <Button
              variant="contained"
              startIcon={<MdOutlineFileDownload />}
              sx={[
                { borderRadius: 50 },
                { width: "conterntFit" },
                { fontSize: "0.55rem" },
                { padding: "2px 15px" },
                { backgroundColor: "#00ADF2" },
              ]}
            >
              Download
            </Button>
          </div>
          <div className="item item-6">
            <div className="expertise-container">
              <div className="exp-left">
                <div className="txt1">Expertise</div>
                <div className="txt2">My Technical Level</div>
              </div>
              <div className="exp-right">
                <div className="exp-right-flex1">
                  <Icons ImgURL={html} Name="HTML" />
                  <Icons ImgURL={css} Name="CSS" />
                  <Icons ImgURL={js} Name="JavaScript" />
                  <Icons ImgURL={c} Name="C" />
                  <Icons ImgURL={java} Name="Java" />
                  <Icons ImgURL={python} Name="Python" />
                </div>
                <div className="exp-right-flex2">
                  <Icons ImgURL={nodeJs} Name="NodeJs" />
                  <Icons ImgURL={react} Name="React" />
                  <Icons ImgURL={flutter} Name="Flutter" />
                  <Icons ImgURL={boostrap} Name="Boostrap" />
                  <Icons ImgURL={firebase} Name="Firebase" />
                </div>
                <div className="exp-right-flex3">
                  <Icons ImgURL={mongoDB} Name="MongoDB" />
                  <Icons ImgURL={mySQL} Name="My SQL" />
                  <Icons ImgURL={git} Name="Git" />
                  <Icons ImgURL={github} Name="Github" />
                  <Icons ImgURL={xd} Name="XD" />
                  <Icons ImgURL={figma} Name="Figma" />
                </div>
              </div>
            </div>
          </div>
          <div className="item item-7">
            <About />
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
