import React from 'react';
import PersonalInformation from './PersonalInformation';

function Resume({ personalInfo, handleResumeEdit }) {
  return (
    <div className="resume-grid">
      <PersonalInformation
        personalInfo={personalInfo}
        handleResumeEdit={handleResumeEdit}
      />
    </div>
  );
}

export default Resume;
