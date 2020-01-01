import React from 'react';
import { Row, WorkspaceActionCard } from '@d4sd/components';
import Menubar from '../../menubar/index';
import './style.less';

const printTest = () => {
};

const due = new Date(2020, 0, 3);
const start = new Date(2020, 0, 1);

const cardElems = {
  submitState: 'none',
  closed: false,
  title: 'Assignment Title',
  shortDesc: 'This is the description',
  dueDate: due,
  startDate: start,
  active: false,
  buttonTitle: 'Button title',
  buttonHandleClick: printTest,
  descHTML: 'descHtml',
  desc: 'desc',
  feedbacklink: 'feedbacklink',
  feedback: 123,
};

const WorkspaceTempLayout = (props: any) => (
  // signupStep
  <div>
    <Menubar />
    <div className="LoginLayout">
      <Row className="heading">
        <h1>D4SD Workspace</h1>
      </Row>
      <Row className="card-container">
        <WorkspaceActionCard card={cardElems} />
      </Row>
    </div>
  </div>
);
export default WorkspaceTempLayout;
