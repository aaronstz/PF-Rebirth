import React, { useState } from "react";
import "./Login.css";
import fondo from "../Assets/loginMain2.png";
import BtnLogin from "../Components/BtnLogin/BtnLogin";
import { Link } from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/Actions";

function Login() {

  const tab = '\u00A0'; //constante de espacio en blanco

  const user = useSelector(state => state.userLogin)
  const [ userName, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ errors, setErrors ] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(userName, password);
    dispatch(loginUser({userName, password}))
  }

  // const validateErrorsLogin = (event) => {
  //   let error = {};
  //   console.log(event)  
  // }

  console.log(user)

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
                    <BtnLogin/>
                    <h6>or</h6>
                  </div>
                  <div className="logCard-body">
                    <form method="POST" className="validation" novalidate="" onSubmit={handleLogin}>
                      <div className="form-group">
                        <label for="email">E-Mail Address</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          name="email"
                          value={userName}
                          required
                          autofocus
                          onChange={({target}) => setUserName(target.value)}
                        />
                        <div className="invalid-feedback">Email is invalid</div>
                      </div>

                      <div className="form-group">
                        <label for="password">
                          Password
                          <a href=" " className="alignRight">
                            Forgot Password?
                          </a>
                        </label>
                        <input
                          id="password"
                          type="password"
                          class="form-control"
                          name="password"
                          value={password}
                          required
                          data-eye
                          onChange={({target}) => setPassword(target.value)}
                        />
                        <div className="invalid-feedback">
                          { errors }
                        </div>
                      </div>

                      <div class="form-group">
                        <div className="custom-checkbox custom-control">
                          <input
                            type="checkbox"
                            name="remember"
                            id="remember"
                            className="customControlInput"
                          />
                          <label
                            for="remember"
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
