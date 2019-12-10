import React, { useEffect, useState } from 'react';
import useForm from 'react-hook-form';
import {
  Card, Radio, Button, message, Row, Col, Input, Form
} from '@d4sd/components';
import './style.less';


const ProjectInfoCard = (props: any) => {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data: any) => {
    if (teammateNames.length == 0) {
      message.error("Missing teammates names!");
      return;
    }
    if (teammateEmails.length == 0) {
      message.error("Missing teammates emails!");
      return;
    }
    for (let i = 0; i < teammateNames.length; i++) {
      if (!data["teammate" + (i) + "-name"]) {
        message.error('Missing name on row ' + (i+1));
        return;
      }
    }
    for (let i = 0; i < teammateEmails.length; i++) {
      if (!data["teammate" + (i) + "-email"]) {
        message.error('Missing email on row ' + (i+1));
        return;
      }
    }
    console.log(data);
    // Add your axios stuff here
    // data.email, data.password
  };
  // register inputs
  useEffect(() => {
    register({ name: 'teammate0-name' });
    register({ name: 'teammate0-email' });
  }, []);
  const handleChange = (e: any) => {
    setValue(e.target.name, e.target.value);
  };
  const handleChangeTeammateName = (e: any) => {
    setValue(e.target.name, e.target.value);
    //const temp : Array<any> = [];
    //temp.push(e.target.value);
    //setTeammateNames(temp);
  };
  const handleChangeTeammateEmail = (e: any) => {
    setValue(e.target.name, e.target.value);
    //const temp : Array<any> = [];
    //temp.push(e.target.value);
    //setTeammateEmails(temp);
  };
  const [teammateNames, setTeammateNames] = useState<Array<String>>([""]);
  const [teammateEmails, setTeammateEmails] = useState<Array<String>>([""]);
  const handleClickAddMember = () => {
    const temp = JSON.parse(JSON.stringify(teammateNames));
    const temp2 = JSON.parse(JSON.stringify(teammateEmails));
    temp.push("");
    temp2.push("");
    register({ name: 'teammate' +teammateNames.length + '-name' });
    register({ name: 'teammate'+teammateNames.length + '-email' });
    setTeammateNames(temp);
    setTeammateEmails(temp2);
  }
  const removeMember = (i: Number) => {
    const temp = JSON.parse(JSON.stringify(teammateNames));
    const temp2 = JSON.parse(JSON.stringify(teammateEmails));
    temp.splice(i,1);
    temp2.splice(i,1);
    setTeammateNames(temp);
    setTeammateEmails(temp2);
  }
  return (
  <div className="ProjectInfoCard">
    <div className="ProjectInfo-body">
    <p>Please provide details here about your team. You have the option of working alone, but we recommend finding a team through the discussion forum or at a D4SD event. If you do not yet have a team, you can skip this and return to it later.  </p>
    <Form layout={'vertical'} onSubmit={handleSubmit(onSubmit)}>
        <Row className="project-info-details" gutter={16}>
          <h4>1. Provide Details about the Team</h4>
          <p>Please provide a unique name for your project (up to 50 characters)</p>
          <Input placeholder="Safe Roads for San Diego" name="name" onChange={handleChange} />
          <h4>2. Team member names and emails</h4>
          <p>If you have any other team members, please click on “Add another teammate” and give their full name and email address. </p>
        </Row>
        <Row className="team-container" gutter={16}>
          <Row>
          <Col span={8}>
            <h3>Name: </h3>
          </Col>
          <Col span={10}>
            <h3>Email: </h3>
          </Col>
          </Row>
        {teammateNames.map((teammateName, i ) => {
          return (
            <Row className="team-input-part" gutter={16} key={"teammate-" + i}>
            <Col span={8}>
              <Input name={"teammate" + i + "-name"} className="nameInput" onChange={handleChangeTeammateName} />
            </Col>
            <Col span={10}>
              <Input name={"teammate" + i + "-email"} className="emailInput" onChange={handleChangeTeammateEmail} />
            </Col>
            <Col span={6}>
              <Button type="secondary-outline" size="medium" onClick={()=>{removeMember(i)}}>REMOVE</Button>
            </Col>
            </Row>
          )
        })}
        <Button type="primary-outline" size="medium" onClick={handleClickAddMember}>ADD A MEMBER</Button>
        </Row>
        <Row className="bottom-btns">
          <Button className="bottom-btn" type="primary" onClick={() => {props.setSubmitStep("start")}}>BACK</Button>
          <Button className="bottom-btn" type="primary" htmlType="submit" onClick={() => {props.setSubmitStep("upload")}}>NEXT</Button>
        </Row>
    </Form>
    </div>
  </div>)
};
export default ProjectInfoCard;
