import React from 'react';
import PersonalInformation from './PersonalInformation';
import EducationList from './EducationList';
import WorksList from './WorkExp';

function Resume({ personalInfo, handleResumeEdit, educationList, worksList }) {
  return (
    <div className="resume-grid">
      <PersonalInformation
        personalInfo={personalInfo}
        handleResumeEdit={handleResumeEdit}
      />
      <EducationList educationList={educationList} />
      <WorksList worksList={worksList} />
    </div>
  );
}

export default Resume;
