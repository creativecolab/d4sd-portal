import React, { useState } from 'react';
import {
  Row, Input
} from '@d4sd/components';
import { Button } from 'antd';
// import Menubar from '../../menubar/index';
import { useDropzone } from 'react-dropzone';
import './style.less';

type TeamMembersType = {
  [key: string]: {
    name: string;
    email: string;
  };
}

type ProblemType = {
  [key: string]: {
    description: string;
    pdf: File;
  };
}

type InputType = React.ChangeEvent<HTMLTextAreaElement>;

const SubmissionLayout = (): JSX.Element => {
  const [projectName, setProjectName] = useState<string>('');
  const [members, setMembers] = useState<TeamMembersType>({});
  const [problems, setProblems] = useState<ProblemType>({});
  const teamkey = 'teammember';
  const defaultMember = { name: '', email: '' };
  const defaultProblem = { description: '', pdf: null as any }; // eslint-disable-line

  React.useEffect(() => {
    setMembers({ teammember1: defaultMember });
    setProblems({ problem1: defaultProblem, problem2: defaultProblem, problem3: defaultProblem });
  }, []);

  const addTeamMember = (): void => {
    setMembers({ ...members, [`${teamkey}${Object.keys(members).length + 1}`]: defaultMember });
  };

  const setTeamMember = (member: string, key: string, value: string): void => {
    setMembers({ ...members, [member]: { ...members[member], [key]: value } });
  };

  const memberFields = (): JSX.Element[] => Object.keys(members).map((member) => {
    const memberObj = members[member];

    return (
      <React.Fragment key={member}>
        <Input
          key={`memberFields_name_${member}`}
          addonBefore="Name:"
          value={memberObj.name}
          onChange={(evt: InputType): void => setTeamMember(member, 'name', evt.target.value)}
        />
        <Input
          key={`memberFields_email_${member}`}
          addonBefore="Email:"
          value={memberObj.email}
          onChange={(evt: InputType): void => setTeamMember(member, 'email', evt.target.value)}
        />
      </React.Fragment>
    );
  });

  const problemFields = (): JSX.Element[] => Object.keys(problems).map((problem, index) => (
    <React.Fragment key={problem}>
      <Input addonBefore={`Problem ${index + 1} Description:`} />
      <Input addonBefore={`Problme ${index + 1} PDF:`} />
    </React.Fragment>
  ));

  const handleSubmit = (): void => {
    console.log(members);
  };

  return (
    <div>
      <div className="SubmissionLayout">
        <Row className="heading">
          <h1>Submissions</h1>
        </Row>
        {/* Would be better to use a form for form control later */}
        <Row className="card-container">
          <div id="submission-card">
            <Input
              addonBefore="Project name:"
              value={projectName}
              onChange={(evt: InputType): void => setProjectName(evt.target.value)}
            />
            <div style={{ marginTop: 24 }} />
            {memberFields()}
            <Button
              icon="plus"
              onClick={addTeamMember}
            />
            <div style={{ marginTop: 24 }} />
            {problemFields()}
            <div style={{ marginTop: 24 }} />
            <Input addonBefore="Feedback Q1:" />
            <Input addonBefore="Feedback Q2:" />
            <Input addonBefore="Feedback Q3:" />
            <Input addonBefore="Expertise:" />
          </div>
          <div style={{ marginTop: 24 }} />
          <Button onClick={handleSubmit}>Submit</Button>
        </Row>
      </div>
    </div>
  );
};
export default SubmissionLayout;
