import React from 'react';
import { Row, Header } from '@d4sd/components';
import './style.less';
import LoginCard from '../../login-card';

const SignupLayout = (): JSX.Element => (
  <div>
    <div className="LoginLayout">
      <Header teamTitle="D4SD Workspace" className="heading" />
      <Row className="card-container">
        <LoginCard />
      </Row>
    </div>
  </div>
);
export default SignupLayout;
