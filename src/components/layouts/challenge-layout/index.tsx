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
          <h2>Challenge Briefs</h2>
          <p>
            What does it mean to be a Sustainable City? For us, a sustainable
            San Diego is one where all parts of our city connect and support
            each other and the environment. Working together, we can design ways
            to improve mobility, health, housing, and the climate for our
            region.
          </p>
        </div>

        <div className="involve-svg">
          <figure>
            <img src={ChallengeMobility}></img>
            <figcaption>Mobility</figcaption>
          </figure>
          <figure>
            <img src={ChallengeClimate}></img>
            <figcaption>Environment</figcaption>
          </figure>
          <figure>
            <img src={ChallengeHousing}></img>
            <figcaption>Housing</figcaption>
          </figure>
          <figure>
            <img src={ChallengeHealth}></img>
            <figcaption>Health</figcaption>
          </figure>
        </div>

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
        <div className="mobility">
          <h2>
            <b>MOBILITY: </b>We help people move freely in San Diego?
          </h2>

          <div className="inner-flex">
            <Card hoverable className="mobility-card">
              <h2 className="card-text">Last Mile</h2>
              <div className="black-overlay">
                <img
                  src={require("../../../assets/img/mobility_lastmile.jpg")}
                ></img>
              </div>
            </Card>

            <Card hoverable className="mobility-card"></Card>
            <Card hoverable className="mobility-card"></Card>
            <Card hoverable className="mobility-card"></Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeLayout;
