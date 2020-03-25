import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@d4sd/components';
import Footer from '../../Footer/index';
import '../../../styles/containers.less';
import './style.less';

import { attendContent, summitContent } from '../../../assets/content';

const AttendLayout = (): JSX.Element => {
  const ref = useRef<HTMLHeadingElement>(null);
  const history = useHistory();
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
          <h3>{summitContent.title3}</h3>
          <br />
          <h3>{summitContent.addressLine2}</h3>
          <br />
          <p>{attendContent.content_1_1}</p>
          <p>
            {attendContent.content_1_2}
            <a href="/submit">submit your proposal</a>
            {attendContent.content_1_3}
            {/* eslint-disable-next-line */}
            {attendContent.content_1_4}
          </p>
          <br />
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
