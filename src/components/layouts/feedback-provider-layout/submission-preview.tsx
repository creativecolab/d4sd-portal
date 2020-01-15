import React from 'react'

const SubmissionPreview = (props: any) => {

  //get these details from firebase via axios!
  const projectName = "Lorem Ipsum";
  const teamMembers = ["Person1", "Person2", "Person3", "Person4"];

  return(
    <div>
      <h4>Submission Preview:</h4>

      <p><b>Project: {projectName}</b></p>
      <p><b>Team Members: <ul>{teamMembers}</ul></b></p>
    </div>
  );
}

export default SubmissionPreview;