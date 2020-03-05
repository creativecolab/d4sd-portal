import React, { useRef } from 'react';
import { Button } from '@d4sd/components';
import { Document, Page, pdfjs } from 'react-pdf';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import '../../../styles/containers.less';
import './style.less';
import { requestFeedbackContent } from '../../../assets/content';
import { contentHTML } from '../../../actions';

const RequestFeedbackLayout = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
    <div className="RequestFeedbackPage">
      <Header
        title={requestFeedbackContent.title}
        content={requestFeedbackContent.content}
        image={requestFeedbackContent.image}
      />
      <div className="section" id="section-1">
        <div className="container">
          <h2 className="title">{requestFeedbackContent.title_1}</h2>
          {/* eslint-disable-next-line */}
          <p dangerouslySetInnerHTML={contentHTML(requestFeedbackContent.content_1)} />
        </div>
      </div>
      <div className="section" id="section-2" ref={ref}>
        <div className="container">
          <h5 className="title">{requestFeedbackContent.title_2}</h5>
          <div className="date-box">
            <ul>
              {requestFeedbackContent.importantDates.map((details) => (
                <React.Fragment key={`${details.key}_fragment`}>
                  {/* eslint-disable-next-line */}
                  {details.start_date ? [
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
          <a href="https://forms.gle/XUyHzfmLLiKjr9F18" target="_blank" rel="noopener noreferrer">
            <Button>REQUEST FEEDBACK</Button>
          </a>
        </div>
      </div>
      <div className="section" id="section-3">
        <div className="container">
          <h2 className="title">{requestFeedbackContent.title_3}</h2>
          <p>{requestFeedbackContent.content_3_1}</p>
          <p>{requestFeedbackContent.content_3_2}</p>
          <p>{requestFeedbackContent.content_3_3}</p>
        </div>
      </div>
      <div className="section" id="section-4">
        <div className="container">
          <h5 className="title">{requestFeedbackContent.title_4}</h5>
          <p>{requestFeedbackContent.content_4}</p>
          <Document file={`${process.env.PUBLIC_URL}/${requestFeedbackContent.example_storyboard}`}>
            <Page pageNumber={1} />
            <p>Page 1</p>
            <Page pageNumber={2} />
            <p>Page 2</p>
          </Document>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RequestFeedbackLayout;
