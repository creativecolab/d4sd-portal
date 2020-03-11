import React, { useState } from 'react';
import { Row, Col, Card, Button } from '@d4sd/components';
import { NavLink } from 'react-router-dom';
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
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <NavLink to="/resources/process">
                  <Card className="involve-card">
                    <h1 className="title">D4SD Process Guide</h1>
                    <h3 className="source">Design 4 San Diego</h3>
                    <p>
                      Modeled after best practices in human-centered design
                      research, the D4SD process involves five key phases:
                      Discovery, Ideate, Prototype, Pitch, Activate. Read more
                      about how you and your team can get the most out of each
                      phase.
                    </p>
                  </Card>
                </NavLink>
              </Col>
              {resourcesContent.process.featured.map(content => (
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <a href={content.link} target="_blank">
                    <Card className="involve-card">
                      <h1 className="title">{content.title}</h1>
                      <h3 className="source">{content.source}</h3>
                      <p>{content.description}</p>
                    </Card>
                  </a>
                </Col>
              ))}
            </Row>
            <h1 className="othertitle">OTHER RESOURCES</h1>
            {resourcesContent.process.other.map(content => (
              <a href={content.link} target="_blank">
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
            <Row type="flex" justify="center" gutter={[32, 16]}>
              {resourcesContent.process.featured.map(content => (
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <Card className="involve-card">
                    <h1 className="title">{content.title}</h1>
                    <h3 className="source">{content.source}</h3>
                    <p>{content.description}</p>
                  </Card>
                </Col>
              ))}
            </Row>
            <h1 className="othertitle">OTHER RESOURCES</h1>
            {resourcesContent.community.other.map(content => (
              <a href={content.link} target="_blank">
                <div className="extra-community">
                  <h1>{content.title}</h1>
                  <h3>{content.source}</h3>
                </div>
              </a>
            ))}
          </div>
        </TabDiv>
        <TabDiv label="Data">
          <div className="container paragraph">
            <h1 className="cardtitle">FEATURED RESOURCES</h1>
            <Row type="flex" justify="center" gutter={[32, 16]}>
              {resourcesContent.process.featured.map(content => (
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <Card className="involve-card">
                    <h1 className="title">{content.title}</h1>
                    <h3 className="source">{content.source}</h3>
                    <p>{content.description}</p>
                  </Card>
                </Col>
              ))}
            </Row>
            <h1 className="othertitle">OTHER RESOURCES</h1>
            {resourcesContent.data.other.map(content => (
              <a href={content.link} target="_blank">
                <div className="extra-data">
                  <h1>{content.title}</h1>
                  <h3>{content.source}</h3>
                </div>
              </a>
            ))}
          </div>
        </TabDiv>
        <TabDiv label="All">
          {resourcesContent.process.other.map(content => (
            <a href={content.link} target="_blank">
              <div className="extra">
                <h1>{content.title}</h1>
                <h3>{content.source}</h3>
                {/* <p>{content.description}</p> */}
              </div>
            </a>
          ))}
          {resourcesContent.community.other.map(content => (
            <a href={content.link} target="_blank">
              <div className="extra-community">
                <h1>{content.title}</h1>
                <h3>{content.source}</h3>
              </div>
            </a>
          ))}
          {resourcesContent.data.other.map(content => (
            <a href={content.link} target="_blank">
              <div className="extra-data">
                <h1>{content.title}</h1>
                <h3>{content.source}</h3>
              </div>
            </a>
          ))}
        </TabDiv>
      </Tabs>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default ResourcesLayout;
