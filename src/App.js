import React, { useState } from "react";

function App() {
  const [familyname, setFamilyName] = useState(" ");
  const [firstname, setFirstName] = useState(" ");
  const [gender, setGender] = useState(" ");
  const [dob, setDob] = useState("");
  const [mobile, setMobileNumber] = useState("");
  const [email, setEmailId] = useState("");
  const [street, setStreet] = useState("");
  const [building, setBuilding] = useState("");
  const [pincode, setPin] = useState("");

  const showForm = () => {
    return (
      <div>
        <form>
          <input type="text" placeholder="Company Name" />
          <input type="text" placeholder="Location" />
          <input type="text" placeholder="Job Role" />
          <input type="text" placeholder="Duration of Work" />
        </form>
      </div>
    );
  };

  return (
    <>
      <h1 style={{ justifyContent: "center" }}> Non Technical Resume Maker</h1>
      <hr
        style={{
          color: "grey",
        }}
      />
      <form>
        <div>
          <h3> Personal Details </h3>
          <label>
            Enter Familyname :
            <input
              type="text"
              name="familyname"
              value={familyname}
              style={{ margin: 10 }}
              onChange={(event) => setFamilyName(event.target.value)}
            />
          </label>
          <br />
          <label>
            Enter Firstname :
            <input
              type="text"
              name="firstname"
              value={firstname}
              style={{ margin: 10 }}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </label>
          <br />
          <div onChange={(event) => setGender(event.target.value)}>
            <label> Enter Gender:</label>
            <input
              type="radio"
              value="Male"
              name="gender"
              style={{ margin: 15 }}
            />{" "}
            Male
            <input
              type="radio"
              value="Female"
              name="gender"
              style={{ margin: 15 }}
            />{" "}
            Female
          </div>
          <label>
            {" "}
            Select your DOB:
            <input
              type="date"
              style={{ margin: 15 }}
              onChange={(event) => setDob(event.target.value)}
            ></input>
          </label>
          <br />
          <label>
            Enter Mobile Number:
            <input
              type="text"
              name="mobilenumber"
              value={mobile}
              style={{ margin: 10 }}
              onChange={(event) => setMobileNumber(event.target.value)}
            />
          </label>

          <br />
          <label>
            Enter Email Id:
            <input
              type="text"
              name="email"
              value={email}
              style={{ margin: 10 }}
              onChange={(event) => setEmailId(event.target.value)}
            />
          </label>
          <br />
          <label>
            Address:
            <input
              type="text"
              name="street"
              value={street}
              style={{ margin: 10 }}
              placeholder="Enter Street Name"
              onChange={(event) => setStreet(event.target.value)}
            />
            <input
              type="text"
              name="building"
              value={street}
              style={{ margin: 10 }}
              placeholder="Enter Wohnung Nummer"
              onChange={(event) => setBuilding(event.target.value)}
            />
            <input
              type="text"
              name="pincode"
              value={pincode}
              style={{ margin: 10 }}
              placeholder="Enter Pincode , City"
              onChange={(event) => setPin(event.target.value)}
            />
          </label>
          <hr
            style={{
              color: "grey",
            }}
          />
          <h3>
            {" "}
            Previous Work Experience in Germany
            <button
              style={{
                backgroundColor: "green",
                borderRadius: 10,
                height: 30,
                width: 30,
                color: "white",
                margin: 10,
              }}
              onClick={() => (window.$val = true)}
            >
              {" "}
              +{" "}
            </button>
          </h3>
          {window.$val ? showForm() : null}
        </div>
      </form>
    </>
  );
}

export default App;
