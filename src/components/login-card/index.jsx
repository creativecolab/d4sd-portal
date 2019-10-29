import React from 'react';
import { Card, Input, Button } from 'antd';
import './style.less';

const LoginCard = (props) => {
    return (
      <Card className="card-login">
        <p style={{fontSize: 22}}>Login</p><br/>
        <Input style={{marginBottom: 5}} placeholder="Email" />        
        <Input placeholder="Password" /><br/><br/>
        <Button className="d4sd-btn" block>Login</Button> 
        <br/><br/>
        <Button className="google-btn" icon="google" block>Login with Google</Button>
        <Button className="fb-btn" icon="facebook" block>Login with Facebook</Button>
      </Card>
      );
}
export default LoginCard;