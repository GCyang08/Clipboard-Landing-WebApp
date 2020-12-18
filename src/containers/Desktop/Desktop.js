import React from "react";
import Computer from "../../assets/image-computer.png";
import classes from "./Desktop.module.css";
import Grid from "@material-ui/core/Grid";

function Desktop() {
  return (
    <div className={classes.Desktop}>
      <Grid container className={classes.Grid}>
        <Grid lg={6} md={6} xs={12}>
          <img className={classes.Img} src={Computer} alt="computer" />
        </Grid>
        <Grid lg={6} md={6} xs={12}>
          <h3>Quick Search</h3>
          <p>
            Easily search your snippets by content, category, web address,
            application, and more.
          </p>
          <h3>iCloud Sync</h3>
          <p>Instantly saves and syncs snippets across all your devices.</p>
          <h3>Complete History</h3>
          <p>
            Retrieve any snippets from the first moment you started using the
            app.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Desktop;
