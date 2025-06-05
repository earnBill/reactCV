export default function GeneralInfoForm() {
  return (
    <div className="form-general-info">
      <h3>General Info</h3>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" id="name"/>

        <label htmlFor="email">Email</label>
        <input type="email" id="email"/>

        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone"/>

        <button>Ok</button>
        <button>Cancel</button>
      </form>
    </div>
    )
}