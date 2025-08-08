export default function GeneralInfoForm({
  updateName, 
  updateEmail, 
  updatePhone, 
  updateAddress,
  nameValue,
  emailValue,
  phoneValue,
  addressValue
}) {

  return (
    <div className="form-general-info section-style">
      <h2>Personal Details</h2>
      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={updateName} value={nameValue}/>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={updateEmail} value={emailValue}/>

        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" onChange={updatePhone} value={phoneValue}/>

        <label htmlFor="address">Address</label>
        <input type="text" id="address" onChange={updateAddress} value={addressValue}/>
        {/* <button onClick={}>Ok</button> */}
        {/* <button onClick={editGeneralInfo}>Edit</button> */}
      </form>
    </div>
    )

}

