import React from 'react';
import '../../styles/containers.less';
import './style.less';
import { contentHTML } from '../../actions';

interface IHeader {
  image?: string;
  title?: string;
  content?: string;
}

const Header = (props: IHeader): JSX.Element => {
  const { image, title, content } = props;
  return (
    <div>
      <div className={image}>
        <div className="container">
          <h1>{title}</h1>
          {/* eslint-disable-next-line */}
          <p dangerouslySetInnerHTML={contentHTML(content)} />
        </div>
      </div>
    </div>
  );
};

export default Header;
