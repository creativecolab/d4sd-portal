import React, { useState } from 'react';

import { useHistory } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';

import {
  Row, Header
} from '@d4sd/components';
import SignupCard from '../../signup-card/index';
import Menubar from '../../menubar/index';
import LoginCard from '../../login-card';
import firebase from '../../../actions/firebase';
import './style.less';

const SignupLayout = (): JSX.Element => {
  // hook, must be one of "start, role, ethics, etc."
  const user = useAuthState(firebase.auth)[0];
  const history = useHistory();
  if (user) {
    history.push('/workspace');
  }
  const [signupStep, setSignupStep] = useState('start');

  // signupStep
  return (
    <div>
      <Menubar />
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
