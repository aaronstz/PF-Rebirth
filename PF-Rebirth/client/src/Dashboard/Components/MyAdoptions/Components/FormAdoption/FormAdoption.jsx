import React, { useState } from "react";
import "./FormAdoption.css";
import background from "../../../../../Assets/loginMain2.png";

function validate(input) {
  let errors = {};

  if (!input.gender) {
    errors.gender = "Please select one of the following options";
  }

  if (!input.location) {
    errors.location = "Please select one of the following options";
  }
  return errors;
}

const FormAdoption = () => {
  const [input, setInput] = useState({
    comments: "",
    image: "",
    age: 0,
    gender: "",
    address: "",
  });
  return (
    <div className="fado-container">
      <div className="fado-wrapper">
        <div className="fado-wrapperLeft">
          <h2>Adoption form</h2>
          <div className="form-groupAdop">
            <label htmlFor="gender">Gender:</label>
            <select
              name="size"
              className="form-controlSm"
              // onChange={(e) => handleChange(e)}
            >
              <option selected>Choose...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="not">I prefer not to say</option>
            </select>
            <div className="addinvalid-fa">
              {/* {errors && errors.race ? errors.race : null} */}
            </div>
          </div>
          <div className="form-groupAdop">
            <label htmlFor="">* Age:</label>
            <input
              id=""
              type="number"
              className="form-controlSm"
              name="age"
              value={input.age}
              required
              // onChange={(e) => {
              //   handleChange(e);
              // }}
            />
            <div className="addinvalid-fa">
              {/* {errors && errors.race ? errors.race : null} */}
            </div>
          </div>
          <div className="form-groupAdop">
            <label htmlFor="">Phone:</label>
            <input
              id=""
              type="text"
              className="form-controlSm"
              name="phone"
              value=""
              required
              // onChange={(e) => {
              //   handleChange(e);
              // }}
            />
            <div className="addinvalid-fa">
              {/* {errors && errors.race ? errors.race : null} */}
            </div>
          </div>
          <div className="form-groupAdop">
            <label htmlFor="">Address:</label>
            <input
              id=""
              type="text"
              className="form-controlSm"
              name="phone"
              value=""
              required
              // onChange={(e) => {
              //   handleChange(e);
              // }}
            />
            <div className="addinvalid-fa">
              {/* {errors && errors.race ? errors.race : null} */}
            </div>
          </div>
          <div className="form-groupAdop">
            <label htmlFor="">Other pets:</label>
            <input
              id=""
              type="text"
              className="form-controlSm"
              name="phone"
              value=""
              required
              // onChange={(e) => {
              //   handleChange(e);
              // }}
            />
            <div className="addinvalid-fa">
              {/* {errors && errors.race ? errors.race : null} */}
            </div>
          </div>
          <div className="form-groupAdop">
            <label htmlFor="">Comments:</label>
            <textarea
              id=""
              type="text"
              className="form-controlSm"
              name="phone"
              value=""
              required
              // onChange={(e) => {
              //   handleChange(e);
              // }}
            />
            <div className="addinvalid-fa">
              {/* {errors && errors.race ? errors.race : null} */}
            </div>
          </div>
          <div className="addform-submit">
            <button type="submit" className="btn btn-primary addbtnAdop">
              CREATE
            </button>
          </div>
        </div>
        <div className="fado-wrapperRight">
          <div className="addimageContainer">
            <img src={background} alt="pet" className="addImage" />
          </div>
        </div>

        <div className="addfooter">Copyright &copy; 2022 &mdash; Team 13</div>
      </div>
    </div>
  );
};

export default FormAdoption;
