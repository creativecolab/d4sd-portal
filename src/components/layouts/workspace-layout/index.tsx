import React, { useState, useRef } from 'react';
import {
  Row,
  Col,
  Button,
  Timeline,
  WorkspaceActionCard
} from '@d4sd/components';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import '../../../styles/containers.less';
import './style.less';
import { workspaceContent } from '../../../assets/content';

const WorkspaceLayout = (props: any) => {
  const ref = useRef<HTMLDivElement>(null);
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

  const [loggedIn] = useState(true);
  const loggedInHeaderText = 'D4SD is a human-centered design challenge focused on bringing together our community to discover and articulate civic issues, to generate ideas and create prototypes, and to build alliances with key civic, business and design leaders. Everyone can participate.';
  return (
    <div className="SubmitPage">
      <Header
        title={workspaceContent.title1}
        content={workspaceContent.content1}
        image={workspaceContent.image}
      />
        <div className="section" id='section-1'>
          <div className="container">
            <h2 className="title">{workspaceContent.title2}</h2>
            <p dangerouslySetInnerHTML={{ __html: workspaceContent.content2 }} />

          </div>
        </div>
        <div className="section" id='section-2' ref={ref}>
          <div className="container">

            {workspaceContent.importantDates.map((details ) => {
              return (
                <div className="date-box">
                  <div className="date-info">
                    {
                      details.override_date ? <div className="date-month temp">{details.override_date}</div> :
                      [<div className="date-month">{details.date.toDateString().substring(4,7).toUpperCase()}</div>,
                      <div className="date-num">{details.date.getDate()}</div>]
                    }

                  </div>
                  <div className="date-desc">
                    <h2 className="desc-title">{details.title}</h2>
                    <p className="desc" dangerouslySetInnerHTML={{ __html:details.body}}></p>
                  </div>
                </div>
              )
            })}
            <p className="bottomContent" dangerouslySetInnerHTML={{__html: workspaceContent.content3}}></p>
            <a href="http://eepurl.com/c2kFon" target="_blank">
              <Button>JOIN MAILING LIST</Button>
            </a>
          </div>
        </div>
        <div className="section" id='section-3'>
          <div className="container">

          </div>
        </div>
      <Footer />
    </div>
  );
};

export default WorkspaceLayout;
