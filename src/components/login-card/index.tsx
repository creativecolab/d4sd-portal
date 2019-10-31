import React, {useState, useEffect} from 'react';
import useForm from 'react-hook-form';
import { Card, Input, Button, Form } from 'antd';
import './style.less';


const LoginCard = (props: any) => {
    const { register, handleSubmit, setValue } = useForm();
    const onSubmit = (data:any) => {
      console.log(data);
      // Add your axios stuff here
      // data.email, data.password
    }

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
        <p className="login-header">Login</p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Email" name="email" onChange={handleChange}/>
          <Input.Password placeholder="Password" name="password" onChange={handleChange}/>
          <Button className="d4sd-btn" block type="primary" htmlType="submit">Login</Button>
        </Form>
        <Button className="google-btn" icon="google" block>Login with Google</Button>
        <Button className="fb-btn" icon="facebook" block>Login with Facebook</Button>
      </Card>
      );
}
export default LoginCard;
