import "./Footer.css";
import logo from "../../logo.png";
import socials from "../../Social.png";

export default function Footer() {
  return (
    <footer class="body">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
              <i class="fa fa-road"></i>
              <img src={logo} alt="Rebirth"></img>
            <p>Pet adoption network, to give</p>
            <p>them a new life opportunity.</p>
            <div class="row-lists">
              <div class="col-6">
                <ul class="list-unstyled">
                  {" "}
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
            <div class ="newsletter">
              <ul class="list-unstyled">
                {" "}
                Get in Touch
                <li class ="nav-item"><p class ="paragraph">Subscribe to our weekly</p></li>
                <li class ="nav-item"><p class ="paragraph">Newsletter and receive</p></li>
                <li class ="nav-item"><p class ="paragraph">updates via email.</p></li>
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
