import React from "react";
import "./about.css";
import { profileImage } from "../../images";
import Button from "@mui/material/Button";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import TimelineComponent from "../timelineComponent/TimelineComponent";
import TimelineComponent2 from "../timelineComponent/timelineComponent2";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-me">
        <span className="txt1">About Me</span>
        <div className="container2">
          <div className="amLeft">
            <img src={profileImage} alt="profile image" />
          </div>
          <div className="amRight">
            <span className="txt2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              temporibus cumque consequuntur vitae ipsum, earum voluptate nisi
              iure ullam quae dolore exercitationem excepturi cum fugiat
              corporis laborum reiciendis quibusdam placeat commodi omnis
              pariatur. Eius, blanditiis eligendi explicabo, repellendus nostrum
              quasi magnam accusantium consequuntur culpa perspiciatis facilis
              officiis reiciendis ducimus corporis dignissimos tempore deserunt
              veniam ab totam, pariatur est dolore! Quo doloribus rem minus, ab
              delectus unde veritatis dicta a deleniti asperiores est in
              quibusdam maiores, velit voluptas quaerat ut laborum vero dolore
              ducimus dolor. Totam temporibus, maiores quam officiis libero
              repellat accusamus iste, aut laborum aliquam possimus eos, quod
              cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Provident consectetur porro voluptates exercitationem
              doloremque reprehenderit magni nesciunt iusto culpa molestiae esse
              dignissimos perferendis vero adipisci cumque animi delectus,
              aspernatur nihil?
            </span>
            <div className="amIcons">
              <FaGithub />
              <IoLogoLinkedin />
              <FaFacebook />
              <FaInstagram />
              <FaDribbble />
            </div>
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
              Donwload CV
            </Button>
          </div>
        </div>
      </div>
      <div className="expEdu">
        <TimelineComponent2 />
      </div>
    </div>
  );
};

export default About;
