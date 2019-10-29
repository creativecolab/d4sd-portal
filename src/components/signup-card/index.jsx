import React from 'react';
import { Card, Input, Button, Col, Row } from 'antd';
import './style.less';

const SignupCard = (props) => {
    return (
      <Card className="card-signup">
        <p className="signup-header">Sign Up</p>
        <Button className="google-btn" icon="google" block>Continue with Google</Button>
        <Button className="fb-btn" icon="facebook" style={{marginBottom: 10}} block>Continue with Facebook</Button>

        <p id="or-txt">OR</p>
        <Input.Group className="input-group">
          <Row gutter={30} className="row-names">
            <Col span={12}>
              <Input placeholder="First Name" />
            </Col>
            <Col span={12}>
              <Input placeholder="Last Name" />
            </Col>
          </Row>
          <Input className="input-email" placeholder="Email" />
          <Input className="input-email" placeholder="Password" />
        </Input.Group>
        <Button className="d4sd-btn" block>Sign Up</Button> 
      </Card>
      );
}
 
export default SignupCard;