import React, { useEffect, useState } from 'react';
import useForm from 'react-hook-form';
import {
  Card, Radio, Button, message, Row, Col, Upload, Icon, Form, Input
} from '@d4sd/components';
import './style.less';
const { TextArea } = Input;

const UploadCard = (props: any) => {
  const [loading, setLoading] = useState("plus");
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data: any) => {
  };

  let [fileList, setFileList] = useState<Array<any>>([]);
  const handleChange = (e: any) => {
    setValue(e.target.name, e.target.value);
  };
  const handleFileChange = (info: any) => {
    console.log(info);
    if (info.fileList.length > 1) {
      //@ts-ignore
      // remove thremoved file
      console.log(uploadInput.current.state.fileList.shift());
    }
    if (info.file.status === "uploading") {
      setLoading("loading");
    }
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);

    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      // the file object is at info.file.originFileObj;
      setLoading("done");

    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
    //setValue(e.target.name, e.target.value);
  }
  const dummyRequest = ({ file, onSuccess }: any) => {
    console.log(file, onSuccess);
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};
const uploadInput = React.createRef();
  useEffect( ()=> {
    setLoading("plus");
  }, []);
  const uploadButton =
        <div className="upload-container">
          {loading != "done" ?
            <div>
              <Icon type={loading} className="upload-icon"/>
              <div className="ant-upload-text">Drag and drop a file here, or click to select file
              (Only *.pdf files will be accepted)</div>
            </div>
            :
            <div className="file-btns">

              <Button className="file-btn" type="primary" onClick={() => {}}>VIEW FILE</Button>
              <Button className="file-btn" type="secondary-outline" onClick={() => {setFileList([]);setLoading("plus")}}>REMOVE</Button>
            </div>
          }
        </div>
  return (
    <div className="UploadCard">
    <div className="upload-body">
    <Row className="">
      <h4>Project: Green Bus Stop</h4>
      <p><b>Team members:</b> Daniel James, Steven James</p>
    </Row>
    <Form layout={'vertical'} onSubmit={handleSubmit(onSubmit)}>
      <Row className="problem-statement">
        <h4>1. Write a Problem Statement (less than 2000 characters)</h4>
        <p>
        Your team can work on any problem related to this year’s theme: How to make San Diego a more sustainable city. It’s the job of you and your team to discover and motivate an important problem to solve.  Your problem definition should be a product of your own research and analysis of the problem space, not simply a replication of the potential themes provided by D4SD. A good problem statement will be grounded by user research (interviews, surveys, and observations) and motivated by statistics.
        </p>
        <TextArea className="problem-statement-input"/>
      </Row>
      <Row className="">
      <h4>2. Propose Initial Concepts (PDF upload)</h4>
      <p>At this point the brainstorming process is more meaningful than a well-constructed final product. Your team can propose multiple solutions for your defined problem statement.  Research shows that feedback is most constructive when options are available. Your submission should be uploaded as a PDF document that clearly describes and illustrates each proposed concept. Include images, mockups, blueprints, models, or any other visual material that will help explain the proposed solutions.  </p>
      <Upload
          name="submissionPDF"
          listType="picture-card"
          className="submission-uploader"
          showUploadList={false}
          onChange={handleFileChange}
          customRequest={dummyRequest}
          //@ts-ignore
          ref={uploadInput}
      >
      {uploadButton}
      </Upload>
      </Row>
      <Row className="bottom-btns"><Button className="bottom-btn" type="primary" onClick={() => {setFileList([]);setLoading("plus")}}>REMOVE</Button>
        <Button className="bottom-btn" type="primary" onClick={() => {props.setSubmitStep("projectInfo")}}>BACK</Button>
        <Button className="bottom-btn" type="primary" htmlType="submit" onClick={() => {props.setSubmitStep("feedback")}}>NEXT</Button>
      </Row>
    </Form>
    </div>
  </div>)
};
export default UploadCard;
