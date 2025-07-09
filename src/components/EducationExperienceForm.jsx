
export default function EducationExperienceForm({updateSchool, updateStudy, updateDate, updateEducation,editEducation}) {
  return (
    <div className="section-style">
      <h2>Education </h2>
      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor="school-name">School Name</label>
        <input type="text" name="school-name" id="school-name" onChange={updateSchool}/>
        <label htmlFor="title-of-study">Title of study</label>
        <input type="text" name="title-of-study" id="title-of-study" onChange={updateStudy}/>
        <label htmlFor="date-of-study">Date of study</label>
        <input type="text" name="date-of-study" id="date-of-study" onChange={updateDate}/>
        <button onClick={updateEducation}>Ok</button>
        <button onClick={editEducation}>Edit</button>
      </form>
    </div>
  )
}
