import React, { useState } from 'react';
import {
  Row, Steps, Header, FeedbackActionCard
} from '@d4sd/components';
import Menubar from '../../menubar/index';
import CopyURL from '../../copy-url';
import './style.less';
import FeedbackCard from '../../preliminarysubmission-cards/feedback';

const { Step } = Steps;

const cardJson = {
  cards: [
    {
      name: 'Jane Doe',
      dateBack: new Date('1988-03-21'),
      feedbacklink: 'http://google.com/'
    },
    {
      name: 'Jane Doe',
      dateBack: new Date('1988-03-21'),
      feedbacklink: 'http://google.com/'
    }
  ]
};

const CommunityFeedbackLayout = (): JSX.Element => {
  const [linkToFeedback, setLinkToFeedback] = useState('LINK TO FEEDBACK');
  // signupStep
  return (
    <div>
      <Menubar />
      <div className="CommunityFeedbackLayout">
        <Header
          title="Community Feedback"
          back="Back to workspace"
          handleBackClick={undefined}
        />

        <div className="content">
          <Row className="row">
            <p>
              Share the link below to more people to if you want to get more
              feedback:
            </p>
          </Row>
          <Row className="row">
            <CopyURL link={linkToFeedback} />
          </Row>
          <Row className="row">
            <p>
              Click each card to view feedback on your project. This feedback
              could be from the D4SD community network, or from your friends and
              colleagues. Please provide a rating on each point of feedback so
              that we can improve the system.
            </p>
          </Row>
        </div>
        <div className="feedback">
          { cardJson.cards.map((data) => <FeedbackActionCard card={data} />)}
        </div>
      </div>
    </div>
  );
};

export default CommunityFeedbackLayout;
