import React, { useState } from 'react';
import { Row, Col, Card, Button, Menu } from '@d4sd/components';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import '../../../styles/containers.less';
import './style.less';
import { resourcesContent } from '../../../assets/content';

const { Meta } = Card;

function ResourcesLayout() {
  const [key, setKey] = useState('tab');
  return (
    <div>
      <Header
        title={resourcesContent.title1}
        content={resourcesContent.content1}
        image={resourcesContent.image}
      />
      <div className="tabcontainer">
        <div className="resourcetabs">
          <h1 className="selected">Process</h1>
          <h1>Community</h1>
          <h1>Data sources</h1>
          <h1>All</h1>
        </div>
      </div>
      <div className="container paragraph">
        <h1 className="cardtitle">Process-Related Resources</h1>
        <Row type="flex" justify="center" gutter={[16, 16]}>
          {resourcesContent.process.map(content => (
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Card
                className="involve-card"
                cover={
                  <img className="cardphoto" alt="photo" src={content.photo} />
                }
              >
                <h1 className="title">{content.title}</h1>
                <h3 className="source">{content.source}</h3>
                <p>{content.description}</p>
                <div className="buttoncontainer">
                  <a href={content.link}>
                    <Button className="button" type="primary">
                      {content.action}
                    </Button>
                  </a>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="extra">
          <h1>Asking the right question and solving the right problem</h1>
          <h3>UX Collective</h3>
          <p>
            It is important that you ask the right questions and solve the right
            problem. Read this case study about McDonald's trying to increase
            their sales of Milkshakes and how they put research into solving the
            wrong problem.
          </p>
        </div>
        <div className="extra">
          <h1>Tips for Conducting Interviews</h1>
          <h3>MJV Technology & Innovation</h3>
          <p>
            Every day, we meet people and process our interactions--making
            inferences and developing beliefs about the world around us. In this
            lesson, Maber introduces us to the idea of a ladder of inference and
            a process for rethinking the way we interact.
          </p>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default ResourcesLayout;
