import React, { useState } from "react";
import { Row, Col, Card, Collapse } from "@d4sd/components";
import Header from "../../Header/index";
import "../../../styles/containers.less";
import "./style.less";
import { faqContent } from "../../../assets/content.js";
const { Meta } = Card;
const { Panel } = Collapse;

const FaqLayout = (props: any) => {
  return (
    <div>
      <Header title={faqContent.title} content={faqContent.content} image={faqContent.image}/>
      <div className="FaqLayout">


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
