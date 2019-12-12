import React, { useState } from "react";
import { Row, Col, Card, Avatar } from "@d4sd/components";
import Header from "../../Header/index";
import Footer from "../../Footer/index";
import "../../../styles/containers.less";
import "./style.less";
import { aboutContent } from "../../../assets/content.js";
import AboutDiagram from "../../../assets/img/about_diagram.png";

const { Meta } = Card;
const AboutLayout = (props: any) => {
  return (
    <div>
      <Header title={aboutContent.title1} content={aboutContent.content1} image={aboutContent.image}/>
      <div className="container">
        <div className="paragraph">
          <h2>{aboutContent.title2}</h2>
          <p dangerouslySetInnerHTML={{__html: aboutContent.content2 }}/>
        </div>
        <img src={AboutDiagram} style={{"width":"100%"}}></img>
        <div className="paragraph">
          <h2>{aboutContent.title3}</h2>
        </div>
          <Row type="flex" gutter={[16, 16]} justify="center">
          {aboutContent.content3.map(content => (
            <Col xs={{ span: 20 }} lg={{ span: 11 }}>
              <Card bordered={false} className="aboutcard">
                <Meta
                  avatar={<Avatar src={content.img} className="aboutavatar" />}
                  description={content.txt}
                />
              </Card>
            </Col>
          ))}
          </Row>
      </div>

      <br/><br/>
      <Footer/>
    </div>
  );
};

export default AboutLayout;
