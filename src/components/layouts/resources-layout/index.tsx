import React, { useState } from 'react';
import { Row, Col, Card, Button } from '@d4sd/components';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import Tabs from '../../../components/tabs/tabs.jsx';
import '../../../styles/containers.less';
import './style.less';
import { resourcesContent } from '../../../assets/content';

const { Meta } = Card;

// TODO: Add breadcrumb / Learn more linking to navbar highlight / stakeholder highlight
// Remove buttons / opening on a new tab /

interface ITabDiv {
  label: string;
  children: any;
}

function ResourcesLayout() {
  const [key, setKey] = useState('tab');

  const TabDiv = (props: ITabDiv) => <>{props.children}</>;
  return (
    <div>
      <Header
        title={resourcesContent.title1}
        content={resourcesContent.content1}
        image={resourcesContent.image}
      />
      <Tabs>
        <TabDiv label="Process">
          <div className="container paragraph">
            <h1 className="cardtitle">FEATURED RESOURCES</h1>
            <Row type="flex" justify="center" gutter={[32, 16]}>
              {resourcesContent.process.featured.map(content => (
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <Card
                    className="involve-card"
                    cover={
                      <img
                        className="cardphoto"
                        alt="photo"
                        src={content.photo}
                      />
                    }
                  >
                    <h1 className="title">{content.title}</h1>
                    <h3 className="source">{content.source}</h3>
                    {/* <p>{content.description}</p> */}
                  </Card>
                </Col>
              ))}
            </Row>
            <h1 className="othertitle">OTHER RESOURCES</h1>
            {resourcesContent.process.other.map(content => (
              <a href={content.link}>
                <div className="extra">
                  <h1>{content.title}</h1>
                  <h3>{content.source}</h3>
                  {/* <p>{content.description}</p> */}
                </div>
              </a>
            ))}
          </div>
        </TabDiv>
        <TabDiv label="Community">
          <div className="container paragraph">
            <h1 className="cardtitle">FEATURED RESOURCES</h1>
            <Row type="flex" justify="center" gutter={[16, 16]}>
              {resourcesContent.process.featured.map(content => (
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <Card
                    className="involve-card"
                    cover={
                      <img
                        className="cardphoto"
                        alt="photo"
                        src={content.photo}
                      />
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
            <h1 className="othertitle">OTHER RESOURCES</h1>

            <div className="extra">
              <h1>Asking the right question and solving the right problem</h1>
              <h3>UX Collective</h3>
              <p>
                It is important that you ask the right questions and solve the
                right problem. Read this case study about McDonald's trying to
                increase their sales of Milkshakes and how they put research
                into solving the wrong problem.
              </p>
            </div>
            <div className="extra">
              <h1>Tips for Conducting Interviews</h1>
              <h3>MJV Technology & Innovation</h3>
              <p>
                Every day, we meet people and process our interactions--making
                inferences and developing beliefs about the world around us. In
                this lesson, Maber introduces us to the idea of a ladder of
                inference and a process for rethinking the way we interact.
              </p>
            </div>
          </div>
        </TabDiv>
        <TabDiv label="Data">
          Nothing to see here, this tab is <em>extinct</em>!
        </TabDiv>
        <TabDiv label="All">
          Nothing to see here, this tab is <em>extinct</em>!
        </TabDiv>
      </Tabs>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default ResourcesLayout;
