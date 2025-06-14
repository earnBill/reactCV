import GeneralInfoForm from "./GeneralInfoForm";
import EducationExperienceForm from "./EducationExperienceForm";
import PracticalExperienceForm from "./PracticalExperienceForm";
import Resume from "./Resume";
import { useState } from "react";

const cvData = {
  general: { 
      name:"Bill",
      email:"bnbtrikala@gmail.com",
      phone:"",
  },
  education: [{
    schoolName:"",
    titleStudy:"",
    dateStudy:"",
  }],
  experience: [{
    companyName:"",
    positionTitle:"",
    responsibilities:"",
    from:"",
    until:"",
  }]
}; 

export default function Container() {
  const [updateGeneralInfo, setUpdateGeneralInfo] = useState({
    general: { 
      name:"Bill",
      email:"bnbtrikala@gmail.com",
      phone:"6988878785",
    },
    education: [{
      schoolName:"",
      titleStudy:"",
      dateStudy:"",
    }],
    experience: [{
      companyName:"",
      positionTitle:"",
      responsibilities:"",
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
            personalInfo={updateGeneralInfo.general.name +   
              updateGeneralInfo.general.email + 
              updateGeneralInfo.general.phone}
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
  const newInfo = {...updateGeneralInfo, education: {...updateGeneralInfo.education, schoolName:'5'}};
  setUpdateGeneralInfo(newInfo);
  console.log(schoolInput.value);
  console.log(newInfo);
  console.log(updateGeneralInfo.education)
}
}




