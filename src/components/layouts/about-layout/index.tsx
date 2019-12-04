import React, { useState } from "react";
import { Row, Col, Steps, Button, Card, Avatar } from "@d4sd/components";
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
        <Row justify="center" type="flex" className="landing-div">
          <Col xs={{ span: 23 }} md={{ span: 23 }}>
            <h1>About D4SD</h1>
          </Col>
          <Col xs={{ span: 20 }} md={{ span: 16 }}>
            <p>
              Design for San Diego (D4SD) is a civic design challenge that
              provides a space for all of us to address the region's most
              challenging issues. D4SD offers a series of public workshops to
              bring together a wide range of stakeholders and to scaffold a
              process of framing human-centered design problems, prototyping
              solutions, and building alliances to bring good ideas to life.
            </p>
          </Col>
        </Row>

        <Row type="flex" justify="center" className="participate-content">
          <Col xs={{ span: 24 }} md={{ span: 24 }}>
            <h2>Who can participate?</h2>
          </Col>
          <Col xs={{ span: 20 }} md={{ span: 16 }}>
            <p>
              Anyone! If you care about the city and want to have a chance to
              have your voice included in the conversation, then we welcome you!
              Find below some potential ways groups that can participate.
            </p>
          </Col>
          <Col xs={{ span: 20 }} md={{ span: 16 }}>
            <img src={AboutDiagram}></img>
          </Col>
        </Row>

        <Row type="flex" justify="center" className="goals">
          <Col xs={{ span: 24 }}>
            <h2 className="goals-header">What are the goals of D4SD?</h2>
          </Col>
          <Col xs={{ span: 20 }} md={{ span: 9 }}>
            <Card className="goals-card" bordered={false}>
              <Meta
                avatar={<Avatar src={AboutConnect} />}
                description="To connect innovators, experts, city officials,
                  professional designers, business leaders, and community members
                  through a combination of in-person events and online activities"
              />
            </Card>
          </Col>
          <Col xs={{ span: 20 }} md={{ span: 9 }}>
            <Card bordered={false} className="goals-card">
              <Meta
                avatar={<Avatar src={AboutDiv} />}
                description="To increase and diversify participation, particularly
                  for typically underrepresented or marginalized populations, by
                  creating a range of specific roles while striving for diversity,
                  equity, and inclusion."
              />
            </Card>
          </Col>
          <Col xs={{ span: 20 }} md={{ span: 9 }}>
            <Card bordered={false} className="goals-card">
              <Meta
                avatar={<Avatar src={AboutCommunicate} />}
                description="To increase the agency of bottom-up community initiatives
                  and enhance communication between the community and city."
              />
            </Card>
          </Col>
          <Col xs={{ span: 20 }} md={{ span: 9 }}>
            <Card bordered={false} className="goals-card">
              <Meta
                avatar={<Avatar src={AboutCity} />}
                description="To contribute to the burgeoning design-driven economy in
                  San Diego by providing resources to help launch top proposals by bringing
                  together leaders from various sectors."
              />
            </Card>
          </Col>
          <Col xs={{ span: 20 }} md={{ span: 9 }}>
            <Card bordered={false} className="goals-card">
              <Meta
                avatar={<Avatar src={AboutEdu} />}
                description="To provide an educational opportunity that serves people
                  from a wide range of ages, backgrounds, and motivations."
              />
            </Card>
          </Col>
          <Col xs={{ span: 20 }} md={{ span: 9 }}>
            <Card bordered={false} className="goals-card">
              <Meta
                avatar={<Avatar src={AboutFind} />}
                description="To collaboratively explore a range of civic problems
                  that the San Diego region faces."
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutLayout;
