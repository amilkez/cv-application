import React from 'react';

function ResumeEdit({ personalInfo, setPersonalInfo, handleResumeEdit }) {
  const handlePersonalInfoChange = (changes) => {
    setPersonalInfo((prevInfo) => {
      return { ...prevInfo, ...changes };
    });
  };
  return (
    <div className="resume-edit">
      <div className="resume-edit__remove-button-container">
        <button
          className="btn resume-edit__remove-button"
          onClick={() => handleResumeEdit(true)}
        >
          &times;
        </button>
      </div>
      <div className="resume-edit__grid">
        <label htmlFor="name" className="resume-edit__label">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={personalInfo.name}
          onChange={(e) => handlePersonalInfoChange({ name: e.target.value })}
          className="resume-edit__input"
        />
        <label htmlFor="title" className="resume-edit__label">
          Title:
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={personalInfo.title}
          onChange={(e) => handlePersonalInfoChange({ title: e.target.value })}
          className="resume-edit__input"
        />
        <label htmlFor="phone" className="resume-edit__label">
          Phone:
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={personalInfo.phone}
          onChange={(e) => handlePersonalInfoChange({ phone: e.target.value })}
          className="resume-edit__input"
        />
        <label htmlFor="mail" className="resume-edit__label">
          Email:
        </label>
        <input
          type="email"
          name="mail"
          id="mail"
          value={personalInfo.mail}
          onChange={(e) => handlePersonalInfoChange({ mail: e.target.value })}
          className="resume-edit__input"
        />
        <div className="resume-edit__save-button-container">
          <button
            className="btn resume-edit__save-button"
            onClick={() => handleResumeEdit(true)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResumeEdit;
