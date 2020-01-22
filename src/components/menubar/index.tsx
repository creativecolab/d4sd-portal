import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import {
  Menu, Icon, Col, Row
} from '@d4sd/components';
import { SubMenu } from 'rc-menu';

import { useSession } from '../../actions/auth';

import './style.less';
import d4sdlogo from '../../assets/img/logo.svg';
import d4sdlogoBlue from '../../assets/img/logo-blue.svg';

const Menubar = (): JSX.Element => {
  const { loggedIn, user } = useSession();
  const history = useHistory();
  const [currentTab, setTab] = useState(['']);
  // eslint-disable-next-line
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
    // console.log(history.location.pathname);
    switch (history.location.pathname) {
      case '/workspace/prelim':
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
      case '/sponsors':
        setTab(['sponsors']);
        break;
      default:
        setTab(['']);
    }
  // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Row>
        <Col
          md={0}
          xs={24}
        >
          <Menu
            mode="horizontal"
            id="mobileNav"
          >
            <Menu.Item className="menu-item-no menu-logo" type="logo">
              <NavLink to="/">
                <img src={logo} alt="logo" />
              </NavLink>
            </Menu.Item>
            <div className="emptybar" />
            <SubMenu
              title={(
                <span>
                  <Icon
                    type={collapse ? 'menu-fold' : 'menu-unfold'} style={{ fontSize: '20px', marginTop: '20px' }}
                    onClick={(): void => setCollapse(!collapse)}
                  />
                </span>
              )}
            >
              <Menu.Item className="mobile-menu-item" onClick={(): void => history.push('/')}>
                <span>Home</span>
              </Menu.Item>
              <Menu.Item className="mobile-menu-item" onClick={(): void => history.push('/getinvolved')}>
                <span>Get Involved</span>
              </Menu.Item>
              <Menu.Item className="mobile-menu-item" onClick={(): void => history.push('/challenges')}>
                <span>Challenges</span>
              </Menu.Item>
              <Menu.Item className="mobile-menu-item" onClick={(): void => history.push('/resources')}>
                <span>Resources</span>
              </Menu.Item>
              <Menu.Item className="mobile-menu-item" onClick={(): void => history.push('/faq')}>
                <span>FAQs</span>
              </Menu.Item>
              <Menu.Item className="mobile-menu-item" onClick={(): void => history.push('/about')}>
                <span>About</span>
              </Menu.Item>
              <Menu.Item className="mobile-menu-item" onClick={(): void => history.push('/sponsors')}>
                <span>Sponsors</span>
              </Menu.Item>
              {loggedIn
              && (
                <Menu.Item className="menu-item">
                  <div className="profile-picture">
                    <span className="profile-pic-letter">
                      {user?.displayName ? user.displayName.toUpperCase()[0] : 'A'}
                    </span>
                  </div>
                </Menu.Item>
              )}
              {/** <Menu.Item className="mobile-menu-item">
                <span>Workspace</span>
              </Menu.Item>* */}
            </SubMenu>
          </Menu>
        </Col>
        {/* NAVBAR FOR DESKTOP/PC (LARGER SCREENS) */}
        <Col
          md={24}
          xs={0}
        >
          <Menu id="menubar" mode="horizontal" selectedKeys={currentTab}>
            <Menu.Item className="menu-item-no menu-logo" type="logo">
              <NavLink to="/">
                <img src={logo} alt="logo" />
              </NavLink>
            </Menu.Item>
            <div className="emptybar" />
            <Menu.Item className="menu-item" key="home" onClick={(): void => history.push('/')}>
              <span>Home</span>
            </Menu.Item>
            <Menu.Item className="menu-item" key="getInvolved" onClick={(): void => history.push('/getinvolved')}>
              <span>Get Involved</span>
            </Menu.Item>
            <Menu.Item className="menu-item" key="challenges" onClick={(): void => history.push('/challenges')}>
              <span>Challenges</span>
            </Menu.Item>
            <Menu.Item className="menu-item" key="resources" onClick={(): void => history.push('/resources')}>
              <span>Resources</span>
            </Menu.Item>
            <Menu.Item className="menu-item" key="faq" onClick={(): void => history.push('/faq')}>
              <span>FAQs</span>
            </Menu.Item>
            <Menu.Item className="menu-item" key="about" onClick={(): void => history.push('/about')}>
              <span>About</span>
            </Menu.Item>
            <Menu.Item className="menu-item" key="sponsors" onClick={(): void => history.push('/sponsors')}>
              <span>Sponsors</span>
            </Menu.Item>
            {/**
            <Menu.Item
              className="menu-item" key="workspace"
              onClick={(): void => history.push('/workspace')}
            >
              <span>Workspace</span>
            </Menu.Item>* */}
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Menubar;
