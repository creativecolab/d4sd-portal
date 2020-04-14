import React, { useState, useRef } from 'react';
import { Button } from '@d4sd/components';
import ReactGoogleSlides from 'react-google-slides';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import '../../../styles/containers.less';
import './style.less';
import { joinDesignJam } from '../../../assets/content';

const SubmitLayout = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line
  const scrollToRef = (): void => {
    if (ref && ref.current) {
      const position = ref.current.offsetTop - 90;
      // eslint-disable-next-line
      console.log(ref.current, position);
      window.scrollTo({
        left: 0,
        top: position,
        behavior: 'smooth'
      });
    }
  };

  // eslint-disable-next-line
  const [loggedIn] = useState(true);
  // eslint-disable-next-line
  const loggedInHeaderText =
    'D4SD is a human-centered design challenge focused on bringing together our community to discover and articulate civic issues, to generate ideas and create prototypes, and to build alliances with key civic, business and design leaders. Everyone can participate.';
  return (
    <div className="SubmitPage">
      <Header
        title={joinDesignJam.title1}
        content={joinDesignJam.content1}
        image={joinDesignJam.image}
      />
      <div className="section" id="section-1">
        <div className="container">
          <h2 className="title">{joinDesignJam.title2}</h2>
          {/* eslint-disable-next-line */}
          <p dangerouslySetInnerHTML={{ __html: joinDesignJam.content2 }} />
        </div>
      </div>
      <div className="section" id="section-2" ref={ref}>
        <div className="container">
          <h3>Design Modules: </h3>
          <p className="module-para">{joinDesignJam.content5}</p>
          <ul>
            {joinDesignJam.importantDates.map((details) => (
              <li>
                <p>
                  <b>
                    {details.date
                      .toDateString()
                      .substring(4, 7)
                      .toUpperCase()}
                    {' '}
                    {details.date.getDate()}
                  </b>
                  :
                  {' '}
                  {details.title}
                  {' '}
                  &ndash;
                  {' '}
                  {details.body}
                </p>
              </li>
            ))}
          </ul>
          <br />
          <a
            href="https://d4sd-design-jams.eventbrite.com"
            target="_blank"
            rel="noopener noreferrer"
            id="registerBtn"
          >
            <Button>REGISTER NOW</Button>
          </a>
          <p
            className="bottomContent"
            // eslint-disable-next-line
            dangerouslySetInnerHTML={{ __html: joinDesignJam.content3 }}
          />
        </div>
      </div>
      <div className="section" id="section-4">
        <div className="container">
          <h2 className="title">{joinDesignJam.title4}</h2>
          {/* eslint-disable-next-line */}
          <p dangerouslySetInnerHTML={{ __html: joinDesignJam.content4 }} />
          <a href="/attend">
            <Button>LEARN ABOUT THE D4SD SUMMIT</Button>
          </a>
        </div>
        <div className="gslides">
          <ReactGoogleSlides
            width={600}
            height={400}
            slidesLink="https://docs.google.com/presentation/d/1Mc1Zmte9ohaDCkruWZY0TSXdzeVh81RarCY8LSneIa8"
            slideDuration={5}
            showControls
            loop
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubmitLayout;
