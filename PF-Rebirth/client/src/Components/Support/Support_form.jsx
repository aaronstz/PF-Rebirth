import React from "react";
import { useState } from "react";
import "../Support/Support.css";
import { useDispatch } from "react-redux";
import { postSupportForm } from "../../Redux/Actions/index";

function Support_form() {
  const dispatch = useDispatch();
  let [supportForm, setSupportForm] = useState({
    email: "",
    subject: "",
    description: "",
  });
  let [sFormError, setSFormError] = useState({
    emailError: "",
    subjectError: "",
    descriptionError: "",
  });
  let regexEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  function handleSubmit(event) {
    event.preventDefault();
    let FormErrorData = sFormError;
    if (regexEmail.test(supportForm.email))
      FormErrorData = { ...FormErrorData, emailError: "" };
    if (supportForm.email === "")
      FormErrorData = { ...FormErrorData, emailError: "Email is required" };
    if (supportForm.subject === "")
      FormErrorData = { ...FormErrorData, subjectError: "Subject is required" };
    else FormErrorData = { ...FormErrorData, subjectError: "" };
    if (supportForm.description === "")
      FormErrorData = {
        ...FormErrorData,
        descriptionError: "Description is required",
      };
    else FormErrorData = { ...FormErrorData, descriptionError: "" };
    setSFormError({ ...FormErrorData });
    if (
      FormErrorData.emailError === "" &&
      FormErrorData.subjectError === "" &&
      FormErrorData.descriptionError === ""
    ) {
      dispatch(postSupportForm(supportForm));
      setSupportForm({ email: "", subject: "", description: "" });
    }
  }

  function handleChange(event) {
    let field = event.target.name;
    let value = event.target.value;
    switch (field) {
      case "email":
        if (!regexEmail.test(value)) {
          setSFormError({ ...sFormError, emailError: "Email is invalid" });
        } else {
          setSFormError({ ...sFormError, emailError: "" });
        }
        setSupportForm({ ...supportForm, email: value });
        break;
      case "subject":
        if (!(value === "")) setSFormError({ ...sFormError, subjectError: "" });
        setSupportForm({ ...supportForm, subject: value });
        break;
      case "description":
        if (!(value === ""))
          setSFormError({ ...sFormError, descriptionError: "" });
        setSupportForm({ ...supportForm, description: value });
        break;
      default:
        break;
    }
  }

  return (
    <React.Fragment>
      <div className="support-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="email">Email:</label>
          </div>
          <div>
            <input
              type={"text"}
              name={"email"}
              onChange={(e) => handleChange(e)}
              value={supportForm.email}
              placeholder={"Email"}
            ></input>
          </div>
          <div>
            <label className="error">{sFormError.emailError}</label>
          </div>
          <div>
            <label htmlFor="subject">Subject:</label>
          </div>
          <div>
            <input
              type={"text"}
              name={"subject"}
              onChange={(e) => handleChange(e)}
              value={supportForm.subject}
              placeholder={"Subject"}
            ></input>
          </div>
          <div>
            <label className="error">{sFormError.subjectError}</label>
          </div>
          <div>
            <label htmlFor="description">Description:</label>
          </div>
          <div>
            <textarea
              name={"description"}
              onChange={(e) => handleChange(e)}
              value={supportForm.description}
              placeholder={"Describe the problem"}
            ></textarea>
          </div>
          <div>
            <label className="error">{sFormError.descriptionError}</label>
          </div>
          <div>
            <input id="submit" type={"submit"} value={"Submit"}></input>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Support_form;
