import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "hsl(171, 66%, 44%)",
    borderRadius: "50px",
    color: "white",
    margin: "25px 5px 0px",
    padding: "15px",
    width: "250px",
    "&:hover": {
      backgroundColor: "hsl(171, 72%, 50%)",
    },
  },
});

const useStyles2 = makeStyles({
  root: {
    backgroundColor: "hsl(233, 100%, 69%)",
    borderRadius: "50px",
    color: "white",
    margin: "25px 5px 0px",
    padding: "15px",
    width: "250px",
    "&:hover": {
      backgroundColor: "hsl(233, 86%, 72%)",
    },
  },
});

function Buttons() {
  const classes = useStyles();
  const classes2 = useStyles2();
  return (
    <div>
      <Button className={classes.root}>Download for IOS</Button>
      <Button className={classes2.root}>Download for IOS</Button>
    </div>
  );
}

export default Buttons;
