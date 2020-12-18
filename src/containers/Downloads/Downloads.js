import React from "react";
import Buttons from "../Buttons/Buttons";
import classes from "./Downloads.module.css";

function Downloads() {
  return (
    <div className={classes.Downloads}>
      <h2>Clipboard for iOS and Mac OS</h2>
      <p>
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to your clipboard.
      </p>
      <Buttons />
    </div>
  );
}

export default Downloads;
