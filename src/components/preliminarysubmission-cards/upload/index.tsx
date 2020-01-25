import React, { useEffect, useState } from 'react';
import useForm from 'react-hook-form';
import {
  Button, message, Row, Upload, Icon, Form, Input
} from '@d4sd/components';
import './style.less';
import { Progress } from 'antd';
import useFirebaseUpload from '../../../actions/useFirebaseUpload';

const { TextArea } = Input;

interface UploadCardIF {
  setSubmitStep(step: string): void;
}

const UploadCard = (props: UploadCardIF): JSX.Element => {
  const { setSubmitStep } = props;
  const [
    {
      data, isLoading, isError, progress
    },
    setFileData
  ] = useFirebaseUpload('submission');
  const { register, handleSubmit, setValue } = useForm();
  const [disabledUpload, setUploadDisabled] = useState(false);
  // eslint-disable-next-line
  const [fileList, setFileList] = useState<Array<any>>([]);

  /* eslint-disable */
  const saveWork = () => {
    let text: any = document.getElementsByClassName('problem-statement-input')[0];
    // @ts-ignore
    text = text.value; // the text input for problem statement
    localStorage.setItem('problemstatement-d4sd-prelim-submit', text);
  };
  /* eslint-enable */

  const onSubmit = (): void => {
    saveWork();
    // text input is
    // const problemStatement = localStorage.getItem('problemstatement-d4sd-prelim-submit');
    // fileUploaded is the file uploaded
    setSubmitStep('feedback');
  };

  useEffect(() => {
    register({ name: 'problemStatement' });
  // eslint-disable-next-line
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.name, e.target.value);
    saveWork();
  };

  /* eslint-disable */
  const handleFileChange = (info: any): void => {
    console.log(info);
    setFileData(info.file.originFileObj);
    setUploadDisabled(true);
  };

  useEffect(() => {
    console.log(data);
    if (data?.downloadUrl) {
      message.success(`${data.metaData.name} file uploaded successfully`);
    }
  }, [isError, data]);

  useEffect(() => {
    const problemStatementStored = localStorage.getItem('problemstatement-d4sd-prelim-submit');
    if (problemStatementStored) {
      const text = document.getElementsByClassName('problem-statement-input')[0];
      // @ts-ignore
      text.value = problemStatementStored; // the text input for problem statement
    }
  }, []);
  /* eslint-enable */

  const uploadButton = (
    <div className="upload-container">
      {data === undefined ? (
        <div>
          <Icon type="plus" className="upload-icon" />
          <div className="ant-upload-text">
              Drag and drop a file here, or click to select file
              (Only *.pdf files will be accepted)
          </div>
        </div>
      )
        : (
          <div>
            <p className="filename">{data?.metaData.name}</p>
            <div className="file-btns">
              {/* eslint-disable-next-line */}
              <Button className="file-btn" type="primary" onClick={(): void => { const win = window.open(data?.downloadUrl, '_blank'); win!.focus(); }}>VIEW FILE</Button>
              <Button className="file-btn" type="secondary-outline" onClick={(): void => { setFileList([]); setUploadDisabled(false); }}>REMOVE</Button>
            </div>
          </div>
        )}
    </div>
  );
  return (
    <div className="UploadCard">
      <div className="upload-body">
        <Row className="">
          <h4>Project: Green Bus Stop</h4>
          <p>
            <b>Team members:</b>
            {' '}
Daniel James, Steven James
          </p>
        </Row>
        <Form layout="vertical" onSubmit={handleSubmit(onSubmit)}>
          <Row className="problem-statement">
            <h4>1. Write a Problem Statement (less than 2000 characters)</h4>
            <p>
              {/* eslint-disable-next-line */}
              Your team can work on any problem related to this year’s theme: How to make San Diego a more sustainable city. It’s the job of you and your team to discover and motivate an important problem to solve.  Your problem definition should be a product of your own research and analysis of the problem space, not simply a replication of the potential themes provided by D4SD. A good problem statement will be grounded by user research (interviews, surveys, and observations) and motivated by statistics.
            </p>
            <TextArea className="problem-statement-input" name="problemStatement" onChange={handleChange} />
          </Row>
          <Row className="">
            <h4>2. Propose Initial Concepts (PDF upload)</h4>
            {/* eslint-disable-next-line */}
            <p>At this point the brainstorming process is more meaningful than a well-constructed final product. Your team can propose multiple solutions for your defined problem statement.  Research shows that feedback is most constructive when options are available. Your submission should be uploaded as a PDF document that clearly describes and illustrates each proposed concept. Include images, mockups, blueprints, models, or any other visual material that will help explain the proposed solutions.  </p>
            {progress && !isError
              && (<Progress percent={progress?.value} status="active" />)}
            {!isLoading && isError
              && (<Progress percent={progress?.value} status="exception" />)}
            {!!data && !isError
              && (<Progress percent={100} />)}
            <Upload
              accept=".pdf"
              disabled={disabledUpload}
              name="submissionPDF"
              listType="picture-card"
              className="submission-uploader"
              showUploadList={false}
              onChange={handleFileChange}
            >
              {uploadButton}
            </Upload>
          </Row>
          <Row className="bottom-btns">
            <Button className="bottom-btn" type="primary" onClick={(): void => { saveWork(); setSubmitStep('projectInfo'); }}>BACK</Button>
            <Button className="bottom-btn" type="primary" htmlType="submit">NEXT</Button>
          </Row>
        </Form>
      </div>
    </div>
  );
};
export default UploadCard;
