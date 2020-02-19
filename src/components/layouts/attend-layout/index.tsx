import React, { useState, useRef } from 'react';
import {
  Button, Row, Col, Card
} from '@d4sd/components';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import '../../../styles/containers.less';
import './style.less';
import { attendContent } from '../../../assets/content';

const AttendLayout = (): JSX.Element => (
  <div>
    <Header
      title={attendContent.title}
      content={attendContent.content}
      image={attendContent.image}
    />
    <div className="AttendLayout container">
      <div className="event-info">
        <h1>{attendContent.title_1_1}</h1>
        <h2>{attendContent.title_1_2}</h2>
        <br />
        <h3>{attendContent.subtitle_1}</h3>
        <br />
        <p>{attendContent.content_1_1}</p>
        <p>{attendContent.content_1_2}</p>
        <br />
        <Button>REGISTER ON EVENTBRITE</Button>
      </div>
    </div>
    <div className="event-details">
      <div className="container">
        <h2>{attendContent.title_2}</h2>
        <div className="details">
          {attendContent.details.map((detail) => (
            <div className="detail">
              <h3>{detail.label}</h3>
              <div className="divider" />
              <p>{detail.detail}</p>
            </div>
          ))}
        </div>
        <Button>REGISTER ON EVENTBRITE</Button>

      </div>
    </div>
    <Footer />
  </div>
);

export default AttendLayout;
