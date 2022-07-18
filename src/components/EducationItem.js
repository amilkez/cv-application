import React, { useContext } from 'react';
import { ResumeContext } from '../App';

function EducationItem(props) {
  const { title, school, endDate, id } = props;
  const { handleEducationDelete, handleEducationSelect } =
    useContext(ResumeContext);

  return (
    <div className="education-item">
      <button
        onClick={() => handleEducationDelete(id)}
        className="item__btn-remove item__btn"
      >
        &times;
      </button>
      <h3 className="item__header-3">{title}</h3>
      <p className="item__para">{school}</p>
      <p className="item__para">{endDate}</p>
      <button
        onClick={() => handleEducationSelect(id)}
        className="item__btn-edit item__btn"
      >
        Edit Education
      </button>
    </div>
  );
}

export default EducationItem;
