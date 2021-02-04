import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "./App.css";
import ImageUploader from "react-images-upload";

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
  const [english, setEnglish] = useState("");
  const [deutsch, setDeutsch] = useState("");
  const [visa, setVisa] = useState("");
  const [driving, setDriving] = useState("");
  const [health, setHealth] = useState("");
  const [police, setPolice] = useState("");

  const [toggle, setToggle] = useState(false);
  const [job, setJob] = useState({
    company: "",
    place: "",
    role: "",
    duration: "",
  });

  // Code for HTML

  const showForm = () => {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Company Name"
            value={job.company}
            onChange={(event) =>
              setJob({ ...job, company: event.target.value })
            }
          />
          <input
            type="text"
            placeholder="Location"
            value={job.place}
            onChange={(event) => setJob({ ...job, place: event.target.value })}
          />
          <input
            type="text"
            placeholder="Job Role"
            value={job.role}
            onChange={(event) => setJob({ ...job, role: event.target.value })}
          />
          <input
            type="text"
            placeholder="Duration of Work"
            value={job.duration}
            onChange={(event) =>
              setJob({ ...job, duration: event.target.value })
            }
          />
        </form>
      </div>
    );
    setToggle(false);
  };

  const generatePdf = () => {
    var pdf = new jsPDF("p", "pt", "a4");
    var iframe = document.getElementById("root2");
    iframe.setAttribute(
      "style",
      "position:absolute;right:0; top:0; bottom:0; height:100%; width:500px"
    );
    pdf.html(iframe, {
      callback: function (pdf) {
        pdf.save("testing.pdf");
      },
    });
  };

  return (
    <view style={{ margin: 5 }}>
      <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
        {" "}
        Non Technical Resume Maker
      </h1>
      <hr
        style={{
          color: "grey",
        }}
      />
      <form style={{ marginLeft: 20 }}>
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
            value={building}
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

        <br />
        <h3> SPRACHKENNTNISSE </h3>

        <div onChange={(event) => setEnglish(event.target.value)}>
          <label> English Proficiency :</label>
          <input
            type="radio"
            value="Basic User (A1/A2)"
            name="english"
            style={{ margin: 15 }}
          />{" "}
          Basic User (A1/A2)
          <input
            type="radio"
            value="Independent User(B1/B2)"
            name="english"
            style={{ margin: 15 }}
          />{" "}
          Independent User(B1/B2)
          <input
            type="radio"
            value="Proficient User(C1/C2)"
            name="english"
            style={{ margin: 15 }}
          />{" "}
          Proficient User(C1/C2)
        </div>

        <div onChange={(event) => setDeutsch(event.target.value)}>
          <label> German Proficiency :</label>
          <input
            type="radio"
            value="Basic User (A1 / A2)"
            name="deutsch"
            style={{ margin: 15 }}
          />{" "}
          Basic User (A1/A2)
          <input
            type="radio"
            value="Independent User(B1 / B2)"
            name="deutsch"
            style={{ margin: 15 }}
          />{" "}
          Independent User(B1/B2)
          <input
            type="radio"
            value="Proficient User(C1 / C2)"
            name="deutsch"
            style={{ margin: 15 }}
          />{" "}
          Proficient User(C1/C2)
        </div>

        <hr
          style={{
            color: "grey",
          }}
        />

        <h3> ANDERE INFORMATIONEN </h3>

        <label>
          {" "}
          Work Permit valid until:
          <input
            type="date"
            style={{ margin: 15 }}
            onChange={(event) => setVisa(event.target.value)}
          ></input>
        </label>

        <div onChange={(event) => setDriving(event.target.value)}>
          <label> German Driving Licence:</label>
          <input
            type="radio"
            value="Yes"
            name="licence"
            style={{ margin: 15 }}
          />{" "}
          Yes
          <input
            type="radio"
            value="No"
            name="licence"
            style={{ margin: 15 }}
          />{" "}
          No
        </div>

        <div onChange={(event) => setHealth(event.target.value)}>
          <label> Gesundheit Certificate:</label>
          <input
            type="radio"
            value="Yes"
            name="health"
            style={{ margin: 15 }}
          />{" "}
          Yes
          <input
            type="radio"
            value="No"
            name="health"
            style={{ margin: 15 }}
          />{" "}
          No
        </div>
        <div onChange={(event) => setPolice(event.target.value)}>
          <label> Police Clearance Certificate:</label>
          <input
            type="radio"
            value="Yes"
            name="police"
            style={{ margin: 15 }}
          />{" "}
          Yes
          <input
            type="radio"
            value="No"
            name="police"
            style={{ margin: 15 }}
          />{" "}
          No
        </div>
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
            onClick={(event) => {
              setToggle(true);
              event.preventDefault();
            }}
          >
            {" "}
            +{" "}
          </button>
        </h3>
        {toggle && showForm()}
        <hr
          style={{
            color: "grey",
          }}
        />
        <button
          style={{
            backgroundColor: "green",
            borderRadius: 10,
            //height: 30,
            //width: ,
            color: "white",
            margin: 10,
          }}
          onClick={(event) => {
            generatePdf();
            event.preventDefault();
          }}
        >
          Submit!
        </button>
      </form>

      <div style={{ display: "none" }}>
        <div id="root2">
          <p
            className="main"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            {" "}
            LEBENSLAUF{" "}
          </p>
          <div>
            <div>
              <p className="heading" style={{ fontWeight: "bold" }}>
                PERSÖNLICHE &nbsp; DATEN
              </p>
              <hr
                style={{
                  color: "#d40404",
                }}
              />
              <p className="p">Familenname :&nbsp;&nbsp;&nbsp; {familyname}</p>
              <p className="p">Vorname : &nbsp;&nbsp;&nbsp; {firstname}</p>

              <p className="p">Geschlecht : &nbsp;&nbsp;&nbsp; {gender} </p>
              <p className="p">Geburtsdaturm : &nbsp;&nbsp;&nbsp; {dob} </p>
              <p className="p">Handy : &nbsp;&nbsp;&nbsp; {mobile} </p>
              <p className="p">Email : &nbsp;&nbsp;&nbsp; {email} </p>

              <p className="p">
                Addresse : &nbsp;&nbsp;&nbsp; {street} , {building} , {pincode}{" "}
                - Germany
              </p>

              <p className="heading" style={{ fontWeight: "bold" }}>
                SPRACHKENNTNISSE
              </p>
              <hr
                style={{
                  color: "#d40404",
                }}
              />
              <p className="p"> English : &nbsp;&nbsp;&nbsp; {english}</p>
              <p className="p"> Deutsch : &nbsp;&nbsp;&nbsp; {deutsch}</p>

              <p className="heading" style={{ fontWeight: "bold" }}>
                ANDERE &nbsp; INFORMATIONEN
              </p>
              <hr
                style={{
                  color: "#d40404",
                }}
              />
              <p className="p">
                {" "}
                Ablauf der Arbeitsgenehmigung : &nbsp;&nbsp;&nbsp; {visa}{" "}
              </p>
              <p className="p"> Führerschein : &nbsp;&nbsp;&nbsp; {driving} </p>
              <p className="p">
                {" "}
                Gesundheitszertifikat : &nbsp;&nbsp;&nbsp; {health}{" "}
              </p>

              <p className="p">
                {" "}
                Polizeiliches Führungszeugnis : &nbsp;&nbsp;&nbsp; {police}
              </p>
            </div>
            <hr
              style={{
                color: "#d40404",
              }}
            />
            <div style={{ marginTop: 10 }}>
              <p className="p">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Ich möchte den Teilzeit
                arbeit für mein überleben machen. Wenn es also stellen gibt
                lassen Sie es mich bitte Wissen. Ich bin bereit in jeder
                Schnicht und zu jeder zeit in einer woche zu arbeiten. Ich hoffe
                auf des bereit, bein bedast alle informationen bereitzustellen.
                Im moment habe Ich alle erforderlichen Dokumente wie
                Arbeitslaubin und Aufenthaltskarte bein mir.
              </p>
              <p className="p"> Hochactungvoll,</p>
              <p className="p" style={{ fontWeight: "bold" }}>
                {familyname} . {firstname}
              </p>
            </div>
          </div>
        </div>
      </div>
    </view>
  );
}

export default App;
