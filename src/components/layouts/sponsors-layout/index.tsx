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
    <div>
      <div className="container sponsors-wrapper">
        <div className="section sponsors-section">
          <h2>{sponsorsContent.title3}</h2>
          <br />
          <Row type="flex" justify="center" gutter={[48, 24]}>
            <Col md={4} xs={18}>
              <a href="http://designlab.ucsd.edu/" target="_blank" rel="noopener noreferrer">
                <img
                  src={sponsorsContent.img1}
                  alt="designlab"
                  className="logo"
                  id="lab-logo"
                />
              </a>
            </Col>
            <Col md={3} xs={18}>
              <a href="https://www.nsf.gov/" target="_blank" rel="noopener noreferrer">
                <img
                  src={sponsorsContent.img2}
                  className="logo"
                  alt="nsf"
                  id="nsf-logo"
                />
              </a>
            </Col>
            <Col md={3} xs={18}>
              <a href="https://www.ibm.com/us-en/" target="_blank" rel="noopener noreferrer">
                <img
                  src={sponsorsContent.img3}
                  alt="ibm"
                  className="logo"
                  id="IBM-logo"
                />
              </a>
            </Col>
            <Col md={4} xs={18}>
              <a href="https://yankelovichcenter.ucsd.edu/" target="_blank" rel="noopener noreferrer">
                <img
                  src={sponsorsContent.img4}
                  className="logo"
                  alt="yankelovich"
                  id="y-logo"
                />
              </a>
            </Col>
            <Col md={5} xs={18}>
              <a href="https://www.downtownworks.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src={sponsorsContent.img5}
                  className="logo"
                  alt="downtownworks"
                  id="downtownworks-logo"
                />
              </a>
            </Col>
            <Col md={4} xs={18}>
              <a href="https://www.scalesd.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src={sponsorsContent.img6}
                  alt="scalesd"
                  className="logo"
                  id="scalesd-logo"
                />
              </a>
            </Col>
          </Row>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
    <div className="sponsor-benefits-wrapper">
      <div className="container section">
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
