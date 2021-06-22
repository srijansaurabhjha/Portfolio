import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_icon">
        <FacebookIcon style={{ color: "white" }} />
        <GitHubIcon style={{ color: "white" }} />
        <LinkedInIcon style={{ color: "white" }} />
        <InstagramIcon style={{ color: "white" }} />
        <WhatsAppIcon style={{ color: "white" }} />
      </div>
      <div className="footer_copyright">
        <p>&copy;2021 Srijan Saurabh Jha</p>
      </div>
    </div>
  );
};

export default Footer;
