import React, { Component } from 'react';
import photo from '../../assets/img/kashdog.jpg';
import '../style.less';

class TeamPanel extends Component {
  render() {
    return (
      <div>
        <div classNameName="row align-items-center">
          <div className="col-4">
            <img
              className="mobile rounded-circle w-100"
              src={photo}
              alt="profile"
            />
          </div>
          <div className="col-8">Aneesh Kashalikar</div>
        </div>
        <p>You don't have a team yet</p>
        <button className="btn-inverted font-weight-bold text-md ls-sm">Create a Team</button>
      </div>
    );
  }
}

export default TeamPanel;
