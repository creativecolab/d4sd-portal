import React from 'react';
import { Row, Col, Button, Card} from "@d4sd/components";
import Menubar from "../../menubar/index";
import { stakeholderContent } from "../../../assets/content.js";
import "./style.less";
const StakeholderLayout = (props: any) => {
  return (
    <div>
      <Menubar />
      <div className="StakeholderLayout">
        <Row type="flex" justify="center" className="landing-div">
        <Col xs={{ span: 2 }} md={{ span: 5 }}></Col>
          <Col xs={{ span: 20 }} md={{ span: 14 }}>
            <h1>{stakeholderContent.title1}</h1>
          </Col>
            <Col xs={{ span: 2 }} md={{ span: 5 }}></Col>
          <Col xs={{ span: 2 }} md={{ span: 5 }}></Col>
            <Col xs={{ span: 20 }} md={{ span: 14 }}>
          <p dangerouslySetInnerHTML={{__html:stakeholderContent.content1}}/>
          </Col>
          <Col xs={{ span: 2 }} md={{ span: 5 }}></Col>
        </Row>
        <Row className="stakeholder-content">
          <h2>{stakeholderContent.title2}</h2>
          {stakeholderContent.content2.map((content) => {
            return (
              <div>
                <h4 dangerouslySetInnerHTML={{__html:content.title}}></h4>
                <p dangerouslySetInnerHTML={{__html:content.txt}}/>
              </div>
            )
          })}
          <h2>{stakeholderContent.title3}</h2>
          {stakeholderContent.content3.map((content) => {
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

export default StakeholderLayout
