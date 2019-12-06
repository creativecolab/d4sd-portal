import React, { useEffect } from "react";
import useForm from "react-hook-form";
import "./style.less";
import { Card, Input, Button, Col, Row, Form, message } from "@d4sd/components";

const emailRegExp = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const SignupCard = (props: any) => {
  const { register, handleSubmit, setValue, errors } = useForm();
  const onSubmit = (data: any) => {
    /* Checks after attempting to submit */
    if (!data.firstName) {
      message.error("Missing first name");
      return;
    }
    if (!data.lastName) {
      message.error("Missing last name");
      return;
    }
    if (!data.email) {
      message.error("Missing email");
      return;
    }
    if (!emailRegExp.test(data.email)) {
      message.error("Please input a valid email");
      return;
    }
    if (!data.password) {
      message.error("Missing password");
      return;
    }
    if (data.password.length < 6) {
      message.error("Password must be 6 charaters long");
      return;
    }
    console.log(data);
    // Add your axios stuff here
  };

  // handle changes and store to state with react hook forms
  const handleChange = (e: any) => {
    const { name } = e.target;
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
    <div className="card-signup-wrapper">
      <div className="card-signup">
        <Button.Google className="google-btn" icon="google" block>
          CONTINUE WITH GOOGLE
        </Button.Google>
        <Button.Facebook className="fb-btn" icon="facebook" block>
          CONTINUE WITH FACEBOOK
        </Button.Facebook>
        <p className="or-txt">OR</p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input.Group className="input-group">
            <Row gutter={30} className="row-names">
              <Col span={12}>
                <Input
                  placeholder="First Name"
                  name="firstName"
                  onChange={handleChange}
                />
              </Col>
              <Col span={12}>
                <Input
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Input
              className="input-email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <Input.Password
              className="input-email"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </Input.Group>
          <Row type="flex" justify="center">
            <a href="/signup/role" className="continue-btn">
              <Button
                className="d4sd-btn"
                type="primary"
                htmlType="submit"
                onClick={() => props.setSignupStep("role")}
              >
                SIGN UP
              </Button>
            </a>
          </Row>
        </Form>
      </div>
      <p id="bottom-txt">
        Already have an account? <a id="login-link">Log in</a>
      </p>
    </div>
  );
};

export default SignupCard;
