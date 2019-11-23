import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Button, Icon, Col, Row } from '@d4sd/components';

import './style.less';

import d4sdlogo from '../../assets/logo.svg';
import d4sdlogoBlue from '../../assets/logo-blue.svg';
import daniel from '../../assets/daniel.png';
import { SubMenu } from 'rc-menu';

function Menubar(props: any) {
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

  return (
    <div>

      <Row>
        <Col md={0} xs={24}>
          <Menu mode="horizontal" onClick={()=>{setCollapse(!collapse)}} id="mobileNav">
            <Menu.Item>
              <NavLink to="/">
                <img src={logo} alt="logo"/>
              </NavLink>
            </Menu.Item>
            <div className="emptybar"/>
            <SubMenu title={
              <span>
                <Icon type={(collapse) ? 'menu-fold' : 'menu-unfold'} />
              </span>
            }>
              <Menu.Item className="mobile-menu-item"><span>Home</span></Menu.Item>
              <Menu.Item className="mobile-menu-item"><span>Get Involved</span></Menu.Item>
              <Menu.Item className="mobile-menu-item"><span>Challenges</span></Menu.Item>
              <Menu.Item className="mobile-menu-item"><span>Resources</span></Menu.Item>
              <Menu.Item className="mobile-menu-item"><span>FAQs</span></Menu.Item>
              <Menu.Item className="mobile-menu-item"><span>About</span></Menu.Item>
              <Menu.Item className="mobile-menu-item"><span>Workspace</span></Menu.Item>
              
            </SubMenu>
          </Menu>
        </Col>
        {/*NAVBAR FOR DESKTOP/PC (LARGER SCREENS)*/}
        <Col md={24} xs={0}>
        <Menu id="menubar" mode="horizontal">
          <Menu.Item className="menu-item-no menu-logo">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </Menu.Item>
          <div className="emptybar"/>
          <Menu.Item className="menu-item">
            <span>Home</span>
          </Menu.Item>
          <Menu.Item className="menu-item">
            <span>Get Involved</span>
          </Menu.Item>
          <Menu.Item className="menu-item">
            <span>Challenges</span>
          </Menu.Item>
          <Menu.Item className="menu-item">
            <span>Resources</span>
          </Menu.Item>
          <Menu.Item className="menu-item">
            <span>FAQs</span>
          </Menu.Item>
          <Menu.Item className="menu-item">
            <span>About</span>
          </Menu.Item>
          <Menu.Item className="menu-item">
            <span>Workspace</span>
          </Menu.Item>
        </Menu>
        </Col>
      </Row>
       
    </div>

    
  );
}

export default Menubar;
