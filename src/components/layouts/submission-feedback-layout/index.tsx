import React, { useState } from 'react';
import {
  Row, Col, Steps, Button,
} from '@d4sd/components';
import Menubar from '../../menubar/index';
import './style.less';

const SubmissionFeedbackLayout = (props: any) =>
  // signupStep
  (
    <div>
      <Menubar />
      <div className="LoginLayout">
        <Row className="heading">
          <h1>D4SD Workspace</h1>
        </Row>
      </div>
    </div>
  );

export default SubmissionFeedbackLayout;