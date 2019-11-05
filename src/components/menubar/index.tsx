import React, {useState, useEffect} from "react";
import "./style.less";
import { Menu } from "antd";

import d4sdlogo from "../../assets/logo.svg";
import d4sdlogoBlue from "../../assets/logo-blue.svg";
import daniel from "../../assets/daniel.png";
const { SubMenu } = Menu;

function Menubar(props: any) {
  let [scroll, setScroll] = useState("");
  let [logo, setLogo] = useState(d4sdlogo);
  useEffect(() => {
    if (scroll == "") {
      setLogo(d4sdlogo);
    }
    else {
      setLogo(d4sdlogoBlue);
    }
  }, [scroll]);

  return (
    <Menu id="menubar" mode="horizontal" className={scroll}>

        <Menu.Item className="menu-item-no menu-logo">
          <img src={logo} alt="logo" />
        </Menu.Item>
        <div className="emptybar menu-item-no">
        </div>
        <Menu.Item className="menu-item"><span>Home</span></Menu.Item>
        <Menu.Item className="menu-item"><span>About</span></Menu.Item>
        <Menu.Item className="menu-item"><span>Resources</span></Menu.Item>
        <Menu.Item className="menu-item"><span>Workspace</span></Menu.Item>
        <Menu.Item className="menu-profile menu-item-no"><img src={daniel} alt="avatar" /></Menu.Item>
    </Menu>
  );
};

export default Menubar;
