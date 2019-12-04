import React, { useState } from "react";
import { Row, Col, Steps, Button, Carousel, Card, Avatar, Icon } from "@d4sd/components";
import Menubar from "../../menubar/index";
import "./style.less";

//  Involved Icons
import IconJoinDiscussion from "../../../assets/img/involve_innovate.svg";
import IconFeedback from "../../../assets/img/involve_feedback.svg";
import IconSponsor from "../../../assets/img/involve_sponsor.svg";
import IconMail from "../../../assets/img/involve_mail.svg";
import IconVolunteer from "../../../assets/img/involve_volunteer.svg";
import { involveContent } from "../../../assets/content.js";
const { Meta } = Card;
const InvolvedLayout = (props: any) => {
  return (
    <div>
      <Menubar />
      <div className="InvolvedLayout">
        <Row type="flex" justify="center" className="landing-div">
          <Col xs={{ span: 24 }} md={{ span: 24 }}>
            <h2>{involveContent.title1}</h2>
          </Col>
          <Col xs={{ span: 2 }} md={{ span: 5 }}></Col>
          <Col xs={{ span: 20 }} md={{ span: 14 }}>
            <p>
              {involveContent.content1}
            </p>
          </Col>
          <Col xs={{ span: 2 }} md={{ span: 5 }}></Col>
        </Row>

        <Row className="involve-cards" type="flex" justify="center">
          {involveContent.roles.map((content, i)=> {
            return (
              <Col xs={{ span: 20 }} md={{ span: 9 }}>
                <Card
                  className="involve-card"
                  actions={[<a href={content.link} target={content.new}><Button type="primary">{content.action}</Button></a>]}
                >
                  <Meta
                    avatar={<Avatar src={content.image} />}
                    title={content.title}
                    description={content.txt}
                  />
                </Card>
              </Col>
            )
          })}
        </Row>
      </div>
    </div>
  );
};

export default InvolvedLayout;
