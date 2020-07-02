import React from "react";
import { Card } from "../card/card.component";

import "./card-list.styles.css";

export const CardList = (props) => {
  if (props.monsters.length === 0) {
    return (
      <h2 style={{ color: "white" }}>Sorry, no results for your search.</h2>
    );
  }

  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
