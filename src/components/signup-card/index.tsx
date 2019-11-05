import React, {useEffect} from 'react';
import useForm from 'react-hook-form';
import { Card, Input, Button, Col, Row, Form } from 'antd';
import './style.less';

import '../../actions/firebase';
import { registerUser } from '../../actions/firebase';

const SignupCard = (props: any) => {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data: any) => {
    // console.log(data);
    // Add your axios stuff here
    registerUser(data);
  }

  // handle changes and store to state with react hook forms
  const handleChange = (e: any) => {
    setValue(e.target.name, e.target.value);
  };

  // register inputs
  useEffect(() => {
     register({ name: "email" });
     register({ name: "password" });
     register({ name: "firstName" });
     register({ name: "lastName" });
  }, []);
    return (
      <Card className="card-signup">
        <p className="signup-header">Sign Up</p>
        <Button className="google-btn" icon="google" block>Continue with Google</Button>
        <Button className="fb-btn" icon="facebook" block>Continue with Facebook</Button>

        <p className="or-txt">OR</p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input.Group className="input-group">
            <Row gutter={30} className="row-names">
              <Col span={12}>
                <Input placeholder="First Name" name='firstName' onChange={handleChange}/>
              </Col>
              <Col span={12}>
                <Input placeholder="Last Name" name="lastName" onChange={handleChange}/>
              </Col>
            </Row>
            <Input className="input-email" placeholder="Email" name="email" onChange={handleChange}/>
            <Input.Password className="input-email" placeholder="Password" name="password" onChange={handleChange}/>
          </Input.Group>
          <Button className="d4sd-btn" block  type="primary" htmlType="submit">Sign Up</Button>
        </Form>
        <p className="link-login">Already have an account? <a>Log In</a></p>
      </Card>
      );
}

export default SignupCard;
