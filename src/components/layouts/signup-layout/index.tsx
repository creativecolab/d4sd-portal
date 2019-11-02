import React from 'react';
import SignupCard from '../../signup-card/index';
import {Row, Col} from 'antd';
import './style.less'

const SignupLayout =(props: any)=>{
  return(
    <div>
      <Row type="flex" justify="center" align="middle" gutter={16}>
        <Col span={10}>
          <h1>
              Welcome to 
              D4SD's Workspace
          </h1>
          <p style={{marginTop: "40px"}}>
            Create teams, submit design solutions, 
            and receive feedback on your work. 
            Sign up for the workspace today. 
          </p>
        </Col>
        <Col offset={2} span={8}>
          <SignupCard />
        </Col>
      </Row>
    </div>
  );
}

export default SignupLayout;