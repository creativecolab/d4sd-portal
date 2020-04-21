import React from "react";
import { Row, Col } from "@d4sd/components";
import DisplaySolution from "./solution-view";
import { provideFeedbackContent } from "../../../assets/content";
import { Document, Page, pdfjs } from "react-pdf";

const SubmissionPreview = (props: any): JSX.Element => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const info = props.submitInfo;
  // get these details from firebase via axios!
  const projectName = info.title;
  const teamMembers = ["Person1", "Person2", "Person3", "Person4"];
  const problemStatement = info.problemStatement
  return (
    <div id="submissionPreview">
      <h4>Submission Preview</h4>
      <p>
        <b>Project Name: </b>
        {projectName}
      </p>
      {/* <p>
        <b>Team Members:</b>{" "}
        <ul>
          {teamMembers.map(member => (
            <li>{member}</li>
          ))}
        </ul>
      </p> */}
      <Row type="flex">
        <Col xs={{ span: 24 }} md={{ span: 20 }}>
          <p>
            <b>1. Problem Statement</b>
          </p>
          <div className="probStatement">{problemStatement}</div>
        </Col>
      </Row>
      <Row className="proposed-concept">
        <Col xs={{ span: 24 }} md={{ span: 20 }}>
          <p>
            <b>2. Proposed Initial Concepts</b>
          </p>
          <div id="pdfSection">
            <a
              href={`/${provideFeedbackContent.example_storyboard}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Document
                file={`${process.env.PUBLIC_URL}/${provideFeedbackContent.example_storyboard}`}
              >
                <Page width={1500} pageNumber={1} />
              </Document>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SubmissionPreview;
