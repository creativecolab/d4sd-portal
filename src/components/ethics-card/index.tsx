import React, {useEffect} from 'react';
import useForm from 'react-hook-form';
import { Card, Radio, Button, message, Row, Col } from '@d4sd/components';
import './style.less';



const EthicsCard = (props: any) => {

    return (
      <Card className="ethics-card">
        <h2 className="ethics-header">Code of Ethics</h2>
        <div className="ethics-body">
          <p>1. Act with integrity, competence, diligence, respect and in an ethical manner with the community partners and other participants in the competition.
          </p>
          <p>
          2. Participants must not engage in any professional conduct involving dishonesty, fraud, or deceit or commit any act that reflects adversely on their integrity or competence.
          </p>
          <p>
          3. Participants must understand and comply with all applicable laws, rules, and regulations of any government, regulatory organization, licensing agency, or professional association governing their professional activities. In the event of conflict, participants must comply with the law, rule, or regulation. Participants must not knowingly participate or assist in and must dissociate from any violation of such laws, rules, or regulations.
          </p>
          <p>
          4. Participants must use reasonable care and judgment to achieve and maintain independence and objectivity in their professional activities.
          </p>
        </div>
        <Radio.Group className="choices">
          <div className="choice">
            <Radio value="accept" /><label>Yes, I accept the code of ethics.</label>
          </div>
          <div className="choice">
            <Radio value="no-accept" /><label>No, I do not accept the code of ethics. </label>
          </div>
        </Radio.Group>
        <div className="bottom-btn">
          <Button className="d4sd-btn" block type="primary-outline" size="small" htmlType="submit" onClick={()=>props.setSignupStep("role")}>PREVIOUS</Button>
          <Button className="d4sd-btn" block type="primary" size="small" htmlType="submit" onClick={() => props.setSignupStep("success")}>CONTINUE</Button>
        </div>
      </Card>
      );
}
export default EthicsCard;
