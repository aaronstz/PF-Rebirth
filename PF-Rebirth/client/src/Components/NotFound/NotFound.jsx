import React from "react";
import imgNotFound from "../../Assets/notFound.png";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="ContNotFoundBK">
      <img src={imgNotFound} alt="imgbk" />
    </div>
  );
};

export default NotFound;
