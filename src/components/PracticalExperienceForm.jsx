export default function PracticalExperienceForm({
  enableExperienceForm, 
  displayStyle, 
  showExperienceForm, 
  updateCompany, 
  updatePosition, 
  updateRespo, 
  updateFrom, 
  updateUntil,
  companyIn,
  positionIn,
  respoIn,
  fromIn,
  untilIn, 
  updateExperience,
  updateExistExperience, 
  displayStyleOk,
  displayStyleUpdate,
  cancelExperience, 
  deleteExperience, 
  renderExperience, 
  editExperience
}) {
  return (
    <div className="experience section-style">
        <h2>Experience</h2>
        <button onClick={enableExperienceForm} style={{display : displayStyle}}>+ Experience</button>
        {showExperienceForm ? 
          <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="company">Company name</label>
            <input type="text" name="company" id="company" value={companyIn} onChange={updateCompany}/>
            <label htmlFor="position">Position title</label>
            <input type="text" name="position" id="position" value={positionIn} onChange={updatePosition}/>
            <label htmlFor="responsibilities">Responsibilities</label>
            <textarea name="responsibilities" id="responsibilities" value ={respoIn} rows={5} onChange={updateRespo}/>
            <label htmlFor="from">Start Date</label>
            <input type="text" name="from" id="from" value={fromIn} onChange={updateFrom}/>
            <label htmlFor="until">End Date</label>
            <input type="text" name="until" id="until" value={untilIn} onChange={updateUntil}/>
            <button type="button" onClick={updateExperience} style={{display : displayStyleOk}}>Ok</button>
            <button type="button" onClick={updateExistExperience} style={{display : displayStyleUpdate}}>Update</button>
            <button type="button" onClick={cancelExperience}>Cancel</button>
            <button type="button" onClick={deleteExperience}>Delete</button>
        </form>
        : null
        }
        {console.log(renderExperience)}
        {renderExperience.experience.map((ele,index) => {
          return (
            <div key={index} onClick={editExperience}  className="experience-entry" id={ele.id}>{ele.companyName}</div>  
          )
        })
        }
        
    </div>  
  )
}


