import React, { useState, useEffect } from 'react';
import {
  message, Button
} from '@d4sd/components';
import Header from '../../Header/index';
import './style.less';
import { useParams } from 'react-router-dom'
import { joinDesignJam } from '../../../assets/content';
import firebase from '../../../actions/firebase';
import { FeedbackData } from '../../../actions/types';


const CommunityFeedbackLayout = (): JSX.Element => {
  const params = useParams<{feedbackID: string | undefined }>();
  const [feedback, setFeedback] = useState<FeedbackData>();

  useEffect(() => {
    if (params.feedbackID) {
      firebase.getSingleFeedbackForSubmission(params.feedbackID)
      .then((res: FeedbackData) => {
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
        image={joinDesignJam.image}
      />
      <div className='container'>
      {
        feedback ? 
        <div className='feedback'>
          <a href={`${window.location}/../`} className='go-back-btn'><Button>Go Back to All Feedback</Button></a>
          <h3 className='name'>From: {feedback.name ? feedback.name : "Anonymous"}</h3>
          <p><strong>Institution</strong>: {feedback.institution ? feedback.institution : "Not stated"}</p>
          <p><strong>Area of Expertise</strong>: {feedback.expertise ? feedback.expertise : "Not stated"}</p>
          { feedback.shareEmail && feedback.email &&
            <p><strong>Email</strong>: {feedback.email}</p>
          }
          {feedback.questions.map((question, i) => {
            return (
              <div className='response' key={`res-${i}`}>
                <h3><span className='question-label'>Question {i + 1}:</span> {question}</h3>
                <p><span className='response-label'>Response</span>: {feedback.questionResponses[i] ? feedback.questionResponses[i] : "No response"}</p>
              </div>
            )
          })}
          <h3><span className='comment-label'>Comments: <br></br></span> {feedback.comments ? feedback.comments : "No comments"}</h3>
        </div>
        :
        <p>Loading...</p>
      }
      </div>
    </div>
  );
};

export default CommunityFeedbackLayout;
