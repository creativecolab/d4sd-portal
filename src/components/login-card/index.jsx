import React from 'react';
import Button from '@material-ui/core/Button';
import './style.scss';
import {LongButton, SmallButton} from '../button/index.jsx';

// React.Fragment tags?
const LoginCard = (props) => {
  return (
    <div id="container">
      <React.Fragment>
        <LongButton text="CONTINUE WITH FACEBOOK" />
        <LongButton text="CONTINUE WITH GOOGLE" />

        <Button variant="contained" className="mediaBtn">Continue With Facebook</Button>
   
        <h1> OR </h1>
      </React.Fragment>
    </div>
  );
}
 
export default LoginCard;