import React, { useContext } from 'react';
import { ResumeContext } from '../App';

function EducationItem(props) {
  const { title, school, endDate, id } = props;
  const { handleEducationDelete, handleEducationSelect } =
    useContext(ResumeContext);

  return (
    <div className="education-item">
      <button onClick={() => handleEducationDelete(id)}>&times;</button>
      <h3>{title}</h3>
      <p>{school}</p>
      <p>{endDate}</p>
      <button onClick={() => handleEducationSelect(id)}>Edit Education</button>
    </div>
  );
}

export default EducationItem;
