import React, { useState } from 'react';
import { Row, Col } from '@d4sd/components';
import SignupCard from '../../signup-card/index';
import Menubar from '../../menubar/index';
import './style.less';
import LoginCard from '../../login-card';
import RoleCard from '../../role-card';
import EthicsCard from '../../ethics-card';

const SignupLayout = (props: any) => {
  const [showEthics, setShowEthics] = useState(false);
  const [showRole, setShowRole] = useState(false);

  return (
    <div>
      <Menubar />
      <div className="SignupLayout">
        <Row type="flex" justify="center" align="middle" gutter={[16, 48]}>
          <Col md={{ span: 10 }} xs={{ span: 20 }}>
            <h1 id="welcome-message">
                Welcome to
                D4SD's Workspace
            </h1>
            <p className="subText">
              Create teams, submit design solutions,
              and receive feedback on your work.
              Sign up for the workspace today.
            </p>
          </Col>
          <Col md={{ offset: 2, span: 8 }} sm={{ span: 16 }} xs={{ span: 20 }}>
            <SignupCard />
            {showEthics && <EthicsCard />}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SignupLayout;
