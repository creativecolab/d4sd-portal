import React from 'react';
import SignupCard from '../../signup-card/index';
import {Row, Col} from '@d4sd/components';
import './style.less'

const SignupLayout =(props: any)=>{
  return(
    <div className="SignupLayout">
      <Row type="flex" justify="center" align="middle" gutter={[16, 48]}>
        <Col md={{span:10}} xs={{span: 20}}>
          <h1 id='welcome-message'>
              Welcome to
              D4SD's Workspace
          </h1>
          <p className="subText">
            Create teams, submit design solutions,
            and receive feedback on your work.
            Sign up for the workspace today.
          </p>
        </Col>
        <Col md={{offset: 2, span: 8}} sm={{span: 16}} xs={{span: 20}} >
          <SignupCard />
        </Col>
      </Row>
    </div>
  );
}

export default SignupLayout;
