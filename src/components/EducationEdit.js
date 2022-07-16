import React, { useContext } from 'react';
import { ResumeContext } from '../App';

const EducationEdit = ({ education }) => {
  const { handleEducationChange, handleEducationSelect } =
    useContext(ResumeContext);

  const handleChange = (changes) => {
    handleEducationChange(education.id, { ...education, ...changes });
  };

  return (
    <div className="resume-edit">
      <div className="resume-edit__remove-button-container">
        <button
          className="btn resume-edit__remove-button"
          onClick={() => handleEducationSelect(true)}
        >
          &times;
        </button>
      </div>
      <div className="resume-edit__grid">
        <label htmlFor="name" className="resume-edit__label">
          Title:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="resume-edit__input"
          value={education.title}
          onChange={(e) => handleChange({ title: e.target.value })}
        />
        <label htmlFor="title" className="resume-edit__label">
          School:
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="resume-edit__input"
          value={education.school}
          onChange={(e) => handleChange({ school: e.target.value })}
        />
        <label htmlFor="year" className="resume-edit__label">
          End Date:
        </label>
        <input
          type="text"
          name="year"
          id="year"
          className="resume-edit__input"
          value={education.endDate}
          onChange={(e) => handleChange({ endDate: e.target.value })}
        />
        <div className="resume-edit__save-button-container">
          <button
            className="btn resume-edit__save-button"
            onClick={() => handleEducationSelect(true)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationEdit;
