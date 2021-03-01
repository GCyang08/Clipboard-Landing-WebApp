import React from "react";
import classes from "./Footer.module.css";
import logo from "../../assets/logo.svg";
import Grid from "@material-ui/core/Grid";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import instagram from "../../assets/icon-instagram.svg";

function Footer() {
  return (
    <div className={classes.Footer}>
      <Grid
        className={classes.Gridss}
        container
        alignItems="center"
        justify="center"
      >
        <Grid lg={2} md={2} xs={12}>
          <img className={classes.Img} src={logo} alt="logo" />
        </Grid>
        <Grid lg={2} md={2} xs={12}>
          <p className={classes.Color}>FAQs</p>
          <p className={classes.Color}>Contact Us</p>
        </Grid>
        <Grid lg={2} md={2} xs={12}>
          <p className={classes.Color}>Privacy Policy</p>
          <p className={classes.Color}>Press Kit</p>
        </Grid>
        <Grid lg={2} md={2} xs={12}>
          <p className={classes.Color}>Install Guide</p>
        </Grid>
        <Grid lg={2} md={2} xs={12}>
          <img className={classes.Img2} src={facebook} alt="facebook logo" />
          <img className={classes.Img2} src={twitter} alt="twitter logo" />
          <img className={classes.Img2} src={instagram} alt="instagram logo" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
