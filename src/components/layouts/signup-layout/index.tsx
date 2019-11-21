import React, { useState } from 'react';
import {
  Row, Col, Steps, Button,
} from '@d4sd/components';
import SignupCard from '../../signup-card/index';
import Menubar from '../../menubar/index';
import './style.less';
import LoginCard from '../../login-card';
import RoleCard from '../../role-card';
import EthicsCard from '../../ethics-card';

const { Step } = Steps;

const SignupLayout = (props: any) => {
  // hook, must be one of "start, role, ethics, etc."
  const [signupStep, setSignupStep] = useState('start');
  const mapSignupStepToNum = (signupStep: string) => {
    switch (signupStep) {
      case 'start':
        return 0;
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
        <Row className="heading" type="flex" justify="center">
          <Col span={20}>
            <h1 className="heading-message">
              {signupStep === 'start' && 'Workspace Sign Up'}
              {signupStep === 'role' && 'Choose Your Role'}
              {signupStep === 'ethics' && 'Code of Ethics'}
              {signupStep === 'success' && 'Welcome to D4SD Workspace!'}
              {signupStep === 'login' && 'D4SD Workspace'}
            </h1>
          </Col>
        </Row>
        <Row className="card-container">
          {signupStep === 'start' && (
            <SignupCard setSignupStep={setSignupStep} />
          )}
          {signupStep != 'start' && signupStep != 'login' && (
            <Steps
              size="small"
              current={mapSignupStepToNum(signupStep)}
              className="step-flow"
            >
              <Step title="Sign Up" />
              <Step title="Email Confirmation" />
              <Step title="Choose Your Role" key="role" />
              <Step title="Code of Ethics" key="ethics" />
              <Step title="Success " key="success" />
            </Steps>
          )}
          {signupStep === 'role' && <RoleCard setSignupStep={setSignupStep} />}
          {signupStep === 'ethics' && (
            <EthicsCard setSignupStep={setSignupStep} />
          )}
          {signupStep === 'success' && (
            <div>
              <Row type="flex" justify="center">
                <Col span="18" className="joint-challenge">
                  <h2>
                    You’ve successfully joined the D4SD 2020 Challenge! Go to
                    your Workspace to register your team.
                  </h2>
                </Col>
              </Row>
              <Row type="flex" justify="center">
                <Col>
                  <Button
                    onClick={() => setSignupStep('login')}
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
