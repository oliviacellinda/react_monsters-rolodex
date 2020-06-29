import React from "react";

import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="monster"
      // [IMPORTANT] URL below is written within backtick quotes (`)
      // This is to allow us to create string containing variable by writing expressions like ${variable}
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h1> {props.monster.name} </h1>
    <p> {props.monster.email} </p>
  </div>
);
