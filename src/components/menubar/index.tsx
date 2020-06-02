import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Menu, Icon, Col, Row } from "@d4sd/components";
import { SubMenu } from "rc-menu";

import CovidBanner from "../covid-banner";
import "./style.less";
import d4sdlogo from "../../assets/img/logo.svg";
// import d4sdlogoBlue from '../../assets/img/logo-blue.svg';

const Menubar = (): JSX.Element => {
  const history = useHistory();
  const [currentTab, setTab] = useState([""]);
  // const [scroll, setScroll] = useState('');
  // eslint-disable-next-line
  const [logo, setLogo] = useState(d4sdlogo);
  const [collapse, setCollapse] = useState(true);

  // useEffect(() => {
  //   if (scroll === '') {
  //     setLogo(d4sdlogo);
  //   } else {
  //     setLogo(d4sdlogoBlue);
  //   }
  // }, [scroll]);

  const rootPath = (path: string): string => {
    const secSlashInd = path.indexOf("/", 1);
    return secSlashInd !== -1
      ? path.substring(1, secSlashInd)
      : path.substring(1);
  };

  useEffect(() => {
    switch (`/${rootPath(history.location.pathname)}`) {
      case "/challenges":
        setTab(["challenges"]);
        break;
      case "/attend":
        setTab(["attend"]);
        break;
      case "/submit":
        setTab(["submit"]);
        break;
      case "/volunteer":
        setTab(["volunteer"]);
        break;
      case "/attend":
        setTab(["attend"]);
        break;
      case "/resources":
        setTab(["resources"]);
        break;
      case "/faq":
        setTab(["faq"]);
        break;
      case "/about":
        setTab(["about"]);
        break;
      case "/sponsor":
        setTab(["sponsor"]);
        break;
      case "/workspace":
        setTab(["workspace"]);
        break;
      default:
        setTab([""]);
    }
    if (history.location.pathname === "/submit/join-a-design-jam") {
      setTab(["join-a-design-jam"]);
    }
    // eslint-disable-next-line
  }, [history.location.pathname]);

  history.listen(({ pathname }) => {
    setTab([rootPath(pathname)]);
  });

  return (
    <div className="menubar-wrapper">
      <CovidBanner />
      <Row>
        <Col lg={0} xs={24}>
          <Menu mode="horizontal" id="mobileNav">
            <Menu.Item className="menu-item-no menu-logo" type="logo">
              <NavLink to="/">
                <img src={logo} alt="logo" />
              </NavLink>
            </Menu.Item>
            <div className="emptybar" />
            <SubMenu
              title={
                <span>
                  <Icon
                    type={collapse ? "menu-fold" : "menu-unfold"}
                    style={{ fontSize: "20px", marginTop: "20px" }}
                    onClick={(): void => setCollapse(!collapse)}
                  />
                </span>
              }
            >
              <Menu.Item
                className="mobile-menu-item"
                onClick={(): void => history.push("/entries")}
              >
                <span>Entries</span>
              </Menu.Item>
              <Menu.Item
                className="mobile-menu-item"
                onClick={(): void => history.push("/challenges")}
              >
                <span>Challenges</span>
              </Menu.Item>
              <Menu.Item
                className="mobile-menu-item"
                onClick={(): void => history.push("/resources")}
              >
                <span>Resources</span>
              </Menu.Item>
              <Menu.Item
                className="mobile-menu-item"
                onClick={(): void => history.push("/attend")}
              >
                <span>Attend</span>
              </Menu.Item>
              <Menu.Item
                className="mobile-menu-item"
                onClick={(): void => history.push("/submit/join-a-design-jam")}
              >
                <span>Jam</span>
              </Menu.Item>
              {
                //   <Menu.Item className="mobile-menu-item" onClick={(): void => history.push('/attend')}>
                //   <span>Attend</span>
                // </Menu.Item>
              }
              <Menu.Item
                className="mobile-menu-item"
                onClick={(): void => history.push("/submit")}
              >
                <span>Submit</span>
              </Menu.Item>
              <Menu.Item
                className="mobile-menu-item"
                onClick={(): void => history.push("/volunteer")}
              >
                <span>Volunteer</span>
              </Menu.Item>
              <Menu.Item
                className="mobile-menu-item"
                onClick={(): void => history.push("/sponsor")}
              >
                <span>Sponsor</span>
              </Menu.Item>
              <Menu.Item
                className="mobile-menu-item"
                onClick={(): void => history.push("/faq")}
              >
                <span>FAQs</span>
              </Menu.Item>
              <Menu.Item
                className="mobile-menu-item"
                onClick={(): void => history.push("/about")}
              >
                <span>About</span>
              </Menu.Item>
              {/** <Menu.Item className="mobile-menu-item">
                <span>Workspace</span>
              </Menu.Item>* */}
            </SubMenu>
          </Menu>
        </Col>
        {/* NAVBAR FOR DESKTOP/PC (LARGER SCREENS) */}
        <Col lg={24} xs={0}>
          <Menu id="menubar" mode="horizontal" selectedKeys={currentTab}>
            <Menu.Item className="menu-item-no menu-logo" type="logo">
              <NavLink to="/">
                <img src={logo} alt="logo" />
              </NavLink>
            </Menu.Item>
            <div className="emptybar" />
            <Menu.Item
              className="menu-item"
              key="entries"
              onClick={(): void => history.push("/entries")}
            >
              <span>Entries</span>
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              key="challenges"
              onClick={(): void => history.push("/challenges")}
            >
              <span>Challenges</span>
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              key="resources"
              onClick={(): void => history.push("/resources")}
            >
              <span>Resources</span>
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              key="attend"
              onClick={(): void => history.push("/attend")}
            >
              <span>Attend</span>
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              key="join-a-design-jam"
              onClick={(): void => history.push("/submit/join-a-design-jam")}
            >
              <span>Jam</span>
            </Menu.Item>
            {
              // <Menu.Item className="menu-item" key="attend" onClick={(): void => history.push('/attend')}>
              //   <span>Attend</span>
              // </Menu.Item>
            }
            <Menu.Item
              className="menu-item"
              key="submit"
              onClick={(): void => history.push("/submit")}
            >
              <span>Submit</span>
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              key="volunteer"
              onClick={(): void => history.push("/volunteer")}
            >
              <span>Volunteer</span>
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              key="sponsor"
              onClick={(): void => history.push("/sponsor")}
            >
              <span>Sponsor</span>
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              key="faq"
              onClick={(): void => history.push("/faq")}
            >
              <span>FAQs</span>
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              key="about"
              onClick={(): void => history.push("/about")}
            >
              <span>About</span>
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
