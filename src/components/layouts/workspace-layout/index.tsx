import React, { useState } from 'react';
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
  const [loggedIn] = useState(true);
  const loggedInHeaderText = 'Welcome! Thank you for signing up to participate in this year’s Design for San Diego challenge! See below for key activities related to Discovery, Ideation, Prototyping, Pitching, and Activation.';
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
            <a href="#section-2">
              <Button>LEARN MORE</Button>
            </a>
          </div>
        </div>
        <div className="section" id='section-2'>
          <div className="container">
            <h2 className="title">Important Dates for the D4SD 2020 Challenge</h2>
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
                    <p className="desc">{details.body}</p>
                  </div>
                </div>
              )
            })}
            <p className="bottomContent">{workspaceContent.content3}</p>
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
