import React from 'react';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import { processContent } from '../../../assets/content';
import processSvg from '../../../assets/img/process_hcd.svg';

const ProcessLayout = (): JSX.Element => (
  <div>
    <Header
      title={processContent.title1}
      content={processContent.content1}
      image={processContent.image}
    />
    <div className="container">
      <div className="paragraph">
        <h2>{processContent.title2}</h2>
        {/* eslint-disable-next-line */}
        <p dangerouslySetInnerHTML={{ __html: processContent.content2 }} />
      </div>
      <img src={processSvg} alt="process-img" />
      <div className="section">
        {processContent.content3.map((content) => (
          <div>
            {/* eslint-disable */}
            <h4
              style={{ textAlign: 'left' }}
              dangerouslySetInnerHTML={{ __html: content.title }}
            />
            <p dangerouslySetInnerHTML={{ __html: content.txt }} />
            {/* eslint-enable */}
          </div>
        ))}
      </div>
    </div>
    <br />
    <br />
    <Footer />
  </div>
);

export default ProcessLayout;
