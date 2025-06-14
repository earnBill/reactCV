export default function EducationExperienceForm({updateEducation, name, email, phone}) {
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
        <button onClick={updateEducation}>Ok</button>
        <button onClick={updateEducationInfo}>Cancel</button>
      </form>
    </div>
  )
}

function updateEducationInfo(event) {
  event.preventDefault();
  const schoolInput = document.querySelector('#school-name');
  console.log(schoolInput);
}

