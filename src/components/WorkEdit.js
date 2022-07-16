import React, { useContext } from 'react';
import { ResumeContext } from '../App';

const WorkEdit = ({ work }) => {
  const { handleWorkChange, handleWorkSelect } = useContext(ResumeContext);

  const handleChange = (changes) => {
    handleWorkChange(work.id, { ...work, ...changes });
  };

  return (
    <div className="resume-edit">
      <div className="resume-edit__remove-button-container">
        <button
          className="btn resume-edit__remove-button"
          onClick={() => handleWorkSelect(true)}
        >
          &times;
        </button>
      </div>
      <div className="resume-edit__grid">
        <label htmlFor="position" className="resume-edit__label">
          Position:
        </label>
        <input
          type="text"
          name="position"
          id="position"
          className="resume-edit__input"
          value={work.position}
          onChange={(e) => handleChange({ position: e.target.value })}
        />
        <label htmlFor="company" className="resume-edit__label">
          Company:
        </label>
        <input
          type="text"
          name="company"
          id="company"
          className="resume-edit__input"
          value={work.company}
          onChange={(e) => handleChange({ company: e.target.value })}
        />
        <label htmlFor="year" className="resume-edit__label">
          End Date:
        </label>
        <input
          type="text"
          name="year"
          id="year"
          className="resume-edit__input"
          value={work.endDate}
          onChange={(e) => handleChange({ endDate: e.target.value })}
        />
        <label htmlFor="description" className="resume-edit__label">
          Description:
        </label>
        <textarea
          name="description"
          id="description"
          className="resume-edit__input"
          value={work.description}
          maxLength="180"
          onChange={(e) => handleChange({ description: e.target.value })}
        />
        <div className="resume-edit__save-button-container">
          <button
            className="btn resume-edit__save-button"
            onClick={() => handleWorkSelect(true)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkEdit;
