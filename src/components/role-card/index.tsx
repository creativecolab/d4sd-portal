import React from 'react';
import {Radio, Button} from '@d4sd/components';
import './style.less';

import { render } from 'react-dom';

const RoleCard= (props: any) => {
  return(
    <div className="role-card">
      <Radio.Group className="choices">
          <div className="choice">
            <Radio value="participant" /><label>
              <h4 className="subHeading">Sign up as a Participant</h4>
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
              <h4 className="subHeading">Sign up as a Feedback Provider</h4>
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
          <Button className="d4sd-btn" block type="primary" size="small" htmlType="submit">
            CONTINUE
          </Button>
        </div>
    </div>
  );
};

export default RoleCard;
