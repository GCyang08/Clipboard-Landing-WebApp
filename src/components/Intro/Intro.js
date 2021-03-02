import React from "react";
import logo from "../../assets/logo.svg";

import Buttons from "../Buttons/Buttons";
import "./Intro.css";

function Intro() {
  return (
    <div className="Intro">
      <div>
        <img src={logo} alt="logo" />
        <h1>A History of Everything you Copy</h1>
        <p>
          ClipBoard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <Buttons />
      </div>
      {/* <h2>Keep track of your snippets</h2>
      <p>
        Clipboard instantly stores any item you copy in the cloud, meaning you
        can access your snippets immediately on all your devices. Our Mac and
        iOS apps will help you organize everything.
      </p> */}
    </div>
  );
}

export default Intro;
