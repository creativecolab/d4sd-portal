import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import SubmissionPanel from '../../components/submission/SubmissionPanel';
import TeamPanel from '../../components/team/TeamPanel';
import Feedback from '../../components/Feedback';
import Judging from '../../components/Judging';
import '../style.css';

class Workspace extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <TeamPanel />
        <div className="row w-100">
          <div className="col-lg-2">
            <Sidebar />
          </div>
          <div className="col-lg-10 col-sm-12">
            <div className="inner-container">
              <br />
              <br />
              <div className="row">
                <div className="col-lg-6">
                  <SubmissionPanel title="Preliminary Submission" timeline="Sept. 24 - Oct. 24" />
                </div>
                <div className="col-lg-6">
                  <SubmissionPanel title="Final Submission" timeline="Oct. 24 - Dec. 24" />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-6">
                  <Feedback />
                </div>
                <div className="col-lg-6">
                  <Judging />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Workspace;
