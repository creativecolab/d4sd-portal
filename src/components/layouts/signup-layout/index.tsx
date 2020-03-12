import React, { useState } from 'react';

import {
  Row, Header
} from '@d4sd/components';
import SignupCard from '../../signup-card/index';
import LoginCard from '../../login-card';
import './style.less';

const SignupLayout = (): JSX.Element => {
  // hook, must be one of "start, role, ethics, etc."
  const [signupStep, setSignupStep] = useState('start');

  // signupStep
  return (
    <div>
      <div className="SignupLayout">
        <Header teamTitle="Workspace Registration" className="header" />
        <Row className="card-container">
          {signupStep === 'start' && (
            <SignupCard setSignupStep={setSignupStep} />
          )}
          {signupStep === 'verifyEmailPage' && (
            <p className="verifyEmailText">Please check your mailbox and verify your email to complete the sign-up process.</p>
          )}
          {signupStep === 'login' && <LoginCard />}
        </Row>
      </div>
    </div>
  );
};

export default SignupLayout;
