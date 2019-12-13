import React from "react";
import "../../styles/containers.less";
import Menubar from "../menubar/index";
import "./style.less";

const Header = (props: any) => {
  return (
    <div>
    <Menubar/>
      <div className={props.image}>
        <div className="container">
          <h1>{props.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: props.content }} />          
        </div>
      </div>
    </div>
  );
};

export default Header;
