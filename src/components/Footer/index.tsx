import React from "react";
import "../../styles/containers.less";
import "./style.less";

const Footer = (props: any) => {
  return (
    <div className="footer">
      <div className="container">
        <br />
        <br/>
        <h6>Copyright © 2017-2019 D4SD. All Rights Reserved. Send feedback to
          <span>&nbsp;</span>
          <a href="mailto:team@d4sd.org">team@d4sd.org</a>.
        </h6>
        <br />
      </div>
    </div>
  );
};

export default Footer;
