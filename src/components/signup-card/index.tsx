import React, {useEffect} from 'react';
import useForm from 'react-hook-form';
import {Form, Card, Input, Button, Col, Row } from 'antd';
import './style.less';

const SignupCard = (props: any) => {
    const { register, handleSubmit, setValue } = useForm();
    const onSubmit = (data: any) => {
      console.log(data);
      // Add your axios stuff here
    }

    // handle changes and store to state with react hook forms
    const handleChange = (e: any) => {
      setValue(e.target.name, e.target.value);
    };

    // register inputs
    useEffect(() => {
       register({ name: "email-input" });
       register({ name: "password" });
       register({ name: "first-name" });
       register({ name: "last-name" });
    }, []);
    return (
      <Card className="card-signup">
        <p style={{fontSize: 22, marginBottom: 10}}>Sign Up</p>
        <Button className="google-btn" icon="google" block>Continue with Google</Button>
        <Button className="fb-btn" icon="facebook" style={{marginBottom: 10}} block>Continue with Facebook</Button>

        <p id="or-txt">OR</p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input.Group style={{marginTop: 5}}>
            <Row gutter={30} style={{marginBottom: 10}}>
              <Col span={12}>
                <Input placeholder="First Name" name='first-name' onChange={handleChange}/>
              </Col>
              <Col span={12}>
                <Input placeholder="Last Name" name='last-name' onChange={handleChange}/>
              </Col>
            </Row>
            <Input style={{marginBottom: 20}} placeholder="Email" name='email-input' onChange={handleChange}/>
            <Input style={{marginBottom: 20}} placeholder="Password" name='password' onChange={handleChange}/>
          </Input.Group>
          <Button className="d4sd-btn" style={{marginBottom: 20}} block type="primary" htmlType="submit">Sign Up</Button>
        </Form>
      </Card>
      );
}

export default SignupCard;
