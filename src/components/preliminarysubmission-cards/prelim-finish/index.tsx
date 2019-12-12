import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button, message, Row, Icon
} from '@d4sd/components';
import './style.less';


const PrelimFinishCard = (props: any) => {
  const [linkToFeedback, setLinkToFeedback] = useState("LINK GOES HERE");
  const setURL = () => {
    let inputField = document.getElementById("copyLink");
    // @ts-ignore
    inputField.value = linkToFeedback;
  }

  const copyURL = () => {
    let copyText = document.getElementById("copyLink");
    // @ts-ignore
    copyText.select();
    // @ts-ignore
    copyText.setSelectionRange(0,99999);
    document.execCommand("copy");
  }
  useEffect(()=>{
    setURL();
  },[]);
  let history = useHistory();
  // call setLinkToFeedback("NEW LINK") and setURL() to update links.

  return (
  <div className="PrelimFinishCard">
    <div>
    <Row className="finish-container" gutter={16}>
      <Icon type="check" className="check-icon"/>
      <h2>Your preliminary concepts have been submitted!</h2>
    </Row>
    <Row className="info-container" gutter={16}>
      <p>Here’s your team’s unique project URL. Share this with friends and colleagues to request feedback
      on your ideas. D4SD will also recruit feedback providers from our community network.
      Check in regularly on the workspace to see if you have any new feedback.</p>
      <div className="copy-container">
        <input className="copy-link" id="copyLink" />
        <Button className="copy-btn" type="primary-outline" size="small" onClick={() => {copyURL();}}>COPY URL</Button>
      </div>
    </Row>
    <Row className="bottom-btns">
      <Button className="bottom-btn" type="primary" size="large" onClick={()=>{history.push("/workspace")}}>RETURN TO WORKSPACE</Button>
    </Row>
    </div>
  </div>)
};
export default PrelimFinishCard;
