import React, { useState, useEffect } from 'react';
import {
  Row, FeedbackActionCard, message, Spin, Skeleton
} from '@d4sd/components';
import Header from '../../Header/index';
import CopyURL from '../../copy-url';
import './style.less';
import { useParams } from 'react-router-dom'
import { joinDesignJam } from '../../../assets/content';
import firebase from '../../../actions/firebase';
import { FeedbackData } from '../../../actions/types';

const CommunityFeedbackLayout = (): JSX.Element => {
  const params = useParams<{id: string | undefined }>();
  const [linkToFeedback, setLinkToFeedback] = useState('LINK TO FEEDBACK');
  const [feedbackCards, setFeedbackCards] = useState({cards: []});
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  // move this .env later
  const API_KEY = "AIzaSyB4YEb9HIR_BeSCGYrgezusX3HSgiWHg9c"
  const sheetID = "1yaDW5Qwzt1OnhMh70Z_HXlsM7MbHPCLq9y3kkkJqWdQ";

  useEffect(() => {
    if (params.id) {
      let newLink = `${window.location.origin}/volunteer/provide_feedback/${params.id}`;
      setLinkToFeedback(newLink);
      firebase.getSubmitID(params.id).then((res: any) => {
        const range = `A${res.submitID}:Z${res.submitID}`
        let uri = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${range}?key=${API_KEY}`
        fetch(uri, {
          method: 'GET',
          headers: {
            Accept: 'application/json'
          }
        }).then((res) => res.json()).then((res) => {
          let vals = res.values[0];
          if (vals != undefined) {
            let titleval = vals[3];
            let nameval = vals[1];
            setName(nameval);
            setTitle(titleval);
          }
        });
      }).catch((error) => {
        console.error('couldn\'t get the names', error);
      })
      
      firebase.getFeedbackForSubmission(params.id)
      .then((res: Array<FeedbackData>) => {
        if (res.length) {
          
          let newContent = {
            cards: []
          }
          let cards: any = [];
          res.forEach((feedback) => {
            let url = window.location.href;
            if (url[url.length - 1] === '/') {
              url = `${url}${feedback.documentID}`
            }
            else {
              url = `${url}/${feedback.documentID}`
            }
            cards.push({
              name: feedback.name ? feedback.name : "Anonymous",
              dateBack: feedback.created,
              feedbacklink: url
            });
          });
          newContent.cards = cards;
          setFeedbackCards(newContent);
        }
        else {
          message.warn("You have received no feedback yet! Check again later");
        }
      }).finally(() => {
        setLoading(true);
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
          
          
          { loading ? 
            [<Row className="row">
            <p>
              {name && 
              <div>
                <b>Designer: {name}</b>
                <br />
                <b>Project: {title}</b>
              </div>
              }
            </p>
            <p>
              Share the link below to more people to if you want to get more
              feedback on this submission:
            </p>
          </Row>,
          <Row className="row">
            <CopyURL link={linkToFeedback} />
          </Row>,
          <Row className="row">
            <p>
              Click each card to view feedback on your project. This feedback
              could be from the D4SD community network, or from your friends and
              colleagues. Please provide a rating on each point of feedback so
              that we can improve the system.
            </p>
          </Row>,
          <div className="feedback">
            {feedbackCards.cards.map((data, i) => <FeedbackActionCard key={`feedback-${i}`} card={data} />)}
          </div>]
          : [<p>Loading your feedback!</p>,<Skeleton />]
        }
        </div>
      </div>
    </div>
  );
};

export default CommunityFeedbackLayout;
