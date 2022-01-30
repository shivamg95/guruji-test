import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import profileImage from "../assets/images/profile-image.png";
import soundImage from "../assets/images/sound.png";
import sliderItem1 from "../assets/images/slider-item-1.png";
import sliderItem2 from "../assets/images/slider-item-2.png";
import PauseCircleRoundedIcon from "@mui/icons-material/PauseCircleRounded";
import TranslateIcon from "@mui/icons-material/Translate";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import { Button } from "@mui/material";
import Carousel from "./Carousel";
const useStyles = makeStyles(({ breakpoints }) => ({
  profileCardContainer: {
    display: "flex",
    width: "100%",
    gap: "20px",
    [breakpoints.down("850")]: {
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
  },
  otherDetailsContainer: {
    width: "calc(100% - 160px)",
    [breakpoints.down("850")]: {
      width: "100%",
    },
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "25px",
    [breakpoints.down("850")]: {
      justifyContent: "center",
      flexWrap: "wrap",
    },
  },
  profileName: {
    fontWeight: "600",
    fontSize: "30px",
    [breakpoints.down("850")]: {
      textAlign: "center",
      flex: "100% 0 0",
    },
  },
  text: {
    color: "grey",
    fontWeight: "400",
    fontSize: "13px",
  },
  stats: {
    marginBottom: "30px",
    [breakpoints.down("850")]: {
    textAlign: "center",
    }
  },
}));

const ProfileCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.profileCardContainer}>
      <img src={profileImage} width="140" height="140" />
      <div className={classes.otherDetailsContainer}>
        <span className={classes.headerContainer}>
          <span className={classes.profileName}>Liu Lucy</span>
          <div
            style={{
              border: "1px solid black",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "5px",
            }}
          >
            <PauseCircleRoundedIcon /> <img src={soundImage} height={"25px"} />{" "}
            37
          </div>
          <Button
            variant="outlined"
            style={{
              color: "black",
              border: "1px solid black",
              borderRadius: "10px",
            }}
          >
            Follow
          </Button>
        </span>
        <div className={classes.stats}>
          Followers <b>123</b> Served <b>36k</b> Exp(years) <b>15</b>
        </div>
        <hr />
        <div className={classes.text}>
          <TranslateIcon />
          English，Hindi，Tamil
        </div>
        <div className={classes.text}>
          <BookOutlinedIcon />
          Vedic，Tarot，Vastu，Face reading
        </div>
        <div style={{ fontWeight: "500", fontSize: "14px", marginTop: "20px" }}>
          What is a personal introduction？
        </div>
        <div className={classes.text} style={{ marginBottom: "25px" }}>
          I was a really nice and professional teacher! It was only a short
          time, but I learned so many new things already. She prepared a
          customized lesson plan for me as well based on what we talked about in
          our initial chat. She teaches really well accompanied with nice
          learning materials.
        </div>
        <Carousel
          items={[
            sliderItem1,
            sliderItem2,
            sliderItem1,
            sliderItem1,
            sliderItem2,
            sliderItem1,
            sliderItem2,
            sliderItem1,
            sliderItem1,
            sliderItem1,
            sliderItem2,
            sliderItem1,
            sliderItem2,
            sliderItem1,
            sliderItem1,
          ]}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
