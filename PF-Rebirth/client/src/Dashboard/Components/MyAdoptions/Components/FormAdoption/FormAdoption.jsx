import React from "react";
import "./FormAdoption.css";

const FormAdoption = () => {
  return (
    <div>
      <div className="form-groupAdop">
        <label htmlFor="">Breed</label>
        <input
          id=""
          type="text"
          className="form-control"
          name="race"
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
    </div>
  );
};

export default FormAdoption;
