import React, { useContext } from 'react';
import { ResumeContext } from '../App';

const SkillEdit = ({ skill }) => {
  const { handleSkillChange, handleSkillSelect } = useContext(ResumeContext);

  const handleChange = (changes) => {
    handleSkillChange(skill.id, { ...skill, ...changes });
  };

  return (
    <div className="resume-edit">
      <div className="resume-edit__remove-button-container">
        <button
          className="btn resume-edit__remove-button"
          onClick={() => handleSkillSelect(true)}
        >
          &times;
        </button>
      </div>
      <div className="resume-edit__grid">
        <label htmlFor="position" className="resume-edit__label">
          Skill:
        </label>
        <input
          type="text"
          name="skill"
          id="skill"
          className="resume-edit__input"
          value={skill.skill}
          onChange={(e) => handleChange({ skill: e.target.value })}
        />

        <div className="resume-edit__save-button-container">
          <button
            className="btn resume-edit__save-button"
            onClick={() => handleSkillSelect(true)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillEdit;
