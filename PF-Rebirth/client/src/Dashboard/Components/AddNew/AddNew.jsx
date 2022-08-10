import React, { useState } from "react"; //warning-> useEffect
import background from "../../../Assets/loginMain2.png";
import "./AddNew.css";
import { useDispatch } from "react-redux"; // warning->useSelector
import { postPet } from "../../../Redux/Actions/index";
import { useNavigate } from "react-router-dom"; // warning->Link,
import { provincias } from "../../../Tools/provincias";
// import Navbar from "../../../Components/Navbar/Navbar";
import { Widget } from "@uploadcare/react-widget";
import DashNavBar from "../Dash-NavBar/Dash-NavBar";

function validate(input) {
  let validateName = /^[a-zA-Z\s]+$/;
  // let validateUrl = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/; warning
  let errors = {};
  if (!input.type || input.type > 1) {
    errors.type = "Type must be only one of the following options";
  }
  if (!input.name) {
    errors.name = "Name is required";
  }
  if (!validateName.test(input.name)) {
    errors.name = "Name cannot contain numbers or special characters";
  }
  if (!input.image) {
    errors.image = "Image is required";
  }
  if (!input.size) {
    errors.size = "Please select one of the following options";
  }
  if (!input.gender) {
    errors.gender = "Please select one of the following options";
  }
  if (!input.type) {
    errors.type = "Please select one of the following options";
  }
  if (!input.race) {
    errors.race = "If you don't know the breed write 'unknown'";
  }
  if (!input.location) {
    errors.location = "Please select one of the following options";
  }
  return errors;
}

