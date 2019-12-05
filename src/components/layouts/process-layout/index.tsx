import React from 'react';
import { Row, Col, Button, Card} from "@d4sd/components";
import Menubar from "../../menubar/index";
import { processContent } from "../../../assets/content.js";
import processSvg from "../../../assets/img/process_hcd.svg";
import "./style.less";
const ProcessLayout = (props: any) => {
  return (
    <div>
      <Menubar />
      <div className="ProcessLayout">
        <Row type="flex" justify="center" className="landing-div">
          <Col xs={{ span: 24 }} md={{ span: 24 }}>
            <h1>{processContent.title1}</h1>
          </Col>
          <Col xs={{ span: 2 }} md={{ span: 5 }}></Col>
            <Col xs={{ span: 20 }} md={{ span: 14 }}>
          <p dangerouslySetInnerHTML={{__html:processContent.content1}}/>
          </Col>
          <Col xs={{ span: 2 }} md={{ span: 5 }}></Col>
        </Row>
        <Row className="process-content">
          <h2>{processContent.title2}</h2>
          <p dangerouslySetInnerHTML={{__html:processContent.content2}}/>
          <img src={processSvg}/>
          {processContent.content3.map((content) => {
            return (
              <div>
                <h4 dangerouslySetInnerHTML={{__html:content.title}}></h4>
                <p dangerouslySetInnerHTML={{__html:content.txt}}/>
              </div>
            )
          })}
        </Row>
      </div>
    </div>
  )
}

export default ProcessLayout
