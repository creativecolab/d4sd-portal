import React, { useState } from 'react';
import {
  Form, Input, Card, Button, Radio,
} from '@d4sd/components';
import './style.less';
import useForm from 'react-hook-form';

function SignupChoice(props: any) {
  const [value, setValue] = useState('');
  const onChange = (e: any) => {
    // console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Card className="card-signup-choice">
      <h1 className="signup-choice-header">Sign Up</h1>
      <h2 className="signup-sub-header">How would you like to participate in the challenge?</h2>
      <div className="choice-box">
        <Radio.Group onChange={onChange} value={value}>
          <div className="choice">
            <Radio value="participant" />
            <label className="choice-label">Participant</label>
            <p>
            As an innovator, you are able to meet new people and tackle SD’s problems with a team of like-minded individuals.
            </p>
          </div>
          <div className="choice">
            <Radio value="feedback" />
            <label className="choice-label">Feedback provider</label>
            <p>
              As a feedback provider, you are able to give teams valuable input for their design projects after the feedback window opens
            </p>
          </div>
        </Radio.Group>
      </div>
      <div className="bottom-button-wrapper">
        <Button className="d4sd-btn" block type="primary" size="small" htmlType="submit">CONTINUE</Button>
      </div>
    </Card>
  );
}

export default SignupChoice;
