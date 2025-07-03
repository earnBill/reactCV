export default function GeneralInfoForm({updateGeneralInfo, editGeneralInfo}) {

  return (
    <div className="form-general-info">
      <h3>General Info</h3>
      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={updateGeneralInfo}/>

        <label htmlFor="email">Email</label>
        <input type="email" id="email"/>

        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone"/>

        <button onClick={updateGeneralInfo}>Ok</button>
        <button onClick={editGeneralInfo}>Edit</button>
      </form>
    </div>
    )

}

