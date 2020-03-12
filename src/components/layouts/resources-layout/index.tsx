import React, { useState } from 'react';
import { Row, Col, Card, Tag } from '@d4sd/components';
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
            <div className="red">
              <h1 className="cardtitle">FEATURED RESOURCES</h1>
              <Row type="flex" justify="center" gutter={[32, 16]}>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <NavLink to="/resources/process">
                    <Card className="involve-card">
                      <h1 className="title">D4SD Process Guide</h1>
                      <h3 className="source">Design for San Diego</h3>
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
                  </div>
                </a>
              ))}
            </div>
          </div>
        </TabDiv>
        <TabDiv label="Community">
          <div className="container paragraph">
            <div className="blue">
              <h1 className="cardtitle">FEATURED RESOURCES</h1>
              <Row type="flex" justify="center" gutter={[32, 16]}>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <NavLink to="/resources/stakeholder">
                    <Card className="involve-card">
                      <h1 className="title">Stakeholder Relationships</h1>
                      <h3 className="source">Design for San Diego</h3>
                      <p>
                        Good civic design involves understanding the diverse
                        perspectives of many stakeholders, including people
                        directly and indirectly impacted by a problem or
                        opportunity. This guide can help D4SD participants
                        establish and cultivate community relationships.
                      </p>
                    </Card>
                  </NavLink>
                </Col>
                {resourcesContent.community.featured.map(content => (
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
              {resourcesContent.community.other.map(content => (
                <a href={content.link} target="_blank">
                  <div className="extra-community">
                    <h1>{content.title}</h1>
                    <h3>{content.source}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </TabDiv>
        <TabDiv label="Data">
          <div className="container paragraph">
            <div className="light">
              <h1 className="cardtitle">FEATURED RESOURCES</h1>
              <Row type="flex" justify="center" gutter={[32, 16]}>
                {resourcesContent.data.featured.map(content => (
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
          </div>
        </TabDiv>
        <TabDiv label="All">
          <div className="allcards">
            <div className="tags">
              <Tag className="tag" color="#FF9696">Process</Tag>
              <Tag className="tag" color="#566ED1">Community</Tag>
              <Tag className="tag" color="#B7DFE6">Data</Tag>
            </div>

            {resourcesContent.process.other.map(content => (
              <a href={content.link} target="_blank">
                <div className="extra">
                  <h1>{content.title}</h1>
                  <h3>{content.source}</h3>
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
          </div>
        </TabDiv>
      </Tabs>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default ResourcesLayout;
