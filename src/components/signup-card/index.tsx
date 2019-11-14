import React, { useEffect, useCallback, useState } from 'react';
import useForm from 'react-hook-form';
import './style.less';
import {
  Card, Input, Button, Col, Row, Form, message,
} from '@d4sd/components';
import GoogleLogin from 'react-google-login';
import { OmitProps } from 'antd/lib/transfer/renderListBody';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import firebase from '../../actions/firebase';

const emailRegExp = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);

const SignupCard = (props: any) => {
  const {
    register, handleSubmit, setValue, errors,
  } = useForm();
  const [signedUp, setSignedup] = useState(false);
  // const responseGoogle = (response: any) => {
  //   console.log(response);
  // }

  const validation = (data: any) => {
    /* Checks after attempting to submit */
    if (!data.firstName) {
      message.error('Missing first name');
      return false;
    }
    if (!data.lastName) {
      message.error('Missing last name');
      return false;
    }
    if (!data.email) {
      message.error('Missing email');
      return false;
    } if (!emailRegExp.test(data.email)) {
      message.error('Please input a valid email');
      return false;
    }
    if (!data.password) {
      message.error('Missing password');
      return false;
    } if (data.password.length < 6) {
      message.error('Password must be 6 charaters long');
      return false;
    }
    return true;
  };

  // Register user into firestore
  async function signup(data: any) {
    console.log('data: ', data);
    if (validation(data)) {
      firebase.register(data.firstName, data.lastName, data.email, data.password)
        .then((result: any) => {
          console.log('sign-up success: ', result);
          setSignedup(result);
        })
        .catch((result: any) => {
          console.log('sign-up success: ', result);
          message.error('Email account already exists.');
          setSignedup(result);
        });
    }
  }

  // TODO: Add a registerWithGoogle async function in firebase.ts
  async function signupWithGoogle(data: any) {
    const {
      email, familyName, givenName, imageUrl,
    } = data.profileObj;
    const firstName = givenName;
    const lastName = familyName;
    console.log({
      firstName, lastName, email, imageUrl,
    });
    props.history.replace('/');
    setSignedup(true);
  }

  // handle changes and store to state with react hook forms
  const handleChange = (e: any) => {
    const { name } = e.target;
    setValue(name, e.target.value);
    console.log(errors);
  };

  // register inputs
  useEffect(() => {
    register({ name: 'email' });
    register({ name: 'password' });
    register({ name: 'firstName' });
    register({ name: 'lastName' });
  }, []);
  return (
    <div className="card-signup-wrapper">
      {signedUp && <Redirect to="/" />}
      <Card className="card-signup">
        <h2 className="signup-header">Sign Up</h2>
        <GoogleLogin
          clientId="777361277442-7o4gtp3cu5bk8igbuuj3epmkhjcltc89.apps.googleusercontent.com"
          render={(renderProps) => (
            <Button.Google className="google-btn" icon="google" block onClick={renderProps.onClick} disabled={renderProps.disabled}>Continue with Google</Button.Google>
          )}
          buttonText="Login"
          onSuccess={signupWithGoogle}
          onFailure={signupWithGoogle}
          cookiePolicy="single_host_origin"
        />
        <Button.Facebook className="fb-btn" icon="facebook" block>Continue with Facebook</Button.Facebook>

        <p className="or-txt">OR</p>
        <Form onSubmit={handleSubmit(signup)}>

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
            <Input className="input-email" placeholder="Email" name="email" onChange={handleChange} />
            <Input.Password className="input-email" placeholder="Password" name="password" onChange={handleChange} />
          </Input.Group>
          <Row type="flex" justify="center">
            <a href="/signup/role">
              <Button className="d4sd-btn" type="primary" htmlType="submit" onClick={() => props.setSignupStep('role')}>CONTINUE</Button>
            </a>
          </Row>
        </Form>
      </Card>
      <p id="bottom-txt">
        Already have an account?
        {' '}
        <a id="login-link">Log in</a>
      </p>
    </div>
  );
};

export default withRouter(SignupCard);
