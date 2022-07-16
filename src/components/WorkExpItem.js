import React, { useContext } from 'react';
import { ResumeContext } from '../App';

function WorkExpItem(props) {
  const { position, company, endDate, description, id } = props;
  const { handleWorkDelete, handleWorkSelect } = useContext(ResumeContext);

  return (
    <div className="work-item">
      <button onClick={() => handleWorkDelete(id)}>&times;</button>
      <h3>{position}</h3>
      <p>{company}</p>
      <p>{endDate}</p>
      <p>{description}</p>
      <button onClick={() => handleWorkSelect(id)}>Edit Work</button>
    </div>
  );
}
export default WorkExpItem;
