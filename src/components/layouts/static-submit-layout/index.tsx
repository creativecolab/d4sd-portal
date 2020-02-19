import React, { useRef } from "react";
import { Row, Col, Button, Carousel } from "@d4sd/components";
import Menubar from "../../menubar";
import { submitStaticContent } from "../../../assets/content";
import staticSubmitImg from "../../../assets/img/static-submit-header.png";
import "./style.less";
import Footer from "../../Footer";

const SubmitStaticLayout = (): any => {
  return (
    <div>
      <Menubar />
      <div className="static-submit">
        <Row type="flex" justify="center">
          <Col sm={16} xs={22}>
            <h1>{submitStaticContent.title1}</h1>
            <p>{submitStaticContent.content1}</p>
          </Col>
        </Row>
      </div>
      <div className="learn-more">
        <Row type="flex" justify="center">
          <Col sm={16} xs={22}>
            <h2>{submitStaticContent.subtitle1}</h2>
            <p>{submitStaticContent.content2}</p>
            <Button type="primary" size="medium">
              LEARN MORE
            </Button>
            <p className="involve">{submitStaticContent.content3}</p>
          </Col>
        </Row>
      </div>
      <div className="timeline">
        <Row type="flex" justify="center">
          <Col sm={16} xs={22}>
            <h2>{submitStaticContent.timeline1}</h2>
            <p>{submitStaticContent.timelinetext1}</p>

            <h4>{submitStaticContent.timehead1}</h4>
            <p>{submitStaticContent.timetext1}</p>

            <h4>{submitStaticContent.timehead2}</h4>
            <p>{submitStaticContent.timetext2}</p>

            <h4>{submitStaticContent.timehead3}</h4>
            <p>{submitStaticContent.timetext3}</p>

            <h4>{submitStaticContent.timehead4}</h4>
            <p>{submitStaticContent.timetext4}</p>

            <p className="footTxt">{submitStaticContent.timetext5}</p>
            <Button type="primary" size="large">JOIN THE NEWSLETTER!</Button>
          </Col>
        </Row>
      </div>
      <div className="learn-more">
        <Row type="flex" justify="center">
          <Col sm={16} xs={22}>
            <h2>{submitStaticContent.challenge1}</h2>
            <p>{submitStaticContent.challenge2}</p>
            <h3>{submitStaticContent.faq1}</h3>
            <h3>{submitStaticContent.faq2}</h3>
            <h3>{submitStaticContent.faq3}</h3>
            <p className="involve this">{submitStaticContent.details1}<a href="/faq">FAQs Page.</a></p>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default SubmitStaticLayout;
