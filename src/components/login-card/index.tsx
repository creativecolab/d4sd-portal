import React, { useEffect } from 'react';
import useForm from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useHistory } from 'react-router-dom';

import {
  Row, Input, Button, Form, message
} from '@d4sd/components';
import firebase from '../../actions/firebase';
import './style.less';

const LoginCard = (): JSX.Element => {
  const user = useAuthState(firebase.auth)[0];
  const { register, handleSubmit, setValue } = useForm();
  const history = useHistory();
  if (user) {
    history.push('/workspace');
  }

  const onSubmit = (data: Record<string, string>): void => {
    if (!data.email) {
      message.error('Missing email');
      return;
    }
    if (!data.password) {
      message.error('Missing password');
    }
    firebase.login(data.email, data.password).then((success) => {
      console.log('Logged in');
      history.push('/workspace');
    }).catch((err) => {
      console.log('Error with firebase login');
    });
  };

  // handle changes and store to state with react hook forms
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.name, e.target.value);
  };

  // register inputs
  useEffect(() => {
    register({ name: 'email' });
    register({ name: 'password' });
  // eslint-disable-next-line
  }, []);

  return (
    <div className="card-login-wrapper">
      <div className="card-login">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input.Group className="input-group">
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
          <Row
            type="flex"
            justify="center"
          >
            <Button
              className="login-btn"
              type="primary"
              htmlType="submit"
            >
              GO TO WORKSPACE
            </Button>
            <Link
              to="signup"
              className="signup-btn-link"
            >
              <Button
                className="sign-up-btn"
                type="primary-outline"
                htmlType="submit"
              >
                NO ACCOUNT? SIGN UP
              </Button>
            </Link>
          </Row>
        </Form>
      </div>
    </div>
  );
};
export default LoginCard;
