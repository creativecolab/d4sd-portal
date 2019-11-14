import React from 'react';
import {Card, Radio, Button} from '@d4sd/components';
import './style.less';

import { render } from 'react-dom';

const RoleCard= (props: any) => {
  return(
    <Card className="role-card">
      <h2> Choose Your Role </h2>
      <h4>How would you like to participate in this challenge?</h4>
      <Radio.Group className="choices">
          <div className="choice">
            <Radio value="participant" /><label>
              <span className="subHeading">Participant</span>
              <br />
              <p>
              As a participant, you are 
              able to meet new people and 
              tackle SD’s problems with a team 
              of like-minded individuals. 
              </p>
              
            </label>
          </div>
          <div className="choice">
            <Radio value="feedback" /><label>
              <span className="subHeading">Feedback provider</span>
              <br />
              <p>
              As a feedback provider, you are able to 
              give teams valuable input for their design 
              projects after feedback window opens.
              </p>
            </label>
          </div>
        </Radio.Group>
        <div className="bottom-btn">
          <Button className="d4sd-btn" block type="primary" size="small" htmlType="submit" onClick={()=> props.setSignupStep("ethics") }>
            CONTINUE
          </Button>
        </div>
    </Card>
  );
};

export default RoleCard;