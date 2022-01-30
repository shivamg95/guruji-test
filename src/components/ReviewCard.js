import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import userAvatar from "../assets/images/user-comment.png";
import StarIcon from "@mui/icons-material/Star";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap:'10px',
    marginTop:'30px',
  },
  header: {
    display: "flex",
    width: "100%",
    alignItems: "flex-start",
    gap: "14px",
  },
  text: {
    fontWeight: "400",
    fontSize: "12px",
    color: "grey",
  },
});

const ReviewCard = ({ stars = 5 }) => {
  const classes = useStyles();
  const renderStars = [];
  for (let i = 1; i <= stars; i++) {
    renderStars.push(
      <StarIcon style={{ fontSize: "18px", color: "rgba(150, 94, 251, 1)" }} />
    );
  }
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <img src={userAvatar} />
        <div>
          <div style={{ fontSize: "13px", fontWeight: "500" }}>
            Mathilda M.{" "}
          </div>
          <div className={classes.text}>16 days ago</div>
        </div>
        <div>{renderStars}</div>
      </div>
      <div className={classes.text}>
        Might as well get right to it, then. At the risk of sounding like a
        contrarian, I did not love this film. Do I love elements of this? Yes.
        did not love this fi did not love this fi did not love this fi did not
        love this fi did not love this fi did not love this fi
      </div>
    </div>
  );
};

export default ReviewCard;