function AddNew() {
  const user = JSON.parse(localStorage.user);
  let mail = user.googleId ? user.email : user.mail;

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    description: "",
    image: "",
    age: 0,
    size: "",
    gender: "",
    type: "",
    race: "",
    location: "",
    userMail: mail,
  });

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleImage(file) {
    setInput({
      ...input,
      image: `https://ucarecdn.com/${file.uuid}/`,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(errors).length === 0 && input.type.length > 0) {
      dispatch(postPet(input));

      setInput({
        name: "",
        description: "",
        image: "",
        age: 0,
        size: "",
        gender: "",
        type: "",
        race: "",
        location: "",
      });
      navigate("/home");
    } else {
      alert("Fields with * are required");
    }
  }

  return (
    <section>
      <DashNavBar />
      <div className="DashcontainerMain">
        <div className="add-container">
          <div className="add-wrapper">
            <div className="add-wrapperleft">
              <div className="add-md-center">
                <div className="addcard-wrapper">
                  <div className="addcard fat">
                    <div className="addcard header">
                      <div className="mb-3" id="formBasicTitle">
                        <h2>Add new pet</h2>
                        Please leave us the following info to create a new pet
                      </div>
                      <div className="addcard-body">
                        <form
                          method="POST"
                          className="addvalidate"
                          noValidate=""
                          onSubmit={(e) => handleSubmit(e)}
                        >
                          <div className="">
                            <label htmlFor="name">Name*</label>
                            <input
                              id="name"
                              type="text"
                              className="form-control"
                              name="name"
                              value={input.name}
                              required
                              autoFocus
                              onChange={(e) => {
                                handleChange(e);
                              }}
                            />
                            <div className="addinvalid-fb">
                              {errors && errors.name ? errors.name : null}
                            </div>
                          </div>

                          <div className="addform">
                            <label className="form-label" htmlFor="customFile">
                              Image*
                            </label>
                            <Widget
                              publicKey="e7afc989eff083e04496"
                              value={input.image}
                              required
                              onFileSelect={(e) => {
                                e.done((file) => {
                                  handleImage(file);
                                });
                              }}
                            />
                            <div className="addinvalid-fb">
                              {errors && errors.image ? errors.image : null}
                            </div>
                          </div>
                          <div className="formControlRow">
                            <div className="addformSm">
                              <label htmlFor="age">Age*</label>
                              <input
                                id="age"
                                type="number"
                                className="form-controlSm"
                                name="age"
                                value={input.age}
                                required
                                min="0"
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                              />
                              <div className="addinvalid-fb">
                                {errors && errors.age ? errors.age : null}
                              </div>
                            </div>

                            <div className="addformSm">
                              <label htmlFor="exampleFormControlSelect1">
                                Size*
                              </label>
                              <select
                                name="size"
                                className="form-controlSm"
                                id="exampleFormControlSelect1"
                                value={input.size}
                                onChange={(e) => handleChange(e)}
                              >
                                <option defaultValue>Choose...</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="big">Big</option>
                              </select>
                            </div>

                            <div className="addformSm">
                              <label htmlFor="exampleFormControlSelect1">
                                Gender*
                              </label>
                              <select
                                name="gender"
                                className="form-controlSm"
                                id="exampleFormControlSelect1"
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                              >
                                <option defaultValue>Choose...</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                              </select>
                            </div>
                            <div className="addformSm">
                              <label htmlFor="exampleFormControlSelect1">
                                Type*
                              </label>
                              <select
                                name="type"
                                className="form-controlSm"
                                id="exampleFormControlSelect1"
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                              >
                                <option defaultValue>Choose...</option>
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                              </select>
                            </div>
                          </div>
                          <div>
                            <div className="addinvalid-fb">
                              {errors && errors.type ? errors.type : null}
                            </div>
                          </div>
                          <div className="form-groupAdd">
                            <label htmlFor="race">Breed</label>
                            <input
                              id="race"
                              type="text"
                              className="form-control"
                              name="race"
                              value={input.race}
                              required
                              onChange={(e) => {
                                handleChange(e);
                              }}
                            />
                            <div className="addinvalid-fb">
                              {errors && errors.race ? errors.race : null}
                            </div>
                          </div>
                          <div className="form-groupAdd">
                            <label htmlFor="location">Location*</label>
                            <select
                              name="location"
                              className="form-controlAdd"
                              value={input.location}
                              onChange={(e) => {
                                handleChange(e);
                              }}
                            >
                              <option defaultValue>Choose...</option>
                              {provincias?.map((p) => (
                                // return (
                                <option key={Math.random()} value={p}>
                                  {p}
                                </option>
                                // );
                              ))}
                            </select>
                            <div className="addinvalid-fb">
                              {errors && errors.location
                                ? errors.location
                                : null}
                            </div>
                          </div>
                          <div className="form-groupAdd">
                            <label
                              className="form-label"
                              htmlFor="textAreaExample"
                            >
                              Description
                            </label>
                            <textarea
                              name="description"
                              value={input.description}
                              type="text"
                              className="textarea"
                              id="textAreaExample"
                              rows="4"
                              onChange={(e) => handleChange(e)}
                            ></textarea>
                          </div>
                          <br />
                          <div className="addform-submit">
                            <button
                              type="submit"
                              className="btn btn-primary addbtn"
                              disabled={
                                Object.keys(errors).length === 0 ? false : true
                              }
                            >
                              CREATE
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="addfooter">
              Copyright &copy; 2022 &mdash; Team 13
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddNew;

// <div className="addform">
//                           <label htmlFor="location">Location*</label>
//                           <select
//                             name="location"
//                             className="form-control"
//                             id="exampleFormControlSelect1"
//                             onChange={(e) => {
//                               handleChange(e);
//                             }}
//                           >
//                             <option defaultValue>Choose...</option>
//                             {provincias?.map((p) => {
//                               return (
//                                 <option key={Math.random()} value={p}>
//                                   {p}
//                                 </option>
//                               );
//                             })}
//                           </select>
//                           <div className="addinvalid-fb">
//                             {errors && errors.location ? errors.location : null}
//                           </div>
//                         </div>
