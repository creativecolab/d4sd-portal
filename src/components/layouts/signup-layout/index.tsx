import React, { useState } from 'react';

import {
  Row, Col, Steps, Button
} from '@d4sd/components';
import SignupCard from '../../signup-card/index';
import Menubar from '../../menubar/index';
import LoginCard from '../../login-card';
import './style.less';

const { Step } = Steps;

const SignupLayout = (): JSX.Element => {
  // hook, must be one of "start, role, ethics, etc."
  const [signupStep, setSignupStep] = useState('start');
  const mapSignupStepToNum = (step: string): number => {
    switch (step) {
      case 'start':
        return 0;
      case 'email':
        return 1;
      case 'role':
        return 2;
      case 'ethics':
        return 3;
      case 'success':
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
        <Row
          className="heading"
          type="flex"
          justify="center"
        >
          <Col span={20}>
            <h1 className="heading-message">
              {signupStep === 'start' && 'Workspace Sign Up'}
              {signupStep === 'success' && 'Welcome to D4SD Workspace!'}
              {signupStep === 'login' && 'D4SD Workspace'}
            </h1>
          </Col>
        </Row>
        <Row className="card-container">
          {signupStep === 'start' && (
            <SignupCard setSignupStep={setSignupStep} />
          )}
          {signupStep !== 'start' && signupStep !== 'login' && (
            <Steps
              size="small"
              current={mapSignupStepToNum(signupStep)}
              className="step-flow"
            >
              <Step title="Sign Up" />
              <Step title="Email Confirmation" />
              <Step
                title="Success "
                key="success"
              />
            </Steps>
          )}
          {signupStep === 'success' && (
            <div>
              <Row
                type="flex"
                justify="center"
              >
                <Col span="20">
                  <h2>
                    You’ve successfully joined the D4SD 2020 Challenge!
                    Go to your Workspace to register your team.
                  </h2>
                </Col>
              </Row>
              <Row
                type="flex"
                justify="center"
              >
                <Col>
                  <Button
                    onClick={(): void => setSignupStep('login')}
                    className="workspace-btn"
                  >
                    GO TO WORKSPACE
                  </Button>
                </Col>
              </Row>
            </div>
          )}
          {signupStep === 'login' && <LoginCard />}
        </Row>
      </div>
    </div>
  );
};

export default SignupLayout;
