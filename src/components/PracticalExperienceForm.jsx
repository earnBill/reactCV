export default function PracticalExperienceForm({updateExperience}) {
  return (
    <div className="experience">
        <h3>Experience</h3>
        <form action="">
          <label htmlFor="company">Company name</label>
          <input type="text" name="company" id="company" key='bill'/>
          <label htmlFor="position">Position title</label>
          <input type="text" name="position" id="position"/>
          <label htmlFor="responsibilities">Responsibilities</label>
          <input type="text" name="responsibilities" id="responsibilities" />
          <label htmlFor="from">From</label>
          <input type="date" name="from" id="from" />
          <label htmlFor="until">Until</label>
          <input type="date" name="until" id="until" />
          <button onClick={updateExperience}>Ok</button>
          <button onClick={clearExperience}>Clear</button>
        </form>
    </div>  
  )
}


function clearExperience(event) {
  event.preventDefault();
  const company = document.querySelector('#company');
  const position = document.querySelector('#position');
  const responsibilities = document.querySelector('#responsibilities');
  const from = document.querySelector('#from');
  const until = document.querySelector('#until');

  company.value = '';
  position.value = '';
  responsibilities.value = '';
  from.value = '';
  until.value = '';

  console.log('Clear experience')
}