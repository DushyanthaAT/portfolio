import React from "react";
import "./Item10.css";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Item10 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_evyyrqj",
        "template_wlyk63j",
        form.current,
        "R5HqbacILdBah_eyQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-container">
      <div className="left-flex">
        <span className="txt1">Contact me</span>
        <div className="left-wrapper">
          {/* phone */}
          <div className="cinfo-container">
            <div className="cinfo-icon">
              <PhoneAndroidIcon sx={{ fontSize: "1.5rem" }} />
            </div>
            <div className="cinfo-txt">
              <span className="cinfo-title">Phone</span>
              <span className="cinfo-data">+94 71 7 176620</span>
            </div>
          </div>
          {/* email */}
          <div className="cinfo-container">
            <div className="cinfo-icon">
              <MailOutlineOutlinedIcon sx={{ fontSize: "1.5rem" }} />
            </div>
            <div className="cinfo-txt">
              <span className="cinfo-title">E-mail</span>
              <span className="cinfo-data">dushyanthaat@gmail.com</span>
            </div>
          </div>
          <div className="sm-container">
            <span className="sm-title">Connect with me</span>
            <div className="sm-icons-container">
              <div className="sm-icon">
                <FacebookIcon sx={{ fontSize: "1.2rem" }} />
              </div>
              <div className="sm-icon">
                <InstagramIcon sx={{ fontSize: "1.2rem" }} />
              </div>
              <div className="sm-icon">
                <LinkedInIcon sx={{ fontSize: "1.2rem" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-flex">
        <form ref={form} onSubmit={sendEmail} autocomplete="off">
          <input type="text" name="user_name" placeholder="Your Name" />
          <input
            type="email"
            name="user_email"
            placeholder="Your E-mail"
            autocomplete="off"
          />
          <textarea name="message" placeholder="Type your message here..." />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Item10;
