import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Feedback.css";
import { Widget } from "@uploadcare/react-widget";
import DashNavBar from "../../../Dash-NavBar/Dash-NavBar";
import { successStory } from "../../../../../Redux/Actions";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

function Feedback() {
  let user = null;
  if (localStorage.user) {
    const userJson = localStorage.getItem("user");
    user = JSON.parse(userJson);
  }

  if (user) {
    var mail = user.mail;
  }

  let { pet } = useParams();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    testimonio: "",
    rating: 0,
    imageOfPet: "",
    nameOfPet: user.name,
  });

  function handleText(e) {
    setInput({ ...input, testimonio: e.target.value });
  }

  function handleStars(e) {
    setInput({ ...input, rating: e.target.value });
  }

  function handleImage(file) {
    setInput({
      ...input,
      imageOfPet: `https://ucarecdn.com/${file.uuid}/`,
    });
  }
  const navigate = useNavigate()
  function onClickSend(){
    setTimeout(function(){
      navigate("/home")
  }, 3000);
  }

  function HandleSuccessStory(e) {
    e.preventDefault();

    if (input.text === "" || input.stars === 0 || input.image === "") {
      swal(
        "complete the fields",
        "choose a image and rate the page",
        "warning"
      );
    } else {
      dispatch(successStory(input));
      swal("Thank you", "", "success");
    }
  }

 
  const longitud = "-64.26617114519884";
  const latitud = "-27.792642976806206";
  return (
    <>
      <DashNavBar />
      <form onSubmit={(e) => HandleSuccessStory(e)}>
        <div className="DashcontainerMain">
          <div className="wrapperFeed">
            <div className="wrapperLeftFeed">
              <h2 className="mb-3">Next steps</h2>
              <h5 className="mb-3">Congratulations {user.name}!</h5>
              <br />
              <h5 className="">Your experience is very important!</h5>
              <p>
                Thank you very much for giving this pet a new opportunity! From
                REBIRTH we thank you for having used our App and we hope to see
                you again soon! Then you can leave us a review about your
                adoption process.
              </p>
              <br />
              <h5 className="mt-2">Give us your feedback</h5>
              <div className="">
                <p>SKIP</p>
                <div className="">
                  <label htmlFor="textarea">Comments</label>
                  <textarea
                    onChange={(e) => handleText(e)}
                    value={input.text}
                    className="form-control"
                    rows="8"
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
                width="60%"
                height="150"
                style={{ border: 0 }}
                allowfullscreen="no"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="RowStarsRate">
                <span>Rate your experience</span>
                <div class="wrapperStars">
                  <input
                    type="radio"
                    name="stars"
                    onChange={(e) => handleStars(e)}
                    id="st1"
                    value="5"
                  />
                  <label for="st1"></label>
                  <input
                    type="radio"
                    name="stars"
                    onChange={(e) => handleStars(e)}
                    id="st2"
                    value="4"
                  />
                  <label for="st2"></label>
                  <input
                    type="radio"
                    name="stars"
                    onChange={(e) => handleStars(e)}
                    id="st3"
                    value="3"
                  />
                  <label for="st3"></label>
                  <input
                    type="radio"
                    name="stars"
                    onChange={(e) => handleStars(e)}
                    id="st4"
                    value="2"
                  />
                  <label for="st4"></label>
                  <input
                    type="radio"
                    name="stars"
                    onChange={(e) => handleStars(e)}
                    id="st5"
                    value="1"
                  />
                  <label for="st5"></label>
                </div>
              </div>
              <div className="RowUploadPic">
                {input.imageOfPet && (
                  <img src={input.imageOfPet} alt={"select another one"} />
                )}
                <span>Upload a picture of your new family</span>
                <div className="mx-auto">
                  <Widget
                    publicKey="e7afc989eff083e04496"
                    value={input.formBasicImage}
                    onFileSelect={(e) => {
                      e.done((file) => {
                        handleImage(file);
                      });
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="RowFeedCenter">
              <div className="form-group mt-5">
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                  onClick={onClickSend}
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
