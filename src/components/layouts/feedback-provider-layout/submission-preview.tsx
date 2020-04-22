import React from "react";
import { Row, Col } from "@d4sd/components";

const SubmissionPreview = (props: any): JSX.Element => {
  const info = props.submitInfo;

  const projectName = info.title;

  const problemStatement = info.problemStatement
  return (
    <div id="submissionPreview">
      <p>
        <b>Project Name: </b>
        {projectName}
        <br />
        <b>Designer: </b>
        {info.name}
      </p>
      <Row type="flex">
        <Col xs={{ span: 24 }} md={{ span: 20 }}>
          <p>
            <b>Team's Problem Statement</b>
          </p>
          <div className="probStatement">{problemStatement}</div>
        </Col>
      </Row>
      <Row className="proposed-concept">
        <Col xs={{ span: 24 }} md={{ span: 20 }}>
          <p>
            <b>Team's Proposed Initial Concepts</b>
          </p>
          <div id="pdfSection">
            <a
              href={info.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className='proposal'
            >
              Link To Proposal
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <p><b>Stakeholders</b>
        <br />
        {info.stakeholders}
        </p>
      </Row>
    </div>
  );
};

export default SubmissionPreview;
