import React, { useContext } from 'react';
import SkillItem from './SkillItem';
import { ResumeContext } from '../App';

function SkillsList({ skillsList }) {
  const { handleSkillAdd } = useContext(ResumeContext);
  return (
    <div className="skills-list">
      <h2 className="skills-header">Skills</h2>
      <div>
        {skillsList.map((skill) => {
          return <SkillItem key={skill.id} {...skill} />;
        })}
      </div>
      <div className="item__btn-container">
        <button className="btn btn--primary" onClick={handleSkillAdd}>
          Add Skill
        </button>
      </div>
    </div>
  );
}

export default SkillsList;
