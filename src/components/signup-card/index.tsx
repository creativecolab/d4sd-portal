import React, {useEffect} from 'react';
import useForm from 'react-hook-form';
import { Card, Input, Button, Col, Row, Form, message } from 'antd';
import './style.less';

const SignupCard = (props: any) => {
  const { register, handleSubmit, setValue, errors, triggerValidation, setError } = useForm();
  const onSubmit = (data: any) => {
    /* Checks after attempting to submit */
    if (!data.firstName) {
      message.error("Missing first name");
    }
    if (!data.lastName) {
      message.error("Missing last name");
    }
    if (!data.email) {
      message.error("Missing email");
    }
    if (!data.password) {
      message.error("Missing password");
    }
    else if (data.password.length < 6) {
      message.error("Password must be 6 charaters long");
    }
    console.log(data);
    // Add your axios stuff here
  }

  // handle changes and store to state with react hook forms
  const handleChange = (e: any) => {
    let name = e.target.name;
    setValue(name, e.target.value);
    console.log(errors);
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
      </Card>
      );
}

export default SignupCard;
