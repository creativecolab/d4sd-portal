import React, { useRef } from 'react';
import { Button } from '@d4sd/components';
import Footer from '../../Footer/index';
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
          <h1 ref={ref} className="summitDetails">{attendContent.title_1_1}</h1>
          <h3>{summitContent.title3}</h3>
          <br />
          <h3>{summitContent.addressLine2}</h3>
          <br />
          <p>{attendContent.content_1_1}</p>
          {/* eslint-disable */}
          <p dangerouslySetInnerHTML={{ __html: attendContent.content_1_2 }} />
          <p dangerouslySetInnerHTML={{ __html: attendContent.content_1_3 }} />
          {/* eslint-enable */}
          <br />
          <Button type="primary" disabled>REGISTER ON EVENTBRITE</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AttendLayout;
