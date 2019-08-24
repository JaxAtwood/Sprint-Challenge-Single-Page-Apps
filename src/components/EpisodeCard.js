import React from "react";
import { Card } from "semantic-ui-react";

const EpisodeCard = props => {

  return (
    <Card className="episode-card">
      <h1>{props.name}</h1>
      <p>{props.air_date}: {props.episode}</p>
      <p>{props.characters.length}</p>
    </Card>
  );
};

export default EpisodeCard;