export default function Resume({personalInfo, educationInfo, experienceInfo}) {
  return (
    <div className="resume-container">
      <div className="resume-top">
        <h1>Person Name</h1>
        <div className="personal-info">
          {personalInfo.name} <br/>
          {personalInfo.email} <br/>
          {personalInfo.phone}
        </div>
      </div>
      <div className="resume-body">
        <div className="education-section">
          <h3>Education</h3>
          <div className="education">
            {educationInfo[0].schoolName} 
            {educationInfo[0].titleStudy}
            {educationInfo[0].dateStudy}   
          </div>
        </div>
        <div className="experience-section">
          <h3>Professional experience</h3>
          <div className="experience">
            {experienceInfo[0].companyName}
            {experienceInfo[0].positionTitle}
            {experienceInfo[0].responsibilities}
          </div>
        </div>
      </div>

    </div>
  )
}