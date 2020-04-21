import React, { useEffect } from "react";
import useForm from "react-hook-form";
import { Row, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import "./styles.less";
import firebase from '../../../actions/firebase';

const QuestionList = (props: any): JSX.Element => {
  const { register, setValue } = useForm();

  // Need to get these questions from Firebase
  const question1 = props.questions[0];
  const question2 = props.questions[1]

  const question3 = props.questions[2];

  const setResponseValue = props.setResponseValue;

  // get the three answers from local storage
  const answer1 = localStorage.getItem("question1") || "";
  const answer2 = localStorage.getItem("question2") || "";
  const answer3 = localStorage.getItem("question3") || "";

  // eslint-disable-next-line
  const comments = localStorage.getItem("comments") || "";

  setResponseValue("question1", answer1);
  setResponseValue("question2", answer2);
  setResponseValue("question3", answer3);
  setResponseValue("comments", comments);

  // Set the three questions from firebase

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(e.target.name, e.target.value);
    localStorage.setItem(e.target.name, e.target.value);
    setResponseValue(e.target.name, e.target.value)
  };
  useEffect(() => {
    register({ name: "question1" });
    register({ name: "question2" });
    register({ name: "question3" });
    register({ name: "comments" });
  }, []);

  return (
    <div id="questionList">
      <Input.Group className="inputs">
        {question1 && <Row>
          <p>
            <b className='question-title'>Questions for Stakeholders: </b> <br/>
            {question1}
          </p>
          <TextArea
            autoSize={{ minRows: 3, maxRows: 5 }}
            onChange={handleChange}
            name="question1"
            defaultValue={answer1}
          />
        </Row>}

        {
          question2 &&
          <Row>
            <p>
              <b className='question-title'>Question for Potential Users: </b> <br/>
              {question2}
            </p>
            <TextArea
              autoSize={{ minRows: 3, maxRows: 5 }}
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
              <b className='question-title'>Question for Experts: </b> <br/>
              {question3}
            </p>
            <TextArea
              autoSize={{ minRows: 3, maxRows: 5 }}
              onChange={handleChange}
              name="question3"
              defaultValue={answer3}
            />
          </Row>
        }

        <Row>
          <p>
            <b>Comments: </b>
            <br></br>
            Please provide general feedback for this idea
          </p>
          <TextArea
            autoSize={{ minRows: 3, maxRows: 5 }}
            onChange={handleChange}
            name="comments"
          />
        </Row>
      </Input.Group>
    </div>
  );
};

export default QuestionList;
