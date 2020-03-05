import React, { useRef } from 'react';
import { Button } from '@d4sd/components';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import '../../../styles/containers.less';
import './style.less';
import { submitProposalContent } from '../../../assets/content';

const SubmitProposalLayout = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line
  const scrollToRef = (): void => {
    if (ref && ref.current) {
      const position = ref.current.offsetTop - 90;
      // eslint-disable-next-line
      console.log(ref.current, position);
      window.scrollTo({
        left: 0,
        top: position,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="SubmitProposalPage">
      <Header
        title={submitProposalContent.title}
        content={submitProposalContent.content}
        image={submitProposalContent.image}
      />
      <div className="section" id="section-1">
        <div className="container">
          <h2 className="title">{submitProposalContent.title_1}</h2>
          {/* eslint-disable-next-line */}
          <p>{submitProposalContent.content_1_1}</p>
          <p>
            {submitProposalContent.content_1_2_1}
            {' '}
            <a href="#poster-template">{submitProposalContent.content_1_2_2}</a>
            {' '}
            {submitProposalContent.content_1_2_3}
          </p>
          <p>{submitProposalContent.content_1_3}</p>
        </div>
      </div>
      <div className="section" id="section-2" ref={ref}>
        <div className="container">
          <h5 className="title">{submitProposalContent.title_2}</h5>
          <div className="date-box">
            <ul>
              {submitProposalContent.importantDates.map((details) => (
                <React.Fragment key={`${details.key}_fragment`}>
                  {/* eslint-disable-next-line */}
                  {details.date_overlap ? [
                    <li key={`${details.key}_li`}>
                      <p>
                        <b>
                          {details.start_date.toDateString().substring(4, 7).toUpperCase()}
                          {' '}
                          {details.start_date.getDate()}
                          {' '}
                          –
                          {' '}
                          {details.end_date.toDateString().substring(4, 7).toUpperCase()}
                          {' '}
                          {details.end_date.getDate()}
                        </b>
                        :
                        {' '}
                        {details.title}
                      </p>
                    </li>
                  ]
                    : details.start_date ? [
                      <li key={`${details.key}_li`}>
                        <p>
                          <b>
                            {details.start_date.toDateString().substring(4, 7).toUpperCase()}
                            {' '}
                            {details.start_date.getDate()}
                            {' '}
                            –
                            {' '}
                            {details.end_date.getDate()}
                            :
                          </b>
                          {' '}
                          {details.title}
                        </p>
                      </li>
                    ] : [
                      <li key={`${details.key}_li`}>
                        <p>
                          <b>
                            {details.date.toDateString().substring(4, 7).toUpperCase()}
                            {' '}
                            {details.date.getDate()}
                            :
                          </b>
                          {' '}
                          {details.title}
                        </p>
                      </li>
                    ]}
                </React.Fragment>
              ))}
            </ul>
          </div>
          <Button disabled>SUBMIT TEAM PROPOSAL</Button>
        </div>
      </div>
      <div className="section" id="section-3">
        <div className="container">
          <h2 className="title">{submitProposalContent.title_3}</h2>
          <p>{submitProposalContent.content_3_1}</p>
          <ol className="submission-types">
            {submitProposalContent.submission_types.map((type) => (
              <li key={`${type.key}_li`}>
                <p>
                  <b>
                    {type.title}
                    :
                    {' '}
                  </b>
                  {type.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="section" id="section-4">
        <div className="container">
          <h2 className="title">{submitProposalContent.title_4}</h2>
          <p>{submitProposalContent.content_4_1}</p>
          <p>{submitProposalContent.content_4_2}</p>
          {submitProposalContent.criteria.map((item) => (
            <React.Fragment key={`${item.key}_fragment`}>
              <p className="criteria-title" key={`${item.key}_p`}><b>{item.item}</b></p>
              <ul key={`${item.key}_ul`}>
                {item.points.map((point, i) => (
                  // eslint-disable-next-line
                  <li key={`${item.key}_li_${i}`}>{point}</li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="section" id="section-5">
        <div className="container">
          <h2 className="title" id="poster-template">{submitProposalContent.title_5}</h2>
          <p>{submitProposalContent.content_5_1}</p>
          <p style={{ marginBottom: 5 }}>{submitProposalContent.content_5_2}</p>
          <ul style={{ marginBottom: '1.5em' }}>
            {submitProposalContent.poster_items.map((item, i) => (
              // eslint-disable-next-line
              <li key={`poster_item_${i}_fragment`}>
                {item}
              </li>
            ))}
          </ul>
          <p>
            {submitProposalContent.content_5_3}
            <a href="/blank-poster-template.pptx" target="_blank" rel="noopener noreferrer">Powerpoint</a>
            ,
            {' '}
            <a href="/blank-poster-template.key" target="_blank" rel="noopener noreferrer">Keynote</a>
            , and
            {' '}
            <a href="/blank-poster-template.ai" target="_blank" rel="noopener noreferrer">Illustrator</a>
            {/* , and
            {' '}
            <a href="/blank-poster-template.id" target="_blank" rel="noopener noreferrer">InDesign</a>
            {submitProposalContent.content_5_4} */}
            .
          </p>
          <div className="poster-examples">
            {submitProposalContent.poster_examples.map((example, i) => (
              <a
                href={`/posterExample${i + 1}.pdf`} target="_blank" rel="noopener noreferrer"
                className="example-poster-anchor" key={`${example}_a`}
              >
                <img
                  src={example} alt={`${example}_${i}`} className="example-poster"
                  key={`${example}_img`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubmitProposalLayout;
