import React from "react";
import Grid from "@material-ui/core/Grid";
import google from "../../assets/logo-google.png";
import ibm from "../../assets/logo-ibm.png";
import microsoft from "../../assets/logo-microsoft.png";
import hp from "../../assets/logo-hp.png";
import vector from "../../assets/logo-vector-graphics.png";
import classes from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={classes.Space}>
      <Grid className={classes.Grid} container justify="center">
        <Grid className={classes.Margin} lg={2} md={2} xs={12}>
          <img src={google} alt="google logo" />
        </Grid>
        <Grid className={classes.Margin} lg={2} md={2} xs={12}>
          <img src={ibm} alt="ibm logo" />
        </Grid>
        <Grid className={classes.Margin} lg={2} md={2} xs={12}>
          <img src={microsoft} alt="micorsoft logo" />
        </Grid>
        <Grid className={classes.Margin} lg={2} md={2} xs={12}>
          <img src={hp} alt="hp logo" />
        </Grid>
        <Grid className={classes.Margin} lg={2} md={2} xs={12}>
          <img src={vector} alt="vector logo" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Testimonials;
