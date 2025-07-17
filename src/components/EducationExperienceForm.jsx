
export default function EducationExperienceForm({enableEducationForm, displayStyle, showEducationForm, updateSchool, updateStudy, updateDate,deleteEducation, updateEducation, cancelEducation, renderEducation}) {
  return (
    <div className="education-section section-style">
      <h2>Education </h2>
      <button onClick={enableEducationForm} style={{display : displayStyle}}>+ Education</button>
      {showEducationForm ? 
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor="school-name">School Name</label>
          <input type="text" name="school-name" id="school-name" onChange={updateSchool}/>
          <label htmlFor="title-of-study">Title of study</label>
          <input type="text" name="title-of-study" id="title-of-study" onChange={updateStudy}/>
          <label htmlFor="date-of-study">Date of study</label>
          <input type="text" name="date-of-study" id="date-of-study" onChange={updateDate}/>
          <button type="button" onClick={updateEducation}>Ok</button>
          <button type="button" onClick={cancelEducation}>Cancel</button>
          <button type="button" onClick={deleteEducation}>Delete</button>
        </form>
        : null
      }
    {renderEducation.education.map((ele,index) => {
      // console.log(ele.schoolName);
      return (
        <div key={index} className="education-entry">{ele.schoolName}</div>
      )
    })}
    </div>
  )
}
