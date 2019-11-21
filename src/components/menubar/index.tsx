import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Menu } from '@d4sd/components';

import './style.less';

import d4sdlogo from '../../assets/logo.svg';
import d4sdlogoBlue from '../../assets/logo-blue.svg';
import daniel from '../../assets/daniel.png';

function Menubar(props: any) {
  let history = useHistory();
  let [currentTab, setTab] = useState([""]);
  const [scroll, setScroll] = useState("");
  const [logo, setLogo] = useState(d4sdlogo);
  const [loggedIn, setLogin] = useState(true);
  useEffect(() => {
    if (scroll === '') {
      setLogo(d4sdlogo);
    } else {
      setLogo(d4sdlogoBlue);
    }
  }, [scroll]);

useEffect(() => {
  if (history.location.pathname === "/workspace") {
    setTab(["workspace"]);
  }
  else if (history.location.pathname === "/") {
    setTab(["home"]);
  }
}, [])
  const DesktopLoggedInItems = [
    <Menu.Item key="faq">
      <span>FAQs</span>
    </Menu.Item>,
    <Menu.Item key="resources">
      <span>Resources</span>
    </Menu.Item>,
    <Menu.Item key="workspace" onClick={()=>{history.replace("/workspace")}}>
      <span>Workspace</span>
    </Menu.Item>,
    <Menu.Item type="profile">
      <img src={daniel} alt="avatar" />
    </Menu.Item>
  ]

  const DesktopLoggedOutItems = [
    <Menu.Item key="resources">
      <span>Resources</span>
    </Menu.Item>,
    <Menu.Item key="login">
      <span>Login</span>
    </Menu.Item>
  ]

  return (
    <Menu id="menubar" mode="horizontal" className={scroll} selectedKeys={currentTab}>
      <Menu.Item type="logo" onClick={()=>{history.replace("/")}}>
        <img src={logo} alt="logo" />
      </Menu.Item>
      <div className="emptybar menu-item-no" />
      <Menu.Item key="home" onClick={()=>{history.replace("/")}}>
        <span>Home</span>
      </Menu.Item>
      <Menu.Item key="about">
        <span>About</span>
      </Menu.Item>
      {loggedIn === true ? DesktopLoggedInItems : DesktopLoggedOutItems}

    </Menu>
  );
}

export default Menubar;
