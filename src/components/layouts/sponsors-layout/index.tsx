import React from 'react';
import { Row, Col, Button } from '@d4sd/components';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import '../../../styles/containers.less';
import './style.less';
import { sponsorsContent } from '../../../assets/content';

const SponsorsLayout = (): JSX.Element => (
  <div className="SponsorsLayout">
    <Header
      title={sponsorsContent.title1}
      content={sponsorsContent.content1}
      image={sponsorsContent.image}
    />
    <div style={{ backgroundColor: '#F0F8FF' }}>
      <div className="container">
        <div className="section sponsors-section">
          <h2>{sponsorsContent.title3}</h2>
          <br />
          <Row type="flex" justify="center" gutter={[48, 0]}>
            <Col md={6} xs={18}>
              <img
                src={sponsorsContent.img1}
                alt="designlab"
                className="logo"
              />
            </Col>
            <Col md={6} xs={18}>
              <img
                src={sponsorsContent.img2}
                alt="yankelovich"
                className="logo"
              />
            </Col>
            <Col md={6} xs={18}>
              <img
                src={sponsorsContent.img3}
                alt="ibm"
                className="logo"
              />
            </Col>
            <Col md={6} xs={18}>
              <img
                src={sponsorsContent.img4}
                className="logo"
                alt="nsf"
              />
            </Col>
          </Row>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
    <div className="container">
      <div className="section">
        <h2>{sponsorsContent.title2}</h2>
        {/* eslint-disable-next-line */}
        <p className="sponsor-benefits" dangerouslySetInnerHTML={{ __html: sponsorsContent.content_2 }} />
        <br />
        <br />
        <a
          href="mailto:team@d4sd.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="spon" type="primary" size="medium">
            REACH OUT TO SPONSOR US
          </Button>
        </a>
      </div>
    </div>
    <Footer />
  </div>
);

export default SponsorsLayout;
