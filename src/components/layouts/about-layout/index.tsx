import React, { useState } from "react";
import { Row, Col, Steps, Button, Card, Avatar } from "antd";
import Menubar from "../../menubar/index";
import "./style.less";

import AboutDiagram from "../../../assets/img/about_diagram.png";
import AboutConnect from "../../../assets/img/about_connect.svg";
import AboutDiv from "../../../assets/img/about_div.svg";
import AboutCommunicate from "../../../assets/img/about_communicate.svg";
import AboutCity from "../../../assets/img/about_city.svg";
import AboutEdu from "../../../assets/img/about_edu.svg";
import AboutFind from "../../../assets/img/about_find.svg";

const { Meta } = Card;
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

        <div className="goals">
          <h2 className="goals-header">What are the goals of D4SD?</h2>
          <div className="goals-list">
            <div className="inner-flex">
              <Card className="goals-card" bordered={false}>
                <Meta
                  avatar={<Avatar src={AboutConnect} />}
                  description="To connect innovators, experts, city officials, 
                  professional designers, business leaders, and community members 
                  through a combination of in-person events and online activities"
                />
              </Card>
              <Card bordered={false} className="goals-card">
                <Meta
                  avatar={<Avatar src={AboutDiv} />}
                  description="To increase and diversify participation, particularly 
                  for typically underrepresented or marginalized populations, by 
                  creating a range of specific roles while striving for diversity, 
                  equity, and inclusion."
                />
              </Card>
              <Card bordered={false} className="goals-card">
                <Meta
                  avatar={<Avatar src={AboutCommunicate} />}
                  description="To increase the agency of bottom-up community initiatives 
                  and enhance communication between the community and city."
                />
              </Card>
              <Card bordered={false} className="goals-card">
                <Meta
                  avatar={<Avatar src={AboutCity} />}
                  description="To contribute to the burgeoning design-driven economy in 
                  San Diego by providing resources to help launch top proposals by bringing 
                  together leaders from various sectors."
                />
              </Card>
              <Card bordered={false} className="goals-card">
                <Meta
                  avatar={<Avatar src={AboutEdu} />}
                  description="To provide an educational opportunity that serves people 
                  from a wide range of ages, backgrounds, and motivations."
                />
              </Card>
              <Card bordered={false} className="goals-card">
                <Meta
                  avatar={<Avatar src={AboutFind} />}
                  description="To collaboratively explore a range of civic problems 
                  that the San Diego region faces."
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLayout;
