import React from 'react'
import { render } from 'react-dom'
import Menubar from '../../menubar';
import {Row, Col, Form, Input} from '@d4sd/components'
import ProviderInformation from './provider-information'
import QuestionList from './question-list'
import SubmissionPreview from './submission-preview';

const FeedbackProviderLayout = (props: any) => {

  return(
    <div>

      <Row type="flex" justify="center">
        <Col span={18}>
          <h1>Provide Feedback</h1>
          <p> Welcome and thank you for agreeing to provide feedback! 
          Start by saying a little bit about yourself.  Then please 
          review the team’s concept below on the left and provide 
          feedback on the right. Feedback makes the most impact 
          when it is positive, constructive, well-justified, and actionable.</p>
        </Col>
     
      </Row>
      <ProviderInformation />

      <Row>
        <h1>Review and Provide Input</h1>
      </Row>

      <Row type="flex" justify="center">
        <Col xs={{span: 20}} md={{span: 10}}>
          <SubmissionPreview />
        </Col>
        <Col xs={{span: 20}} md={{span: 10}}>
          <QuestionList />
        </Col>
      </Row>
    </div> 
  );
}

export default FeedbackProviderLayout;