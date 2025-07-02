
export default function EducationExperienceForm({updateEducation, clear, name, email, phone}) {
  return (
    <div>
      <h3>Education </h3>
      <form action="">
        <label htmlFor="school-name">School Name</label>
        <input type="text" name="school-name" id="school-name"/>
        <label htmlFor="title-of-study">Title of study</label>
        <input type="text" name="title-of-study" id="title-of-study" />
        <label htmlFor="date-of-study">Date of study</label>
        <input type="text" name="date-of-study" id="date-of-study" />
        <button onClick={updateEducation}>Ok</button>
        <button onClick={clearEducationInfo}>Clear</button>
      </form>
    </div>
  )
}

function clearEducationInfo(event) {
  event.preventDefault();
  const schoolName = document.querySelector('#school-name');
  const titleOfStudy = document.querySelector('#title-of-study');
  const dateOfStudy = document.querySelector('#date-of-study');
  schoolName.value = '';
  titleOfStudy.value = '';
  dateOfStudy.value = '';
  console.log('Clear education');
}
