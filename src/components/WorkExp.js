import React, { useContext } from 'react';
import WorkExpItem from './WorkExpItem';
import { ResumeContext } from '../App';

function WorksList({ worksList }) {
  const { handleWorkAdd } = useContext(ResumeContext);
  return (
    <div className="work-exp">
      <h2 className="work-header">Work Experience</h2>
      <div>
        {worksList.map((work) => {
          return <WorkExpItem key={work.id} {...work} />;
        })}
      </div>
      <div className="item__btn-container">
        <button className="btn btn--primary" onClick={handleWorkAdd}>
          Add Work
        </button>
      </div>
    </div>
  );
}

export default WorksList;
