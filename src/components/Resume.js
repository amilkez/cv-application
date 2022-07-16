import React from 'react';
import PersonalInformation from './PersonalInformation';
import EducationList from './EducationList';

function Resume({ personalInfo, handleResumeEdit, educationList }) {
  return (
    <div className="resume-grid">
      <PersonalInformation
        personalInfo={personalInfo}
        handleResumeEdit={handleResumeEdit}
      />
      <EducationList educationList={educationList} />
    </div>
  );
}

export default Resume;
