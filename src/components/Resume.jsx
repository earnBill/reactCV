export default function Resume({personalInfo, educationInfo, experienceInfo}) {
  return (
    <div className="resume-container">
      <div className="resume-top">
        <div className="personal-info">
          <h1>{personalInfo.name}</h1>
          <div className="personal-details">
            <div className="email">{personalInfo.email}</div> 
            <div className="phone">{personalInfo.phone}</div>
          </div>
          
        </div>
      </div>
      <div className="resume-body">
        <div className="education-section">
          <h3>Education</h3>
          <div className="education">
            {educationInfo.map((educ, index) => {
              if(index) {
                return (
                <div key={index}>
                  {educ.schoolName}, {educ.titleStudy}, {educ.dateStudy} 
                </div>
                );
              }
            })}    
          </div>
        </div>
        <div className="experience-section">
          <h3>Professional experience</h3>
          <div className="experience">
            {experienceInfo.map((exp, index) => {
              return (
                <div key={index}>
                  {exp.companyName}, {exp.positionTitle}, {exp.responsibilities}, 
                  <div>{exp.from} {'-'} {exp.until}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  )
}