import React, {useEffect} from 'react';
import useForm from 'react-hook-form';
import './style.less';
import { Card, Input, Button, Form, message } from '@d4sd/components';


import '../../actions/firebase';
import { registerUser } from '../../actions/firebase';

const LoginCard = (props: any) => {
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
        <h2 className="login-header">Login</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Email" name="email" onChange={handleChange}/>
          <Input.Password placeholder="Password" name="password" onChange={handleChange}/>
          <Button className="d4sd-btn" block type="primary" htmlType="submit">Login</Button>
          <p className="link-signup">Don't have an account? <a>Sign Up</a></p>
        </Form>
        <Button.Google className="google-btn" icon="google" block>Login with Google</Button.Google>
        <Button.Facebook className="fb-btn" icon="facebook" block>Login with Facebook</Button.Facebook>
      </Card>
      );
}
export default LoginCard;
