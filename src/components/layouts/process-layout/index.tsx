// @ts-nocheck
import React from 'react';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import { processContent } from '../../../assets/content';
import processSvg from '../../../assets/img/process_hcd.svg';

import './style.less';

const ProcessLayout = (): JSX.Element => (
  <div>
    <Header
      title={processContent.title1}
      content={processContent.content1}
      image={processContent.image}
    />
    <div className="container">
      <div className="paragraph">
        {/* eslint-disable-next-line */}
        <p dangerouslySetInnerHTML={{ __html: processContent.content2 }} />
      </div>
      <img src={processSvg} alt="process-img" />
      <div className="section">
        {processContent.content3.map(({ title, txt, resources }) => (
          <div key={`${title.toLowerCase().split(' ').join()}_div`}>
            {/* eslint-disable */}
            <h4
              style={{ textAlign: 'left', marginBottom: '10px' }}
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p dangerouslySetInnerHTML={{ __html: txt }} />
            <p className="title">Resources: </p>
            <div className="linkswrapper">
              {resources.map(({ title, link }) => (
                <a className="links" href={link} key={`${title.toLowerCase().split(' ').join()}_a`}>
                  {title}
                </a>
              ))}
            </div>
          </div>
        ))}
        {/* eslint-enable */}
      </div>
    </div>
    <br />
    <br />
    <Footer />
  </div>
);

export default ProcessLayout;
