import React from 'react';
import { Card, Input, Button, Col, Row } from 'antd';
import './style.less';

const SignupCard = (props) => {
    return (
      <Card className="card-signup">
        <p style={{fontSize: 22, marginBottom: 10}}>Sign Up</p>
        <Button className="google-btn" icon="google" block>Continue with Google</Button>
        <Button className="fb-btn" icon="facebook" style={{marginBottom: 10}} block>Continue with Facebook</Button>

        <p id="or-txt">OR</p>
        <Input.Group style={{marginTop: 5}}>
          <Row gutter={30} style={{marginBottom: 10}}>
            <Col span={12}>
              <Input placeholder="First Name" />
            </Col>
            <Col span={12}>
              <Input placeholder="Last Name" />
            </Col>
          </Row>
          <Input style={{marginBottom: 20}} placeholder="Email" />
          <Input style={{marginBottom: 20}} placeholder="Password" />
        </Input.Group>
        <Button className="d4sd-btn" style={{marginBottom: 20}} block>Sign Up</Button> 

      </Card>
      );
}
 
export default SignupCard;