
export default function EducationExperienceForm({
  enableEducationForm, 
  displayStyle, 
  showEducationForm, 
  updateSchool, 
  updateStudy, 
  updateDate,
  schoolNameIn,
  studyIn,
  dateIn,
  deleteEducation, 
  updateEducation,
  updateExistingEducation, 
  cancelEducation, 
  renderEducation, 
  editEducation,
  displayStyleOk,
  displayStyleUpdate
}) {
  return (
    <div className="education-section section-style">
      <h2>Education </h2>
      <button onClick={enableEducationForm} style={{display : displayStyle}}>+ Education</button>
      {showEducationForm ? 
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor="school-name">School Name</label>
          <input type="text" name="school-name" value={schoolNameIn} id="school-name" onChange={updateSchool}/>
          <label htmlFor="title-of-study">Title of study</label>
          <input type="text" name="title-of-study" value={studyIn} id="title-of-study" onChange={updateStudy}/>
          <label htmlFor="date-of-study">Date of study</label>
          <input type="text" name="date-of-study" value={dateIn} id="date-of-study" onChange={updateDate}/>
          <button type="button" onClick={updateEducation} style={{display : displayStyleOk}}>Ok</button>
          <button type="button" onClick={updateExistingEducation} style={{display : displayStyleUpdate}}>Update</button>
          <button type="button" onClick={cancelEducation}>Cancel</button>
          <button type="button" onClick={deleteEducation}>Delete</button>
        </form>
        : null
      }
    {renderEducation.education.map((ele,index) => {
      // console.log(ele.schoolName);
      return (
        <div key={index} style={{display:displayStyle}} onClick={editEducation} className="education-entry" id={ele.id}>{ele.schoolName}</div>
      )
    })}
    </div>
  )
}
