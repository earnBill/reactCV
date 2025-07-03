import GeneralInfoForm from "./components/GeneralInfoForm";
import EducationExperienceForm from "./components/EducationExperienceForm";
import PracticalExperienceForm from "./components/PracticalExperienceForm";
import Resume from "./components/Resume";
import { useState } from "react";


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [updateGeneralInfo, setUpdateGeneralInfo] = useState({
    general: { 
      name:"Bill",
      email:"bnbtrikala@gmail.com",
      phone:"6988878785",
    },
    education: [{
      schoolName:"1",
      titleStudy:"1",
      dateStudy:"1",
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
            <GeneralInfoForm updateGeneralInfo={updatelInfo} editGeneralInfo={editGeneralInfo}/>
            <EducationExperienceForm updateEducation={updateEducationInfo} editEducation={editEducationInfo}/>
            <PracticalExperienceForm updateExperience={updateExperienceInfo} editExperience={editExperienceInfo}/>
        </aside>
        <main>
          <h2>Preview CV</h2>
          <Resume 
            personalInfo={updateGeneralInfo.general}
            educationInfo={updateGeneralInfo.education}
            experienceInfo={updateGeneralInfo.experience}
            />
        </main>
      </div>
            <footer>Bill Tas 2025</footer>
    </div>
    );
  
  function updatelInfo(e) {
    setName(e.target.value);
    setUpdateGeneralInfo(updateGeneralInfo.general.name = 'kostas'); 
    console.log(name);
    console.log('Update general info')
  }
  function editGeneralInfo(event) {
    console.log("Edit general info");
  }
  function updateEducationInfo(event) {
    console.log('Update education');
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

 
 