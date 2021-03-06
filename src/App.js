import React, { useState } from 'react';
import './styles/App.css';
import Resume from './components/Resume';
import ResumeEdit from './components/ResumeEdit';
import { v4 as uuid } from 'uuid';
import EducationEdit from './components/EducationEdit';
import WorkEdit from './components/WorkEdit';
import SkillEdit from './components/SkillEdit';

const ResumeContext = React.createContext();

function App() {
  const [displayEdit, setDisplayEdit] = useState(true);
  const [personalInfo, setPersonalInfo] = useState(samplePersonalInfo);

  const [educationList, setEducationList] = useState(sampleEducation);
  const [selectedEducationId, setSelectedEducationId] = useState();

  const [worksList, setWorksList] = useState(sampleWorks);
  const [selectedWorkId, setSelectedWorkId] = useState();

  const [skillsList, setSkillsList] = useState(sampleSkills);
  const [selectedSkillId, setSelectedSkillId] = useState();

  const handleResumeEdit = (state) => {
    setDisplayEdit(state);
  };

  const selectedEducationItem = educationList.find(
    (educationItem) => educationItem.id === selectedEducationId,
  );

  const selectedWorkItem = worksList.find(
    (workItem) => workItem.id === selectedWorkId,
  );

  const selectedSkillItem = skillsList.find(
    (skillItem) => skillItem.id === selectedSkillId,
  );

  const handleSkillAdd = () => {
    const newSkill = {
      id: uuid(),
      skill: '',
    };
    setSelectedSkillId(newSkill.id);
    setSkillsList([...skillsList, newSkill]);
  };

  const handleSkillDelete = (id) => {
    if (selectedSkillId != null && selectedSkillId === id) {
      setSelectedSkillId(undefined);
    }
    setSkillsList(skillsList.filter((skill) => skill.id !== id));
  };

  const handleSkillChange = (id, item) => {
    const newSkillItems = [...skillsList];
    const index = newSkillItems.findIndex((skill) => skill.id === id);
    newSkillItems[index] = item;
    setSkillsList(newSkillItems);
  };

  const handleSkillSelect = (id) => {
    setSelectedSkillId(id);
  };

  /********************** */

  const handleWorkAdd = () => {
    const newWork = {
      id: uuid(),
      position: '',
      company: '',
      endDate: '',
    };
    setSelectedWorkId(newWork.id);
    setWorksList([...worksList, newWork]);
  };

  const handleWorkDelete = (id) => {
    if (selectedWorkId != null && selectedWorkId === id) {
      setSelectedWorkId(undefined);
    }
    setWorksList(worksList.filter((work) => work.id !== id));
  };

  const handleWorkChange = (id, item) => {
    const newWorkItems = [...worksList];
    const index = newWorkItems.findIndex((education) => education.id === id);
    newWorkItems[index] = item;
    setWorksList(newWorkItems);
  };

  const handleWorkSelect = (id) => {
    setSelectedWorkId(id);
  };

  //********************* */

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
    handleWorkAdd,
    handleWorkDelete,
    handleWorkSelect,
    handleWorkChange,
    handleSkillAdd,
    handleSkillDelete,
    handleSkillSelect,
    handleSkillChange,
  };

  return (
    <ResumeContext.Provider value={resumeContextValue}>
      <>
        <Resume
          personalInfo={personalInfo}
          handleResumeEdit={handleResumeEdit}
          educationList={educationList}
          setEducationList={setEducationList}
          worksList={worksList}
          skillsList={skillsList}
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
        {selectedWorkItem && <WorkEdit work={selectedWorkItem} />}
        {selectedSkillItem && <SkillEdit skill={selectedSkillItem} />}
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

const sampleWorks = [
  { position: '', company: '', endDate: '', description: '', id: uuid() },
  { position: '', company: '', endDate: '', description: '', id: uuid() },
];

const sampleSkills = [
  { skill: '', id: uuid() },
  { skill: '', id: uuid() },
];

export default App;
export { ResumeContext };
