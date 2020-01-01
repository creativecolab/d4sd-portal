import React from "react";
import { Row, Col, Card, Button } from "@d4sd/components";
import Header from "../../Header/index";
import Footer from "../../Footer/index";
import "../../../styles/containers.less";
import "./style.less";
import { resourcesContent } from "../../../assets/content.js";
const { Meta } = Card;

const ResourcesLayout = (props: any) => {
  return (
    <div>
      <Header title={resourcesContent.title1} content={resourcesContent.content1} image={resourcesContent.image}/>
      <div className="container paragraph">
        <Row type="flex" justify="center" gutter={[16, 16]}>
          {resourcesContent.resource.map((content, i)=> {
            return (
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <Card
                  className="involve-card"
                  actions={[<a href={content.link}><Button type="primary">{content.action}</Button></a>]}
                >
                  <Meta
                    title={content.title}
                    description={content.content}
                  />
                </Card>
              </Col>
            )
          })}
        </Row>
      </div>
      <br/><br/>
      <Footer/>
    </div>
  );
};

export default ResourcesLayout;