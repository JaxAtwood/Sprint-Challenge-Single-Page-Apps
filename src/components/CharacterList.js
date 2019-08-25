import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
    const [characters, setCharacters] = useState();
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(res => {
            console.log(res.data);
            setCharacters(res.data.results);
        });
  }, []);

  if (!characters) {
    return (<div>Loading Information</div>)
  }

  return (
    <div className="character-list grid-view">
      {characters.map(char => {
        return (
          <div>
          <CharacterCard 
            key={char.id}
            id={char.id}
            image={char.image}
            name={char.name}
            status={char.status}
            species={char.species}
            type={char.type}
            origin={char.origin}
            location={char.location}
          />
          </div>
        );
      })}
    </div>
  )}
  
export default CharacterList;