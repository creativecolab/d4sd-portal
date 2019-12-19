import React, { useEffect, useState } from 'react';
import useForm from 'react-hook-form';
import {
  Button, message, Row, Col, Input, Form
} from '@d4sd/components';
import './style.less';

interface ProjectInfoCardIF {
  setSubmitStep(step: string): void;
}

const ProjectInfoCard = (props: ProjectInfoCardIF): JSX.Element => {
  const { setSubmitStep } = props;
  const { register, handleSubmit, setValue } = useForm();
  const [teammateNames, setTeammateNames] = useState<Array<string>>(['']);
  const [teammateEmails, setTeammateEmails] = useState<Array<string>>(['']);

  const saveWork = (): void => {
    localStorage.setItem('teammateNames-d4sd-prelim-submit', JSON.stringify(teammateNames));
    localStorage.setItem('teammateEmails-d4sd-prelim-submit', JSON.stringify(teammateEmails));
  };

  // eslint-disable-next-line
  const onSubmit = (data: any): void => {
    saveWork();
    // eslint-disable-next-line
    console.log(data);
    if (teammateNames.length === 0) {
      message.error('Missing teammates names!');
      return;
    }
    if (teammateEmails.length === 0) {
      message.error('Missing teammates emails!');
      return;
    }
    for (let i = 0; i < teammateNames.length; i += 1) {
      if (!data[`teammate${i}-name`]) {
        message.error(`Missing name on row ${i + 1}`);
        return;
      }
    }
    for (let i = 0; i < teammateEmails.length; i += 1) {
      if (!data[`teammate${i}-email`]) {
        message.error(`Missing email on row ${i + 1}`);
        return;
      }
    }

    // Add your axios stuff here
    // data.email, data.password

    // store in localstroage metadata


    props.setSubmitStep('upload'); // run this after data is stored properly
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.name, e.target.value);
  };

  const handleChangeTeammateName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.name, e.target.value);
    // const temp : Array<any> = [];
    // temp.push(e.target.value);
    // setTeammateNames(temp);
    const i = parseInt(e.target.name[8], 10);
    // eslint-disable-next-line
    console.log(e.target.name, i, 'nameChange');
    const temp = JSON.parse(JSON.stringify(teammateNames));
    temp[i] = e.target.value;
    setTeammateNames(temp);
    // eslint-disable-next-line
    console.log(teammateNames);
  };

  const handleChangeTeammateEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.name, e.target.value);
    // const temp : Array<any> = [];
    const i = parseInt(e.target.name[8], 10);
    // eslint-disable-next-line
    console.log(e.target.name, i, 'emailChange');
    const temp = JSON.parse(JSON.stringify(teammateEmails));
    temp[i] = e.target.value;
    setTeammateEmails(temp);
    // eslint-disable-next-line
    console.log(teammateEmails);
    // temp.push(e.target.value);
    // setTeammateEmails(temp);
  };

  const handleClickAddMember = (): void => {
    const temp = JSON.parse(JSON.stringify(teammateNames));
    const temp2 = JSON.parse(JSON.stringify(teammateEmails));
    temp.push('');
    temp2.push('');
    register({ name: `teammate${teammateNames.length}-name` });
    register({ name: `teammate${teammateNames.length}-email` });
    setTeammateNames(temp);
    setTeammateEmails(temp2);
  };

  const removeMember = (i: number): void => {
    const temp = JSON.parse(JSON.stringify(teammateNames));
    const temp2 = JSON.parse(JSON.stringify(teammateEmails));
    temp.splice(i, 1);
    temp2.splice(i, 1);
    setTeammateNames(temp);
    setTeammateEmails(temp2);
  };

  // register inputs
  useEffect(() => {
    // retreive from localstorage if possible
    const locemails: string | null = localStorage.getItem('teammateEmails-d4sd-prelim-submit');
    let emails;
    if (locemails) {
      emails = JSON.parse(locemails);
      setTeammateEmails(emails);
    } else {
      emails = [];
    }
    const locnames: string | null = localStorage.getItem('teammateNames-d4sd-prelim-submit');
    let names;
    if (locnames) {
      names = JSON.parse(locnames);
      setTeammateNames(names);
    } else {
      names = [];
    }
    for (let i = 0; i < names.length; i += 1) {
      register({ name: `teammate${i}-name` });
      register({ name: `teammate${i}-email` });
      setValue(`teammate${i}-name`, names[i]);
      setValue(`teammate${i}-email`, emails[i]);
    }
    if (names.length === 0) {
      register({ name: 'teammate0-name' });
      register({ name: 'teammate0-email' });
    }
  // eslint-disable-next-line
  }, []);

  return (
    <div className="ProjectInfoCard">
      <div className="ProjectInfo-body">
        {/* eslint-disable-next-line */}
        <p>Please provide details here about your team. You have the option of working alone, but we recommend finding a team through the discussion forum or at a D4SD event. If you do not yet have a team, you can skip this and return to it later.  </p>
        <Form layout="vertical" onSubmit={handleSubmit(onSubmit)}>
          <Row className="project-info-details" gutter={16}>
            <h4>1. Provide Details about the Team</h4>
            <p>Please provide a unique name for your project (up to 50 characters)</p>
            <Input
              placeholder="Safe Roads for San Diego" name="name" onChange={handleChange}
              className="project-name-input"
            />
            <h4>2. Team member names and emails</h4>
            {/* eslint-disable-next-line */}
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
            {teammateNames.map((teammateName, i) => (
              // eslint-disable-next-line
              <Row className="team-input-part" gutter={16} key={`teammate-${i}`}>
                <Col span={8}>
                  <Input
                    name={`teammate${i}-name`} className="nameInput" onChange={handleChangeTeammateName}
                    value={teammateName}
                  />
                </Col>
                <Col span={10}>
                  <Input
                    name={`teammate${i}-email`} className="emailInput" onChange={handleChangeTeammateEmail}
                    value={teammateEmails[i]}
                  />
                </Col>
                <Col span={6}>
                  <Button type="secondary-outline" size="medium" onClick={(): void => { removeMember(i); }}>REMOVE</Button>
                </Col>
              </Row>
            ))}
            <Button type="primary-outline" size="medium" onClick={handleClickAddMember}>ADD A MEMBER</Button>
          </Row>
          <Row className="bottom-btns">
            <Button className="bottom-btn" type="primary" onClick={(): void => { saveWork(); setSubmitStep('start'); }}>BACK</Button>
            <Button className="bottom-btn" type="primary" htmlType="submit">NEXT</Button>
          </Row>
        </Form>
      </div>
    </div>
  );
};
export default ProjectInfoCard;
