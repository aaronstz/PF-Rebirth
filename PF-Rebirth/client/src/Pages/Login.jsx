import React, { useEffect, useState } from "react";
import "./Login.css";
import fondo from "../Assets/loginMain2.png";
import BtnLogin from "../Components/BtnLogin/BtnLogin";
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/Actions";

function Login() {

  const tab = '\u00A0'; //constante de espacio en blanco
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ userName, setUserName ] = useState("");
  const [ password, setPassword ] = useState("");
  const activeUser = useSelector(state => state.activeUser)
  const sessionActive = window.localStorage.getItem("user")

  useEffect(() => {
    if(activeUser || sessionActive) navigate("/home")
  }, [activeUser, navigate, sessionActive])

  const handleLogin = (e) => {
      e.preventDefault();
      dispatch(loginUser({userName, password}))
      setUserName("");
      setPassword("");
  }
  
  const captureLoginValues = ({name, value}) => {
    if(name === "email"){
      setUserName(value)
    }
    if(name === "password"){
      setPassword(value)
    }
  }

  return (
    <section>
      <Navbar/>
      <br/>
      <div className="container">
        <div className="wrapper">
          <div className="wrapperLeft">
            <div className="row justify-content-md-center">
              <div className="logCard-wrapper">
                <div className="logCard fat">
                  <div className="logCardHeader">
                    <h2 className="logCard-title">Log in</h2>
                    <h5 className="">
                      Enter your credentials to access your account
                    </h5>
                    <BtnLogin />
                    <h6>or</h6>
                  </div>
                  <div className="logCard-body">
                    <form method="POST" className="validation" noValidate="" onSubmit={(e) => handleLogin(e)}>
                      <div className="form-group">
                        <label htmlFor="email">Username</label>
                        <input
                          autoComplete="off"
                          id="username"
                          type="text"
                          className="form-control"
                          name="email"
                          value={userName}
                          required
                          autoFocus
                          onChange={({target}) => captureLoginValues(target)}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">
                          Password
                          <a href=" " className="alignRightLogin">
                            Forgot Password?
                          </a>
                          <span>{!password ? tab+"required" : null}</span>
                        </label>
                        <input
                          autoComplete="off"
                          id="password"
                          type="password"
                          className="form-control"
                          name="password"
                          required
                          value={password}
                          data-eye
                          onChange={({target}) => captureLoginValues(target)}
                        />
                      </div>

                      <div className="form-group">
                        <div className="custom-checkbox custom-control">
                          <input
                            type="checkbox"
                            name="remember"
                            id="remember"
                            className="customControlInput"
                          />
                          <label
                            htmlFor="remember"
                            className="custom-control-label"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>

                      <div className="form-group m-0">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          disabled={!password || !userName ? true : false}
                        >
                          LOG IN
                        </button>
                      </div>
                      <div className="mt-4 text-center">
                        Don't have an account? {tab}
                        <Link to="/register">Create One</Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="Loginfooter">
                  Copyright &copy; 2022 &mdash; Team 13
                </div>
              </div>
            </div>
          </div>
          <div className="wrapperRight">
            <div className="row justify-content-md-center">
              <img src={fondo} alt="login" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
