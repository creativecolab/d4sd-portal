import React from "react";
import { Row, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import "./styles.less";

const QuestionList = (props: any): JSX.Element => {

  const question1 = props.questions[0];
  const question2 = props.questions[1]
  const question3 = props.questions[2];

  const setResponseValue = props.setResponseValue;

  // get the three answers from local storage
  const answer1 = localStorage.getItem("question1") || "";
  const answer2 = localStorage.getItem("question2") || "";
  const answer3 = localStorage.getItem("question3") || "";

  const comments = localStorage.getItem("comments") || "";

  setResponseValue("question1", answer1);
  setResponseValue("question2", answer2);
  setResponseValue("question3", answer3);
  setResponseValue("comments", comments);


  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    localStorage.setItem(e.target.name, e.target.value);
    setResponseValue(e.target.name, e.target.value)
  };

  return (
    <div id="questionList">
      <Input.Group className="inputs" key={props.submitID}>
        {question1 && <Row>
          <p>
            <b className='question-title'>Question for Potential Users: </b> <br/>
            {question1}
          </p>
          <TextArea
            className='textAreas'
            onChange={handleChange}
            name="question1"
            defaultValue={answer1}
          />
        </Row>}

        {
          question2 &&
          <Row>
            <p>
              <b className='question-title'>Question for Experts: </b> <br/>
              {question2}
            </p>
            <TextArea
              className='textAreas'
              onChange={handleChange}
              name="question2"
              defaultValue={answer2}
            />
          </Row>
        }

        {
          question3 &&
          <Row>
            <p>
              <b className='question-title'>Question for Community Members: </b> <br/>
              {question3}
            </p>
            <TextArea
              className='textAreas'
              onChange={handleChange}
              name="question3"
              defaultValue={answer3}
            />
          </Row>
        }

        <Row>
          <p>
            <b>Your Comments: </b>
            <br></br>
            Please provide general feedback for this idea
          </p>
          <TextArea
            className='textAreas'
            onChange={handleChange}
            name="comments"
          />
        </Row>
      </Input.Group>
    </div>
  );
};

export default QuestionList;
