import React, { useState } from 'react';
import SignupCard from '../../signup-card/index';
import {Row, Col, Steps} from '@d4sd/components';
import Menubar from '../../menubar/index';
import './style.less'
import LoginCard from '../../login-card';
import RoleCard from '../../role-card';
import EthicsCard from '../../ethics-card';

const {Step} = Steps;

const SignupLayout =(props: any)=>{

  // hook, must be one of "start, role, ethics, etc."
  const [signupStep, setSignupStep] = useState("start");
  const mapSignupStepToNum = function(signupStep: String) {
    switch (signupStep) {
      case "start":
        return 0;
      case "role":
        return 2;
      case "ethics":
        return 4;
    default :
        return 0;
    }
  }
  // signupStep
  return(
    <div>
      <Menubar />
      <div className="SignupLayout">
      <Row className="heading">
      <h1 className='heading-message'>
        {signupStep === "start" && "Workspace Sign Up"}
        {signupStep === "role" && "Choose Your Role"}
        {signupStep === "ethics" && "Code of Ethics"}
      </h1>
      </Row>
      <Row className="card-container">

        {signupStep === "start" && <SignupCard />}
        {signupStep != "start" &&
        <Steps size="small" current={mapSignupStepToNum(signupStep)} style={{width: 'calc(100% - 40px)', marginLeft: '20px'}} className="step-flow">
          <Step title="Sign Up" />
          <Step title="Email Confirmation" />
          <Step title="Choose Your Role" key='role'/>
          <Step title="Code of Ethics" key='ethics'/>
          <Step title="Success " />
        </Steps>}
        {signupStep === "role" && <RoleCard />}
        {signupStep === "ethics" && <EthicsCard />}
      </Row>
      </div>
    </div>
  );
}

export default SignupLayout;
