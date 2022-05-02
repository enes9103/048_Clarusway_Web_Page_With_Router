import React from "react";
import claruswayLogo from "../assets/clarusway_logo.png";
import "../App.css";

function Footer() {
  return (
    <div className="footer">
      <p>Clarusway Web Design, Copyright © 2022</p>
      <a href="https://clarusway.com/">
        <img src={claruswayLogo} alt="clarusway" />
      </a>
    </div>
  );
}

export default Footer;
