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
  useEffect(() => {
    if (scroll === '') {
      setLogo(d4sdlogo);
    } else {
      setLogo(d4sdlogoBlue);
    }
  }, [scroll]);
  console.log(currentTab);
  useEffect(() => {
    if (history.location.pathname === "/workspace") {
      setTab(["workspace"]);
    }
    else if (history.location.pathname === "/") {
      setTab(["home"]);
    }
  }, [])
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
      <Menu.Item key="resources">
        <span>Resources</span>
      </Menu.Item>
      <Menu.Item key="workspace" onClick={()=>{history.replace("/workspace")}}>
        <span>Workspace</span>
      </Menu.Item>
      <Menu.Item type="profile">
        <img src={daniel} alt="avatar" />
      </Menu.Item>
    </Menu>
  );
}

export default Menubar;
