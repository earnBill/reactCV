import GeneralInfoForm from "./components/GeneralInfoForm";
import EducationExperienceForm from "./components/EducationExperienceForm";
import PracticalExperienceForm from "./components/PracticalExperienceForm";
import Resume from "./components/Resume";
import { useState } from "react";


function App() {
  const [school, setSchool] = useState('');
  const [study, setStudy] = useState('');
  const [date, setDate] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [respo, setRespo] = useState('');
  const [from, setFrom] = useState('')
  const [until,setUntil] = useState('')
  const [showEduForm, setShowEduForm] = useState(false);
  const [changeDisplay, setChangeDisplay] = useState('inline-block');
  
  const [updateInfo, setUpdateInfo] = useState({
    general: { 
      name:"Jim Doee",
      email:"jimdoee@gmail.com",
      phone:"6988878785",
      address:'Trikala,Greece'
    },
    education: [{
      schoolName:"IEK Diolkos",
      titleStudy:"Software Dveloper",
      dateStudy:"2004",
    }],
    experience: [{
      companyName:"Microsoft",
      positionTitle:"Developer",
      responsibilities:"Create software",
      from:"",
      until:"",
    }]
  });

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
              displayStyle={changeDisplay}
              enableEducationForm={changeEducationButton}
              showEducationForm={showEduForm}
              updateSchool={changeSchool}
              updateStudy={changeStudy}
              updateDate={changeDate}
              updateEducation={updateEducationInfo} 
              cancelEducation={cancelEducationInfo}
              renderEducation={updateInfo}
            />
            <PracticalExperienceForm 
              updateCompany={changeCompany}
              updatePosition={changePosition}
              updateRespo={changeRespo}
              updateFrom={changeFrom}
              updateUntil={changeUntil}
              updateExperience={updateExperienceInfo} 
              editExperience={editExperienceInfo}
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
    console.log(e.target.value);
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
    setUpdateInfo({...updateInfo, general:{...updateInfo.general, address: e.target.value}});
  }

  function changeEducationButton() {
      setShowEduForm(true);
      setChangeDisplay('none');
  }

  function changeSchool(e) {
    setSchool(e.target.value);
    console.log(school);
  }
  function changeStudy(e) {
    setStudy(e.target.value);
    console.log(study); 
  }
  function changeDate(e) {
    setDate(e.target.value);
    console.log(date);
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
    console.log(e.target.value)
  }
  function changeUntil(e) {
    setUntil(e.target.value);
  }
  function updateEducationInfo(event) {
    console.log('Update education');
    const newEducation = [...updateInfo.education, {
      schoolName: school, 
      titleStudy: study, 
      dateStudy: date 
    }]; 
    const newInfo = {...updateInfo, education: newEducation};
    setUpdateInfo(newInfo);
    setShowEduForm(false);
    setChangeDisplay('inline-block');
    console.log(updateInfo)
  }

  function cancelEducationInfo(event) {
    console.log('Edit education');
    setShowEduForm(false);
    setChangeDisplay('inline-block');
  }

  function updateExperienceInfo(event) {
    console.log('Update experience');
    setUpdateInfo({...updateInfo,
                  experience:[...updateInfo.experience,{
                    companyName: company,
                    positionTitle: position,
                    responsibilities: respo,
                    from:from,
                    until:until
                  }]})
    console.log(updateInfo);
  }

  function editExperienceInfo(event) {
    console.log('Edit experience');
  }

}


export default App


 
 