import React from "react";
import classes from "./ClipBoard.module.css";
import Logo from "../assets/logo.svg";
import Buttons from "./Buttons/Buttons";
import Desktop from "./Desktop/Desktop";
import Access from "./Access/Access";
import Workflow from "./Workflow/Workflow";
import Testimonials from "./Testimonials/Testimonials";
import Downloads from "./Downloads/Downloads";
import Footer from "./Footer/Footer";

function ClipBoard() {
  return (
    <div className={classes.Topimg}>
      <div className={classes.Margin}>
        <img className={classes.Logo} src={Logo} alt="logo" />
        <h1>A History of Everything you Copy</h1>
        <p>
          ClipBoard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <Buttons />
        <h2>Keep track of your snippets</h2>
        <p>
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>
      <Desktop />
      <Access />
      <Workflow />
      <Testimonials />
      <Downloads />
      <Footer />
    </div>
  );
}

export default ClipBoard;
