export default function Resume({personalInfo, educationInfo, experienceInfo}) {
  return (
    <div className="resume-container">
      <div className="resume-top">
        <h1>Person Name</h1>
        <div className="personal-info">
          {personalInfo}
        </div>
      </div>
      <div className="resume-body">
        <div className="education-section">
          <h3>Education</h3>
          <div className="education">
            {educationInfo}    
          </div>
        </div>
        <div className="experience-section">
          <h3>Professional experience</h3>
          <div className="experience">
            {experienceInfo}
          </div>
        </div>
      </div>

    </div>
  )
}