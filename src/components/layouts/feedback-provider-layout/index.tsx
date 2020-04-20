import React from "react";
import { Row, Col, Button, message } from "@d4sd/components";
import ProviderInformation from "./provider-information";
import QuestionList from "./question-list";
import SubmissionPreview from "./submission-preview";
import Header from "../../Header/index";
import { useParams, useHistory } from 'react-router-dom'
import Footer from "../../Footer/index";
import { provideFeedbackContent } from "../../../assets/content";

const FeedbackProviderLayout = (): JSX.Element => {

  const history = useHistory();
  const params = useParams<{id: string | undefined}>();
  
  const onSubmit = (data: any) => {
    console.log(data);
    // Write to firebase
  };
  const [submitInfo, setSubmitInfo] = React.useState({});
  const [questions, setQuestions] = React.useState<Array<any>>([]);

  
  React.useEffect(() => {
    const submitID = params.id
    const sheetID = "1f7tTp91Y5zsvgEUXRoptL0ZDR1PMoR3jewBuYY_7GQc";
    const range = `A${submitID}:Z${submitID}`
    const API_KEY = "AIzaSyB4YEb9HIR_BeSCGYrgezusX3HSgiWHg9c"
    
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
      
      console.log(vals);
      setSubmitInfo({
        title: vals[3],
        problemStatement: vals[4],
      });
      setQuestions([vals[11], vals[13], vals[18]])
    });
  }, []);
  return (
    <div>
      <Header
        title={provideFeedbackContent.title}
        content={provideFeedbackContent.subInfo}
        image={provideFeedbackContent.image}
      />
      <ProviderInformation />

      <Row className="provideInput">
        <h1>Review and Provide Input</h1>
      </Row>

      <Row type="flex" justify="center">
        <Col xs={{ span: 20 }} md={{ span: 10 }}>
          <SubmissionPreview submitInfo={submitInfo}/>
        </Col>
        <Col xs={{ span: 20 }} md={{ span: 10 }}>
          <QuestionList questions={questions} />
        </Col>
      </Row>

      <Row type="flex" justify="center" className="submit-btn-feedback">
        <Col>
          <Button htmlType="submit" type="primary" size="large">
            SUBMIT
          </Button>
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default FeedbackProviderLayout;
