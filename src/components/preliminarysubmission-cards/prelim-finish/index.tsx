import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button, Row, Icon
} from '@d4sd/components';
import './style.less';

interface PrelimFinishCardIF {
  setSubmitStep(step: string): void;
}

const PrelimFinishCard = (props: PrelimFinishCardIF): JSX.Element => {
  // eslint-disable-next-line
  const { setSubmitStep } = props;
  // eslint-disable-next-line
  const [linkToFeedback, setLinkToFeedback] = useState('LINK GOES HERE');

  /* eslint-disable */
  const setURL = (): void => {
    const inputField = document.getElementById('copyLink');
    // @ts-ignore
    inputField.value = linkToFeedback;
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
  }, []);
  const history = useHistory();
  // call setLinkToFeedback("NEW LINK") and setURL() to update links.

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
          <div className="copy-container">
            <input className="copy-link" id="copyLink" />
            <Button
              className="copy-btn" type="primary-outline" size="small"
              onClick={(): void => { copyURL(); }}
            >
              COPY URL
            </Button>
          </div>
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
