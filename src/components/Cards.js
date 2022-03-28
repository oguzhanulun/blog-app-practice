import React from "react";
import Card from "./Card";
import classes from "./Cards.module.css";

const Cards = (props) => {
  return (
    <div className={classes.main}>
      <Card cardInfo={props.cardInfos} />
    </div>
  );
};

export default Cards;
