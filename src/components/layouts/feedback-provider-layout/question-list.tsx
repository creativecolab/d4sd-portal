import React, { useEffect, useState } from 'react'
import useForm from 'react-hook-form'
import { render } from 'react-dom';
import { Row, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import './styles.less'

const QuestionList = (props: any) => {
  const {register, handleSubmit, setValue} = useForm();

  //Need to get these questions from Firebase
  const question1= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  const question2= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  const question3= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."


  //get the three answers from local storage
  const answer1= localStorage.getItem('question1') || '';
  const answer2= localStorage.getItem('question2') || '';
  const answer3= localStorage.getItem('question3') || '';
  const comments= localStorage.getItem('comments') || '';


  //Set the three questions from firebase

  const handleChange = (e:any) => {
    setValue(e.target.name, e.target.value);
    localStorage.setItem(e.target.name, e.target.value);
  }

  useEffect(()=>{
    register({name: 'question1'});
    register({name: 'question2'});
    register({name: 'question3'});
    register({name: 'comments'});
  }, []);

  return(
    <div>
      <h4>Question List</h4>
      <p><b>Please answer the questions below</b></p>

      <Input.Group className="inputs">

        <Row>       
        <p><b>Question 1: </b> {question1}</p>
        <TextArea autoSize={{minRows: 3, maxRows: 5}} 
            onChange={handleChange}
            name="question1" defaultValue={answer1} />
        </Row>

        <Row>       
        <p><b>Question 2: </b> {question2}</p>
        <TextArea autoSize={{minRows: 3, maxRows: 5}}  
            onChange={handleChange}
            name="question2"
            defaultValue={answer2}/>
        </Row>

        <Row>       
        <p><b>Question 3: </b> {question3}</p>
        <TextArea autoSize={{minRows: 3, maxRows: 5}} 
            onChange={handleChange}
            name="question3"
            defaultValue={answer3}/>
        </Row>

        <Row>       
        <p><b>Other Comments: </b></p>
        <TextArea autoSize={{minRows: 3, maxRows: 5}} 
            onChange={handleChange}
            name="comments"/>
        </Row>

        
      </Input.Group>

    </div>
  );
}

export default QuestionList;