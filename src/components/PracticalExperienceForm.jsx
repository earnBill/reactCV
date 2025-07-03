export default function PracticalExperienceForm({updateExperience, editExperience}) {
  return (
    <div className="experience">
        <h3>Experience</h3>
        <form onSubmit={e => e.preventDefault()}>
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
          <button onClick={editExperience}>Edit</button>
        </form>
    </div>  
  )
}


