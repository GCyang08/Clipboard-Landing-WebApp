import React from "react";
import Img from "../../assets/image-devices.png";
import "./Access.css";

function Access() {
  return (
    <div className="Access">
      <h2>Access ClipBoard Anywhere</h2>
      <p>
        Whether you’re on the go, or at your computer, you can access all your
        Clipboard snippets in a few simple clicks.
      </p>
      <img src={Img} alt="phones" />
    </div>
  );
}

export default Access;
