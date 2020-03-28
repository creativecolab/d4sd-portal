import React from 'react';
import { Button } from '@d4sd/components';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import { feedbackContent } from '../../../assets/content';

const FeedbackLayout = (): JSX.Element => (
  <div>
    <Header
      title={feedbackContent.title1}
      content={feedbackContent.content1}
      image={feedbackContent.image}
    />
    <div className="container paragraph">
      <h2>{feedbackContent.title2}</h2>
      {/* eslint-disable-next-line */}
      <p dangerouslySetInnerHTML={{ __html: feedbackContent.content2 }} />
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdEcREjU4sMGjv9ZfNNL_Ljl1T7VjSqlgDlIla_HsVMRfB0ww/viewform?usp=sf_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>SIGN UP AS A FEEDBACK PROVIDER</Button>
      </a>
    </div>
    <br />
    <br />
    <Footer />
  </div>
);

export default FeedbackLayout;
