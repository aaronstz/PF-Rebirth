import "./Footer.css";
import logo from "../../Assets/logo.png";
import socials from "../../Assets/Social.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const user = localStorage.getItem("user");

  return (
    <footer className="body">
      <div className="upperContainer">
        <div className="containerFooter mt-5">
          <div>
            <NavLink to={"/home"} className="img-link-footer">
              <img src={logo} alt="Rebirth"></img>
            </NavLink>
            <div className="sub-title">
              <p>
                Pet adoption network, to give
                <br /> them a new life opportunity.
              </p>
            </div>
          </div>

          <div>
            <ul className="list-unstyled">
              Company
              <li className="nav-item">
                <NavLink to={"/about"}>About us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/support"}>Contact Us</NavLink>
              </li>
              <li className="nav-item">
                <a href={user !== null ? "/donations" : "/login"}>Donate</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="list-unstyled">
              Services
              <li className="nav-item">
                <NavLink to={"/faqs"}>F. A. Q. s</NavLink>
              </li>
              <li className="nav-item">
                <a href={user !== null ? "/favorites" : "/login"}>
                  My Favorites
                </a>
              </li>
              <li className="nav-item">
                <NavLink to={user !== null ? "/profile" : "/login"}>
                  My account
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <ul className="list-unstyled">
              Get in Touch
              <li className="nav-item">
                <div className="paragraph">
                  Subscribe to our weekly <br /> newsletter and receive
                  <br />
                  updates via email.
                </div>
              </li>
              <li className="nav-item">
                <a href=" " className="nav-item2">
                  <img src={socials} alt="Socials" className="socials" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="downContainer">
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
