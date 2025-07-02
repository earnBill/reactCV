export default function GeneralInfoForm({updateGeneralInfo}) {
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

        <button onClick={updateGeneralInfo}>Ok</button>
        <button onClick={clearGeneralInfo}>Clear</button>
      </form>
    </div>
    )

}

function clearGeneralInfo(event) {
    event.preventDefault();
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#phone');
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    console.log("Cancel general info");
  }
