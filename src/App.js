import React, { useState } from 'react';
import './styles/App.css';
import Resume from './components/Resume';
import ResumeEdit from './components/ResumeEdit';

function App() {
  const [personalInfo, setPersonalInfo] = useState(samplePersonalInfo);
  const [displayEdit, setDisplayEdit] = useState(true);

  const handleResumeEdit = (state) => {
    setDisplayEdit(state);
  };

  return (
    <>
      <Resume personalInfo={personalInfo} handleResumeEdit={handleResumeEdit} />
      {displayEdit || (
        <ResumeEdit
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          handleResumeEdit={handleResumeEdit}
        />
      )}
    </>
  );
}

const samplePersonalInfo = {
  name: 'Angel Kaizen',
  title: 'Web Developer',
  phone: '548-878-6532',
  mail: 'example@example.com',
};

export default App;
