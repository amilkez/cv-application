import React, { useContext } from 'react';
import WorkExpItem from './WorkExpItem';
import { ResumeContext } from '../App';

function WorksList({ worksList }) {
  const { handleWorkAdd } = useContext(ResumeContext);
  return (
    <div className="work-exp">
      <div>
        {worksList.map((work) => {
          return <WorkExpItem key={work.id} {...work} />;
        })}
      </div>
      <div className="work-exp education-btn-container">
        <button className="btn btn--primary" onClick={handleWorkAdd}>
          Add Work
        </button>
      </div>
    </div>
  );
}

export default WorksList;
