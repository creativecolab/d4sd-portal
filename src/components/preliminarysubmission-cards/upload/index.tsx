import React, { useEffect, useState } from 'react';
import useForm from 'react-hook-form';
import {
  Card, Radio, Button, message, Row, Col, Upload, Icon, Form
} from '@d4sd/components';
import './style.less';
const { TextArea } = Input;

const UploadCard = (props: any) => {
  const [loading, setLoading] = useState("plus");
  useEffect( ()=> {
    setLoading("plus");
  }, []);
  const uploadButton =
        <div className="upload-container">
          <Icon type={loading} className="upload-icon"/>
          <div className="ant-upload-text">Drag and drop a file here, or click to select file
(Only *.pdf files will be accepted)</div>
        </div>
  return (
    <div className="UploadCard">
    <div className="upload-body">
    <Row className="">
      <h4>Project: Green Bus Stop</h4>
      <p><b>Team members:</b> Daniel James, Steven James</p>
    </Row>
    <Form layout={'vertical'} onSubmit={handleSubmit(onSubmit)}>
      <Row className="">
      <h4>1. Write a Problem Statement (less than 2000 characters)</h4>
      <p>
      Your team can work on any problem related to this year’s theme: How to make San Diego a more sustainable city. It’s the job of you and your team to discover and motivate an important problem to solve.  Your problem definition should be a product of your own research and analysis of the problem space, not simply a replication of the potential themes provided by D4SD. A good problem statement will be grounded by user research (interviews, surveys, and observations) and motivated by statistics.
      </p>
      <textarea />
      </Row>
      <Row className="">
      <h4>2. Propose Initial Concepts (PDF upload)</h4>
      <p>At this point the brainstorming process is more meaningful than a well-constructed final product. Your team can propose multiple solutions for your defined problem statement.  Research shows that feedback is most constructive when options are available. Your submission should be uploaded as a PDF document that clearly describes and illustrates each proposed concept. Include images, mockups, blueprints, models, or any other visual material that will help explain the proposed solutions.  </p>
      <Upload
          name="avatar"
           listType="picture-card"
          className="submission-uploader"
          showUploadList={false}
      >
      {uploadButton}
      </Upload>
      </Row>
      <Row className="bottom-btns">
        <Button className="bottom-btn" type="primary" onClick={() => {props.setSubmitStep("start")}}>BACK</Button>
        <Button className="bottom-btn" type="primary" htmlType="submit" onClick={() => {props.setSubmitStep("upload")}}>NEXT</Button>
      </Row>
    </Form>
    </div>
  </div>)
};
export default UploadCard;
