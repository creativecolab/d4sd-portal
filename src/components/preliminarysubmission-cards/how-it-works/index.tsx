import React from 'react';
import { Button } from '@d4sd/components';
import './style.less';

interface HowItWorksCardIF {
  setSubmitStep(step: string): void;
}

const HowItWorksCard = (props: HowItWorksCardIF): JSX.Element => {
  const { setSubmitStep } = props;

  /* eslint-disable */
  return (
    <div className="HowItWorksCard">
      <div className="howitworks-body">
        <p>Here is your team’s opportunity to get feedback from members of the San Diego community on your preliminary concepts!   One (and only one) team member should prepare a submission with the following information. You can can save changes at anytime and return to work on it up until the community feedback deadline. </p>
        <h4>1. Provide Details about the Team</h4>
        <p>First come up with a name for your team or your team’s concept. Also provide the names and email addresses for your teammates so we know who is working together. You can skip this or return to it later if you do not have teammates yet.</p>
        <h4>2. Write a Problem Statement (less than 2000 characters)</h4>
        <p>Your team can work on any problem related to this year’s theme: How to make San Diego a more sustainable city. It’s the job of you and your team to discover and motivate an important problem to solve.  Your problem definition should be a product of your own research and analysis of the problem space, not simply a replication of the potential themes provided by D4SD. A good problem statement will be grounded by user research (interviews, surveys, and observations) and motivated by statistics.</p>
        <h4>3. Propose Initial Concepts (PDFs for up to 3 concepts)</h4>
        <p>At this point the brainstorming process is more meaningful than a well-constructed final product.  Your team can propose multiple solutions (up to three) for your defined problem statement.  Research shows that feedback is most constructive when options are available. Each preliminary solution should be a separate PDF document that clearly describes and illustrates the proposed concept. Include images, mockups, blueprints, models, or any other visual material that will help explain the proposed solution.</p>
        <h4>4. Pose Questions for Community Feedback (up to 3)</h4>
        <p>Your team should think about the questions you want feedback on. Feedback providers respond best to questions that are specific to your team’s proposals, but also open-ended (not simple Yes-No questions).</p>
        <h4>5. Review and Share</h4>
        <p>Finally, after you review and submit your preliminary submission, you will not be able to make further edits.  You will be given a team project URL that you can share and get feedback from friends and colleagues.</p>
      </div>
      {/* eslint-enable */}
      <div className="bottom-btn">
        <Button
          className="d4sd-btn" block type="primary"
          size="large" htmlType="submit" onClick={(): void => setSubmitStep('projectInfo')}
        >
          START SUBMISSION
        </Button>
      </div>
    </div>
  );
};
export default HowItWorksCard;
