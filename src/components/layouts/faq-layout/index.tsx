import React, { useState } from "react";
import { Row, Col, Card, Collapse } from "@d4sd/components";
import Menubar from "../../menubar/index";
import "./style.less";
import { faqContent } from "../../../assets/content.js";
const { Meta } = Card;
const { Panel } = Collapse;

const FaqLayout = (props: any) => {
  return (
    <div>
      <Menubar />
      <div className="FaqLayout">
        <Row className="landing-div" type="flex" justify="center">
          <Col span="20">
            <h2>{faqContent.title}</h2>
          </Col>
          <Col xs={{ span: 14 }} md={{ span: 14 }}>
            <p dangerouslySetInnerHTML={{__html: faqContent.content }}>
            </p>
          </Col>
        </Row>

        <div className="faq-cards">
          <Collapse accordion>
            {faqContent.faqs.map((faqContent: any) => (
              <Panel
                key={faqContent.question}
                header={faqContent.question}
              >
              <p dangerouslySetInnerHTML={{__html: faqContent.answer }}></p>
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default FaqLayout;
