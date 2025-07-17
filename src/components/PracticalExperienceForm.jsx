export default function PracticalExperienceForm({enableExperienceForm, displayStyle, showExperienceForm, updateCompany, updatePosition, updateRespo, updateFrom, updateUntil, updateExperience, editExperience, deleteExperience, renderExperience}) {
  return (
    <div className="experience section-style">
        <h2>Experience</h2>
        <button onClick={enableExperienceForm} style={{display : displayStyle}}>+ Experience</button>
        {showExperienceForm ? 
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
            <button onClick={deleteExperience}>Delete</button>
        </form>
        : null
        }
        {console.log(renderExperience)}
        {renderExperience.experience.map((ele,index) => {
          console.log(ele.companyName);
          return (
            <div key={index} className="experience-entry">{ele.companyName}</div>  
          )
        })
        }
        
    </div>  
  )
}


