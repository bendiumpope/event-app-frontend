import React from "react";

import classes from "./Card.module.css";

function Card({ title, category, date }: any) {
  return (
    <div className={classes.card_container}>
      <div>
        <div className={classes.title}>
          <h2>{title}</h2>
        </div>
        <div className={classes.category}>
          <h3>{category}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
