import React from "react";
import Header from "../components/Header";
import { makeStyles } from "@material-ui/core/styles";
import ProfileDetails from "../components/ProfileDetails";
import CallCard from "../components/CallCard";
import Footer from "../components/Footer";

const useStyles = makeStyles(({ breakpoints }) => ({
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    width: "calc(100vw-100px)",
    padding: "50px",
    gap: "20px",
    [breakpoints.down("850")]: {
      flexDirection: "column",
      padding: "25px",
    },
  },
}));

const ProfilePage = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classes.pageContainer}>
        <ProfileDetails />
        <CallCard />
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
