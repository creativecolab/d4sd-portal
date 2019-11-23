import React, { Component } from 'react';
import './style.less';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <nav className="nav flex-column navbar-light border-right border-secondary" id="sidebar">
          <br />
          <br />
          <ul className="navbar-nav">
            <li>Hi Daniel</li>
            <li className="nav-item">
              <a className="nav-link" href="# ">Workspace</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="# ">Submission</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="# ">Feedback</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="# ">Judging</a>
            </li>
            <button>
              CREATE TEAM
            </button>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
