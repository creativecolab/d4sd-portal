import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Row, Col, Steps, Button } from "@d4sd/components";
import HowItWorksCard from "../../preliminarysubmission-cards/how-it-works/";
import Menubar from "../../menubar/index";
import LoginCard from "../../login-card";
import "./style.less";

const { Step } = Steps;

const PrelimSubmitLayout = (props: any) => {
  // hook, must be one of "start, role, ethics, etc."
  const [submitStep, setSubmitStep] = useState("start");
  const mapSubmitStepToNum = (submitStep: string) => {
    switch (submitStep) {
      case "start":
        return 0;
      case "success":
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
            <HowItWorksCard setSignupStep={setSubmitStep} />
          )}
        </Row>
      </div>
    </div>
  );
};

export default PrelimSubmitLayout;
