import React, { useState } from "react";
import { Row, Col, Steps, Button, Carousel } from "antd";
import Menubar from "../../menubar/index";
import "./style.less";

import AboutDiagram from "../../../assets/img/about_diagram.png";

const AboutLayout = (props: any) => {
  return (
    <div>
      <Menubar />
      <div className="AboutLayout">
        <div className="landing-div">
          <h2>About D4SD</h2>
          <p>
            Design for San Diego (D4SD) is a civic design challenge that
            provides a space for all of us to address the region's most
            challenging issues. D4SD offers a series of public workshops to
            bring together a wide range of stakeholders and to scaffold a
            process of framing human-centered design problems, prototyping
            solutions, and building alliances to bring good ideas to life.
          </p>
        </div>

        <div className="participate-content">
          <h2>Who can participate?</h2>
          <p>
            Anyone! If you care about the city and want to have a chance to have
            your voice included in the conversation, then we welcome you! Find
            below some potential ways groups that can participate.
          </p>
          <img src={AboutDiagram}></img>
        </div>

        <div className="goals-d4sd">
          <h2>What are the goals of D4SD?</h2>
        </div>
      </div>
    </div>
  );
};

export default AboutLayout;
