import React from 'react';
import { Row, Col, Button } from '@d4sd/components';
import dlab from '../../assets/img/sponsor_designlab_white.png';
import dw from '../../assets/img/sponsor_dw_white.png';
import nsf from '../../assets/img/sponsor_nsf_white.png';
import ibm from '../../assets/img/sponsor_ibm_white.png';
import scale from '../../assets/img/sponsor_scale_white.png';
import yankelovich from '../../assets/img/sponsor_yankelovich_white.png';
import '../../styles/containers.less';
import './style.less';

const Footer = (): JSX.Element => (
  <div className="footer">
    <div className="container">
      <br />
      <h2 className='footer-sponsor-header'>Our Sponsors</h2>
      <Row type="flex" justify="center" gutter={[48, 24]} className='sponsor-row'>
        <Col md={8} sm={8} xs={12}>
          <a href="http://designlab.ucsd.edu/" target="_blank" rel="noopener noreferrer">
            <img
              src={dlab}
              alt="designlab"
              className="logo"
              id="lab-logo"
            />
          </a>
        </Col>
        <Col md={8} sm={8} xs={12}>
          <a href="https://www.nsf.gov/" target="_blank" rel="noopener noreferrer">
            <img
              src={nsf}
              className="logo"
              alt="nsf"
              id="nsf-logo"
            />
          </a>
        </Col>
        <Col md={8} sm={8} xs={12}>
          <a href="https://www.ibm.com/us-en/" target="_blank" rel="noopener noreferrer">
            <img
              src={ibm}
              alt="ibm"
              className="logo"
              id="IBM-logo"
            />
          </a>
        </Col>
        <Col md={8} sm={8} xs={12}>
          <a href="https://yankelovichcenter.ucsd.edu/" target="_blank" rel="noopener noreferrer">
            <img
              src={yankelovich}
              className="logo"
              alt="yankelovich"
              id="y-logo"
            />
          </a>
        </Col>
        <Col md={8} sm={8} xs={12}>
          <a href="https://www.downtownworks.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={dw}
              className="logo"
              alt="downtownworks"
              id="downtownworks-logo"
            />
          </a>
        </Col>
        <Col md={8} sm={8} xs={12}>
          <a href="https://www.scalesd.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={scale}
              alt="scalesd"
              className="logo"
              id="scalesd-logo"
            />
          </a>
        </Col>
      </Row>
      <br />
      <h6>
        Copyright © 2017-2020 D4SD. All Rights Reserved. Send feedback to
        <span>&nbsp;</span>
        <a href="mailto:team@d4sd.org">team@d4sd.org</a>
        .
      </h6>
      <br />
    </div>
  </div>
);

export default Footer;
