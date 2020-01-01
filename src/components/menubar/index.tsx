import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import {
 Menu, Button, Icon, Col, Row 
} from '@d4sd/components';

import './style.less';

import { SubMenu } from 'rc-menu';
import d4sdlogo from '../../assets/img/logo.svg';
import d4sdlogoBlue from '../../assets/img/logo-blue.svg';
import daniel from '../../assets/daniel.png';

function Menubar(props: any) {
  const history = useHistory();
  const [currentTab, setTab] = useState(['']);
  const [scroll, setScroll] = useState('');
  const [logo, setLogo] = useState(d4sdlogo);
  const [collapse, setCollapse] = useState(true);
  useEffect(() => {
    if (scroll === '') {
      setLogo(d4sdlogo);
    } else {
      setLogo(d4sdlogoBlue);
    }
  }, [scroll]);

  useEffect(() => {
    console.log(history.location.pathname);
    switch (history.location.pathname) {
      case '/workspace':
        setTab(['workspace']);
        break;
      case '/':
        setTab(['home']);
        break;
      case '/getinvolved':
        setTab(['getInvolved']);
        break;
      case '/challenges':
        setTab(['challenges']);
        break;
      case '/resources':
        setTab(['resources']);
        break;
      case '/faq':
        setTab(['faq']);
        break;
      case '/about':
        setTab(['about']);
        break;
    }
  }, []);

  return (
    <div>
      <Row>
        <Col md={0} xs={24}>
          <Menu
            mode="horizontal"
            onClick={() => {
              setCollapse(!collapse);
            }}
            id="mobileNav"
          >
            <Menu.Item>
              <NavLink to="/">
                <img src={logo} alt="logo" />
              </NavLink>
            </Menu.Item>
            <div className="emptybar" />
            <SubMenu
              title={(
                <span>
                  <Icon type={collapse ? "menu-fold" : "menu-unfold"} />
                </span>
              )}
            >
              <Menu.Item className="mobile-menu-item">
                <span>Home</span>
              </Menu.Item>
              <Menu.Item className="mobile-menu-item">
                <span>Get Involved</span>
              </Menu.Item>
              <Menu.Item className="mobile-menu-item">
                <span>Challenges</span>
              </Menu.Item>
              <Menu.Item className="mobile-menu-item">
                <span>Resources</span>
              </Menu.Item>
              <Menu.Item className="mobile-menu-item">
                <span>FAQs</span>
              </Menu.Item>
              <Menu.Item className="mobile-menu-item">
                <span>About</span>
              </Menu.Item>
              <Menu.Item className="mobile-menu-item">
                <span>Workspace</span>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Col>
        {/* NAVBAR FOR DESKTOP/PC (LARGER SCREENS) */}
        <Col md={24} xs={0}>
          <Menu id="menubar" mode="horizontal" selectedKeys={currentTab}>
            <Menu.Item className="menu-item-no menu-logo" type="logo">
              <NavLink to="/">
                <img src={logo} alt="logo" />
              </NavLink>
            </Menu.Item>
            <div className="emptybar" />
            <Menu.Item
              className="menu-item"
              key="home"
              onClick={() => {
                history.push('/');
              }}
            >
              <span>Home</span>
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              key="getInvolved"
              onClick={() => {
                history.push('/getinvolved');
              }}
            >
              <span>Get Involved</span>
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              key="challenges"
              onClick={() => {
                history.push('/challenges');
              }}
            >
              <span>Challenges</span>
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              key="resources"
              onClick={() => {
                history.push('/resources');
              }}
            >
              <span>Resources</span>
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              key="faq"
              onClick={() => {
                history.push('/faq');
              }}
            >
              <span>FAQs</span>
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              key="about"
              onClick={() => {
                history.push('/about');
              }}
            >
              <span>About</span>
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              key="workspace"
              onClick={() => {
                history.push('/workspace');
              }}
            >
              <span>Workspace</span>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
}

export default Menubar;
