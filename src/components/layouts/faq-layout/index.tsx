import React from 'react';
import { Collapse } from '@d4sd/components';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import '../../../styles/containers.less';
import './style.less';
import { faqContent } from '../../../assets/content.js';

const { Panel } = Collapse;

const FaqLayout = (props: any) => (
  <div>
    <Header
      title={faqContent.title}
      content={faqContent.content}
      image={faqContent.image}
    />
    <div className="container paragraph">
      <div className="faqcard">
        <Collapse accordion>
          {faqContent.faqs.map((faqContent: any) => (
            <Panel
              key={faqContent.question}
              header={faqContent.question}
            >
              <p dangerouslySetInnerHTML={{ __html: faqContent.answer }} />
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
    <br />
    <br />
    <Footer />
  </div>
);

export default FaqLayout;
