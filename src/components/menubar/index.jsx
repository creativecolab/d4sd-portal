import React from "react";
import "./style.less";
import { Menu, Icon } from "antd";

const Menubar = () => {
  return (
    <Menu>
      <Menu.Item key="mail" mode="horizontal">
        <Icon type="mail" />
        Navigation One
      </Menu.Item>
    </Menu>
  );
};

export default Menubar;
