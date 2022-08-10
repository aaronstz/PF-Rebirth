import React from "react";
import "./Feedback.css";
import DashNavBar from "../../../Dash-NavBar/Dash-NavBar";
import { successStory } from "../../../../../Redux/Actions";

function Feedback() {
  const longitud = "-64.26617114519884";
  const latitud = "-27.792642976806206";
  return (
    <>
      <DashNavBar />
      <form
        onSubmit={successStory(
          "Pepe",
          "",
          5,
          "Lorem ipsum dolor",
          "carlos@gmail.com"
        )}
      >
        <div className="DashcontainerMain">
          <div className="wrapperFeed">
            <div className="wrapperLeftFeed">
              <h2 className="mb-3">Next steps</h2>
              <h5 className="mb-3">Congratulations USERNAME!</h5>
              <br />
              <h5 className="">Pickup address</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem
              </p>
              <br />
              <h5 className="mt-5">Give us your feedback</h5>
              <div className="">
                <p>SKIP</p>
                <div className="">
                  <label htmlFor="textarea">Comments</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    required
                    autoFocus
                  />
                </div>
              </div>
            </div>
            <div className="wrapperRightFeed d-flex justify-content-end">
              <iframe
                title="mapa"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9941.208565217292!2d${longitud}!3d${latitud}
            !2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943b5212435b47ff%3A0x686d262a0e783266!2sHotel%20Solano!5e0!3m2!1ses!2smx!4v1659743207277!5m2!1ses!2smx`}
                width="80%"
                height="200"
                style={{ border: 0 }}
                allowfullscreen="no"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="RowStarsRate">
                <p>Rate your experience</p>
                <div class="wrapperStars">
                  <input type="checkbox" id="st1" value="1" />
                  <label for="st1"></label>
                  <input type="checkbox" id="st2" value="2" />
                  <label for="st2"></label>
                  <input type="checkbox" id="st3" value="3" />
                  <label for="st3"></label>
                  <input type="checkbox" id="st4" value="4" />
                  <label for="st4"></label>
                  <input type="checkbox" id="st5" value="5" />
                  <label for="st5"></label>
                </div>
              </div>
              <div className="RowUploadPic">
                <p>Upload a picture of your new family</p>
                <button className="btn btnUploadFeed">Upload</button>
              </div>
            </div>
            <div className="RowFeedCenter">
              <div className="form-group mt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-5"
                >
                  SEND
                </button>
              </div>
              <div className="Loginfooter">
                Copyright &copy; 2022 &mdash; Team 13
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Feedback;
