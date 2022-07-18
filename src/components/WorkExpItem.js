import React, { useContext } from 'react';
import { ResumeContext } from '../App';

function WorkExpItem(props) {
  const { position, company, endDate, description, id } = props;
  const { handleWorkDelete, handleWorkSelect } = useContext(ResumeContext);

  return (
    <div className="work-item">
      <button
        onClick={() => handleWorkDelete(id)}
        className="item__btn-remove item__btn"
      >
        &times;
      </button>
      <h3 className="item__header-3">{position}</h3>
      <p className="item__para">{company}</p>
      <p className="item__para">{endDate}</p>
      <p className="item__para">{description}</p>
      <button
        onClick={() => handleWorkSelect(id)}
        className="item__btn-edit item__btn"
      >
        Edit Work
      </button>
    </div>
  );
}
export default WorkExpItem;
