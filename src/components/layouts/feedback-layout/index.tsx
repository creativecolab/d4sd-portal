import React, { useState } from 'react';
import {
  Row, Col, Steps, Button,
} from '@d4sd/components';
import Menubar from '../../menubar/index';
import './style.less';
import LoginCard from '../../login-card';

const { Step } = Steps;

const FeedbackLayout = (props: any) =>
  // signupStep
  (
    <div>
      <Menubar />
      <div className="LoginLayout">
        <Row className="heading">
          <h1>D4SD Workspace</h1>
        </Row>
        <Row className="card-container">
          <LoginCard />
        </Row>
      </div>
    </div>
  );
export default FeedbackLayout;
