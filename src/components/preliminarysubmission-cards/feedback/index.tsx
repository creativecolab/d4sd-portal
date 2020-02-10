import React, { useContext, useEffect } from 'react';
import useForm from 'react-hook-form';
import {
  Form, Row, Col, Button
} from '@d4sd/components';
import './style.less';
import DOMPurify from 'dompurify';

import TextArea from 'antd/lib/input/TextArea';
import { Document, Page } from 'react-pdf';
import SubmissionContext from '../../../contexts/SubmissionContext';

// // Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#FFFFFF'
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1
//   }
// });

interface FeedbackCardIF {
  setSubmitStep(step: string): void;
}

const FeedbackCard = (props: FeedbackCardIF): JSX.Element => {
  const { submission, setSubmission } = useContext(SubmissionContext);
  const { setSubmitStep } = props;

  const { register, handleSubmit, setValue } = useForm();
  const projectName = submission?.projectName;
  const problemStatement = submission?.problemDescription;

  const prelimQuestion1 = localStorage.getItem('prelim-submission-question1') || '';
  const prelimQuestion2 = localStorage.getItem('prelim-submission-question2') || '';
  const prelimQuestion3 = localStorage.getItem('prelim-submission-question3') || '';
  const questionList = '<p>Here’s your opportunity to get input on your ideas. Your team can pose up to three questions to ask the community about your proposed solutions. Asking questions is optional but can really help facilitate feedback exchange. Advice for writing effective questions:</p>';

  const expertiseRequired = localStorage.getItem('prelim-submission-expertise') || '';
  /* eslint-disable */
  const onSubmit = (data: any): void => {
    console.log(data);
    // Add your axios stuff here
    // data.email, data.password
  };
  /* eslint-enable */

  // register inputs
  useEffect(() => {
    register({ name: 'stuff' });
    // eslint-disable-next-line
  }, []);

  // eslint-disable-next-line
  const handleChange = (e: any) => {
    console.log(e.target.name);
    setValue(e.target.name, e.target.value);
    localStorage.setItem(e.target.name, e.target.value);
    // setSubmitStep("");
  };

  return (
    <div className="ProjectInfoCard">
      <div className="ProjectInfo-body">
        <Row type="flex" justify="center">
          <Col xs={{ span: 20 }} sm={{ span: 11 }}>
            <Row>
              <h4>
Project:
                {projectName}
              </h4>
              <p>
                <b>Team members: </b>
              </p>
            </Row>
            <Row className="problemArea">
              <h4>Submission Preview</h4>
              <p>
                <b>1. Problem Statement</b>
              </p>
              <div className="problem-statement">
                <p>{problemStatement}</p>
              </div>
              <p>
                <b>2. Propose Initial Concepts</b>
              </p>
              <div className="pdf-display">
                <Document
                  file={submission?.solutionPDF}
                >
                  <Page pageNumber={1} />
                </Document>
              </div>
            </Row>
          </Col>
          <Col sm={{ span: 2 }} />

          <Col xs={{ span: 20 }} sm={{ span: 11 }}>
            <h4>Question List</h4>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(questionList)
              }}
            />
            <ul>
              <li>
                <p>
                  <b>Specific: </b>
Call attention to specific aspects of your
                  proposals.
                </p>
              </li>
              <li>
                <p>
                  <b>Open-ended: </b>
                  Request open-ended answers rather than asking for Yes/No
                  responses or trivial feedback.
                </p>
              </li>
              <li>
                <p>
                  <b>Succinct: </b>
                  Keep your questions to under 200 characters.
                </p>
              </li>
              <li>
                <p>
                  <b>Comparitive: </b>
                  Ask questions that compare different alternatives.
                </p>
              </li>
            </ul>

            <Form layout="vertical" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <h4 className="questions">Question 1</h4>
                <TextArea
                  autoSize={{ minRows: 4, maxRows: 5 }}
                  onChange={handleChange}
                  name="prelim-submission-question1"
                  value={prelimQuestion2}
                />
              </div>
              <br />
              <div>
                <h4 className="questions">Question 2</h4>
                <TextArea
                  autoSize={{ minRows: 4, maxRows: 5 }}
                  onChange={handleChange}
                  name="prelim-submission-question2"
                  value={prelimQuestion2}
                />
              </div>
              <br />
              <div>
                <h4 className="questions">Question 3</h4>
                <TextArea
                  autoSize={{ minRows: 4, maxRows: 5 }}
                  onChange={handleChange}
                  name="prelim-submission-question3"
                  value={prelimQuestion3}
                />
              </div>
              <br />
              <div>
                <p>
                  D4SD will try to recruit feedback providers from our community
                  network. What areas of expertise are you looking for?
                </p>
                <TextArea
                  autoSize={{ minRows: 4, maxRows: 5 }}
                  onChange={handleChange}
                  name="prelim-submission-expertise"
                  value={expertiseRequired}
                />
              </div>
            </Form>
          </Col>
        </Row>

        <Row type="flex" justify="center" className="bottom-btns">
          <Button
            type="primary"
            onClick={(): void => {
              setSubmitStep('upload');
            }}
          >
            BACK
          </Button>
          <Button type="primary-outline" size="large">
            SAVE WORK
          </Button>
          <Button
            type="primary"
            onClick={(): void => {
              setSubmitStep('done');
            }}
          >
            NEXT
          </Button>
        </Row>
      </div>
    </div>
  );
};
export default FeedbackCard;
