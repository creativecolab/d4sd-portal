import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Row, Col, Steps, Button } from "@d4sd/components";
import HowItWorksCard from "../../preliminarysubmission-cards/how-it-works/";
import ProjectInfoCard from "../../preliminarysubmission-cards/project-info/";
import UploadCard from "../../preliminarysubmission-cards/upload/";
import FeedbackCard from "../../preliminarysubmission-cards/feedback/";
import Menubar from "../../menubar/index";
import LoginCard from "../../login-card";
import "./style.less";

const { Step } = Steps;

const PrelimSubmitLayout = (props: any) => {
  // hook, must be one of "start, role, ethics, etc."
  const [submitStep, setSubmitStep] = useState("upload");
  const mapSubmitStepToNum = (submitStep: string) => {
    switch (submitStep) {
      case "start":
        return 0;
      case "projectInfo":
        return 1;
      case "upload":
        return 2;
      case "feedback":
        return 3;
      case "review":
        return 4;
      default:
        return 0;
    }
  };

  // signupStep
  return (
    <div>
      <Menubar />
      <div className="SignupLayout">
        <Row className="heading" type="flex" justify="center">
          <Col span={20}>
            <h1 className="heading-message">
              {submitStep === "start" && "Workspace Sign Up"}
              {submitStep === "success" && "Welcome to D4SD Workspace!"}
              {submitStep === "login" && "D4SD Workspace"}
            </h1>
          </Col>
        </Row>

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
        <Step title="Review" />
        </Steps>
          {submitStep === "start" && (
            <HowItWorksCard setSubmitStep={setSubmitStep} />
          )}
          {submitStep === "projectInfo" && (
            <ProjectInfoCard setSubmitStep={setSubmitStep} />
          )}
          {submitStep === "upload" && (
            <UploadCard setSubmitStep={setSubmitStep} />
          )}
          {submitStep === "feedback" && (
            <FeedbackCard setSubmitStep={setSubmitStep} />
          )}
          {submitStep === "review" && (
            <UploadCard setSubmitStep={setSubmitStep} />
          )}
        </Row>
      </div>
    </div>
  );
};

export default PrelimSubmitLayout;
