import React from 'react';
import { Row, Col, Button, Card} from "@d4sd/components";
import Menubar from "../../menubar/index";
import { feedbackContent } from "../../../assets/content.js";
import "./style.less";
const FeedbackLayout = (props: any) => {
  return (
    <div>
      <Menubar />
      <div className="FeedbackLayout">
        <Row type="flex" justify="center" className="landing-div">
        <Col xs={{ span: 2 }} md={{ span: 5 }}></Col>
          <Col xs={{ span: 20 }} md={{ span: 14 }}>
            <h1>{feedbackContent.title1}</h1>
          </Col>
            <Col xs={{ span: 2 }} md={{ span: 5 }}></Col>
          <Col xs={{ span: 2 }} md={{ span: 5 }}></Col>
            <Col xs={{ span: 20 }} md={{ span: 14 }}>
          <p dangerouslySetInnerHTML={{__html:feedbackContent.content1}}/>
          </Col>
          <Col xs={{ span: 2 }} md={{ span: 5 }}></Col>
        </Row>
        <Row className="stakeholder-content">
          <h2>{feedbackContent.title2}</h2>
          <p dangerouslySetInnerHTML={{__html:feedbackContent.content2}}/>
        </Row>
        <Button href='https://docs.google.com/forms/d/e/1FAIpQLSdEcREjU4sMGjv9ZfNNL_Ljl1T7VjSqlgDlIla_HsVMRfB0ww/viewform?usp=sf_link' target='_blank'>Sign up as a feedback provider</Button>
      </div>
    </div>
  )
}

export default FeedbackLayout;
