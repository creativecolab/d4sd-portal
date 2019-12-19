import React, { useEffect } from 'react';
import useForm from 'react-hook-form';
import './style.less';
import { Link } from 'react-router-dom';
import {
  Row, Input, Button, Form, message
} from '@d4sd/components';

const LoginCard = (): JSX.Element => {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data: Record<string, string>): void => {
    if (!data.email) {
      message.error('Missing email');
      return;
    }
    if (!data.password) {
      message.error('Missing password');
    }
    // console.log(data);
    // Add your axios stuff here
    // data.email, data.password
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
        <Button.Google
          className="google-btn"
          icon="google"
          block
        >
          CONTINUE WITH GOOGLE
        </Button.Google>
        <Button.Facebook
          className="fb-btn"
          icon="facebook"
          block
        >
          CONTINUE WITH FACEBOOK
        </Button.Facebook>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input.Group className="input-group">
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
