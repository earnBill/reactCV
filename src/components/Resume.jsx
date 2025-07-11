export default function Resume({personalInfo, educationInfo, experienceInfo}) {
  return (
    <div className="resume-container">
      <div className="resume-top">
        <div className="personal-info">
          <h1>{personalInfo.name}</h1>
          <div className="personal-details">
            <div className="email">{personalInfo.email}</div> 
            <div className="phone">{personalInfo.phone}</div>
            <div className="address">{personalInfo.address}</div>
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
                <div key={index} className="education-info">
                  <div className="education-study-section">
                    <p className="education-info-study">{educ.dateStudy}</p>
                  </div>
                  <div className="education-school-section">
                    <p className="education-info-schoolName">{educ.schoolName}</p> 
                    <p className="education-info-study">{educ.titleStudy}</p>
                  </div>
                   
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
              if (index) {
              return (
                <div key={index} className="experience-info">
                  <div className="experience-date-section">
                    <p>{exp.from} {'-'} {exp.until}</p>
                  </div> 
                  <div className="experience-job-section">
                    <p className="experience-info-company">{exp.companyName}</p>
                    <p>{exp.positionTitle}</p>
                    <p>{exp.responsibilities}</p>
                  </div>
                </div>
              );
            }
            })}
          </div>
        </div>
      </div>

    </div>
  )
}