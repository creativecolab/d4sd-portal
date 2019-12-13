import React from 'react';
import {
  Row, Col, Collapse, Button, Timeline, Icon
} from '@d4sd/components';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import '../../../styles/containers.less';
import './style.less';
import { workspaceContent } from '../../../assets/content.js';

const { Panel } = Collapse;

const WorkspaceLayout = (props: any) => (
  <div>
    <Header
      title={workspaceContent.title1}
      content={workspaceContent.content1}
      image={workspaceContent.image}
    />
    <div className="container">
      <div className="section">
        <h2>{workspaceContent.title2}</h2>
        <p dangerouslySetInnerHTML={{ __html: workspaceContent.content2 }} />
        <a href=""><Button>Join D4SD</Button></a>
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
              <Timeline.Item
                id={item.img}
                key={item.img}
              >
                <Collapse accordion>
                  <Panel
                    key={item.date}
                    header={item.stage}
                    className="timelinecard"
                  >
                    <p dangerouslySetInnerHTML={{ __html: item.detail }} />
                  </Panel>
                </Collapse>
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


export default WorkspaceLayout;
