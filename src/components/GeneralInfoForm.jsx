export default function GeneralInfoForm({updateName, updateEmail, updatePhone, editGeneralInfo}) {

  return (
    <div className="form-general-info section-style">
      <h3>General Info</h3>
      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={updateName}/>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={updateEmail}/>

        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" onChange={updatePhone}/>

        {/* <button onClick={}>Ok</button> */}
        {/* <button onClick={editGeneralInfo}>Edit</button> */}
      </form>
    </div>
    )

}

