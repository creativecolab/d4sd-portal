import React from "react";
import "./style.less";
import { Menu } from "antd";

import logo from "../../assets/logo.svg";
const { SubMenu } = Menu;

function Menubar(props: any) {

  return (
    <Menu className="menubar" mode="horizontal">

        <Menu.Item className="menu-item-no">
          <img src={logo} alt="logo" />
        </Menu.Item>
        <div className="emptybar menu-item-no">
        </div>
        <Menu.Item className="menu-item"><span>Home</span></Menu.Item>
        <Menu.Item className="menu-item"><span>About</span></Menu.Item>
        <Menu.Item className="menu-item"><span>Resources</span></Menu.Item>
        <Menu.Item className="menu-item"><span>Workspace</span></Menu.Item>
        <Menu.Item className="menu-profile menu-item-no"><img src={logo} alt="avatar" /></Menu.Item>

    </Menu>
  );
};

export default Menubar;
