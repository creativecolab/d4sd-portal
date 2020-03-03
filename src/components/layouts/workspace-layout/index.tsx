import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@d4sd/components';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import '../../../styles/containers.less';
import './style.less';
import { workspaceContent } from '../../../assets/content';

const WorkspaceLayout = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const history = useHistory();

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
  const loggedInHeaderText = 'D4SD is a human-centered design challenge focused on bringing together our community to discover and articulate civic issues, to generate ideas and create prototypes, and to build alliances with key civic, business and design leaders. Everyone can participate.';
  return (
    <div className="SubmitPage">
      <Header
        title={workspaceContent.title1}
        content={workspaceContent.content1}
        image={workspaceContent.image}
      />
      <div className="section" id="section-1">
        <div className="container">
          <h2 className="title">{workspaceContent.title2}</h2>
          {/* eslint-disable-next-line */}
          <p dangerouslySetInnerHTML={{ __html: workspaceContent.content2 }} />
        </div>
      </div>
      <div className="section" id="section-2" ref={ref}>
        <div className="container">

          {workspaceContent.importantDates.map((details) => (
            <div className="date-box" key={`${details.key}_box`}>
              <div className="date-info">
                {
                  details.override_date ? <div className="date-month temp" key={`${details.key}_month`}>{details.override_date}</div>
                    : [<div className="date-month" key={`${details.key}_month`}>{details.date.toDateString().substring(4, 7).toUpperCase()}</div>,
                      <div className="date-num" key={`${details.key}_num`}>{details.date.getDate()}</div>]
                }
              </div>
              <div className="date-desc">
                <h2 className="desc-title">{details.title}</h2>
                {/* eslint-disable-next-line */}
                <p className="desc" dangerouslySetInnerHTML={{ __html: details.body }} />
                {details.subbody ? [
                  <ul key={details.subbody.key}>
                    <li>
                      <p className="desc">
                        <b>
                          {details.date.toDateString().substring(4, 7).toUpperCase()}
                          {' '}
                          {details.date.getDate()}
                          {' '}
                          {details.subbody.time}
                        </b>
                        {' '}
                        {details.subbody.content}
                      </p>
                    </li>
                  </ul>
                ] : []}
                <Button className={`action-button ${details.action_button.className}`} onClick={(): void => history.push(details.action_button.url)} disabled={details.action_button.disabled}>{details.action_button.label}</Button>
              </div>
            </div>
          ))}
          {/* eslint-disable-next-line */}
          <p className="bottomContent" dangerouslySetInnerHTML={{ __html: workspaceContent.content3 }} />
          <a href="http://eepurl.com/c2kFon" target="_blank" rel="noopener noreferrer">
            <Button>JOIN THE NEWSLETTER!</Button>
          </a>
        </div>
      </div>
      <div className="section" id="section-3">
        <div className="container" />
      </div>
      <Footer />
    </div>
  );
};

export default WorkspaceLayout;
