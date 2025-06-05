export default function EducationExperienceForm() {
  return (
    <div>
      <h3>Education Experience</h3>
      <form action="">
        <label htmlFor="school-name">School Name</label>
        <input type="text" name="school-name" id="school-name"/>
        <label htmlFor="title-of-study">Title of study</label>
        <input type="text" name="title-of-study" id="title-of-study" />
        <label htmlFor="date-of-study">Date of study</label>
        <input type="text" name="date-of-study" id="date-of-study" />
        <button>Ok</button>
        <button>Cancel</button>
      </form>
    </div>
  )
}