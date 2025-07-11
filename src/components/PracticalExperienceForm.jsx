export default function PracticalExperienceForm({updateCompany, updatePosition, updateRespo, updateFrom, updateUntil, updateExperience, editExperience}) {
  return (
    <div className="experience section-style">
        <h2>Experience</h2>
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor="company">Company name</label>
          <input type="text" name="company" id="company" onChange={updateCompany}/>
          <label htmlFor="position">Position title</label>
          <input type="text" name="position" id="position" onChange={updatePosition}/>
          <label htmlFor="responsibilities">Responsibilities</label>
          <textarea name="responsibilities" id="responsibilities" rows={5} onChange={updateRespo}/>
          <label htmlFor="from">From</label>
          <input type="date" name="from" id="from" onChange={updateFrom}/>
          <label htmlFor="until">Until</label>
          <input type="date" name="until" id="until" onChange={updateUntil}/>
          <button onClick={updateExperience}>Ok</button>
          <button onClick={editExperience}>Edit</button>
        </form>
    </div>  
  )
}


