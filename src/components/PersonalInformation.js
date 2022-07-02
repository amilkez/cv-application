import React from 'react';

function PersonalInformation({ personalInfo, handleResumeEdit }) {
  const { name, title, phone, mail } = personalInfo;
  return (
    <div className="personal-information__container">
      <h1 className="personal-information__name">{name}</h1>
      <h2 className="personal-information__title">{title}</h2>
      <div className="personal-information__contact">
        <p>{phone}</p>
        <p>{mail}</p>
      </div>
      <button
        className="btn personal-information__btn-info"
        onClick={() => handleResumeEdit(false)}
      >
        Edit Information
      </button>
    </div>
  );
}

export default PersonalInformation;
