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
          <br />
          {/* eslint-disable-next-line */}
          <h3 dangerouslySetInnerHTML={{ __html: summitContent.title2 }} />
          <div className="buttons">
            <a
              href="http://d4sd-summit.eventbrite.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="learn" size="default" type="primary">
                REGISTER NOW
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="AttendLayout container">
        <div className="event-info">
          <h1 ref={ref} className="summitDetails">
            {attendContent.title_1_1}
          </h1>
          <h3>{summitContent.title3}</h3>
          <h3>{summitContent.addressLine2}</h3>
          <br />
          <p>{attendContent.content_1_1}</p>
          {/* eslint-disable */}
          <p dangerouslySetInnerHTML={{ __html: attendContent.content_1_3 }} />
          {/* eslint-enable */}
          <br />
          <a
            href="http://d4sd-summit.eventbrite.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="primary">REGISTER ON EVENTBRITE</Button>
          </a>
        </div>
        <br />
        <div className="before-summit">
          <h3>{attendContent.title_2}</h3>
          <br />
          <p>
            {attendContent.content_2_1}
            {/* eslint-disable-next-line */}
            <br />
          </p>
          <br />
          <p>{attendContent.content_2_2}</p>
          <br />
          <Button onClick={(): void => history.push('/submit/submit-proposal')}>
            LEARN HOW TO SUBMIT
          </Button>
          <br />
          <br />
          {/* eslint-disable-next-line */}
          <p dangerouslySetInnerHTML={{ __html: attendContent.content_2_3 }} />
        </div>
        <div className="before-summit">
          <h3>{attendContent.title_3}</h3>
          <br />
          {/* eslint-disable-next-line */}
          <p dangerouslySetInnerHTML={{ __html: attendContent.content_3_1 }} />
          <br />
          {/* eslint-disable-next-line */}
          <p dangerouslySetInnerHTML={{ __html: attendContent.content_3_2 }} />
          <br />
          {/* eslint-disable-next-line */}
          <p dangerouslySetInnerHTML={{ __html: attendContent.content_3_3 }} />
          <br />
          {/* eslint-disable-next-line */}
          <p dangerouslySetInnerHTML={{ __html: attendContent.content_3_4 }} />
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AttendLayout;
