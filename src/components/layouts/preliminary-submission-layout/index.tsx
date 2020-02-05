import React, { useState } from 'react';
import { Row, Steps, Header } from '@d4sd/components';
import SubmissionContext from '../../../contexts/SubmissionContext';

import HowItWorksCard from '../../preliminarysubmission-cards/how-it-works';
import ProjectInfoCard from '../../preliminarysubmission-cards/project-info';
import UploadCard from '../../preliminarysubmission-cards/upload';
import FeedbackCard from '../../preliminarysubmission-cards/feedback';
import PrelimFinishCard from '../../preliminarysubmission-cards/prelim-finish';
import './style.less';

const { Step } = Steps;

const PrelimSubmitLayout = (): JSX.Element => {
  // hook, must be one of "start, role, ethics, etc."
  const [submitStep, setSubmitStep] = useState('start');
  const [submission, setSubmission] = useState({
    projectName: '',
    problemDescription: '',
    owner: '',
    solutionPDF: '',
    questions: [],
    teamMembers: []
  });
  const mapSubmitStepToNum = (step: string): number => {
    switch (step) {
      case 'start':
        return 0;
      case 'projectInfo':
        return 1;
      case 'upload':
        return 2;
      case 'feedback':
        return 3;
      case 'review':
        return 4;
      case 'done':
        return 5;
      default:
        return 0;
    }
  };

  // signupStep
  return (
    <SubmissionContext.Provider value={{ submission, setSubmission }}>
      <div>
        <div className="PrelimSubmitLayout">
          <Header title="Preliminary Submission" back="Back to workspace" handleBackClick={undefined} />
          <Row className="card-container">
            <Steps
              size="small"
              current={mapSubmitStepToNum(submitStep)}
              className="step-flow"
            >
              <Step title="How It Works" />
              <Step title="Project Info" />
              <Step title="Upload" />
              <Step title="Feedback" />
              <Step title="Review & Submit" />
            </Steps>
            {submitStep === 'start' && (
              <HowItWorksCard setSubmitStep={setSubmitStep} />
            )}
            {submitStep === 'projectInfo' && (
              <ProjectInfoCard setSubmitStep={setSubmitStep} />
            )}
            {submitStep === 'upload' && (
              <UploadCard setSubmitStep={setSubmitStep} />
            )}
            {submitStep === 'feedback' && (
              <FeedbackCard setSubmitStep={setSubmitStep} />
            )}
            {submitStep === 'review' && (
              <UploadCard setSubmitStep={setSubmitStep} />
            )}
            {submitStep === 'done' && (
              <PrelimFinishCard setSubmitStep={setSubmitStep} />
            )}
          </Row>
        </div>
      </div>
    </SubmissionContext.Provider>
  );
};

export default PrelimSubmitLayout;
