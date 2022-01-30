import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/Avatar.png";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const useStyles = makeStyles(({ breakpoints }) => ({
  mainRoot: {
    display: "flex",
    height: "25px",
    padding: "30px 50px 30px 50px",
    borderBottom: "1px solid lightGrey",
    width: "calc(100vw-100px)",
    justifyContent: "space-between",
    "& .MuiOutlinedInput-root": {
      height: "40px",
      borderRadius: "10px",
      minWidth: "110px",
    },

    [breakpoints.down("700")]: {
      padding: "20px 15px 20px 15px",
    },
  },
  part: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  logo: {
    height: "25px",
    marginRight: "20px",
  },
  avatar: {
    [breakpoints.down("700")]: {
      display: "none",
    },
  },
  headLine: {
    [breakpoints.down("700")]: {
      display: "none",
    },
  },
  walletContainer: {
    border: "1px solid lightGrey",
    height: "40px",
    width: "110px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    [breakpoints.down("700")]: {
      display: "none",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [language, setLanguage] = React.useState("English");
  return (
    <div className={classes.mainRoot}>
      <div className={classes.part}>
        <img src={logo} className={classes.logo} />
        <span className={classes.headLine}>Talk with astrologers</span>
      </div>
      <div className={classes.part}>
        <Select
          value={language}
          onChange={(event) => {
            setLanguage(event.target.value);
          }}
        >
          <MenuItem value={"English"}>English</MenuItem>
          <MenuItem value={"Hindi"}>Hindi</MenuItem>
        </Select>
        <div className={classes.walletContainer}>
          <AccountBalanceWalletOutlinedIcon /> ₹200
        </div>
        <img className={classes.avatar} src={avatar} />
      </div>
    </div>
  );
};

export default Header;
