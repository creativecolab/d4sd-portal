import React, { useState } from "react";
import { Row, Col, Button, message, Modal } from "@d4sd/components";
import ProviderInformation from "./provider-information";
import QuestionList from "./question-list";
import SubmissionPreview from "./submission-preview";
import Header from "../../Header/index";
import { useParams, useHistory } from 'react-router-dom'
import Footer from "../../Footer/index";
import { provideFeedbackContent } from "../../../assets/content";
import firebase from '../../../actions/firebase';
import { Feedback } from "../../../actions/types";

const FeedbackProviderLayout = (): JSX.Element => {

  const history = useHistory();
  const params = useParams<{id: string | undefined}>();
  const [submitState, setSubmitState] = useState('not submitted');
  const [success, setSuccess] = useState(false);
  const [submitID, setSubmitID] = useState<any>();
  const [visible, setVisible] = useState(false);
  const [receiveFeedbackURL, setReceiveFeedbackURL] = useState("");

  const [newFeedbackLink, setNewFeedbackLink] = useState("");

  let localFeedbackCount = localStorage.getItem('d4sd-feedback-counts');
  let feedbackCount = parseInt(localFeedbackCount ? localFeedbackCount : "0");
  

  const onSubmit = () => {

    // Write to firebase
    setSubmitState('submitting');
    
    let questionResponses = [responses.question1, responses.question2, responses.question3]
    let feedback: Feedback = {
      name: responses.name,
      comments: responses.comments,
      institution: responses.institution,
      email: responses.email,
      expertise: responses.expertise,
      submissionID: `${submitID}`,
      shareEmail: responses.shareEmail,
      questionResponses: questionResponses, questions: questions.map((q) => q ? q : "")
    }
    firebase.submitFeedback(feedback).then(() => {
      feedbackCount++;
      localStorage.setItem('d4sd-feedback-counts', feedbackCount.toString());
      if (feedbackCount >= 3) {
        setSuccess(true);
      }
      else {
        setVisible(true);
      }
    }).catch(() => {
      message.error("There was an error with submiting, try again or contact us")
    }).finally(() => {
      setSubmitState('not submitted');
    })
  };
  const API_KEY = "AIzaSyB4YEb9HIR_BeSCGYrgezusX3HSgiWHg9c"
  const sheetID = "1yaDW5Qwzt1OnhMh70Z_HXlsM7MbHPCLq9y3kkkJqWdQ";
  const giveNewFeedbackLink = () => {
    // determine how many submissions there are
    const range = 'A2:A500'
    let uri = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${range}?key=${API_KEY}`
    fetch(uri, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    }).then((res) => res.json()).then((res) => {
      if (res.values === undefined) {
        // shouldn't happen
        message.error("Network error! Try again")
        setVisible(false);
        return;
      } else {
        let numSubmissions = res.values.length;
        // we can choose an id from 2 to numSubmissions
        // assuimng we give feedback providers ideas to give feedback on uniformly and the likelihood of a feedback
        // provider continuing to give feedback after the first n times of feedback, it suffices to just do a rotational
        // shuffle in giving new links.

        // sub 2 to make it 0 indexed. add 1 to rotationally shuffle forward
        let newSubmissionID = ((parseInt(submitID) - 2 + 1) % numSubmissions) + 2;

        // get the secret submit id and redirect
        firebase.getDocumentIDofSubmitID(newSubmissionID.toString()).then((secretSubmitID) => {
          history.push(`/volunteer/provide_feedback/${secretSubmitID}`);
        }).catch(() => {
          message.error("Sorry, we got an error when trying get more submissions for feedback")
        }).finally(() => {
          setVisible(false);
        })
      }
    });
  };

  const [responses, setResponses] = React.useState<any>(
    {
      questionResponses:[],
      comments: "",
      questions: [],
      submissionID: "",
      name: "",
      institution: "",
      email: "",
      expertise: ""
    }
  );

  const setResponseValue = (key: string, value: string) => {
    responses[key] = value;
    setResponses(responses);
  }

  const [submitInfo, setSubmitInfo] = React.useState({});
  const [questions, setQuestions] = React.useState<Array<any>>([]);

  
  React.useEffect(() => {
    const submitSecretID = params.id
    if (feedbackCount >= 3) {
      setSuccess(true);
    }
    else {
      firebase.getSubmitID(submitSecretID).then((res: any) => {
      const submitID = res.submitID;
      setSubmitID(submitID);
      
      const range = `A${submitID}:Z${submitID}`
      
      
      let uri = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${range}?key=${API_KEY}`
      
      fetch(uri, {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      }).then((res) => res.json()).then((res) => {
        if (res.values === undefined) {
          message.error("Invalid submission ID")
          history.push("/");
          return
        }
        let vals = res.values[0];
        setSubmitInfo({
          title: vals[3],
          problemStatement: vals[4],
          pdf: vals[6]
        });
        setQuestions([vals[11], vals[13], vals[18]])
      });
      }).catch(() => {
        message.error("Invalid feedback url");
        history.push("/");
      });
    }
  }, [history.location]);
  return (
    <div className='FeedbackProvider'>
      {
        !success ? 
        <div>
          <Header
            title={provideFeedbackContent.title}
            content={provideFeedbackContent.subInfo}
            image={provideFeedbackContent.image}
          />
          <ProviderInformation setResponseValue={setResponseValue}/>

          <Row className="provideInput" justify='center'>
            <h1>Review and Provide Input</h1>
            <p>Feedback makes the most impact when it is positive, constructive, well-justified, and actionable</p>
          </Row>
          <Row type="flex" justify="center">
            <Col xs={{ span: 20 }} md={{ span: 10 }}>
              <SubmissionPreview submitInfo={submitInfo} />
            </Col>
            <Col xs={{ span: 20 }} md={{ span: 10 }}>
              <QuestionList questions={questions} setResponseValue={setResponseValue} />
            </Col>
          </Row>

          <Row type="flex" justify="center" className="submit-btn-feedback">
            <Col>
              <Button htmlType="submit" type="primary" size="large" onClick={onSubmit} disabled={submitState === 'submitting'}>
                {submitState === 'submitting' ? 'SUBMITTING...' : 'SUBMIT'}
              </Button>
            </Col>
          </Row>

          <Footer />
        </div> :
        <div>
          <Header
            title={provideFeedbackContent.title}
            image={provideFeedbackContent.image}
          />
          <div className='container'>
            <h2>Thank you for your feedback!</h2>
          </div>
        </div>

      }
      <Modal
        className='FeedbackProvider-Modal'
        visible={visible}
        footer={[
          <Button key="back" type="primary-outline" onClick={() => {
            setVisible(false);
            setSuccess(true);
          }}>
            No
          </Button>,
          <Button key="submit" type="primary" onClick={giveNewFeedbackLink}>
            Yes
          </Button>,
        ]}
        >
          <h2 className='modal-title'>Thank you for providing feedback!</h2>
          <p>Would you like to give feedback on an another idea?</p>
        </Modal>
    </div>
  );
};

export default FeedbackProviderLayout;
