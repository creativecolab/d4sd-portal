import React, {useState, useEffect} from 'react';
import useForm from 'react-hook-form';
import { Card, Input, Button, Form } from 'antd';
import './style.less';


const LoginCard = (props) => {
    const { register, handleSubmit, setValue } = useForm();
    const onSubmit = data => {
      console.log(data);
      // Add your axios stuff here
    }

    // handle changes and store to state with react hook forms
    const handleChange = e => {
      setValue(e.target.name, e.target.value);
    };

    // register inputs
    useEffect(() => {
       register({ name: "email-input" });
       register({ name: "password" });
    }, []);


    return (
      <Card id="card">
        <p id="card-header">Login</p><br/>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input id="email-input" placeholder="Email" name="email-input" onChange={handleChange}/>
          <Input placeholder="Password" name="password" onChange={handleChange} /><br/><br/>
          <Button id="d4sd-btn" type="primary" htmlType="submit" block>Login</Button>
        </Form>
        <br/><br/>

        <Button id="btn" type="primary" icon="google" block>Login with Google</Button>
        <Button id="fb-btn" icon="facebook" block>Login with Facebook</Button>

      </Card>
      );
}

export default LoginCard;
