import { createContext } from 'react';

export interface TeamMember {
  name: string;
  email: string;
}

export interface Submission {
  projectName: string;
  problemDescription: string;
  owner: string;
  solutionPDF: string;
  questions: Array<string>;
  teamMembers: Array<TeamMember>;
}

const SubmissionContext = createContext(
  {} as {
    submission: Submission | undefined;
    setSubmission: Function;}
);

export default SubmissionContext;
