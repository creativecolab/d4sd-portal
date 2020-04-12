import React from "react";
import { Row, Col, Button } from "@d4sd/components";
import ProviderInformation from "./provider-information";
import QuestionList from "./question-list";
import SubmissionPreview from "./submission-preview";
import Header from "../../Header/index";
import Footer from "../../Footer/index";
import { provideFeedbackContent } from "../../../assets/content";

const FeedbackProviderLayout = (): JSX.Element => {
  /* eslint-disable */
  const onSubmit = (data: any) => {
    console.log(data);
    // Write to firebase
  };
  /* eslint-enable */

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
          <SubmissionPreview />
        </Col>
        <Col xs={{ span: 20 }} md={{ span: 10 }}>
          <QuestionList />
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
