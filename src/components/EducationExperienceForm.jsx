
export default function EducationExperienceForm({updateEducation,editEducation}) {
  return (
    <div>
      <h3>Education </h3>
      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor="school-name">School Name</label>
        <input type="text" name="school-name" id="school-name"/>
        <label htmlFor="title-of-study">Title of study</label>
        <input type="text" name="title-of-study" id="title-of-study" />
        <label htmlFor="date-of-study">Date of study</label>
        <input type="text" name="date-of-study" id="date-of-study" />
        <button onClick={updateEducation}>Ok</button>
        <button onClick={editEducation}>Edit</button>
      </form>
    </div>
  )
}
