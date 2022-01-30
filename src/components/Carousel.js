import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles({
  container: {
    position: "relative",
    marginBottom: "25px",
    "& .MuiButton-root": {
      padding: "unset",
      minWidth: "20px",
      height: "20px",
      borderRadius: "20px",
      color: "black",
      backgroundColor: "white",
      "&:hover": { backgroundColor: "white" },
    },
  },
  root: {
    display: "flex",
    width: "100%",
    gap: "5px",
    overflowX: "hidden",
  },
  item: {
    height: "70px",
    width: "70px",
    flexShrink: "0",
  },
});

const Carousel = ({ items = [] }) => {
  const classes = useStyles();
  const scrollableElement = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [currentPos, setCurrentPos] = useState(0);

  const handleForward = () => {
    if (
      scrollableElement.current.scrollWidth !=
      scrollableElement.current.scrollLeft +
        scrollableElement.current.offsetWidth
    ) {
      scrollableElement.current.scrollLeft =
        scrollableElement.current.scrollLeft + 50;
      setCurrentPos(scrollableElement.current.scrollLeft);
    }
  };

  const handleBack = () => {
    if (scrollableElement.current.scrollLeft != 0) {
      scrollableElement.current.scrollLeft =
        scrollableElement.current.scrollLeft - 50;
      setCurrentPos(scrollableElement.current.scrollLeft);
    }
  };

  useEffect(() => {
    if (currentPos == 0) setIsAtStart(true);
    else setIsAtStart(false);

    if (
      scrollableElement.current.scrollWidth <=
      currentPos + scrollableElement.current.offsetWidth
    )
      setIsAtEnd(true);
    else setIsAtEnd(false);
  }, [currentPos]);

  return (
    <div className={classes.container}>
      {!isAtStart && (
        <Button
          variant="contained"
          style={{ position: "absolute", top: "25px", left: "-10px" }}
          onClick={handleBack}
        >
          {"<"}
        </Button>
      )}
      <div className={classes.root} ref={scrollableElement}>
        {items.map((item) => {
          return <img src={item} className={classes.item} />;
        })}
      </div>
      {!isAtEnd && (
        <Button
          variant="contained"
          style={{ position: "absolute", top: "25px", right: "-10px" }}
          onClick={handleForward}
        >
          {">"}
        </Button>
      )}
    </div>
  );
};

export default Carousel;
