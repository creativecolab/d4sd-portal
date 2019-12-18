/* eslint-disable */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SubmissionPanel = (props) => {
  const { title, timeline } = props;
  return (
    <div
      id="submission"
      className="border rounded-lg border-secondary"
    >
      <Link to="/submission">
        <h4 className="pl-4 pt-4">{title}</h4>
        <p className="pl-4 pb-5 text-danger">{timeline}</p>
      </Link>
    </div>
  );
};

export default SubmissionPanel;
