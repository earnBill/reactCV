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
  const [updateInfo, setUpdateInfo] = useState({
    general: { 
      name:"Bill",
      email:"bnbtrikala@gmail.com",
      phone:"6988878785",
    },
    education: [{
      schoolName:"",
      titleStudy:" ",
      dateStudy:"",
    }],
    experience: [{
      companyName:"Bnb",
      positionTitle:"IT Technician",
      responsibilities:"Fix Computers",
      from:"",
      until:"",
    }]
  });

  return (
    <div className="container">
      <header>
        <h1>CV Builder</h1>
      </header>
      <div className="main-container">
        <aside>
          <h2>Your Info</h2>
            <GeneralInfoForm 
              updateName={changeName} 
              updateEmail={changeMail}
              updatePhone={changePhone} 
              editGeneralInfo={editGeneralInfo}
            />
            <EducationExperienceForm 
              updateSchool={changeSchool}
              updateStudy={changeStudy}
              updateDate={changeDate}
              updateEducation={updateEducationInfo} 
              editEducation={editEducationInfo}
            />
            <PracticalExperienceForm 
              updateCompany={changeCompany}
              updateExperience={updateExperienceInfo} 
              editExperience={editExperienceInfo}
              />
        </aside>
        <main>
          <h2>Preview CV</h2>
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
  function editGeneralInfo(event) {
    console.log("Edit general info");
  }
  function updateEducationInfo(event) {
    console.log('Update education');
    const newEducation = [...updateInfo.education, {
      schoolName: school, 
      titleStudy: study, 
      dateStudy: date 
    }]; 
    // newEducation[0] = {
    //    ...newEducation[0], 
    //   schoolName: school, 
    //   titleStudy: study, 
    //   dateStudy: date 
    // };
    const newInfo = {...updateInfo, education: newEducation};
    setUpdateInfo(newInfo);
    console.log(updateInfo)
  }
  function editEducationInfo(event) {
    console.log('Edit education');
  }
  function updateExperienceInfo(event) {
    console.log('Update experience');
  }
  function editExperienceInfo(event) {
    console.log('Edit experience');
  }

}


export default App

 
 