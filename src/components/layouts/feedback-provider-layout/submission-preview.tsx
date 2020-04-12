import React from "react";
import { Row, Col } from "@d4sd/components";
import DisplaySolution from "./solution-view";
import { provideFeedbackContent } from "../../../assets/content";
import { Document, Page, pdfjs } from "react-pdf";

const SubmissionPreview = (): JSX.Element => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  // get these details from firebase via axios!
  const projectName = "Lorem Ipsum";
  const teamMembers = ["Person1", "Person2", "Person3", "Person4"];
  const problemStatement =
    localStorage.getItem("problemStatement") ||
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <div id="submissionPreview">
      <h4>Submission Preview</h4>
      <p>
        <b>Project Name: </b>
        {projectName}
      </p>
      <p>
        <b>Team Members:</b>{" "}
        <ul>
          {teamMembers.map(member => (
            <li>{member}</li>
          ))}
        </ul>
      </p>
      <Row type="flex">
        <Col xs={{ span: 24 }} sm={{ span: 20 }}>
          <p>
            <b>1. Problem Statement</b>
          </p>
          <div className="probStatement">{problemStatement}</div>
        </Col>
      </Row>
      <Row className="proposed-concept">
        <Col xs={{ span: 24 }} sm={{ span: 20 }}>
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
