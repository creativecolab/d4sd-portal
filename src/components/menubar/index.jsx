import React from "react";
import "./style.less";
import { Menu } from "antd";

import logo from "../../assets/logo.svg";

const Menubar = () => {
  return (
    <Menu className="menubar" mode="horizontal">
      <Menu.Item>
        <img src={logo} alt="logo" />
      </Menu.Item>
      <Menu.Item key="mail" className="mail">Home</Menu.Item>
      <Menu.Item>About</Menu.Item>
      <Menu.Item>Resources</Menu.Item>
      <Menu.Item>Workspace</Menu.Item>
    </Menu>
  );
};

export default Menubar;
