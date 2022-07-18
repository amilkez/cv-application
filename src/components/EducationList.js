import React, { useContext } from 'react';
import EducationItem from './EducationItem';
import { ResumeContext } from '../App';

function EducationList({ educationList }) {
  const { handleEducationAdd } = useContext(ResumeContext);
  return (
    <div className="education-list">
      <h2 className="education-header">Education</h2>
      <div>
        {educationList.map((education) => {
          return <EducationItem key={education.id} {...education} />;
        })}
      </div>
      <div className="item__btn-container">
        <button className="btn btn--primary " onClick={handleEducationAdd}>
          Add Education
        </button>
      </div>
    </div>
  );
}

export default EducationList;
