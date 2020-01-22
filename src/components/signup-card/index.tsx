import React, { useEffect, useState } from 'react';
import useForm from 'react-hook-form';
import './style.less';
import {
  Input, Button, Col, Row, Form, message, Radio
} from '@d4sd/components';
// import GoogleLogin from 'react-google-login';
// import { OmitProps } from 'antd/lib/transfer/renderListBody';
import { withRouter, Link } from 'react-router-dom';
// import { Redirect } from 'react-router';
import firebase from '../../actions/firebase';

const emailRegExp = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

// eslint-disable-next-line
const SignupCard = (props: any): JSX.Element => {
  const { setSignupStep } = props;
  const {
    register, handleSubmit, setValue, errors
  } = useForm();
  // eslint-disable-next-line
  const [signedUp, setSignedup] = useState(false);
  const validation = (data: Record<string, string>): boolean => {
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
  async function signup(data: Record<string, string>): Promise<void> {
    // eslint-disable-next-line
    console.log('data: ', data);
    if (validation(data)) {
      firebase.register(data.firstName, data.lastName, data.email, data.password)
        .then((result: unknown) => {
          // eslint-disable-next-line
          console.log('sign-up success: ', result);
          setSignedup(true);
          setSignupStep('verifyEmailPage');
        })
        .catch((error: string) => {
          // eslint-disable-next-line
          console.log('sign-up failure: ', error);
          message.error('Email account already exists.');
          setSignedup(false);
        });
    }
  }

  // TODO: Add a registerWithGoogle async function in firebase.ts
  // async function signupWithGoogle(data: any) {
  //   const {
  //     email, familyName, givenName, imageUrl
  //   } = data.profileObj;
  //   const firstName = givenName;
  //   const lastName = familyName;
  //   console.log({
  //     firstName, lastName, email, imageUrl
  //   });
  //   history.replace('/');
  //   setSignedup(true);
  // }

  // handle changes and store to state with react hook forms
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name } = e.target;
    setValue(name, e.target.value);
    // eslint-disable-next-line
    console.log(errors);
  };

  // register inputs
  useEffect(() => {
    register({ name: 'email' });
    register({ name: 'password' });
    register({ name: 'firstName' });
    register({ name: 'lastName' });
  // eslint-disable-next-line
  }, []);

  return (
    <div className="card-signup-wrapper">
      <div className="card-signup">
        <p className="or-txt">OR</p>
        <Form onSubmit={handleSubmit(signup)}>
          <Input.Group className="input-group">
            <Row
              gutter={16}
              className="row-names"
            >
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
              className="input-password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </Input.Group>
          <Radio className="terms">
            I agree to the
            {' '}
            <Link to="/">Terms of Service</Link>
          </Radio>
          <Row
            type="flex"
            justify="center"
          >
            <a
              href="/signup/role"
              className="continue-btn"
            >
              <Button
                className="d4sd-btn"
                type="primary"
                htmlType="submit"
                onClick={(): void => setSignupStep('verifyEmailPage')}
              >
                SIGN UP
              </Button>
            </a>
          </Row>
        </Form>
      </div>
      <p id="bottom-txt">
        Already have an account?
        {' '}
        {/* TODO */}
        {/* eslint-disable-next-line */}
        <Link to="login">Log in</Link>
      </p>
    </div>
  );
};

export default withRouter(SignupCard);
