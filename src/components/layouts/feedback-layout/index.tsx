import React from 'react';
import { Button } from '@d4sd/components';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import { feedbackContent } from '../../../assets/content.js';

const FeedbackLayout = (props: any) => (
  <div>
    <Header
      title={feedbackContent.title1}
      content={feedbackContent.content1}
      image={feedbackContent.image}
    />
    <div className="container paragraph">
      <h2>{feedbackContent.title2}</h2>
      <p dangerouslySetInnerHTML={{ __html: feedbackContent.content2 }} />
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdEcREjU4sMGjv9ZfNNL_Ljl1T7VjSqlgDlIla_HsVMRfB0ww/viewform?usp=sf_link"
        target="_blank"
      >
        <Button>Sign up as a feedback provider</Button>
      </a>
    </div>
    <br />
    <br />
    <Footer />
  </div>
);

export default FeedbackLayout;
