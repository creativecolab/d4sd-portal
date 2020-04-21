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
  const params = useParams<{id: string | undefined }>();
  const [linkToFeedback, setLinkToFeedback] = useState('LINK TO FEEDBACK');
  const location = useLocation();
  const [feedbackCards, setFeedbackCards] = useState({cards: []});
  // signupStep
  useEffect(() => {
    if (params.id) {
      let newLink = `${window.location.origin}/volunteer/provide_feedback/${params.id}`;
      setLinkToFeedback(newLink);
      firebase.getFeedbackForSubmission(params.id)
      .then((res: Array<FeedbackData>) => {
        if (res.length) {
          let submitID = res[0].submissionID;
          
          let newContent = {
            cards: []
          }
          let cards: any = [];
          res.forEach((feedback) => {
            cards.push({
              name: feedback.name ? feedback.name : "Anonymous",
              dateBack: feedback.created,
              feedbacklink: `${window.location.href}/${feedback.documentID}`
            });
          });
          newContent.cards = cards;
          setFeedbackCards(newContent);
        }
        else {
          message.warn("You have received no feedback yet! Check again later");
        }
      });
    }
  }, []);
  return (
    <div>
      <div className="CommunityFeedbackLayout">
      <Header
        title={"Community Feedback"}
        // content={joinDesignJam.content1}
        image={joinDesignJam.image}
      />

        <div className="content">
          <Row className="row">
            <p>
              Share the link below to more people to if you want to get more
              feedback on this submission:
            </p>
          </Row>
          <Row className="row">
            <CopyURL link={linkToFeedback} />
          </Row>
          <Row className="row">
            <p>
              Click each card to view feedback on your project. This feedback
              could be from the D4SD community network, or from your friends and
              colleagues. Please provide a rating on each point of feedback so
              that we can improve the system.
            </p>
          </Row>
        </div>
        <div className="feedback">
          { feedbackCards ? 
            feedbackCards.cards.map((data, i) => <FeedbackActionCard key={`feedback-${i}`} card={data} />)
            :
            <p>Loading Feedback...</p>
          }
        </div>
      </div>
    </div>
  );
};

export default CommunityFeedbackLayout;
