import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button, Row, Icon
} from '@d4sd/components';
import './style.less';

interface PrelimFinishCardIF {
  setSubmitStep(step: string): void;
}

const CopyURL = (props: {link: string}): JSX.Element => {
  // eslint-disable-next-line
  // eslint-disable-next-line
  const [linkToFeedback, setLinkToFeedback] = useState(props.link);
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
  // eslint-disable-next-line
  }, []);
  const history = useHistory();
  // call setLinkToFeedback("NEW LINK") and setURL() to update links.

  return (
    <div className="Copy-Container">
      <input className="copy-link" id="copyLink" />
      <Button
        className="copy-btn" type="primary-outline" size="small"
        onClick={(): void => { copyURL(); }}
      >
        COPY URL
      </Button>
    </div>
  );
};
export default CopyURL;
