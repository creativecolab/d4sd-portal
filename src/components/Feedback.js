import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './style.less';

class Feedback extends Component {
  render() {
    return (
      <div id="feedback" className="border rounded-lg border-secondary">
        <h4 className="pl-4 pt-4">Feedback</h4>
        <p className="pl-4 text-danger">Timeline: Dec.24 - Jan.24</p>
        <br/><br/><br/>
      </div>
    );
  }
}

export default Feedback;
