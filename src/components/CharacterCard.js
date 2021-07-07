import React from "react";
import { Card , Image } from "semantic-ui-react";

const CharacterCard = props => {

  return (
    <Card className="character-card" key={props.id}>
      <Image src={props.image}/>
      <h1>{props.name}</h1>
      <h4>{props.species}: {props.status}</h4>
      <p>Location: {props.location.name}</p>
      <h4>{props.type}</h4>    
      <p>Origin: {props.origin.name}</p>
    </Card>
  );
};

export default CharacterCard;