import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "../../Assets/loginMain2.png";
import "./FormRegister.css";
import {} from "../../Redux/Actions/index.js";
import { validateErrors } from "../../Tools/functions";
// import { useNavigate } from "react-router-dom";
import { postUser } from "../../Redux/Actions/index.js";
import { useDispatch } from "react-redux";
// import ReCAPTCHA from "react-google-recaptcha";
// const { REACT_APP_SITE_KEY } = process.env;

export default function FormRegister() {
  const [errores, setErrores] = useState({ name: "" });
  const [newUser, setNewUser] = useState({});
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    /*
            La función recibe la data en el evento onChange, para capturar el valor del respectivo input, 
            setea los atributos del nuevo usuario, al tiempo que valida los errores para confirmar que el 
            usuario ingrese valores en los input
        */
    setNewUser({
      ...newUser,
      [e.target.id]: e.target.value,
    });

    setErrores(
      validateErrors({
        ...newUser,
        [e.target.id]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postUser(newUser));
  };


  // const onChange = (e) => {
  //   console.log();
  // };


  return (
    <div className="formContainer">
      <div className="formRegister">
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>
              <h2>Register</h2>
            </Form.Label>
            <Form.Text className="formTextComment">
              <br />
              Please leave us the following info to create your account
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Names</Form.Label>
            <Form.Control
              type="text"
              className="formInputStyle"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            />
            <Form.Text className="formErrores">
              {errores && errores.name ? errores.name : null}
            </Form.Text>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicLastName"
            onChange={(e) => handleChange(e)}
          >
            <Form.Label>Lastname</Form.Label>
            <Form.Control
              type="text"
              className="formInputStyle"
              autoComplete="off"
            />
            <Form.Text className="formErrores">
              {errores && errores.lastName ? errores.lastName : null}
            </Form.Text>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicUserName"
            onChange={(e) => handleChange(e)}
          >
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              className="formInputStyle"
              autoComplete="off"
            />
            <Form.Text className="formErrores">
              {errores && errores.userName ? errores.userName : null}
            </Form.Text>
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            onChange={(e) => handleChange(e)}
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              className="formInputStyle"
              autoComplete="off"
            />
            <Form.Text className="formTextComment">
              We'll never share your email with anyone else.
              <br />
            </Form.Text>
            <Form.Text className="formErrores">
              {errores && errores.email ? errores.email : null}
            </Form.Text>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            onChange={(e) => handleChange(e)}
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              className="formInputStyle"
              autoComplete="off"
            />
            <Form.Text className="formTextComment">
              The password must be min 8 characters at least one number, one
              special character and no spaces.
              <br />
            </Form.Text>
            <Form.Text className="formErrores">
              {errores && errores.password ? errores.password : null}
            </Form.Text>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicConfirmPassword"
            onChange={(e) => handleChange(e)}
          >
            <Form.Label>Confirm your password</Form.Label>
            <Form.Control
              type="password"
              className="formInputStyle"
              autoComplete="off"
            />
            <Form.Text className="formErrores">
              {errores && errores.confirmPassword
                ? errores.confirmPassword
                : null}
            </Form.Text>
          </Form.Group>

          {/* <div>
            <ReCAPTCHA
              sitekey={REACT_APP_SITE_KEY}
              onChange={(e) => onChange(e)}
            />
          </div> */}

          <div className="formBtnSubmit">
            <Button
              variant="primary"
              type="submit"
              className="formBtnRegister"
              disabled={Object.keys(errores).length === 0 ? false : true}
            >
              REGISTER
            </Button>
          </div>
        </Form>
      </div>
      <div className="formImageContainer">
        <img src={logo} alt="logo" className="formLogoImage" />
      </div>
    </div>
  );
}
