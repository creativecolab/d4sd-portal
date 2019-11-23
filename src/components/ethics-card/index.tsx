import React, { useEffect } from 'react';
import useForm from 'react-hook-form';
import {
  Card, Radio, Button, message, Row, Col,
} from '@d4sd/components';
import './style.less';


const EthicsCard = (props: any) => (
  <div className="ethics-card">
    <div className="ethics-body">
      <ol className="ethics-list">
        <li>
          Act with integrity, competence, diligence, respect and in an ethical manner with the community partners and other participants in the competition.
        </li>
        <li>
          Participants must not engage in any professional conduct involving dishonesty, fraud, or deceit or commit any act that reflects adversely on their integrity or competence.
        </li>
        <li>
          Participants must understand and comply with all applicable laws, rules, and regulations of any government, regulatory organization, licensing agency, or professional association governing their professional activities. In the event of conflict, participants must comply with the law, rule, or regulation. Participants must not knowingly participate or assist in and must dissociate from any violation of such laws, rules, or regulations.
        </li>
        <li>
          Participants must use reasonable care and judgment to achieve and maintain independence and objectivity in their professional activities.
        </li>
      </ol>
    </div>
    <Radio.Group className="choices">
      <div className="choice">
        <Radio value="accept" />
        <label>Yes, I accept the code of ethics.</label>
      </div>
      <div className="choice">
        <Radio value="no-accept" />
        <label>No, I do not accept the code of ethics. </label>
      </div>
    </Radio.Group>
    <div className="bottom-btn">
      <Button className="d4sd-btn" block type="primary" size="small" htmlType="submit" onClick={() => props.setSignupStep('success')}>CONTINUE</Button>
    </div>
  </div>
);
export default EthicsCard;
