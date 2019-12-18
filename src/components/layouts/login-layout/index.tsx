import React from 'react';
import { Row } from '@d4sd/components';
import Menubar from '../../menubar/index';
import './style.less';
import LoginCard from '../../login-card';

const SignupLayout = (): JSX.Element => (
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
export default SignupLayout;
