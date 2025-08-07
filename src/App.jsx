import GeneralInfoForm from "./components/GeneralInfoForm";
import EducationExperienceForm from "./components/EducationExperienceForm";
import PracticalExperienceForm from "./components/PracticalExperienceForm";
import Resume from "./components/Resume";
import { useState } from "react";


function App() {
  const [eduId, setEduId] = useState(1);
  const [expId, setExpId] = useState(1);
  const [school, setSchool] = useState('');
  const [study, setStudy] = useState('');
  const [date, setDate] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [respo, setRespo] = useState('');
  const [from, setFrom] = useState('')
  const [until,setUntil] = useState('')
  const [showEduForm, setShowEduForm] = useState(false);
  const [changeDisplayEdu, setChangeDisplayEdu] = useState('inline-block');
  const [showExpForm, setShowExpForm] = useState(false);
  const [changeDisplayExp, setChangeDisplayExp] = useState('inline-block');
  const [changeDisplayOk, setChangeDisplayOk] = useState('block');
  const [changeDisplayUpdate, setChangeDisplayUpdate] = useState('none')
  
  
  const [experienceId, setExperienceId] = useState('');
  const [educationId, setUEducationId] = useState('');

  const [updateInfo, setUpdateInfo] = useState({
    general: { 
      name:"Jim Doee",
      email:"jimdoee@gmail.com",
      phone:"6988878785",
      address:'Trikala,Greece'
    },
    education: [{
      id: eduId,
      schoolName:"IEK Diolkos",
      titleStudy:"Software Dveloper",
      dateStudy:"2004",
    }],
    experience: [{
      id: expId,
      companyName:"Microsoft",
      positionTitle:"Developer",
      responsibilities:"Create software",
      from:"",
      until:"",
    }]
  });
  console.log(updateInfo);
  return (
    <div className="app">
      <header>
        <h1>CV Builder</h1>
      </header>
      <div className="main-container">
        <aside>
            <GeneralInfoForm 
              updateName={changeName} 
              updateEmail={changeMail}
              updatePhone={changePhone} 
              updateAddress={changeAddress}
            />
            <EducationExperienceForm 
              displayStyle={changeDisplayEdu}
              enableEducationForm={changeEducationButton}
              showEducationForm={showEduForm}
              updateSchool={changeSchool}
              updateStudy={changeStudy}
              updateDate={changeDate}
              updateEducation={updateEducationInfo} 
              cancelEducation={cancelEducationInfo}
              renderEducation={updateInfo}
              editEducation={editEducationInfo}
              deleteEducation={deleteEducationInfo}
              updateExistingEducation={updateExistingEducationInfo}
              schoolNameIn={school}
              studyIn={study}
              dateIn={date}
              displayStyleOk={changeDisplayOk}
              displayStyleUpdate={changeDisplayUpdate}
            />
            <PracticalExperienceForm 
              displayStyle={changeDisplayExp}
              enableExperienceForm={changeExperienceButton}
              showExperienceForm={showExpForm}
              updateCompany={changeCompany}
              updatePosition={changePosition}
              updateRespo={changeRespo}
              updateFrom={changeFrom}
              updateUntil={changeUntil}
              updateExperience={updateExperienceInfo}
              companyIn={company}
              positionIn={position}
              respoIn={respo}
              fromIn={from}
              untilIn={until} 
              cancelExperience={cancelExperienceInfo}
              renderExperience={updateInfo}
              editExperience={editExperienceInfo}
              updateExistExperience={updateExistExperienceInfo}
              displayStyleOk={changeDisplayOk}
              displayStyleUpdate={changeDisplayUpdate}
            />
        </aside>
        <main>
          <Resume 
            personalInfo={updateInfo.general}
            educationInfo={updateInfo.education}
            experienceInfo={updateInfo.experience}
            />
        </main>
      </div>
            <footer>Bill Tas 2025</footer>
    </div>
    );
  
  function changeName(e) {
    const newName = {...updateInfo.general, name: e.target.value}
    const newInfo = {...updateInfo, general: newName}
    setUpdateInfo(newInfo);
    // setUpdateInfo({...updateInfo, general :{...updateInfo.general, name: e.target.value}}); 
    console.log('Update general info')
  }

  function changeMail(e) {
    const newMail = {...updateInfo.general, email: e.target.value};
    const newInfo = {...updateInfo, general: newMail};
    setUpdateInfo(newInfo);
  }
  function changePhone(e) {
    const newPhone = {...updateInfo.general, phone: e.target.value}
    const newInfo = {...updateInfo, general: newPhone};
    setUpdateInfo(newInfo);
  }

  function changeAddress(e) {
    setUpdateInfo({...updateInfo, general:{
                   ...updateInfo.general, 
                   address: e.target.value}
                  });
  }

  function changeEducationButton() {
      setShowEduForm(true);
      setChangeDisplayEdu('none');
      setChangeDisplayUpdate('none');
      setChangeDisplayOk('inline-block');
  }

  function changeSchool(e) {
    setSchool(e.target.value);
  }
  function changeStudy(e) {
    setStudy(e.target.value);
  }
  function changeDate(e) {
    setDate(e.target.value);
  }
  function changeCompany(e) {
    setCompany(e.target.value);
  }
  function changePosition(e) {
    setPosition(e.target.value);
  }
  function changeRespo(e) {
    setRespo(e.target.value);
  }
  function changeFrom(e) {
    setFrom(e.target.value);
  }
  function changeUntil(e) {
    setUntil(e.target.value);
  }
  function updateEducationInfo() {
    console.log('Update education');
    const newEduId = eduId + 1;
    setEduId(newEduId);
    const newEducation = [...updateInfo.education, {
      id: newEduId,
      schoolName: school, 
      titleStudy: study, 
      dateStudy: date 
    }]; 
    const newInfo = {...updateInfo, education: newEducation};
    setUpdateInfo(newInfo);
    setShowEduForm(false);
    setChangeDisplayEdu('inline-block');
    setChangeDisplayOk('inline-block');
    clearEducationFields();
  }

  function cancelEducationInfo(event) {
    console.log('cancel education');
    setShowEduForm(false);
    setChangeDisplayEdu('inline-block');
    clearEducationFields();
  }

  function editEducationInfo(e) {
    console.log('edit education');
    setUEducationId(e.target.id)
    updateInfo.education.map(ele => {
      if(ele.id == e.target.id) {
        setSchool(ele.schoolName)
        setStudy(ele.titleStudy)
        setDate(ele.dateStudy)
      }
   })
    setShowEduForm(true);
    setChangeDisplayEdu('none');
    setChangeDisplayOk('none');
    setChangeDisplayUpdate('inline-block');
  }

  function updateExistingEducationInfo(e) {
    const newEditEducation = updateInfo.education.map(ele => {
      if (ele.id == educationId) {
        console.log('its same education')
        return {
          ...ele,
          schoolName: school,
          titleStudy: study,
          dateStudy: date
        }
      }
      return ele;
    })
    console.log('update existing education ');
    setUpdateInfo({...updateInfo, education:[...newEditEducation]})
    setShowEduForm(false);
    setChangeDisplayEdu('inline-block');
    clearEducationFields();
    
  }

  function deleteEducationInfo() {
    console.log('delete education');
    console.log(educationId);
    const newEducation = updateInfo.education.filter(ele => {
      if (ele.id != educationId) {
        console.log(ele);
        return ele;
      } 
    })
    console.log(newEducation);
    setUpdateInfo({...updateInfo, education:[...newEducation]});
    setShowEduForm(false);
    setChangeDisplayEdu('inline-block');
    clearEducationFields();
  }

  function changeExperienceButton(event) {
    setShowExpForm(true);
    setChangeDisplayExp('none');
    setChangeDisplayUpdate('none');
    setChangeDisplayOk('inline-block');
  }

  function updateExperienceInfo(event) {
    console.log('Update experience');
    const newExpId = expId + 1;
    setExpId(newExpId);
    setUpdateInfo({...updateInfo,
                  experience:[...updateInfo.experience,{
                    id: newExpId,
                    companyName: company,
                    positionTitle: position,
                    responsibilities: respo,
                    from:from,
                    until:until
                  }]})
    setShowExpForm(false);
    setChangeDisplayExp('inline-block')
    setChangeDisplayUpdate('none');
    clearExperienceFields();
  }

  function cancelExperienceInfo(event) {
    console.log('Edit experience');
    setShowExpForm(false);
    setChangeDisplayExp('inline-block')
    clearExperienceFields();
  }

  function editExperienceInfo(e) {
    setExperienceId (e.target.id);
    console.log('edit experience');
    updateInfo.experience.find(ele => {
      if(ele.id == e.target.id) {
        setCompany(ele.companyName);
        setPosition(ele.positionTitle);
        setRespo(ele.responsibilities);
        setFrom(ele.from);
        setUntil(ele.until);
      }
     
    })
    setShowExpForm(true);
    setChangeDisplayExp('none');
    setChangeDisplayOk('none');
    setChangeDisplayUpdate('inline-block');
  }

  function updateExistExperienceInfo(e) {
    const updatedExperience = updateInfo.experience.map(ele => {
      if (ele.id == experienceId) { 
        return {
          ...ele, 
          companyName: company,
          positionTitle: position,
          responsibilities: respo,
          from: from,
          until: until
        }
      }
      return ele;
    })
    console.log('change experience')
    setUpdateInfo({...updateInfo,experience:[...updatedExperience]});
    setShowExpForm(false);
    setChangeDisplayExp('inline-block');
    clearExperienceFields();
}
  function clearEducationFields() {
    setSchool('');
    setStudy('');
    setDate('');
  }

  function clearExperienceFields() {
    setCompany('');
    setPosition('');
    setRespo('');
    setFrom('');
    setUntil('');
  }

}

export default App


 
 