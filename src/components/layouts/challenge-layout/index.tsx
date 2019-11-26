import React, { useState } from "react";
import { Row, Col, Steps, Button, Carousel, Card } from "antd";
import Menubar from "../../menubar/index";
import "./style.less";

import ChallengeMobility from "../../../assets/img/challenge_mobility.svg";
import ChallengeClimate from "../../../assets/img/challenge_climate.svg";
import ChallengeHousing from "../../../assets/img/challenge_housing.svg";
import ChallengeHealth from "../../../assets/img/challenge_health.svg";

const { Meta } = Card;
const ChallengeLayout = (props: any) => {
  return (
    <div>
      <Menubar />
      <div className="ChallengeLayout">
        <div className="landing-div">
          <Row type="flex" justify="center">
            <Col xs={{ span: 20 }} md={{ span: 20 }}>
              <h2 className="header-text">Challenge Briefs</h2>
            </Col>
            <Col xs={{ span: 12 }} md={{ span: 12 }}>
              <p>
                What does it mean to be a Sustainable City? For us, a
                sustainable San Diego is one where all parts of our city connect
                and support each other and the environment. Working together, we
                can design ways to improve mobility, health, housing, and the
                climate for our region.
              </p>
            </Col>
          </Row>
        </div>

        <Row className="challenge-icons" justify="center" type="flex">
          <Col xs={{ span: 10 }} md={{ span: 4 }}>
            <figure>
              <img src={ChallengeMobility}></img>
              <figcaption>Mobility</figcaption>
            </figure>
          </Col>
          <Col xs={{ span: 10 }} md={{ span: 4 }}>
            <figure>
              <img src={ChallengeClimate}></img>
              <figcaption>Environment</figcaption>
            </figure>
          </Col>
          <Col xs={{ span: 10 }} md={{ span: 4 }}>
            <figure>
              <img src={ChallengeHousing}></img>
              <figcaption>Housing</figcaption>
            </figure>
          </Col>
          <Col xs={{ span: 10 }} md={{ span: 4 }}>
            <figure>
              <img src={ChallengeHealth}></img>
              <figcaption>Health</figcaption>
            </figure>
          </Col>
        </Row>

        <div className="fit-in">
          <h2>How do you fit in?</h2>
          <p>
            Everyone is important in advancing a more sustainable San Diego,
            including you! Below are several examples of challenges that we can
            address, together. This is just the start of our collective effort.
            If you see a problem not listed here, go investigate it and share
            back to the D4SD discussion forum, or come to an event where you can
            motivate others to join you.
          </p>
        </div>

        <Row type="flex" justify="center">
          <Col xs={{ span: 20 }} md={{ span: 20 }}>
            <h2 className="mobility-header">
              <b>MOBILITY: </b>We help people move freely in San Diego?
            </h2>
          </Col>
          <Col xs={{ span: 20 }} md={{ span: 9 }}>
            <Card hoverable className="lastmile-card">
              <div className="card-bg">
                <h2 className="card-text">Last Mile</h2>
              </div>
            </Card>
          </Col>

          <Col xs={{ span: 20 }} md={{ span: 9 }}>
            <Card hoverable className="safety-card">
              <div className="card-bg">
                <h2 className="card-text">Safe Roadways</h2>
              </div>
            </Card>
          </Col>
          <Col xs={{ span: 20 }} md={{ span: 9 }}>
            <Card hoverable className="equitable-card">
              <div className="card-bg">
                <h2 className="card-text">Equitable Access</h2>
              </div>
            </Card>
          </Col>
          <Col xs={{ span: 20 }} md={{ span: 9 }}>
            <Card hoverable className="autonomous-card">
              <div className="card-bg">
                <h2 className="card-text">Autonomous Vehicles</h2>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ChallengeLayout;
