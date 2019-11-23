import React, { Component } from 'react';
import '../style.less';
import { OuterContainer } from '../../assets/css/containers.js';
import { Bg } from '../../assets/css/others.js';
import { H6, A } from '../../assets/css/fonts.js';

class FooterCard extends Component {
  render() {
    return (
      <Bg theme={{ color: '#474747' }} ref={this.value} id="value">
        <div id="footer-card" className="d-flex justify-content-center align-items-center">
          <OuterContainer center>
            <br />
            <br />
            <br />
            <H6 light>
Copyright © 2017-2019 D4SD. All Rights Reserved. Send feedback to
              <span>&nbsp;</span>
              <A href="mailto:team@d4sd.org">
               team@d4sd.org
              </A>
.
            </H6>
            <br />
            <br />
          </OuterContainer>
        </div>
      </Bg>
    );
  }
}

export default FooterCard;
