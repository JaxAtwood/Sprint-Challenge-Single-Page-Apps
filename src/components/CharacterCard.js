import React from "react";
import { Card } from "semantic-ui-react";

const CharacterCard = props => {

  return (
    <Card className="character-card">
      <h1>{props.name}</h1>
      <h2>{props.status}</h2>
      <h3>{props.species}</h3>
      <h4>{props.type}</h4>
      <p>{props.gender}</p>
      <p>{props.origin}</p>
    </Card>
  );
};

export default CharacterCard;