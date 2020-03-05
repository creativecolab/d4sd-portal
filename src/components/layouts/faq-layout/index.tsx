import React from 'react';
import { useHistory } from 'react-router-dom';
import { Collapse, Button } from '@d4sd/components';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import '../../../styles/containers.less';
import './style.less';
import { faqContent } from '../../../assets/content';

const { Panel } = Collapse;

type EventType = {
  description: string;
  dates?: string[];
  contents?: string[];
  button_labels?: string[];
  locations?: string[];
  urls?: string[];
  keys?: string[];
  button_label?: string;
  url: string;
  key: string;
}

type FaqContentType = {
  question: string;
  answer: string;
  events?: EventType[];
}

const FaqLayout = (): JSX.Element => {
  const history = useHistory();

  return (
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
                {faqCont.events ? (
                  <>
                    {/* eslint-disable-next-line */}
                  <p dangerouslySetInnerHTML={{ __html: faqCont.answer }} />
                    {faqCont.events.map((event) => (
                      <div className="event" key={`${event.key}_div`}>
                        {/* eslint-disable-next-line */}
                      <li dangerouslySetInnerHTML={{ __html: event.description }} />
                        <div className="action-buttons">
                          {event.button_labels ? (
                            event.button_labels.map((label, i) => (
                              event.keys ? (
                                <React.Fragment key={event.keys[i]}>
                                  {event.dates ? <b>{event.dates[i]}</b> : null}
                                  <div>
                                  at
                                    {' '}
                                    {event.contents && event.locations ? (
                                      <a href={event.locations[i]} target="_blank" rel="noopener noreferrer">{event.contents[i]}</a>
                                    ) : null}
                                  </div>
                                  {event.urls ? (
                                    <a href={event.urls[i]} target="_blank" rel="noopener noreferrer">
                                      <Button>{label}</Button>
                                    </a>
                                  ) : null}
                                </React.Fragment>
                              ) : null
                            ))
                          ) : (
                            <Button onClick={(): void => history.push(event.url)}>{event.button_label}</Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                // eslint-disable-next-line
                <p dangerouslySetInnerHTML={{ __html: faqCont.answer }} />
                )}
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
};

export default FaqLayout;
