import React from "react";
import Card from "./Card";
import classes from "./Cards.module.css";

const Cards = (props) => {
  return (
    <div className={classes.main}>
      {props.cardInfos.map((ele) => {
        <Card
          key={ele.id}
          title={ele.title}
          category={ele.category}
          body={ele.body}
        />;
      })}
    </div>
  );
};

export default Cards;
