
function Form() {
  return (
    <form action="">
      <h4>Student Name</h4>
      <div className="container name-group">
        <div>
          <input type="text" /><br />
          <label htmlFor="firstname">First Name</label>
        </div>
        <div>
          <input type="text" /><br />
          <label htmlFor="lastname">Middle Name</label>
        </div>
        <div>
          <input type="text" /><br />
          <label htmlFor="lastname">Last Name</label>
        </div>
      </div>
      <div className="container">
        <div className="date-group">
          <h4>Birth Date</h4>
          <div className="select">
            <select /* onChange={selectMonth()} */ name="option" id="month"></select><br />
            <label htmlFor="month">Month</label>
          </div>
          <div className="select">
            <select name="option" id="day"></select><br />
            <label htmlFor="day">Day</label>
          </div>
          <div className="select">
            <select /* onChange={selectYear(this)} */ name="option" id="year"></select><br />
            <label htmlFor="year">Year</label>
          </div>
        </div>
        <div className="gender-group">
          <h4>Gender</h4>
          <div className="select">
            <select name="option" id="gender"></select>
          </div>
        </div>
      </div>
      <div className="form-group margin-bottom-25">
        <h4>Address</h4>
        <input type="text" /><br />
        <label htmlFor="street">Street Address</label>
      </div>
      <div className="form-group margin-bottom-25">
        <input type="text" /><br />
        <label htmlFor="streetLineTwoLabel">Street Address Line 2</label>
      </div>
      <div className="container form-group-into-two-collumn">
        <div>
          <select /* onChange={selectCity(this)} */ name="city" id="city"></select>
          <label htmlFor="city">City</label>
        </div>
        <div>
          <select /* onChange={selectState(this)} */ name="state" id="state"></select>
          <label htmlFor="state">State / Province</label>
        </div>
      </div>
      <div className="form-group margin-bottom-25">
        <input type="text" /><br />
        <label htmlFor="postcode">Postal / Zip code</label>
      </div>
      <div className="container form-group-into-two-collumn">
        <div>
          <h4>Student E-mail</h4>
          <input type="text" name="email" id="email" placeholder="ex: myname@example.com" />
          <p>example@example.com</p>
        </div>
        <div>
          <h4>Mobile Number</h4>
          <input type="text" name="mobileNumber" id="number" placeholder="+370 600 00000" />
          <p>+370 600 00000</p>
        </div>
      </div>
      <div className="container form-group-into-two-collumn">
        <div>
          <h4>Phone Number</h4>
          <input type="text" name="phoneNumber" id="number" placeholder="+37060000000" />
          <p>+37060000000</p>
        </div>
        <div>
          <h4>Work Number</h4>
          <input type="text" name="workNumber" id="number" placeholder="37060000000" />
          <p>37060000000</p>
        </div>
      </div>
      <div className="form-group-into-two-collumn margin-bottom-25">
        <h4>Company</h4>
        <input type="text" />
      </div>
      <div className="form-group-into-two-collumn margin-bottom-25">
        <h4>Courses</h4>
        <select id="courses" name="option"></select>
      </div>
      <div className="form-group margin-bottom-15">
        <h4>Additional Comment</h4>
        <textarea name="" id="" cols="" rows="" placeholder="Type here..."></textarea>
      </div>
      <hr />
      <div className="container margin-top-15">
        <div>
          <button>Submit Application</button>
        </div>
        <div>
          <button>Clear Fields</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
