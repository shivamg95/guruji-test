import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProfileCard from "./ProfileCard";
import ReviewSection from "./ReviewSection";
import Faq from "./Faq";
const useStyles = makeStyles(({ breakpoints }) => ({
  profileDetailsContainer: {
    width: "60vw",
    [breakpoints.down("850")]: {
      width: "100%",
    },
  },
}));

const ProfileDetails = () => {
  const classes = useStyles();
  return (
    <div className={classes.profileDetailsContainer}>
      <ProfileCard />
      <hr />
      <ReviewSection />
      <hr />
      <Faq />
    </div>
  );
};

export default ProfileDetails;
