import React from 'react';
import { Row, Col, Card } from '@d4sd/components';
import DisplaySolution from './solution-view';

const SubmissionPreview = (props: any) => {
  // get these details from firebase via axios!
  const projectName = 'Lorem Ipsum';
  const teamMembers = ['Person1', 'Person2', 'Person3', 'Person4'];
  const problemStatement = localStorage.getItem('problemStatement')
    || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  return (
    <div>
      <h4>Submission Preview:</h4>

      <p>
        <b>
Project:
          {projectName}
        </b>
      </p>
      <p>
        <b>Team Members:</b>
        {' '}
        <ul>{teamMembers}</ul>
      </p>

      <Row type="flex">
        <Col sm={{ span: 20 }}>
          <p>
            <b>1. Problem Statement</b>
          </p>
          <div className="probStatement">{problemStatement}</div>
        </Col>
      </Row>

      <Row className="proposed-concept">
        <Col>
          <p>
            <b>
              2. Proposed Initial Concepts
            </b>
          </p>
          <DisplaySolution />
        </Col>
      </Row>


    </div>
  );
};

export default SubmissionPreview;
