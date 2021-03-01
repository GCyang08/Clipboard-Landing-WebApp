import React from "react";
import Grid from "@material-ui/core/Grid";
import blacklists from "../../assets/icon-blacklist.svg";
import text from "../../assets/icon-text.svg";
import preview from "../../assets/icon-preview.svg";
import classes from "./Workflow.module.css";

function Workflow() {
  return (
    <div className={classes.Div}>
      <h2>Supercharge your workflow</h2>
      <p>We’ve got the tools to boost your productivity.</p>
      <Grid className={classes.Grids} container spacing={10}>
        <Grid item={true} lg={4} md={4} sm={12}>
          <img className={classes.Img2} src={blacklists} alt="ai icon" />
          <h3>Create blacklists</h3>
          <p>
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </p>
        </Grid>
        <Grid item={true} lg={4} md={4} sm={12}>
          <img className={classes.Img2} src={text} alt="letter icon" />
          <h3>Plain text snippets</h3>
          <p>
            Remove unwanted formatting from copied text for a consistent look.
          </p>
        </Grid>
        <Grid item={true} lg={4} md={4} sm={12}>
          <img className={classes.Img2} src={preview} alt="eye-icon" />
          <h3>Sneak preview</h3>
          <p>
            Quick preview of all snippets on your Clipboard for easy access.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
export default Workflow;
