import "./Footer.css";
import logo from "../../Assets/logo.png";
import socials from "../../Assets/Social.png";

export default function Footer() {
  return (
    <footer class="body">
      <div class="container">
        <div class="row">
          <div class="col-md-5">

              <i class="fa fa-road"></i>
              <img src={logo} alt="Rebirth"></img>
            <div class ="sub-title">
              <p>Pet adoption network, to give 
              <br/> them a new life opportunity.</p>
            </div>

            <div class="row-lists">
              <div class="col-6">
                <ul class="list-unstyled">
                  Company
                  <li class="nav-item">
                    <a href=" ">About us</a>
                  </li>
                  <li class="nav-item">
                    <a href=" ">Testimonials</a>
                  </li>
                  <li class="nav-item">
                    <a href=" ">Contact Us</a>
                  </li>
                  <li class="nav-item">
                    <a href=" ">Donate</a>
                  </li>
                </ul>
              </div>
              <div class="col-6">
                <ul class="list-unstyled">
                  {" "}
                  Services
                  <li class="nav-item">
                    <a href=" ">F. A. Q. s</a>
                  </li>
                  <li class="nav-item">
                    <a href=" ">My Favorites</a>
                  </li>
                  <li class="nav-item">
                    <a href=" ">My account</a>
                  </li>
                  <li class="nav-item">
                    <a href=" ">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
              <div class="newsletter">
                <ul class="list-unstyled">
                  {" "}
                  Get in Touch
                  <li class="nav-item">
                    <div class="paragraph">
                      Subscribe to our weekly <br /> newsletter and receive
                      <br />
                      updates via email.
                    </div>
                  </li>
                  <li class="nav-item">
                    <a href=" " class="nav-link pl-0">
                      <img src={socials} alt="Socials" class="socials" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="lower">
          <h3 class="rights">All Rights Reserved @ Team 13</h3>
          <ul class="footer-bottom">
            <li class="li-bottom">
              <a href=" " class="a-bottom">
                Terms & Conditions
              </a>
            </li>
            <li class="li-bottom">
              <a href=" " class="a-bottom">
                Privacy & Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}