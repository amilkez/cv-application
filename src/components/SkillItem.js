import React, { useContext } from 'react';
import { ResumeContext } from '../App';

function SkillItem(props) {
  const { skill, id } = props;
  const { handleSkillDelete, handleSkillSelect } = useContext(ResumeContext);

  return (
    <div className="skill-item">
      <button
        onClick={() => handleSkillDelete(id)}
        className="item__btn item__btn-remove"
      >
        &times;
      </button>
      <h3 className="item__header-3">{skill}</h3>

      <button
        onClick={() => handleSkillSelect(id)}
        className="item__btn item__btn-edit"
      >
        Edit Skill
      </button>
    </div>
  );
}
export default SkillItem;
