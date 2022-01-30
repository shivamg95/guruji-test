import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Ratings from "./Ratings";
import ReviewCard from "./ReviewCard";
import { Button } from "@mui/material";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width:'100%',
  },
});

const ratingData = [1, 5, 4, 1];

const ReviewSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Ratings />
      {ratingData.map((item) => (
        <ReviewCard stars={item} />
      ))}
      <Button
        variant="outlined"
        style={{
          color: "black",
          border: "1px solid black",
          borderRadius: "7px",
          width:'320px',
          alignSelf:'center',
          margin:'25px 0',
        }}
      >
        Check More
      </Button>
    </div>
  );
};

export default ReviewSection;
