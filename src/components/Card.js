import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  console.log(props.title);
  return (
    <div className={classes.main}>
      <div>{props.title}</div>
      <div>{props.body}</div>
      <div>{props.category}</div>
    </div>
  );
};

export default Card;
