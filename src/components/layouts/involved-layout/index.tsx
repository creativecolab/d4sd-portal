import React, { useState } from "react";
import { Row, Col, Steps, Button, Carousel, Card, Avatar, Icon } from "antd";
import Menubar from "../../menubar/index";
import "./style.less";

//  Involved Icons
import IconJoinDiscussion from "../../../assets/img/involve_innovate.svg";
import IconFeedback from "../../../assets/img/involve_feedback.svg";
import IconSponsor from "../../../assets/img/involve_sponsor.svg";
import IconMail from "../../../assets/img/involve_mail.svg";
import IconVolunteer from "../../../assets/img/involve_volunteer.svg";

const { Meta } = Card;
const InvolvedLayout = (props: any) => {
  return (
    <div>
      <Menubar />
      <div className="InvolvedLayout">
        <Row type="flex" justify="center" className="landing-div">
          <Col xs={{ span: 24 }} md={{ span: 24 }}>
            <h2>Get Involved</h2>
          </Col>
          <Col xs={{ span: 2 }} md={{ span: 5 }}></Col>
          <Col xs={{ span: 20 }} md={{ span: 14 }}>
            <p>
              You can take part in D4SD in a variety of ways! Whether it be
              ideating solutions, giving feedback, teaching civic design in the
              classroom, or supporting the initiative, getting involved with
              D4SD can look a little different for each person. Below are a few
              ways to get involved.
            </p>
          </Col>
          <Col xs={{ span: 2 }} md={{ span: 5 }}></Col>
        </Row>

        <Row className="involve-cards" type="flex" justify="center">
          <Col xs={{ span: 20 }} md={{ span: 9 }}>
            <Card
              className="involve-card"
              actions={[<Button type="primary">JOIN THE DISCUSSION</Button>]}
            >
              <Meta
                avatar={<Avatar src={IconJoinDiscussion} />}
                title="Join the Discussion"
                description="We have a Slack workspace set up with 
                multiple channels that will allow participants to 
                communicate with their team members and the greater 
                D4SD community. When you register online, you will be 
                connected to our network of resources based on how you 
                want to participate."
              />
            </Card>
          </Col>
          <Col xs={{ span: 20 }} md={{ span: 9 }}>
            <Card
              className="involve-card"
              actions={[<Button type="primary">LEARN MORE</Button>]}
            >
              <Meta
                avatar={<Avatar src={IconFeedback} />}
                title="Become a Feedback Provider"
                description="You can take part in D4SD in a variety of ways! 
                Whether by ideating solutions, giving feedback, teaching 
                civic design in the classroom, or supporting the initiative, 
                getting involved with D4SD will look a little different for 
                each person. Below are a few ways to get involved."
              />
            </Card>
          </Col>
          <Col xs={{ span: 20 }} md={{ span: 9 }}>
            <Card
              className="involve-card"
              actions={[<Button type="primary">CONTACT OUR TEAM</Button>]}
            >
              <Meta
                avatar={<Avatar src={IconSponsor} />}
                title="Sponsor D4SD"
                description="Get the chance to grow your brand within D4SD’s 
              community by sponsoring events. This would allow either your 
              product or service to reach new ears, while supporting a mission 
              that matters to you."
              />
            </Card>
          </Col>
          <Col xs={{ span: 20 }} md={{ span: 9 }}>
            <Card
              className="involve-card"
              actions={[<Button type="primary">JOIN OUR TEAM</Button>]}
            >
              <Meta
                avatar={<Avatar src={IconMail} />}
                title="Join the D4SD team"
                description="We need, innovators, educators, volunteers, and 
              more to help us reach our goal. If you’re interested in any 
              of those roles or want to forge you own role, register with us below!"
              />
            </Card>
          </Col>

          <Col xs={{ span: 20 }} md={{ span: 9 }}>
            <Card
              className="involve-card"
              actions={[<Button type="primary">JOIN MAILING LIST</Button>]}
            >
              <Meta
                avatar={<Avatar src={IconVolunteer} />}
                title="Join the mailing list"
                description="Keep up with D4SD updates and events with our newsletter! 
                  Every week we highlight key takeaways from discussions, shout out 
                  community members, and remind you of important deadlines to help you 
                  stay on track during the challenge."
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default InvolvedLayout;
