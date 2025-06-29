import GeneralInfoForm from "./components/GeneralInfoForm";
import EducationExperienceForm from "./components/EducationExperienceForm";
import PracticalExperienceForm from "./components/PracticalExperienceForm";
import Resume from "./components/Resume";
import { useState } from "react";

// const cvData = {
//   general: { 
//       name:"Bill",
//       email:"bnbtrikala@gmail.com",
//       phone:"",
//   },
//   education: [{
//     schoolName:"",
//     titleStudy:"",
//     dateStudy:"",
//   }],
//   experience: [{
//     companyName:"",
//     positionTitle:"",
//     responsibilities:"",
//     from:"",
//     until:"",
//   }]
// };


function App() {
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
            <GeneralInfoForm />
            <EducationExperienceForm updateEducation={updatelInfo}/>
            <PracticalExperienceForm />
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
  
  function updatelInfo(event) {
    event.preventDefault();
    const schoolInput = document.querySelector('#school-name');
    const titleofStudy = document.querySelector('#title-of-study');
    const dateOfStudy = document.querySelector('#date-of-study');
    // newEducation = {...updateGeneralInfo.education}
    const newInfo = {...updateGeneralInfo, education: {...updateGeneralInfo.education, schoolName:schoolInput.value}};
    setUpdateGeneralInfo(newInfo);
    console.log(schoolInput.value);
    console.log(newInfo);
    console.log(updateGeneralInfo.education)
  }
}


export default App

 
 