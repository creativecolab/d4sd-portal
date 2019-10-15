import React from 'react';
import './style.scss';
import {LongButton, SmallButton} from '../button/index.jsx';

const LoginCard = (props) => {
  return (
    <div id="container">
      <LongButton text="CONTINUE WITH FACEBOOK" />
      <LongButton text="CONTINUE WITH GOOGLE" />
      <h1> OR </h1>
      <div id="names">

      </div>
    </div>
  );
}
 
export default LoginCard;