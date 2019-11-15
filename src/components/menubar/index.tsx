import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from '@d4sd/components';

import './style.less';

import d4sdlogo from '../../assets/logo.svg';
import d4sdlogoBlue from '../../assets/logo-blue.svg';
import daniel from '../../assets/daniel.png';

function Menubar(props: any) {
  let [scroll, setScroll] = useState("");
  const [loggedIn, setLoggedIn] = useState(true); // temporary state hook until we involve redux
  let [logo, setLogo] = useState(d4sdlogo);
  useEffect(() => {
    if (scroll === '') {
      setLogo(d4sdlogo);
    } else {
      setLogo(d4sdlogoBlue);
    }
  }, [scroll]);

  return (
    <Menu id="menubar" mode="horizontal" className={scroll}>
      <Menu.Item className="menu-item-no menu-logo">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </Menu.Item>
      <div className="emptybar menu-item-no" />
      <Menu.Item className="menu-item">
        <span>Home</span>
      </Menu.Item>
      <Menu.Item className="menu-item">
        <span>About</span>
      </Menu.Item>
      {loggedIn &&   <Menu.Item className="menu-item">
          <span>FAQs</span>
        </Menu.Item>
      }
      <Menu.Item className="menu-item">
        <span>Resources</span>
      </Menu.Item>
      {loggedIn &&   <Menu.Item className="menu-item">
          <span>Workspace</span>
        </Menu.Item>
      }
      {loggedIn &&
        <Menu.Item className="menu-profile menu-item-no">
          <img src={daniel} alt="avatar" />
        </Menu.Item>}
      {!loggedIn && <Menu.Item className="menu-item login-tab">
        <span>Login</span>
      </Menu.Item>}
    </Menu>
  );
}

export default Menubar;
