/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./FormAdoption.css";
import background from "../../../../../Assets/loginMain2.png";
import DashNavBar from "../../../Dash-NavBar/Dash-NavBar";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails, postAdoption } from "../../../../../Redux/Actions/index";
import swal from "sweetalert";

const FormAdoption = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  const { userMail } = useSelector((state) => state.detail);
  let mailAdoptante = "";
  const infoStorage = localStorage.getItem("user");
  const user = JSON.parse(infoStorage);
  if (infoStorage) mailAdoptante = user.mail;
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(getDetails(id));
  }, [id]);

  useEffect(() => {
    setInput({
      ...input,
      userMail: mailAdoptante,
      petId: id,
      ownerMail: userMail,
    });
  }, []);

  const [input, setInput] = useState({
    age: 0,
    comments: "",
    gender: "",
    address: "",
    others: "",
  });
  const [adoptError, setAdoptError] = useState({
    age: " ",
    gender: " ",
    address: " ",
    phone: " ",
  });

  function handleChange(e) {
    let field = e.target.name;
    let data = e.target.value;
    setInput({
      ...input,
      [field]: data,
    });
    switch (field) {
      case "gender":
        if (data === "not" || data === "male" || data === "female")
          setAdoptError({ ...adoptError, gender: "" });
        else setAdoptError({ ...adoptError, gender: "Select a valid option" });
        break;
      case "age":
        if (typeof parseInt(data) !== "number")
          setAdoptError({ ...adoptError, age: "Error, not a number" });
        else setAdoptError({ ...adoptError, age: "" });
        break;
      case "address":
        if (data === "")
          setAdoptError({ ...adoptError, address: "Field required" });
        else setAdoptError({ ...adoptError, address: "" });
        break;
      case "phone":
        if (data === "")
          setAdoptError({ ...adoptError, phone: "Field required" });
        else setAdoptError({ ...adoptError, phone: "" });

        break;
      default:
        break;
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    let error = true;
    for (const key in adoptError) {
      if (adoptError[key] !== "") error = false;
    }
    if (error) {
      dispatch(postAdoption(input));
      navigate("/request");
    } else {
      swal("Missing fields", "Complete all the required fields ", "warning");
    }
  }

  return (
    <>
      <DashNavBar />
      <div className="DashcontainerMain">
        <div className="fado-container">
          <div className="fado-wrapper">
            <div className="fado-wrapperLeft">
              <h2>Adoption form</h2>
              <form method="post" onSubmit={(e) => handleSubmit(e)}>
                <div className="form-groupAdop">
                  <label htmlFor="gender">Gender:</label>
                  <select
                    name="gender"
                    className="form-controlSm"
                    onChange={(e) => handleChange(e)}
                    value={input.gender}
                  >
                    <option selected>Choose...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="not">I prefer not to say</option>
                  </select>
                  <div className="addinvalid-fa">
                    {adoptError && adoptError.gender ? adoptError.gender : null}
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
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <div className="addinvalid-fa">
                    {adoptError && adoptError.age ? adoptError.age : null}
                  </div>
                </div>
                <div className="form-groupAdop">
                  <label htmlFor="">Phone:</label>
                  <input
                    id=""
                    type="text"
                    className="form-controlSm"
                    name="phone"
                    value={input.phone}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <div className="addinvalid-fa">
                    {adoptError && adoptError.phone ? adoptError.phone : null}
                  </div>
                </div>
                <div className="form-groupAdop">
                  <label htmlFor="">Address:</label>
                  <input
                    id=""
                    type="text"
                    className="form-controlSm"
                    name="address"
                    value={input.address}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <div className="addinvalid-fa">
                    {adoptError && adoptError.address
                      ? adoptError.address
                      : null}
                  </div>
                </div>
                <div className="form-groupAdop">
                  <label htmlFor="">Other pets:</label>
                  <input
                    id=""
                    type="text"
                    className="form-controlSm"
                    name="others"
                    value={input.others}
                    onChange={(e) => {
                      handleChange(e);
                    }}
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
                    name="comments"
                    value={input.comments}
                    onChange={(e) => {
                      handleChange(e);
                    }}
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
              </form>
            </div>

            <div className="fado-wrapperRight">
              <div className="addimageContainer">
                <img src={background} alt="pet" className="addImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormAdoption;
