import React, { useState, useEffect } from 'react';
import {
  Header, message, Row, Col, Input, Icon, Rate
} from '@d4sd/components';
import Menubar from '../../menubar/index';
import './style.less';

const ViewFeedbackLayout = (): JSX.Element => {
  const [feedback] = useState([
    {
      name: 'Daniel James',
      about: 'About',
      expertise: 'Design, Engineering',
      contact: 'something@something.com',
      responses: [
        {
          question: 'Question 1: What do you think of the importance of this problem',
          response: 'I think this question is important. I met this problem in my real life situation.'
        },
        {
          question: 'Question 2: What do you think of the solution',
          response: 'This solution tickle the problem well. I think the solution that tries to combine public together into the public traffic schedule is a great solution. But I think how to implement these ideas..'
        },
        {
          question: 'Question 3: What do you think of design in the solution',
          response: 'Excellent!'
        }
      ]
    },
    {
      name: 'Momo',
      about: 'About',
      expertise: 'Everything',
      contact: 'momo@example.com',
      responses: [
        {
          question: 'Question 1: What do you think of the importance of this problem',
          response: 'I think this question is extremely important! I see it every day!'
        },
        {
          question: 'Question 2: What do you think of the solution',
          response: 'The solution is so genuine and amazing, I would love to see it in action!'
        },
        {
          question: 'Question 3: What do you think of design in the solution',
          response: ''
        }
      ]
    }
  ]);
  const [feedbackRatings, setFeedbackRatings] = useState<Array<{name: string;
    responseRatings: Array<{question: string; response: string; rating: number | undefined}>;
  }>>([]);

  useEffect(() => {
    // first update feedback from firebase
    // eslint-disable-next-line
    const emptyRatings: any = [];
    // store relation between user feedback (ID? or username?) to responses and ratings for each
    for (let i = 0; i < feedback.length; i += 1) {
      // eslint-disable-next-line
      const responsesWithRatings: any = feedback[i].responses;
      for (let j = 0; j < responsesWithRatings.length; j += 1) {
        responsesWithRatings[j].rating = undefined;
      }
      emptyRatings.push({
        name: feedback[i].name,
        responseRatings: [...responsesWithRatings]
      });
    }
    // console.log()
    setFeedbackRatings(emptyRatings);
  // eslint-disable-next-line
  }, []);

  const [feedbackIndex, setFeedbackIndex] = useState(0);

  const [leftControlClass, setLeftControlClass] = useState('disabled');
  const [rightControlClass, setRightControlClass] = useState('');

  const goRight = (): void => {
    if (feedbackIndex < feedback.length - 2) {
      setFeedbackIndex(feedbackIndex + 1);
      setLeftControlClass('');
    } else if (feedbackIndex === feedback.length - 2) {
      setFeedbackIndex(feedbackIndex + 1);
      setRightControlClass('disabled');
      setLeftControlClass('');
    }
  };
  const goLeft = (): void => {
    if (feedbackIndex >= 2) {
      setFeedbackIndex(feedbackIndex - 1);
      setRightControlClass('');
    } else if (feedbackIndex === 1) {
      setFeedbackIndex(feedbackIndex - 1);
      setLeftControlClass('disabled');
      setRightControlClass('');
    }
  };

  const updateResponseRating = (index: number, responseIndex: number, rating: number): void => {
    feedbackRatings[index].responseRatings[responseIndex].rating = rating;
    setFeedbackRatings(feedbackRatings);
  };

  return (
    <div>
      <Menubar />
      <div className="ViewFeedbackLayout">
        <Header
          title="View Feedback"
          back="Back to Feedback"
          handleBackClick={(): void => { message.info('Supposed to go back to feedback'); }}
        />
        <Row type="flex" justify="center" className="mainContent">
          <Col xs={{ span: 20 }} md={{ span: 10 }}>
          (This section will be copied over from Prelim submit feedback part, which is the same)
          </Col>
          <Col xs={{ span: 20 }} md={{ span: 10 }}>
            <div className="feedback-container">
              <h4 className="feedback-heading">
                Feedback
                {' '}
                {feedbackIndex + 1}
                {' '}
                -
                {' '}
                {feedback[feedbackIndex].name}
              </h4>
              <div className="feedback-controls">
                <div className="control-wrapper">
                  <Icon type="left" onClick={goLeft} className={leftControlClass} />
                </div>
                <span>
                  { `${feedbackIndex + 1} `}
                  of
                  { ` ${feedback.length}` }
                </span>
                <div className="control-wrapper">
                  <Icon type="right" onClick={goRight} className={rightControlClass} />
                </div>
              </div>

              <p className="feedback-meta"><b>About Daniel James</b></p>
              <p className="feedback-meta">
                <b>Areas of Expertise:</b>
                {' '}
                {feedback[feedbackIndex].expertise}
              </p>
              <p className="feedback-meta">
                <b>Contact Details:</b>
                {' '}
                {feedback[feedbackIndex].contact}
              </p>
              <div className="response-list">
                {feedback[feedbackIndex].responses.map((row, i) => (
                  <Row className="response-row">
                    <h4>{row.question}</h4>
                    <Input.TextArea value={row.response} className="response" />
                    <p className="rate-feedback-heading">Rate this Feedback!</p>
                    <Rate
                      className="rate-feedback" count={4} onChange={
                        (value): void => {
                          updateResponseRating(feedbackIndex, i, value);
                        }
                      }
                    />
                  </Row>
                ))}
              </div>

            </div>
            <div className="feedback-controls-bottom">
              <div className="control-wrapper">
                <Icon type="left" onClick={goLeft} className={leftControlClass} />
              </div>
              <span>
                {feedbackIndex + 1}
                of
                {feedback.length}
              </span>
              <div className="control-wrapper">
                <Icon type="right" onClick={goRight} className={rightControlClass} />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ViewFeedbackLayout;
