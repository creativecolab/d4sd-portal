import React, { useState, useRef } from 'react';
import {
  Row, Col, Card, Avatar, Button
} from '@d4sd/components';
import Footer from '../../Footer/index';
import Menubar from '../../menubar';
import '../../../styles/containers.less';
import './style.less';

import { attendContent, summitContent } from '../../../assets/content';

const AttendLayout = (): JSX.Element => {
  const ref = useRef<HTMLHeadingElement>(null);
  const scrollToRef = (): void => {
    if (ref && ref.current) {
      const position = ref.current.offsetTop - 90;
      // eslint-disable-next-line
      window.scrollTo({
        left: 0,
        top: position,
        behavior: 'smooth'
      });
    }
  };
  return (
    <div>
      <Menubar />
      <div className="summit">
        <div className="pics">
          <img className="pic" alt="summit-img-1" src={summitContent.image1} />
          <img className="pic" alt="summit-img-2" src={summitContent.image2} />
          <img className="pic" alt="summit-img-3" src={summitContent.image3} />
          <img className="pic" alt="summit-img-4" src={summitContent.image4} />
        </div>
        <div className="content">
          <img
            className="logo"
            alt="summit-img-logo"
            src={summitContent.logo}
          />
          <div className="line" />
          <h1 className="subtitle">{summitContent.subtitle1}</h1>
          <br />
          <h3>{summitContent.title1}</h3>
          <br />
          <h3>{summitContent.title2}</h3>
          <div className="buttons">
            <Button
              className="learn"
              size="default"
              type="primary"
              onClick={scrollToRef}
            >
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
      <div className="AttendLayout container">
        <div className="event-info">
          <h1 ref={ref}>{attendContent.title_1_1}</h1>
          <h2>{attendContent.title_1_2}</h2>
          <br />
          <h3>{attendContent.subtitle_1}</h3>
          <br />
          <p>{attendContent.content_1_1}</p>
          <p>{attendContent.content_1_2}</p>
          <br />
          <p>Details coming soon about the event and how to register.</p>
          <Button type="primary" disabled>REGISTER ON EVENTBRITE</Button>
        </div>
      </div>
      {/* <div className="event-details">
      <div className="container">
        <h2>{attendContent.title_2}</h2>
        <div className="details">
          {attendContent.details.map(detail => (
            <div className="detail">
              <h3>{detail.label}</h3>
              <div className="divider" />
              <p>{detail.detail}</p>
            </div>
          ))}
        </div>
        <Button>REGISTER ON EVENTBRITE</Button>
      </div>
    </div> */}
      <Footer />
    </div>
  );
};

export default AttendLayout;
