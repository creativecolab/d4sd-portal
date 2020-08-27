import React from "react";
import { Row, Col, Card, Avatar } from "@d4sd/components";
import Header from "../../Header/index";
import Footer from "../../Footer/index";
import "../../../styles/containers.less";
import "./style.less";
import { aboutContent, eventsContent } from "../../../assets/content";
import AboutDiagram from "../../../assets/img/about_diagram.png";
import { any } from "prop-types";

const { Meta } = Card;

let allSpeakers: Array<String> = [
  "Srini Srinivasan",
  "David Malmuth",
  "Pete Garcia",
  "Daniel Obodovski",
  "Bennett Peiji",
  "Damon Deaner",
  "Bahija Humphrey",
  "Daniel Suh",
  "MaeLine Levine",
  "Stacy Kelley",
  "Gabe Miller"
];

eventsContent.speaker.series.forEach(event => {
  event.content.forEach(member => {
    allSpeakers.push(member.name);
    return member.name;
  });
});

const AboutLayout = (): JSX.Element => (
  <div className="AboutLayout">
    <Header
      title={aboutContent.title1}
      content={aboutContent.content1}
      image={aboutContent.image}
    />
    <div className="container">
      <div className="paragraph">
        <h2>{aboutContent.title2}</h2>
        {/* eslint-disable-next-line */}
        <p dangerouslySetInnerHTML={{ __html: aboutContent.content2 }} />
      </div>
      <img src={AboutDiagram} style={{ width: "100%" }} alt="about-diagram" />
    </div>
    <br />
    <br />
    <br />
    <br />
    <div style={{ backgroundColor: "#F0F8FF" }}>
      <div className="container">
        <div className="paragraph">
          <h2>{aboutContent.title3}</h2>
        </div>
        <Row type="flex" gutter={[16, 16]} justify="center">
          {aboutContent.content3.map(content => (
            <Col xs={{ span: 20 }} lg={{ span: 11 }} key={`${content.key}_Col`}>
              <Meta
                avatar={<Avatar src={content.img} className="aboutavatar" />}
                description={content.txt}
              />
            </Col>
          ))}
        </Row>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>

    <div className="container team">
      <h2>Meet The Team</h2>
      {aboutContent.team.map((team, i) => {
        return (
          <>
            <h2 className="heading">{team.heading}</h2>
            <Row justify="center" type="flex">
              {i === 0 &&
                team.members.map(member => {
                  return (
                    <Col md={8} xs={24} sm={12} key={member}>
                      <p style={{ textAlign: "center" }}>{member}</p>
                    </Col>
                  );
                })}
              {i > 0 &&
                team.members.sort().map(member => {
                  return (
                    <Col md={8} xs={24} sm={12} key={member}>
                      <p style={{ textAlign: "center" }}>{member}</p>
                    </Col>
                  );
                })}
            </Row>
          </>
        );
      })}
      <div>
        <h2 className="heading">D4SD Invited Speakers</h2>
        <Row type="flex" justify="center" align="middle">
          {allSpeakers.sort().map(member => {
            return (
              <Col md={8} xs={24} sm={12}>
                <p style={{ textAlign: "center" }}>{member}</p>
              </Col>
            );
          })}
        </Row>
      </div>
      <div>
        <h2 className="heading">D4SD Educators</h2>
        <Row type="flex" justify="center" align="middle">
          {aboutContent.educators.map(educator => {
            return (
              <Col xs={8} sm={6} md={4} key={educator}>
                <img src={educator} className="educator" />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>

    <Footer />
  </div>
);

export default AboutLayout;
