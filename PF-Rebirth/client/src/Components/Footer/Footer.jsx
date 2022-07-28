import "./Footer.css";
import logo from "../../Assets/logo.png";
import socials from "../../Assets/Social.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="body">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <i className="fa fa-road"></i>
            <NavLink to={"/home"} className={"footer-link"}>
              <img src={logo} alt="Rebirth"></img>
            </NavLink>
            <div className="sub-title">
              <p>
                Pet adoption network, to give
                <br /> them a new life opportunity.
              </p>
            </div>

            <div className="row-lists">
              <div className="col-6">
                <ul className="list-unstyled">
                  Company
                  <li className="nav-item">
                    <a href=" ">About us</a>
                  </li>
                  <li className="nav-item">
                    <a href=" ">Testimonials</a>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/support"}>Contact Us</NavLink>
                  </li>
                  <li className="nav-item">
                    <a href=" ">Donate</a>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  {" "}
                  Services
                  <li className="nav-item">
                    <NavLink to={"/faqs"}>F. A. Q. s</NavLink>
                  </li>
                  <li className="nav-item">
                    <a href=" ">My Favorites</a>
                  </li>
                  <li className="nav-item">
                    <a href=" ">My account</a>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/terms"}>Terms & Conditions</NavLink>
                  </li>
                </ul>
              </div>
              <div className="newsletter">
                <ul className="list-unstyled">
                  {" "}
                  Get in Touch
                  <li className="nav-item">
                    <div className="paragraph">
                      Subscribe to our weekly <br /> newsletter and receive
                      <br />
                      updates via email.
                    </div>
                  </li>
                  <li className="nav-item">
                    <a href=" " className="nav-link pl-0">
                      <img src={socials} alt="Socials" className="socials" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="lower">
          <h3 className="rights">All Rights Reserved @ Team 13</h3>
          <ul className="footer-bottom">
            <li className="li-bottom">
              <span className="a-bottom">
                <NavLink to={"/terms"}>Terms & Conditions</NavLink>
              </span>
            </li>
            <li className="li-bottom">
              <span className="a-bottom">
                <NavLink to={"/privacy"}>Privacy & Policy</NavLink>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
