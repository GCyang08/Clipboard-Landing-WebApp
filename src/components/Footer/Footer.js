import React from "react";
import "./Footer.css";

import logo from "../../assets/logo.svg";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import instagram from "../../assets/icon-instagram.svg";

function Footer() {
  return (
    <div className="Footer">
      <img src={logo} alt="logo" />
      <div>
        <p>FAQs</p>
        <p>Contact Us</p>
      </div>
      <div>
        <p>Privacy Policy</p>
        <p>Press Kit</p>
      </div>
      <p>Install Guide</p>
      <div className="FooterLogo">
        <img src={facebook} alt="facebook logo" />
        <img src={twitter} alt="twitter logo" />
        <img src={instagram} alt="instagram logo" />
      </div>
    </div>
  );
}

export default Footer;
