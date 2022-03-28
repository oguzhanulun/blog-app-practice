import React from "react";

const Card = (props) => {
  return (
    <div>
      <div>{props.cardInfo.title}</div>
      <div>{props.cardInfo.body}</div>
      <div>{props.cardInfo.category}</div>
    </div>
  );
};

export default Card;
