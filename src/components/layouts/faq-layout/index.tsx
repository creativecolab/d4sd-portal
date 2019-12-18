import React from 'react';
import { Collapse } from '@d4sd/components';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import '../../../styles/containers.less';
import './style.less';
import { faqContent } from '../../../assets/content';

const { Panel } = Collapse;

type FaqContentType = {
  question: string;
  answer: string;
}

const FaqLayout = (): JSX.Element => (
  <div>
    <Header
      title={faqContent.title}
      content={faqContent.content}
      image={faqContent.image}
    />
    <div className="container paragraph">
      <div className="faqcard">
        <Collapse accordion>
          {faqContent.faqs.map((faqCont: FaqContentType) => (
            <Panel
              key={faqCont.question}
              header={faqCont.question}
            >
              {/* eslint-disable-next-line */}
              <p dangerouslySetInnerHTML={{ __html: faqCont.answer }} />
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
