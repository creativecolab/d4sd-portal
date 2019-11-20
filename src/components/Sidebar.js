import React, { Component } from 'react';
import './style.less';

class Sidebar extends Component {

  render() {
    return (
      <div id="sidebar">
        <nav class="nav flex-column navbar-light border-right border-secondary" id="sidebar">
          <br/><br/>
          <ul class="navbar-nav">
            <li>Hi Daniel</li>
            <li class="nav-item">
              <a class="nav-link" href="# ">Workspace</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="# ">Submission</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="# ">Feedback</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="# ">Judging</a>
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
