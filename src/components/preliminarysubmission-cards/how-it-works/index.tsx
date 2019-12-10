import React, { useEffect } from 'react';
import useForm from 'react-hook-form';
import {
  Card, Radio, Button, message, Row, Col,
} from '@d4sd/components';
import './style.less';


const HowItWorksCard = (props: any) => (
  <div className="HowItWorksCard">
    <div className="howitworks-body">
        <h4>1. Provide Details about the Team</h4>
        <p>Act with integrity, competence, diligence, respect and in an ethical manner with the community partners and other participants in the competition.</p>
        <h4>2. Write a Problem Statement (less than 2000 characters)</h4>
        <h4>3. Propose Initial Concepts (PDFs for up to 3 concepts)</h4>
        <h4>4. Pose Questions for Community Feedback (up to 3)</h4>
        <h4>5. Review and Share</h4>
    </div>
    <div className="bottom-btn">
      <Button className="d4sd-btn" block type="primary" size="small" htmlType="submit" onClick={() => props.setSubmitStep('projectInfo')}>CONTINUE</Button>
    </div>
  </div>
);
export default HowItWorksCard;
