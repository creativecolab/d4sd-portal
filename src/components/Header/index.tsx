import React from 'react';
import '../../styles/containers.less';
import Menubar from '../menubar/index';
import './style.less';

interface HeaderIF {
  image: string;
  title: string;
  content: string;
}

const Header = (props: HeaderIF): JSX.Element => {
  const { image, title, content } = props;
  return (
    <div>
      <Menubar />
      <div className={image}>
        <div className="container">
          <h1>{title}</h1>
          {/* eslint-disable-next-line */}
          <p dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
};

export default Header;
