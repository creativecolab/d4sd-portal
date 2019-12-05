import React, { useState } from "react";
import { Row, Col, Steps, Button, Carousel } from "@d4sd/components";
import Menubar from "../../menubar/index";
import "./style.less";
import { homeContent } from "../../../assets/content.js";

const photoCarouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 0,
  autoplay: true
};

const logoCarouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  draggable: true,
  autoplay: true
};
const HomeLayout = (props: any) => {
  return (
    <div>
      <Menubar />

      <div className="HomeLayout">
        <div className="landing-div">
          <Row gutter={[16, 16]} type="flex" justify="center">
            <Col md={{ span: 13 }} xs={{ span: 20 }}>
              <h3>{homeContent.subtitle1}</h3>
              <h1>{homeContent.title1}</h1>
            </Col>
            <Col md={{ span: 14 }} xs={{ span: 20 }}>
              <p>{homeContent.content1}</p>
            </Col>
          </Row>
          <Row type="flex" justify="center" className="layout-btns">
            <Col md={{ span: 4 }} xs={{ span: 24 }}>
              <Button type="primary" size="small">
                JOIN MAILING LIST
              </Button>
            </Col>
            <Col md={{ span: 4 }} xs={{ span: 24 }}>
              <Button type="primary-outline" size="small">
                LEARN MORE
              </Button>
            </Col>
          </Row>
        </div>

        <Row type="flex" justify="center" className="mission-statement">
          <Col md={{ span: 14 }} xs={20}>
            <h2>{homeContent.title2}</h2>
            <p dangerouslySetInnerHTML={{ __html: homeContent.content2 }} />
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col>
            <Button type="primary" size="medium">
              LEARN MORE
            </Button>
          </Col>
        </Row>

        <Row className="involve-fig" type="flex" justify="center">
          {homeContent.roles.map(role => (
            <Col md={{ span: 4 }} xs={{ span: 9 }}>
              <figure>
                <img src={role.image}></img>
                <figcaption>{role.contents}</figcaption>
              </figure>
            </Col>
          ))}
        </Row>

        <div className="challenges">
          <Carousel autoplay className="challenges-carousel">
            {/* Mobility */}
            {homeContent.challenges.map(challenge => (
              <div className="challenge-item">
                <div className="mobility-content">
                  <h3 className="challenge-header">
                    {challenge.header}
                  </h3>
                  <h2>{challenge.title}</h2>
                  <p dangerouslySetInnerHTML={{ __html: challenge.txt }} />
                  <Button type="primary">Learn More</Button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="d4sd-in-action">
          <h2>{homeContent.title3}</h2>
          <p dangerouslySetInnerHTML={{ __html: homeContent.content3 }} />
          <Button>SEE WHAT HAPPENED IN 2017</Button>
          {/* Carousel of multiple images if we have 4 more images(?) */}
          <Carousel {...photoCarouselSettings} className="photo-carousel">
            {homeContent.actionImg.map(img => (
              <div>
              <img src={img} />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="meet-community">
          <h2>{homeContent.title4}</h2>
          <p dangerouslySetInnerHTML={{ __html: homeContent.content4 }} />
          <Button>GET INVOLVED</Button>
          <Carousel {...logoCarouselSettings} className="logo-carousel">
            {homeContent.logos.map(logo => (
              <div>
                <img src={logo}/>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
