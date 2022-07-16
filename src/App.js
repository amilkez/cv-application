import React, { useState } from 'react';
import './styles/App.css';
import Resume from './components/Resume';
import ResumeEdit from './components/ResumeEdit';
import { v4 as uuid } from 'uuid';
import EducationEdit from './components/EducationEdit';

const ResumeContext = React.createContext();

function App() {
  const [displayEdit, setDisplayEdit] = useState(true);
  const [personalInfo, setPersonalInfo] = useState(samplePersonalInfo);

  const [educationList, setEducationList] = useState(sampleEducation);
  const [selectedEducationId, setSelectedEducationId] = useState();

  const handleResumeEdit = (state) => {
    setDisplayEdit(state);
  };

  const selectedEducationItem = educationList.find(
    (educationItem) => educationItem.id === selectedEducationId,
  );

  const handleEducationAdd = () => {
    const newEducation = {
      id: uuid(),
      title: '',
      school: '',
      endDate: '',
    };
    setSelectedEducationId(newEducation.id);
    setEducationList([...educationList, newEducation]);
  };

  const handleEducationDelete = (id) => {
    if (selectedEducationId != null && selectedEducationId === id) {
      setSelectedEducationId(undefined);
    }
    setEducationList(educationList.filter((education) => education.id !== id));
  };

  const handleEducationChange = (id, item) => {
    const newEducationItems = [...educationList];
    const index = newEducationItems.findIndex(
      (education) => education.id === id,
    );
    newEducationItems[index] = item;
    setEducationList(newEducationItems);
  };

  const handleEducationSelect = (id) => {
    setSelectedEducationId(id);
  };

  const resumeContextValue = {
    handleEducationAdd,
    handleEducationDelete,
    handleEducationSelect,
    handleEducationChange,
  };

  return (
    <ResumeContext.Provider value={resumeContextValue}>
      <>
        <Resume
          personalInfo={personalInfo}
          handleResumeEdit={handleResumeEdit}
          educationList={educationList}
          setEducationList={setEducationList}
        />
        {displayEdit || (
          <ResumeEdit
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
            handleResumeEdit={handleResumeEdit}
          />
        )}
        {selectedEducationItem && (
          <EducationEdit education={selectedEducationItem} />
        )}
      </>
    </ResumeContext.Provider>
  );
}

const samplePersonalInfo = {
  name: 'Your Name',
  title: 'Your Profession',
  phone: '555-555-5555',
  mail: 'example@example.com',
};

const sampleEducation = [
  { title: 'Computer Science', school: 'College', endDate: 2018, id: uuid() },
  { title: '', school: 'Highschool', endDate: 2019, id: uuid() },
];

export default App;
export { ResumeContext };
