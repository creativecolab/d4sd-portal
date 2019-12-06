import React, { useState } from "react";
import { Row, Col, Steps, Button, Carousel, Card, Avatar, Icon } from "@d4sd/components";
import Header from "../../Header/index";
import "../../../styles/containers.less";
import "./style.less";

//  Involved Icons
import { involveContent } from "../../../assets/content.js";
const { Meta } = Card;
const InvolvedLayout = (props: any) => {
  return (
    <div>
      <Header title={involveContent.title1} content={involveContent.content1} image={involveContent.image}/>
      <div className="container paragraph">
        <Row gutter={[16,16]} type="flex" justify="start">
          {involveContent.roles.map((content, i)=> {
            return (
              <Col xs={24} lg={12}>
                <Card actions={[<a href={content.link} target={content.new}>
                  <Button type="primary">{content.action}</Button></a>]}>
                  <Meta
                    avatar={<Avatar src={content.image} className="avatar" />}
                    title={content.title}
                    description={content.txt}
                  />
                </Card>
              </Col>
            )
          })}
        </Row>
      </div>
    </div>
  );
};

export default InvolvedLayout;
