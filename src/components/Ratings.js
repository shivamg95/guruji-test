import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StarIcon from "@mui/icons-material/Star";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    display: "flex",
    gap: "20px",
    alignItems: "flex-end",
    [breakpoints.down("500")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  ratingNumber: {
    fontSize: "48px",
    fontWeight: "700",
  },
  text: {
    fontSize: "12px",
    fontWeight: "400",
    color: "grey",
  },
  emptyBar: {
    display: "inline-block",
    backgroundColor: "lightGrey",
    height: "7px",
    width: "240px",
    borderRadius: "5px",
    marginLeft: "10px",
  },
  filledBar: {
    display: "block",
    backgroundColor: "rgba(150, 94, 251, 1)",
    height: "7px",
    borderRadius: "5px",
  },
  starLineItem: {
    color: "rgba(150, 94, 251, 1)",
    display: "flex",
    alignItems: "center",
  },
  pattern: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "5px",
  },
}));

const Ratings = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <div className={classes.ratingNumber}>4.27</div>
        <div className={classes.text}>
          <PersonOutlineIcon />
          84,559 Total
        </div>
      </div>
      <div className={classes.pattern}>
        <div className={classes.starLineItem}>
          {[1, 2, 3, 4, 5].map((item) => (
            <StarIcon key={item} style={{ fontSize: "12px" }} />
          ))}
          <div className={classes.emptyBar}>
            <div className={classes.filledBar} style={{ width: "100px" }}></div>
          </div>
        </div>
        <div className={classes.starLineItem}>
          {[1, 2, 3, 4].map((item) => (
            <StarIcon key={item} style={{ fontSize: "12px" }} />
          ))}
          <div className={classes.emptyBar}>
            <div className={classes.filledBar} style={{ width: "50px" }}></div>
          </div>
        </div>
        <div className={classes.starLineItem}>
          {[1, 2, 3].map((item) => (
            <StarIcon key={item} style={{ fontSize: "12px" }} />
          ))}
          <div className={classes.emptyBar}>
            <div className={classes.filledBar} style={{ width: "20px" }}></div>
          </div>
        </div>
        <div className={classes.starLineItem}>
          {[1, 2].map((item) => (
            <StarIcon key={item} style={{ fontSize: "12px" }} />
          ))}
          <div className={classes.emptyBar}>
            <div className={classes.filledBar} style={{ width: "40px" }}></div>
          </div>
        </div>
        <div className={classes.starLineItem}>
          {[1].map((item) => (
            <StarIcon key={item} style={{ fontSize: "12px" }} />
          ))}
          <div className={classes.emptyBar}>
            <div className={classes.filledBar} style={{ width: "150px" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
