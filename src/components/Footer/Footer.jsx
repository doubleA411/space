import React from "react";
import "./Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import footerlogo from "../../assets/footer-logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="left-footer">
        <div className="social-icons">
          <TwitterIcon />
          <LinkedInIcon />
          <EmailIcon />
        </div>
      </div>
      <p>Copyrights 2022.</p>
      <div className="right-footer">
        <img src={footerlogo} alt="" />
      </div>
    </div>
  );
}

export default Footer;
