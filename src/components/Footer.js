import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    padding: "50px",
    gap: "20px",
    fontSize: "13px",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  head: {
    fontWeight: "700",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.column}>
        <div className={classes.head}>ABOUT</div>
        <div>How Airbnb works</div>
        <div>NewsRoom </div> <div>Airbnb 2021 </div> <div>Investors </div>
        <div>Airbnb Plus </div> <div>Airbnb Luxe </div> <div>HotelTonight </div>
        <div>Airbnb for work </div> <div>Made possible by hosts </div>
        <div>Careers </div> <div>Founders' Letter </div>
      </div>
      <div className={classes.column}>
        <div className={classes.head}>COMMUNITY</div>
        <div>Diversity & belonging</div>
        <div>Against Discrimination </div> <div>accessibility </div>
        <div>Airbnb Associates </div>
        <div>Host Afghan Refugees </div> <div>Guest referrals </div>
        <div>Gift cards </div>
        <div>Airbnb.org </div>
      </div>
      <div className={classes.column}>
        <div className={classes.head}>HOST</div>
        <div>Host your home</div>
        <div>Host an online experience </div> <div>Host an experience </div>
        <div>Responsible Hosting </div>
        <div>Resource Center </div> <div>Community Center </div>
      </div>
      <div className={classes.column}>
        <div className={classes.head}>SUPPORT</div>
        <div>Our COVID-19 Response</div>
        <div>Help Center </div> <div>Cancelation options </div>
        <div>Neighbourhood Support </div>
        <div>Trust & Safety </div>
      </div>
    </div>
  );
};

export default Footer;
