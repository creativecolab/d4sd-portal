import React from 'react';
import {
  Radio, Button
} from '@d4sd/components';
import './style.less';

interface EthicsCardIF {
  setSignupStep: (state: string) => void;
}

const EthicsCard = (props: EthicsCardIF): JSX.Element => {
  const { setSignupStep } = props;

  return (
    <div className="ethics-card">
      <div className="ethics-body">
        <ol className="ethics-list">
          <li>
            {/* eslint-disable-next-line */}
            Act with integrity, competence, diligence, respect and in an ethical manner with the community partners and other participants in the competition.
          </li>
          <li>
            {/* eslint-disable-next-line */}
            Participants must not engage in any professional conduct involving dishonesty, fraud, or deceit or commit any act that reflects adversely on their integrity or competence.
          </li>
          <li>
            {/* eslint-disable-next-line */}
            Participants must understand and comply with all applicable laws, rules, and regulations of any government, regulatory organization, licensing agency, or professional association governing their professional activities. In the event of conflict, participants must comply with the law, rule, or regulation. Participants must not knowingly participate or assist in and must dissociate from any violation of such laws, rules, or regulations.
          </li>
          <li>
            {/* eslint-disable-next-line */}
            Participants must use reasonable care and judgment to achieve and maintain independence and objectivity in their professional activities.
          </li>
        </ol>
      </div>
      <Radio.Group className="choices">
        <div className="choice">
          <Radio value="accept" />
          {/* eslint-disable-next-line */}
        <label>Yes, I accept the code of ethics.</label>
        </div>
        <div className="choice">
          <Radio value="no-accept" />
          {/* eslint-disable-next-line */}
        <label>No, I do not accept the code of ethics. </label>
        </div>
      </Radio.Group>
      <div className="bottom-btn">
        <Button
          className="d4sd-btn"
          block
          type="primary"
          size="small"
          htmlType="submit"
          onClick={(): void => setSignupStep('success')}
        >
          CONTINUE
        </Button>
      </div>
    </div>
  );
};
export default EthicsCard;
