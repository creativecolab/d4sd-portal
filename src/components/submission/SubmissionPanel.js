import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style.less';

class SubmissionPanel extends Component {
  render() {
    return (
      <div
        id="submission"
        className="border rounded-lg border-secondary"
      >
        <Link to="/submission">
          <h4 className="pl-4 pt-4">{this.props.title}</h4>
          <p className="pl-4 pb-5 text-danger">{this.props.timeline}</p>
        </Link>
      </div>
    );
  }
}

export default SubmissionPanel;
