import React from 'react';
import { Card, Input, Button, Col, Row } from 'antd';
import './style.less';

const SignupCard = (props) => {
    return (
      <Card className="card-signup">
        <p style={{fontSize: 22}}>Sign Up</p><br/>
        <Button className="google-btn" icon="google" block>Continue with Google</Button>
        <Button className="fb-btn" icon="facebook" block>Continue with Facebook</Button>
        <br/>
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
          <Input style={{marginBottom: 5}} placeholder="Email" /><br/><br/>
          <Input placeholder="Password" /><br/><br/>
        </Input.Group>
        <Button className="d4sd-btn" type="primary" block>Sign Up</Button> 
        <br/><br/>
      </Card>
      );
}
 
export default SignupCard;