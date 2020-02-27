import React from 'react';
import {
  Row, Col, Card, Avatar, Timeline, Collapse
} from '@d4sd/components';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import '../../../styles/containers.less';
import './style.less';
import { aboutContent, workspaceContent } from '../../../assets/content';
import AboutDiagram from '../../../assets/img/about_diagram.png';

const { Panel } = Collapse;
const { Meta } = Card;
const AboutLayout = (): JSX.Element => (
  <div>
    <Header
      title={aboutContent.title1}
      content={aboutContent.content1}
      image={aboutContent.image}
    />
    <div className="container">
      <div className="paragraph">
        <h2>{aboutContent.title2}</h2>
        {/* eslint-disable-next-line */}
        <p dangerouslySetInnerHTML={{ __html: aboutContent.content2 }} />
      </div>
      <img
        src={AboutDiagram}
        style={{ width: '100%' }}
        alt="about-diagram"
      />
    </div>
    <br />
    <br />
    <br />
    <br />
    <div style={{ backgroundColor: '#F0F8FF' }}>
      <div className="container">
        <div className="paragraph">
          <h2>{aboutContent.title3}</h2>
        </div>
        <Row
          type="flex"
          gutter={[16, 16]}
          justify="center"
        >
          {aboutContent.content3.map((content) => (
            <Col
              xs={{ span: 20 }}
              lg={{ span: 11 }}
            >
              <Meta
                avatar={(
                  <Avatar
                    src={content.img}
                    className="aboutavatar"
                  />
                )}
                description={content.txt}
              />
            </Col>
          ))}
        </Row>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  
    <Footer />
  </div>
);

export default AboutLayout;
