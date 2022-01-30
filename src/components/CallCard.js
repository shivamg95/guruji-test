import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import StarIcon from "@mui/icons-material/Star";
import call from "../assets/images/call.png";

const useStyles = makeStyles(({ breakpoints }) => ({
  callCardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "220px",
    width: "250px",
    border: "1px solid lightGrey",
    borderRadius: "16px",
    padding: "20px",
    flex: "18% 0 0",
    position: "sticky",
    top: "20px",
    [breakpoints.down("850")]: {
      position: "fixed",
      bottom: "0px",
      top: "unset",
      width: "calc(100% - 40px)",
      margin: "0px -25px",
      backgroundColor: "white",
      borderRadius: "unset",
      flexDirection: "row",
      borderTop: "2px solid lightGrey",
      height: "40px",
    },
  },
  promotion: {
    color: "rgba(150, 94, 251, 1)",
    display: "flex",
    alignItems: "flex-start",
    [breakpoints.down("850")]: {
      position: "fixed",
      bottom: "83px",
      backgroundColor: "white",
      width: "100%",
      margin: "0px -20px",
      display: "flex",
      justifyContent: "center",
    },
  },
  cta: {
    [breakpoints.down("850")]: {
      flex: "50% 0 0",
    },
  },
  rate: {
    [breakpoints.down("850")]: {
      flex: "50% 0 0",
    },
  },
  ratingStar: {
    [breakpoints.down("850")]: {
      position: "fixed",
      bottom: "15px",
    },
  },
}));

const CallCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.callCardContainer}>
      <span className={classes.rate}>₹5/min ₹123/min</span>
      <span className={classes.promotion}>
        <LocalOfferRoundedIcon fontSize="4px" />
        New user special offer - Trial for Max 6 mins
      </span>
      <span
        style={{ display: "flex", alignItems: "center" }}
        className={classes.ratingStar}
      >
        <StarIcon
          style={{ color: "rgba(150, 94, 251, 1)", fontSize: "20px" }}
        />
        4.9 | 123 reviews
      </span>
      <Button
        variant="contained"
        style={{ backgroundColor: "rgba(150, 94, 251, 1)" }}
        className={classes.cta}
      >
        <img src={call} /> Call Now
      </Button>
    </div>
  );
};

export default CallCard;
