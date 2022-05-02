import React from "react";
import "../App.css";
import html from "../assets/logo_html.png";
import css from "../assets/logo_css.png";
import brush from "../assets/logo_brush.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="head">
        <div className="head-container">
          <div className="head-title">
            <h1>Professional Web Design</h1>
          </div>
          <div className="head-content">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
              illum nobis ipsam dolor blanditiis. Est corrupti dolore vitae in
              quo!
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="flex-container">
            <div className="section-left">
              <h3>Subscribe To Our Newsletter</h3>
            </div>

            <div className="section-right">
              <input type="text" placeholder="Enter Email..." />
              <input type="button" value="Subscribe" id="button" />
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="container">
          <div className="flex-container">
            <div className="main-content">
              <img className="click" src={html} alt="html" onClick={() => navigate("/html")} />
              <h3>HTML5 Markup</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis quod cupiditate neque rerum, mollitia harum!
              </p>
            </div>
            <div className="main-content">
              <img className="click" src={css} alt="css" onClick={() => navigate("/css")} />
              <h3>CSS3 Styling</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis quod cupiditate neque rerum, mollitia harum!
              </p>
            </div>
            <div className="main-content">
              <img className="click" src={brush} alt="graphic design" onClick={() => navigate("/logo")} />
              <h3>Graphic Design</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis quod cupiditate neque rerum, mollitia harum!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
