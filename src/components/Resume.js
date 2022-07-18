import React from 'react';
import PersonalInformation from './PersonalInformation';
import EducationList from './EducationList';
import WorksList from './WorkExp';
import SkillsList from './SkillsList';

function Resume({
  personalInfo,
  handleResumeEdit,
  educationList,
  worksList,
  skillsList,
}) {
  return (
    <div className="resume-grid">
      <PersonalInformation
        personalInfo={personalInfo}
        handleResumeEdit={handleResumeEdit}
      />
      <EducationList educationList={educationList} />
      <div className="list-wrapper">
        <WorksList worksList={worksList} />
        <SkillsList skillsList={skillsList} />
      </div>
    </div>
  );
}

export default Resume;
