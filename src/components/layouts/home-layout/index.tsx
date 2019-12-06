import React, { useState, useRef } from "react";
import { Row, Col, Steps, Button, Carousel } from "@d4sd/components";
import Menubar from "../../menubar/index";
import "./style.less";
import "../../../styles/containers.less";
import { homeContent } from "../../../assets/content.js";
import { url } from "inspector";

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
  const ref = useRef<HTMLHeadingElement>(null);
  const scrollToRef = () => {
    if (ref && ref.current) {
      console.log("ref");
      console.log(ref)
      window.scrollTo({
        left: 0,
        top: ref.current.offsetHeight,
        behavior: 'smooth'
      });
    }
  }

  return (
    <div>
      <Menubar />
      <div className="landing">
        <div className="container">
          <h3>{homeContent.subtitle1}</h3>
          <h1>{homeContent.title1}</h1>
          <p>{homeContent.content1}</p>
          <br/><br/>
          <Row type="flex" justify="center">
            <Col xs={24} md={9} lg={5}>
            <a href="http://eepurl.com/c2kFon" target="_blank">
              <Button type="primary" size="medium">
                JOIN MAILING LIST
              </Button>
            </a>
            </Col>
            <Col xs={24} md={9} lg={5}>
              <Button type="primary-outline" size="medium" onClick={scrollToRef}>
                LEARN MORE
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      <div className="container">
        <div className="paragraph">
          <h2 ref={ref}>{homeContent.title2}</h2>
          <p dangerouslySetInnerHTML={{ __html: homeContent.content2_1 }} />
          <p dangerouslySetInnerHTML={{ __html: homeContent.content2_2 }} />
          <a href="/getinvolved">
            <Button type="primary" size="medium">
              GET INVOLVED
            </Button>
          </a>
        </div>
        <Row type="flex" justify="center">
          {homeContent.roles.map(role => (
            <Col md={{ span: 6 }} xs={{ span: 9 }}>
              <figure>
                <img src={role.image} style={{"width":"75%"}}/>
                <h5>{role.contents}</h5>
              </figure>
            </Col>
          ))}
        </Row>
      </div>

        <div className="paragraph challenges">
          <Carousel autoplay className="challenges-carousel">
            {homeContent.challenges.map(challenge => (
              <div className="challenge-item">
                <div
                  style={{
                    backgroundImage: `url(${challenge.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                    backgroundPosition: "center bottom",
                    height: "80vh"
                  }}
                >
                <div className="container">
                <div className="paragraph">
                  <h3>{challenge.header}</h3>
                  <h2>{challenge.title}</h2>
                  <p dangerouslySetInnerHTML={{ __html: challenge.txt }} />
                  <a href="/challenges">
                    <Button type="primary">Learn More</Button>
                  </a>
                  </div>
                </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="container">
        <div className="paragraph">
          <h2>{homeContent.title3}</h2>
          <p dangerouslySetInnerHTML={{ __html: homeContent.content3 }} />
          <a href="https://d4sd2017.ucsd.edu/" target="_blank">
            <Button>SEE WHAT HAPPENED IN 2017</Button>
          </a>
          </div>
          </div>
          <Row type="flex" justify="center">
            {homeContent.actionImg.map(img => (
              <Col md={6} xs={9}>
                <img src={img} style={{"width":"98%"}}/>
              </Col>
            ))}
          </Row>

        <div className="container">
        <div className="paragraph">
          <h2>{homeContent.title4}</h2>
          <p dangerouslySetInnerHTML={{ __html: homeContent.content4 }} />
          <a href="/getinvolved">
          <Button>GET INVOLVED</Button>
          </a>
          </div>
          </div>
          <Carousel {...logoCarouselSettings} className="logo-carousel">
            {homeContent.logos.map(logo => (
              <div>
                <img src={logo} style={{"width":"100%"}} />
              </div>
            ))}
          </Carousel>
    </div>
  );
};

export default HomeLayout;
