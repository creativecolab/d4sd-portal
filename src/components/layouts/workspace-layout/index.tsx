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
  const loggedInHeaderText = 'Welcome, username.  Thank you for signing up to participate in this year’s Design for San Diego challenge! See below for key activities related to Discovery, Ideation, Prototyping, Pitching, and Activation.';
  return (
    <div>
      <Header
        title={workspaceContent.title1}
        content={loggedIn ? loggedInHeaderText : workspaceContent.content1}
        image={workspaceContent.image}
      />
      <div className="container">
        <div className="section">
          <h2>{workspaceContent.title2}</h2>
          <p dangerouslySetInnerHTML={{ __html: workspaceContent.content2 }} />
          <a href="https://join.slack.com/t/d4sd/shared_invite/enQtMjExMjA5MDY0MjkzLTk3NjY4NGM3MTE0N2M1NTJjODAxMGRiMDgxNmQ4ZDk1NTU4Mzk0OThjMTdkMzc0NTJmY2M1ZmNkZDA3NTdjYTU">
            <Button>Join D4SD</Button>
          </a>
        </div>
        <div className="paragraph">
          <h2>{workspaceContent.title3}</h2>
          <p dangerouslySetInnerHTML={{ __html: workspaceContent.content3 }} />
        </div>
        <Row>
          <Col lg={2} />
          <Col lg={20}>
            <Timeline type="card">
              {workspaceContent.timeline.map((item) => (
                <Timeline.Item id={item.img} key={item.img}>
                  {loggedIn ? (
                    <WorkspaceActionCard
                      card={{
                        title: item.stage,
                        descHTML: item.detail,
                        closed: false,
                        // @ts-ignore
                        shortDesc: item.shortDesc,
                        buttonTitle: item.action1,
                        active: item.state1 === 'active',
                        // @ts-ignore
                        dueDate: item.dueDate,
                        // @ts-ignore
                        startDate: item.startDate,
                        buttonHandleClick: () => {
                          // @ts-ignore;
                          const win = window.open(item.link1, '_blank');
                          win!.focus();
                        }
                      }}
                    />
                  ) : (
                    <WorkspaceActionCard
                      card={{
                        title: item.stage,
                        descHTML: item.detail,
                        closed: false,
                        // @ts-ignore
                        shortDesc: item.shortDesc
                      }}
                    />
                  )}
                </Timeline.Item>
              ))}
            </Timeline>
          </Col>
          <Col lg={2} />
        </Row>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default WorkspaceLayout;
