import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button, Row, Icon, message
} from '@d4sd/components';
import CopyURL from "../../copy-url";
import './style.less';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '../../../actions/firebase';
import SubmissionContext from '../../../contexts/SubmissionContext';

interface PrelimFinishCardIF {
  setSubmitStep(step: string): void;
}

const PrelimFinishCard = (props: PrelimFinishCardIF): JSX.Element => {
  const user = useAuthState(firebase.auth)[0];
  const { submission, setSubmission } = useContext(SubmissionContext);
  // eslint-disable-next-line
  const { setSubmitStep } = props;
  // eslint-disable-next-line
  const [linkToFeedback, setLinkToFeedback] = useState('LINK GOES HERE');

  /* eslint-disable */
  const setURL = (): void => {
    const inputField = document.getElementById('copyLink');
    if (submission && user) {
      submission.owner = user.uid;
      setSubmission(submission);
      firebase.saveSubmission(submission)
      .then(() => {
        message.success('Submission submitted successfully');
        setLinkToFeedback(`${process.env.REACT_APP_BASE_URL}/feedback?projectId=${user.uid}`);
        // @ts-ignore
        inputField.value = linkToFeedback;
      })
      .catch(() => {
        message.error('Failed to submit submission');
      })
    }
  };

  const copyURL = (): void => {
    const copyText = document.getElementById('copyLink');
    // @ts-ignore
    copyText.select();
    // @ts-ignore
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
  };
  /* eslint-enable */

  useEffect(() => {
    setURL();
  // eslint-disable-next-line
  }, []);
  const history = useHistory();

  return (
    <div className="PrelimFinishCard">
      <div>
        <Row className="finish-container" gutter={16}>
          <Icon type="check" className="check-icon" />
          <h2>Your preliminary concepts have been submitted!</h2>
        </Row>
        <Row className="info-container" gutter={16}>
          <p>
            {/* eslint-disable-next-line */}
            Here’s your team’s unique project URL. Share this with friends and colleagues to request feedback on your ideas. D4SD will also recruit feedback providers from our community network. Check in regularly on the workspace to see if you have any new feedback.
          </p>
          <CopyURL link={linkToFeedback} />
        </Row>
        <Row className="bottom-btns">
          <Button
            className="bottom-btn" type="primary" size="large"
            onClick={(): void => { history.push('/workspace'); }}
          >
            RETURN TO WORKSPACE
          </Button>
        </Row>
      </div>
    </div>
  );
};
export default PrelimFinishCard;
