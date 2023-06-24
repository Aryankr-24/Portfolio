import "./FooterStyles.css";
import React from "react";
import {
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaGithub,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Burari Delhi.</p>
              <p>India.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91-88820-55579
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              kumararyan0080@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About</h4>
          <p>
            This is me Aryan Kumar. I enjoy creating full stack project. I am
            passionate about learing new technologies.{" "}
          </p>
          <div className="social">
            <a href="https://github.com/Aryankr-24"><FaGithub
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            /></a>
            <a href="https://leetcode.com/aryankr_24/"><SiLeetcode
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            /></a>
            <a href="https://www.linkedin.com/in/aryan-kumar-a25097188"><FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
