import React, {useEffect, useState} from 'react';
import useForm from 'react-hook-form';
import './style.less';
import { Card, Input, Button, Form, message, Row, Col } from '@d4sd/components';
import firebase from '../../actions/firebase';

const LoginCard = (props: any) => {
    // ISSUE: function login is being called without props being passed. 
    const { register, handleSubmit, setValue } = useForm();
    const onSubmit = (data:any) => {
      if (!data.email) {
        message.error("Missing email");
        return;
      }
      if (!data.password) {
        message.error("Missing password");
        return;
      }
      console.log(data);

      // Add your axios stuff here

      login(data);
    }

    async function login(data:any){
      try {
        await firebase.login(data.email, data.password);
        props.props.history.replace('/');
      } catch(error) {
        alert(error.message);
      }
    };

    // handle changes and store to state with react hook forms
    const handleChange = (e:any) => {
      setValue(e.target.name, e.target.value);
    };

    // register inputs
    useEffect(() => {
       register({ name: "email" });
       register({ name: "password" });
    }, []);
    return (
      <Card className="card-login">
        <h2 className="login-header">Login</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row gutter={[0, 8]}>
            <Col><Input placeholder="Email" name="email" onChange={handleChange}/></Col>
            <Col><Input.Password placeholder="Password" name="password" onChange={handleChange}/> </Col>
            <Col>
              <Row type="flex" align="middle" justify="center">     
                <Button className="d4sd-btn" htmlType="submit">Login</Button>
              </Row>
            </Col>
          </Row>
        </Form>
      </Card>
      );
}
export default LoginCard;
