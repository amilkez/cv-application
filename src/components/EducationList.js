import React, { useContext } from 'react';
import EducationItem from './EducationItem';
import { ResumeContext } from '../App';

function EducationList({ educationList }) {
  const { handleEducationAdd } = useContext(ResumeContext);
  return (
    <div className="education-list">
      <div>
        {educationList.map((education) => {
          return <EducationItem key={education.id} {...education} />;
        })}
      </div>
      <div className="education-list__add-education-btn-container">
        <button className="btn btn--primary" onClick={handleEducationAdd}>
          Add Education
        </button>
      </div>
    </div>
  );
}

export default EducationList;
