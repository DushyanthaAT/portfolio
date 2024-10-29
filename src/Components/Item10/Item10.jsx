import React, { useRef, useState } from "react";
import "./Item10.css";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailjs from "@emailjs/browser";

const Item10 = () => {
  const form = useRef();
  const [error, setError] = useState({
    name: false,
    email: false,
    message: false,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const userName = form.current.user_name.value.trim();
    const userEmail = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!userName || !userEmail || !message) {
      // Set error state to true for empty fields
      setError({
        name: !userName,
        email: !userEmail,
        message: !message,
      });
      return; // Prevent form submission
    }

    // If no fields are missing, proceed with email sending
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
          form.current.reset();
          setError({ name: false, email: false, message: false }); // Reset error state
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="left-flex">
        {/* Contact Information */}
        <div className="text-wrapper-cot">
          <span className="txt1">Contact me</span>
        </div>
        <div className="left-wrapper">
          {/* Contact details */}
          <div className="cinfo-container">
            <div className="cinfo-icon">
              <PhoneAndroidIcon sx={{ fontSize: "1.5rem" }} />
            </div>
            <div className="cinfo-txt">
              <span className="cinfo-title">Phone</span>
              <span className="cinfo-data">+94 71 7 176620</span>
            </div>
          </div>
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
                <a
                  href="https://web.facebook.com/dushyantha.tilakarathne"
                  target="_blank"
                >
                  <FacebookIcon sx={{ fontSize: "1.2rem", color: "white" }} />
                </a>
              </div>
              <div className="sm-icon">
                <a
                  href="https://www.instagram.com/_dush.yan.tha_/?next=%2Fieeesrilanka%2F"
                  target="_blank"
                >
                  <InstagramIcon sx={{ fontSize: "1.2rem", color: "white" }} />
                </a>
              </div>
              <div className="sm-icon">
                <a
                  href="https://www.linkedin.com/in/dushyantha-thilakarathne-20837821a/"
                  target="_blank"
                >
                  <LinkedInIcon sx={{ fontSize: "1.2rem", color: "white" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-flex">
        <form ref={form} onSubmit={sendEmail} autoComplete="off">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            style={{ borderColor: error.name ? "red" : "" }}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your E-mail"
            style={{ borderColor: error.email ? "red" : "" }}
            autoComplete="off"
          />
          <textarea
            name="message"
            placeholder="Type your message here..."
            style={{ borderColor: error.message ? "red" : "" }}
          />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Item10;
