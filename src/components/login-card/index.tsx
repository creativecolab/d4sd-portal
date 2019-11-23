import React, { useEffect, useState } from 'react';
import useForm from 'react-hook-form';
import './style.less';
import { Link } from 'react-router-dom';
import {
  Row, Col, Card, Input, Button, Form, message,
} from '@d4sd/components';

import { Redirect } from 'react-router';
import firebase from '../../actions/firebase';

const LoginCard = (props: any) => {
  const [loggedIn, setLoggedIn] = useState(false); // replace with redux later
  const { register, handleSubmit, setValue } = useForm();

  async function login(data: any) {
    await firebase.login(data.email, data.password)
      .then((result) => {
        console.log('logged-in success: ', result);
        setLoggedIn(true);
      })
      .catch((result: any) => {
        console.log('logged-in success: ', result);
        // message.error("Some error message(?)");
        setLoggedIn(false); // add redux later
      });
  }

  const onSubmit = (data: any) => {
    if (!data.email) {
      message.error('Missing email');
      return;
    }
    if (!data.password) {
      message.error('Missing password');
      return;
    }
    console.log(data);

    // Add your axios stuff here
    login(data);
  };

  // handle changes and store to state with react hook forms
  const handleChange = (e: any) => {
    setValue(e.target.name, e.target.value);
  };

  // register inputs
  useEffect(() => {
    register({ name: 'email' });
    register({ name: 'password' });
  }, []);
  return (
    <div>
      {loggedIn && <Redirect to="/" />}
      <Card className="card-login">
        <h2 className="login-header">Login</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row gutter={[0, 8]}>
            <Col><Input placeholder="Email" name="email" onChange={handleChange} /></Col>
            <Col>
              <Input.Password placeholder="Password" name="password" onChange={handleChange} />
              {' '}
            </Col>
            <Col>
              <Row type="flex" align="middle" justify="center">
                <Button className="d4sd-btn" htmlType="submit">Login</Button>
              </Row>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};
export default LoginCard;
