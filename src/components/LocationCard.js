import React from "react";
import { Card } from "semantic-ui-react";

const LocationCard = props => {

  return (
    <Card className="location-card">
      <h1>{props.name}</h1>
      <p>{props.type}: {props.dimension}</p>
      <p>{props.residents.length} Residents</p>
    </Card>
  );
};

export default LocationCard;