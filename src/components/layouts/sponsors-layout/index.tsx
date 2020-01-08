import React from 'react';
import {
  Row, Col, Card, Avatar
} from '@d4sd/components';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import '../../../styles/containers.less';
import { sponsorsContent } from '../../../assets/content';
import AboutDiagram from '../../../assets/img/about_diagram.png';

const { Meta } = Card;
const SponsorsLayout = (): JSX.Element => (
  <div>
    <Header
      title={sponsorsContent.title1}
      content={sponsorsContent.content1}
      image={sponsorsContent.image}
    />
    <div className="container">
      <div className="section">
        <h2>{sponsorsContent.title2}</h2>
        <h4 style={{ textAlign: 'left' }}>{sponsorsContent.subtitle1}</h4>
        {/* eslint-disable-next-line */}
        <p dangerouslySetInnerHTML={{ __html: sponsorsContent.content2_1 }} />
        <h4 style={{ textAlign: 'left' }}>{sponsorsContent.subtitle2}</h4>
        {/* eslint-disable-next-line */}
        <p dangerouslySetInnerHTML={{ __html: sponsorsContent.content2_2 }} />
      </div>
      <div className="section">
        <h2>{sponsorsContent.title3}</h2>
        <br/>
        <Row type="flex" justify="space-between">
          <Col md={7} xs={{ span: 9 }}>
            <img src={sponsorsContent.img1} style={{"width":"100%"}} alt="designlab" />
          </Col>
          <Col md={7} xs={{ span: 9 }}>
            <img src={sponsorsContent.img2} style={{"width":"100%"}} alt="yankelovich" />
          </Col>
          <Col md={7} xs={{ span: 9 }}>
            <img src={sponsorsContent.img3} style={{"width":"100%"}} alt="ibm" />
          </Col>
        </Row>
      </div>
    </div>

    <br />
    <br />
    <Footer />
  </div>
);

export default SponsorsLayout;
