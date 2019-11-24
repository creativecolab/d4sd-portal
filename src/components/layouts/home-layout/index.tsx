import React, { useState } from "react";
import { Row, Col, Steps, Button } from "antd";
import Menubar from "../../menubar/index";
import "./style.less";

import InvolveInnovateSVG from "../../../assets/involve_innovate.svg";
import InvolvePartnerSVG from "../../../assets/involve_partner.svg";
import InvolveVolunteerSVG from "../../../assets/involve_volunteer.svg";
import InvolveSponsorSVG from "../../../assets/involve_sponsor.svg";

const HomeLayout = (props: any) => {
  return (
    <div>
      <Menubar />
      <div className="HomeLayout">
        <div className="landing-div">
          <p>DESIGN FOR SAN DIEGO'S 2020 CIVIC DESIGN CHALLENGE</p>
          <h2>How can we make San Diego a more sustainable city?</h2>
          <p>
            San Diego is an amazing place to live, work, and visit. But like
            many cities, San Diego faces a number of difficult challenges around
            mobility, climate, housing, and public health. Design for San Diego
            (D4SD) is an initiative to address complex challenges through design
            thinking and crowdsourcing.
          </p>
          <div className="button-row">
            <Button
              type="primary"
              href="http://eepurl.com/c2kFon"
              target="_blank"
            >
              JOIN MAILING LIST
            </Button>
            <div style={{ marginRight: "4px" }}></div>
            <Button type="primary">LEARN MORE</Button>
          </div>
        </div>

        <div className="mission-statement">
          <h2>Contribute to our mission</h2>
          <p>
            D4SD seeks to connect young, passionate designers to a network of
            industry professionals and structure a process for collectively
            addressing civic challenges related to the sustainability of our
            region. We are exploring new models for collective innovation where
            the community works together to discover problems, explore
            solutions, and build prototypes to test ideas.
          </p>
          <p>
            D4SD 2020 will host a series of design events including speakers,
            studios, and design-athons, starting in January. This will culminate
            into a summit in April where innovators can pitch their proposed
            solutions, and build alliances to make change happen.
          </p>
          <Button type="primary">LEARN MORE</Button>
          <div className="involve-svg">
            <figure>
              <img src={InvolveInnovateSVG}></img>
              <figcaption>Innovate</figcaption>
            </figure>
            <figure>
              <img src={InvolvePartnerSVG}></img>
              <figcaption>Partner</figcaption>
            </figure>
            <figure>
              <img src={InvolveVolunteerSVG}></img>
              <figcaption>Volunteer</figcaption>
            </figure>
            <figure>
              <img src={InvolveSponsorSVG}></img>
              <figcaption>Sponsor</figcaption>
            </figure>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default HomeLayout;
