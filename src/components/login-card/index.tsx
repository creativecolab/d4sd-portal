import React from 'react';
import { Card, Input, Button} from 'antd';
import './style.less';


const LoginCard = (props: any) => {
    return (
      <Card className="card-login">
        <p className="login-header">Login</p>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button className="d4sd-btn" block>Login</Button> 
        <Button className="google-btn" icon="google" block>Login with Google</Button>
        <Button className="fb-btn" icon="facebook" block>Login with Facebook</Button>
      </Card>
      );
}
export default LoginCard;
