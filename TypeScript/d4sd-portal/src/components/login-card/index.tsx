import React from 'react';
import { Card, Input, Button} from 'antd';
import './style.less';


const LoginCard = (props: any) => {
    return (
      <Card id="card">
        <p id="card-header">Login</p><br/>
        <Input id="email-input" placeholder="Email" />        
        <Input placeholder="Password" /><br/><br/>
        <Button id="d4sd-btn" type="primary" block>Login</Button> 
        <br/><br/>

        <Button id="btn" type="primary" icon="google" block>Login with Google</Button>
        <Button id="fb-btn" icon="facebook" block>Login with Facebook</Button>

      </Card>
      );
}
 
export default LoginCard;