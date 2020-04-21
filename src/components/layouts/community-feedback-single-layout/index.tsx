import React, { useState, useEffect } from 'react';
import {
  Row, FeedbackActionCard, message
} from '@d4sd/components';
import Header from '../../Header/index';
import CopyURL from '../../copy-url';
import './style.less';
import { useParams, useHistory, useLocation } from 'react-router-dom'
import { joinDesignJam } from '../../../assets/content';
import firebase from '../../../actions/firebase';
import { Feedback, FeedbackData } from '../../../actions/types';

const cardJson = {
  cards: [
    {
      name: 'Jane Doe',
      dateBack: new Date('1988-03-21'),
      feedbacklink: 'http://google.com/'
    },
    {
      name: 'Jane Doe',
      dateBack: new Date('1988-03-21'),
      feedbacklink: 'http://google.com/'
    }
  ]
};

const CommunityFeedbackLayout = (): JSX.Element => {
  const params = useParams<{feedbackID: string | undefined }>();
  const [feedback, setFeedback] = useState<FeedbackData>();
  const location = useLocation();
  // signupStep
  useEffect(() => {
    if (params.feedbackID) {
      firebase.getSingleFeedbackForSubmission(params.feedbackID)
      .then((res: FeedbackData) => {
        console.log(res);
        if (res) {
          setFeedback(res);
        }
        else {
          message.warn("You have received no feedback yet! Check again later");
        }
      });
    }
  }, []);
  return (
    <div className="CommunityFeedbackSingleLayout">
      <Header
        title={"Community Feedback"}
        // content={joinDesignJam.content1}
        image={joinDesignJam.image}
      />
      <div className='container'>
      {
        feedback ? 
        <div className='feedback'>
          <h3 className='name'>From: {feedback.name ? feedback.name : "Anonymous"}</h3>
          {feedback.questions.map((question, i) => {
            return (
              <div className='response' key={`res-${i}`}>
                <h3><span className='question-label'>Question {i + 1}:</span> {question}</h3>
                <p><span className='response-label'>Response</span>: {feedback.questionResponses[i]}</p>
              </div>
            )
          })}
        </div>
        :
        <p>Loading...</p>
      }
      </div>
    </div>
  );
};

export default CommunityFeedbackLayout;
