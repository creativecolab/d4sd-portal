import React from 'react';
import { Card, Input, Button, Col, Row } from 'antd';
import './style.less';

const LoginCard = (props) => {
    return (
      <Card id="card">
        <p id="card-header">Sign Up</p><br/>
        <Button id="btn" type="primary" icon="google" block>Continue with Google</Button>
        <Button id="fb-btn" icon="facebook" block>Continue with Facebook</Button>
        <br/><br/>
        <p id="or-txt">OR</p>
        <Input.Group>
          <Row gutter={30}>
            <Col span={12}>
              <Input placeholder="First Name" />
            </Col>
            <Col span={12}>
              <Input placeholder="Last Name" />
            </Col>
          </Row><br/>
          <Input placeholder="Email" /><br/><br/>
          <Input placeholder="Password" /><br/><br/>
        </Input.Group>
        <Button id="d4sd-btn" type="primary" block>Sign Up</Button> 
        <br/><br/>

        

      </Card>
      );
}
 
export default LoginCard;